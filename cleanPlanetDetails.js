// import { planetsDetails } from "./initdb.js";
// import sql from 'better-sqlite3';

// const db = sql('planets.db'); 

// function cleanAndUpdateDatabase(planetsDetails) {
//     planetsDetails.forEach(planet => {
//       // Clean dimension: remove "(diameter)" for all planets
//       if (planet.details.dimension) {
//         planet.details.dimension = planet.details.dimension.replace(/\(diameter\)/, '').trim();
//       }
  
//       // For Neptune: clean rotation and orbit
//       if (planet.slug === 'neptune') {
//         if (planet.details.rotation) {
//           planet.details.rotation = planet.details.rotation.replace(/\(rotation period\)/, '').trim();
//         }
//         if (planet.details.orbit) {
//           planet.details.orbit = planet.details.orbit.replace(/\(orbital period around the Sun\)/, '').trim();
//         }
//       }
  
//       // Check if the planet already exists by slug
//       const existingPlanet = db.prepare('SELECT * FROM planet_details WHERE slug = ?').get(planet.slug);
  
//       if (existingPlanet) {
//         // Planet exists, update its details
//         const updatePlanetStmt = db.prepare(`
//           UPDATE planet_details
//           SET dimension = ?, rotation = ?, orbit = ?
//           WHERE slug = ?
//         `);
//         try {
//             const updatePlanetStmt = db.prepare(`
//               UPDATE planet_details
//               SET dimension = ?, rotation = ?, orbit = ?
//               WHERE slug = ?
//             `);
    
//             // Update the values. If the value doesn't exist, use null
//             updatePlanetStmt.run(
//               planet.details.dimension || null,
//               planet.details.rotation || null,
//               planet.details.orbit || null,
//               planet.slug
//             );
//             console.log(`Updated planet: ${planet.title}`);
//           } catch (error) {
//             console.error(`Failed to update planet ${planet.title}: ${error.message}`);
//           }
//         } else {
//           // If the planet doesn't exist, just skip it
//           console.log(`Planet ${planet.title} does not exist. Skipping.`);
//         }
//     });
  
//     console.log("Database cleanup and update completed successfully!");
//   }


// cleanAndUpdateDatabase(planetsDetails);
