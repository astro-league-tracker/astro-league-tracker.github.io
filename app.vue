<script setup lang="ts">
const { data: cats} = await useAsyncData<Record<string, string|number>[]>("cats", async() => {
  if (!import.meta.server) {
    return [];
  }

  const {default: Database} = await import("better-sqlite3");

  const db = new Database(':memory:');
  db.pragma('journal_mode = WAL');

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

  return db.prepare("SELECT * FROM cats").all() as Record<string, string|number>[]
})

</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="max-w-3xl mx-auto bg-stone-200 my-10 px-6 py-4 text-stone-800">
    Cats:
    <ul>
      <li class="list-disc  ml-8 pl-2" v-for="cat in cats" v-text="cat.name" />
    </ul>
    {{ cats }}
  </div>
</template>
