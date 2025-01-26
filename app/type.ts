export type Project = {
    slug: string,
    name: string,
    description: string,
    skill: string,
    link: { title: string, subtitle: string, href: string },
    keyVisual: string,
    members: { name: string, role: string }[],
    timeline: { start: string, period: string, end: string },
    outputs: string[]
}