import { getAllPrograms } from "@/server/db";

export default defineEventHandler(async () => {
    return getAllPrograms.all();
});
