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
        timeline TEXT NOT NULL,
        output TEXT NOT NULL
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
        role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
        members_name TEXT NOT NULL
      );
    `
    console.log("project_member table initialized")
  } catch (error) {
    console.error("Error initializing project_member table:", error)
    throw error
  }
}

export async function initArticlesTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        key_visual TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `
    console.log("articles table initialized")
  } catch (error) {
    console.error("Error initializing articles table:", error)
    throw error
  }
}

export async function initTagsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS tags (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `
    console.log("tags table initialized")
  } catch (error) {
    console.error("Error initializing tags table:", error)
    throw error
  }
}

export async function initArticleTagTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS article_tag (
        article_id INTEGER REFERENCES articles(id) ON DELETE CASCADE,
        tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
        PRIMARY KEY (article_id, tag_id)
      );
    `
    console.log("article_tag table initialized")
  } catch (error) {
    console.error("Error initializing article_tag table:", error)
    throw error
  }
}