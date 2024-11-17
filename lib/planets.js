import sql from 'better-sqlite3';

const db = sql('planets.db')

export function getPlanets(){
   return db.prepare('SELECT id, slug, title, image, summary FROM planets').all();
}

export function getPlanetDetails(slug){
    const planet = db.prepare(`
        SELECT
            p.id,
            p.slug,
            p.title,
            p.image,
            p.summary,
            d.dimension,
            d.rotation,
            d.orbit,
            GROUP_CONCAT(f.fact, '|') as facts
        FROM planets p
        LEFT JOIN planet_details d ON p.id = d.planet_id
        LEFT JOIN planet_facts f ON p.id = f.planet_id
        WHERE p.slug = ?
        GROUP BY p.id
    `).get(slug);

    return{
        ...planet,
        facts: planet.facts ? planet.facts.split('|') : []
    };
}