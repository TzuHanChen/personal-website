import { sql } from "@/lib/db-init";
import { initProjectsTable, initSkillsTable } from "@/lib/db-init";

async function seedProjectsTable() {
  try {
    await initProjectsTable()

    await sql`TRUNCATE TABLE projects RESTART IDENTITY`

    await sql`
      INSERT INTO projects (id, slug, name, description, key_visual, link, timeline)
      VALUES 
        (1, 'medical-forum', '醫療論壇', '供使用者發文討論醫療相關議題的網站', 'medical-forum.png', '', '2020/07 ~ 2020/08'),
        (2, 'max-value', '珍食力', '協助使用者充分運用食材的手機應用程式原型', 'max-value.png', '', '2020/11 ~ 2021/05'),
        (3, 'sticker-smash', '照片裝飾', '選擇照片、新增貼紙、拖曳與縮放貼紙、保存整個畫面到裝置中', 'sticker-smash.png', 'https://sticker-smash-tzuhanchen.vercel.app', '2023/10 ~ 2024/03'),
        (4, 'nextjs-dashboard', '儀表板', '依照 Next.js 官方教學課程實作的網站', 'nextjs-dashboard.png', 'https://nextjs-dashboard-tzuhanchen.vercel.app', '2023/12 ~ 2024/02'),
        (5, 'teamie', 'Teamie', 'Teamie 致⼒為學⽣及初⼊職場的新鮮人媒合專案夥伴，打造跨專業、跨地區的合作機會', 'teamie.png', '', '2022/09 ~ 2024/12'),
        (6, 'personal-website', '個人網站', '我為自己設計與開發的個人網站，在此展示我的專案、經歷與技能', 'personal-website.png', 'https://github.com/tzuhanchen/personal-website', '2021/08 ~ 進行中'),
        (7, 'todo-list', '待辦清單', '實作完整 CRUD 功能的任務管理系統', 'todo-list.png', 'https://todo-list-tzuhanchen.vercel.app', '2025/02 ~ 進行中')
    `

    console.log("projects table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding projects table:", error, "\n")
  }
}

async function seedSkillsTable() {
  try {
    await initSkillsTable()

    await sql`TRUNCATE TABLE skills RESTART IDENTITY`

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
        (12, 'HTML'),
        (13, 'CSS'),
        (14, 'SCSS'),
        (15, 'Tailwind CSS'),
        (16, 'JavaScript'),
        (17, 'TypeScript'),
        (18, 'React'),
        (19, 'Next.js'),
        (20, 'GA4'),
        (21, 'Headless UI'),
        (22, 'React Hook Form'),
        (23, 'Expo'),
        (24, 'React Native')
    `

    console.log("skills table seeded successfully\n")
  } catch (error) {
    console.error("Error seeding skills table:", error, "\n")
  }
}

async function seedDatabase() {
  await seedProjectsTable()
  await seedSkillsTable()
}

seedDatabase()
  .then(() => console.log("\nDatabase seeding completed"))
  .catch((error) => console.error("\nError during database seeding:", error))
  .finally(() => process.exit(0))