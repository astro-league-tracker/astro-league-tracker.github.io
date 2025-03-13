import Database from "better-sqlite3";
import type { Database as BetterSqlite3Db } from "better-sqlite3";

let db: BetterSqlite3Db;

export const getDb = () => {
    if (db) {
        return db;
    }

    db = new Database("./src/server/db/db.sqlite3");
    return db;
};

export const createProgram = getDb().prepare(
    "INSERT INTO programs (name, content, url) VALUES (@name, @content, @url) RETURNING *",
);

export const getAllPrograms = getDb().prepare(
    "SELECT * FROM programs ORDER BY name ASC",
);

const getRequirementGroups = getDb().prepare(
    "SELECT id FROM requirements_group WHERE meta_program_id = @metaProgramId",
);

// TODO: make this a "getMetaProgram" function, and return more info about the meta program
export const getStructuredPrograms = ({
    metaProgramId,
}: {
    metaProgramId: number;
}) => {
    const groups = getRequirementGroups.all({
        metaProgramId,
    }) as Record<string, number>[];
    const output = groups.map((group: Record<string, number>) => {
        return getDb()
            .prepare(
                `
            SELECT * FROM programs WHERE id IN (
                SELECT program_id FROM programs_req_link WHERE group_id = ${group.id}
        )`,
            )
            .all();
    });

    return output;
};

getDb().prepare(
    `
    SELECT * FROM programs WHERE id IN (
        SELECT program_id FROM programs_req_link WHERE group_id IN (
            SELECT id FROM requirements_group WHERE meta_program_id = @metaProgramId
        )
    )
    `,
);
