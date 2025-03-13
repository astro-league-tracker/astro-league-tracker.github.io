import fs from "node:fs";

import { getStructuredPrograms } from "@/server/db";

export default defineEventHandler(async (event) => {
    const data = getStructuredPrograms({ metaProgramId: 1 });

    fs.writeFile(
        "./src/public/metaprograms.json",
        JSON.stringify(data, null, 2),
        (err) => {
            setResponseStatus(event, 500, "Server Error");
            return "something bad happened when we wrote the file.";
        },
    );

    return data;
});
