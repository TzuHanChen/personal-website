import { sql, initProjectsTable, initSkillsTable, initProjectSkillTable, initRolesTable, initProjectMemberTable, initArticlesTable, initTagsTable, initArticleTagTable } from "@/lib/db-init";

async function seedProjectsTable() {
  try {
    await initProjectsTable()

    await sql`TRUNCATE TABLE projects RESTART IDENTITY CASCADE`

    await sql`
      INSERT INTO projects (id, slug, name, description, key_visual, link, timeline, output)
      VALUES 
        (1, 'medical-forum', '醫療論壇', '供使用者發文討論醫療相關議題的網站', 'medical-forum.png', '', '2020/07 ~ 2020/08', '網站'),
        (2, 'max-value', '珍食力', '協助使用者充分運用食材的手機應用程式原型', 'max-value.png', '', '2020/11 ~ 2021/05', '手機應用程式原型'),
        (3, 'tic-tac-toe', '井字遊戲', '可以穿梭時空的井字遊戲', 'tic-tac-toe.png', 'https://tic-tac-toe-tzuhanchen.vercel.app', '2023/01, 2025/08', '網頁'),
        (4, 'sticker-smash', '照片裝飾', '選擇照片、新增貼紙、拖曳與縮放貼紙、保存整個畫面到裝置中', 'sticker-smash.png', 'https://sticker-smash-tzuhanchen.vercel.app', '2023/10 ~ 2024/03', '網頁'),
        (5, 'nextjs-dashboard', '儀表板', '依照 Next.js 官方教學課程實作的網站', 'nextjs-dashboard.png', 'https://nextjs-dashboard-tzuhanchen.vercel.app', '2023/12 ~ 2024/02', '網站'),
        (6, 'teamie', 'Teamie', 'Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會', 'teamie.png', '', '2022/09 ~ 2024/12', '網站'),
        (7, 'personal-website', '個人網站', '我為自己設計與開發的個人網站，在此展示我的專案、經歷與技能', 'personal-website.png', 'https://github.com/tzuhanchen/personal-website', '2021/08 ~ 2023/07 ~ 2024/04 ~ 持續更新', '網站'),
        (8, 'todo-list', '待辦清單', '實作完整 CRUD 功能的任務管理系統', 'todo-list.png', 'https://todo-list-tzuhanchen.vercel.app', '2025/02 ~ 2025/07', '網站')
    `

    console.log("projects table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding projects table:", error, "\n")
  }
}

async function seedSkillsTable() {
  try {
    await initSkillsTable()

    await sql`TRUNCATE TABLE skills RESTART IDENTITY CASCADE`

    await sql`
      INSERT INTO skills (id, name)
      VALUES 
        (1, 'Miro'),
        (2, 'Figma'),
        (3, 'FigJam'),
        (4, 'Penpot'),
        (5, 'Git'),
        (6, 'GitHub'),
        (7, 'GitLab'),
        (8, 'XAMPP'),
        (9, 'PHP'),
        (10, 'MySQL'),
        (11, 'PostgreSQL'),
        (12, 'Vercel'),
        (13, 'Zeabur'),
        (14, 'HTML'),
        (15, 'CSS'),
        (16, 'SCSS'),
        (17, 'Tailwind CSS'),
        (18, 'JavaScript'),
        (19, 'TypeScript'),
        (20, 'React'),
        (21, 'Next.js'),
        (22, 'GA4'),
        (23, 'Headless UI'),
        (24, 'React Hook Form'),
        (25, 'Expo'),
        (26, 'React Native')
    `

    console.log("skills table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding skills table:", error, "\n")
  }
}

async function seedProjectSkillTable() {
  try {
    await initProjectSkillTable()

    await sql`TRUNCATE TABLE project_skill RESTART IDENTITY`

    await sql`
      INSERT INTO project_skill (project_id, skill_id)
      VALUES 
        (1, 1), (1, 5), (1, 6), (1, 8), (1, 9), (1, 10),
        (2, 1), (2, 2),
        (3, 21), (3, 20), (3, 19), (3, 17), (3, 5), (3, 6),
        (4, 25), (4, 26), (4, 5), (4, 6),
        (5, 21), (5, 20), (5, 19), (5, 17), (5, 11), (5, 5), (5, 6),
        (6, 21), (6, 20), (6, 19), (6, 17), (6, 23), (6, 24), (6, 5), (6, 6),
        (7, 21), (7, 20), (7, 19), (7, 17), (7, 11), (7, 5), (7, 6),
        (8, 21), (8, 20), (8, 19), (8, 17), (8, 23), (8, 11), (8, 5), (8, 6)
    `

    console.log("project_skill table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding project_skill table:", error, "\n")
  }
}

