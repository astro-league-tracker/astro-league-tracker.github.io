import programs from "@/public/programs.json";

export type Program = {
    id: number;
    name: string;
    content: string;
    url: string;
};

export const usePrograms = () => {
    const allPrograms = programs.reduce(
        (acc: Record<number, Program>, program) => {
            acc[program.id] = Object.freeze(program);
            return acc;
        },
        {},
    );

    const getSingleProgram = (id: number) => allPrograms[id];

    return {
        allPrograms,
        getSingleProgram,
    };
};
