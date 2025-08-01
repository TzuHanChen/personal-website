import { neon } from "@neondatabase/serverless";

export const sql = (() => {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  try {
    return neon(databaseUrl)
  } catch (error) {
    console.error("Error initializing Neon client:", error)
    console.error("DATABASE_URL format should be: postgres://user:password@host:port/database")
    throw error
  }
})()

export async function initProjectsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        key_visual TEXT NOT NULL,
        link TEXT,
        timeline TEXT NOT NULL
      );
    `
    console.log("projects table initialized")
  } catch (error) {
    console.error("Error initializing projects table:", error)
    throw error
  }
}

export async function initSkillsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `
    console.log("skills table initialized")
  } catch (error) {
    console.error("Error initializing skills table:", error)
    throw error
  }
}

export async function initProjectSkillTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS project_skill (
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
        PRIMARY KEY (project_id, skill_id)
      );
    `
    console.log("project_skill table initialized")
  } catch (error) {
    console.error("Error initializing project_skill table:", error)
    throw error
  }
}

export async function initRolesTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `
    console.log("roles table initialized")
  } catch (error) {
    console.error("Error initializing roles table:", error)
    throw error
  }
}

export async function initProjectMemberTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS project_member (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        member_name TEXT NOT NULL,
        role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE
      );
    `
    console.log("project_member table initialized")
  } catch (error) {
    console.error("Error initializing project_member table:", error)
    throw error
  }
}

export async function initOutputsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS outputs (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `
    console.log("outputs table initialized")
  } catch (error) {
    console.error("Error initializing outputs table:", error)
    throw error
  }
}

export async function initProjectOutputTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS project_output (
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        output_id INTEGER REFERENCES outputs(id) ON DELETE CASCADE,
        PRIMARY KEY (project_id, output_id)
      );
    `
    console.log("project_output table initialized")
  } catch (error) {
    console.error("Error initializing project_output table:", error)
    throw error
  }
}