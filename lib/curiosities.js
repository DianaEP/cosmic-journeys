import sql from 'better-sqlite3';

const db =  sql('planets.db');

// GET
export function getCuriosities(){
    return db.prepare('SELECT id, text FROM curiosities').all();
}

// POST
export function addCuriosity(text){
    const addedText = db.prepare('INSERT INTO curiosities (text) VALUES (?)');
    const result = addedText.run(text);

    return { id: result.lastInsertRowid, text}
}

// PUT
export function updateCuriosity(id, text){
    const updatedText = db.prepare('UPDATE curiosities SET text = ? WHERE id = ?');
    const result = updatedText.run(text, id);

    return result.changes > 0;
    
}

// DELETE
export function deleteCuriosity(id){
    const deletedText = db.prepare('DELETE FROM curiosities WHERE id = ?');
    const result =  deletedText.run(id);

    return result.changes > 0;
}