async function seedRolesTable() {
  try {
    await initRolesTable()

    await sql`TRUNCATE TABLE roles RESTART IDENTITY CASCADE`

    await sql`
      INSERT INTO roles (id, name)
      VALUES 
        (1, '使用者體驗'),
        (2, '介面設計'),
        (3, '網站前端'),
        (4, '網站後端')
    `

    console.log("roles table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding roles table:", error, "\n")
  }
}

async function seedProjectMemberTable() {
  try {
    await initProjectMemberTable()

    await sql`TRUNCATE TABLE project_member RESTART IDENTITY CASCADE`

    await sql`
      INSERT INTO project_member (id, project_id, role_id, members_name)
      VALUES 
        (1, 1, 1, '我、同學 1、同學 2'),
        (2, 1, 2, '同學 1、同學 2'),
        (3, 1, 3, '同學 1、同學 2'),
        (4, 1, 4, '我'),
        (5, 2, 1, '我、同學 1、同學 2'),
        (6, 2, 2, '我、同學 1、同學 2'),
        (7, 3, 3, '我'),
        (8, 4, 3, '我'),
        (9, 5, 3, '我'),
        (10, 6, 1, '我、夥伴 1、夥伴 2'),
        (11, 6, 2, '夥伴 1、夥伴 2'),
        (12, 6, 3, '我、夥伴 3'),
        (13, 6, 4, '夥伴 4'),
        (14, 7, 1, '我'),
        (15, 7, 2, '我'),
        (16, 7, 3, '我'),
        (17, 7, 4, '我'),
        (18, 8, 1, '我'),
        (19, 8, 2, '我'),
        (20, 8, 3, '我'),
        (21, 8, 4, '我')
    `

    console.log("project_member table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding project_member table:", error, "\n")
  }
}

async function seedArticlesTable() {
  try {
    await initArticlesTable()

    await sql`TRUNCATE TABLE articles RESTART IDENTITY CASCADE`

    // (1, 'shopback-meet', 'ShopBack: Meet The Engineers!', '技術團隊分享會、自由交流', 'shopback-meet.png'),
    // (3, 'database-camp', '資料庫體驗營', '學習 SQL 語法、設計資料表、查詢資料', 'database-camp.png'),

    await sql`
      INSERT INTO articles (id, slug, name, description, key_visual)
      VALUES 
        (2, 'digital-education', '數位人才', '參加 Google 數位人才探索計畫的期間留下的紀錄', 'digital-education.png')
    `

    console.log("articles table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding articles table:", error, "\n")
  }
}

async function seedTagsTable() {
  try {
    await initTagsTable()

    await sql`TRUNCATE TABLE tags RESTART IDENTITY CASCADE`

    await sql`
      INSERT INTO tags (id, name)
      VALUES 
        (1, '活動紀錄'),
        (2, '技術筆記')
    `

    console.log("tags table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding tags table:", error, "\n")
  }
}

async function seedArticleTagTable() {
  try {
    await initArticleTagTable()

    await sql`TRUNCATE TABLE article_tag RESTART IDENTITY`

    // (1, 1), (3, 1)

    await sql`
      INSERT INTO article_tag (article_id, tag_id)
      VALUES 
        (2, 1)
    `

    console.log("article_tag table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding article_tag table:", error, "\n")
  }
}

async function seedDatabase() {
  await seedProjectsTable()
  await seedSkillsTable()
  await seedProjectSkillTable()
  await seedRolesTable()
  await seedProjectMemberTable()
  await seedArticlesTable()
  await seedTagsTable()
  await seedArticleTagTable()
}

seedDatabase()
  .then(() => console.log("\nDatabase seeding completed"))
  .catch((error) => console.error("\nError during database seeding:", error))
  .finally(() => process.exit(0))