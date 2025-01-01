export type Project = {
    slug: string,
    name: string,
    description: string,
    skill: string,
    keyVisual: string,
    members: { name: string, role: string }[],
    timeline: { start: string, period: string, end: string },
    outputs: string[]
}