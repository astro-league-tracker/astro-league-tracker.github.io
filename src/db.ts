export type Cat = {
    name: string,
    age: number,
}

const cats = [
    { name: 'Mouse', age: 18 },
    { name: 'Mongoose', age: 7 },
    { name: 'Badger', age: 3 },
];

for (const cat of cats) {
    Object.freeze(cat);
}

export default Object.freeze(cats)
