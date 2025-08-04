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
    members: { role_id: string, members_name: string }[],
    prev: { name: string, slug: string, },
    next: { name: string, slug: string, },
}

export type Skill = {
    id: number,
    name: string,
}