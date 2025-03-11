import Database from "better-sqlite3"

const db = new Database(':memory:');
db.pragma('journal_mode = WAL');

export type Cat = {
    name: string,
    age: number,
    id: number,
}

export const setUpDb = () => {

  db.prepare(`CREATE TABLE IF NOT EXISTS cats(
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      age INTEGER NOT NULL
  )`).run();

  const insert = db.prepare('INSERT INTO cats (name, age) VALUES (@name, @age)');

  const insertMany = db.transaction((cats: Record<string, string|number>[]) => {
      for (const cat of cats){
        insert.run(cat);
      }
  });

  insertMany([
      { name: 'Mouse', age: 18 },
      { name: 'Mongoose', age: 7 },
      { name: 'Badger', age: 3 },
  ]);
}

export const getAllCats = () => {
    return db.prepare("SELECT * FROM cats").all() as Cat[]
}

export const getOneCat = (id: number) => {
    return db.prepare("SELECT * FROM cats WHERE id = ?").get(id) as Cat | undefined
}
