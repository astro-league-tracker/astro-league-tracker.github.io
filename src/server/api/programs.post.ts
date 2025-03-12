import { z } from "zod";

import { createProgram } from "@/server/db"

const programSchema = z.object({
    name: z.string().min(3),
    content: z.string(),
    url: z.string().url(),
}).required();

export default defineEventHandler(async (event) => {
    const body = await readValidatedBody(event, body => programSchema.safeParse(body));

    if (body.error) {
        setResponseStatus(event, 422, "Unprocessable Content");
        return body.error.message;
    }

    return createProgram.get(body.data)
})
