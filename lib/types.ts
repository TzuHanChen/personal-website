export type Project = {
  id: number,
  slug: string,
  name: string,
  description: string,
  key_visual: string,
  link: string,
  timeline: string,
  output: string,
  skills: Skill[],
  members: { id: number, role_name: Role["name"], members_name: string }[],
  next: { slug: string, name: string, },
  prev: { slug: string, name: string, },
}

export type Skill = {
  id: number,
  name: string,
}

export type Role = {
  id: number,
  name: string,
}
