import sql from 'better-sqlite3';

const db = sql('planets.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS curiosities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
    );
`).run();

console.log("Curiosities table created");
