import Database from 'better-sqlite3';
import type { Database as BetterSqlite3Db } from 'better-sqlite3';

let db: BetterSqlite3Db;

export const getDb = () => {
    if (db) {
        return db;
    }

    db = new Database("./src/server/db/db.sqlite3")
    return db;
}

export const createProgram = getDb().prepare("INSERT INTO programs (name, content, url) VALUES (@name, @content, @url) RETURNING *")
