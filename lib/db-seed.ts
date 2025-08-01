import { sql } from "@/lib/db-init";
import { initProjectsTable } from "@/lib/db-init";

async function seedProjectsTable() {
  try {
    await initProjectsTable()

    // await sql`TRUNCATE TABLE projects RESTART IDENTITY`

    // await sql`
    //   INSERT INTO projects (id, slug, name, description, key_visual, link, timeline)
    //   VALUES 
    //     (1, 'test', 'test', 'test', 'test', 'test', 'test')
    // `

    console.log("projects table seeded successfully")
  } catch (error) {
    console.error("Error seeding projects table:", error)
  }
}

async function seedDatabase() {
  await seedProjectsTable()
}

seedDatabase()
  .then(() => console.log("\nDatabase seeding completed"))
  .catch((error) => console.error("Error during database seeding:", error))
  .finally(() => process.exit(0))