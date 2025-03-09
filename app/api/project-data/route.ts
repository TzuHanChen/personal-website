import { projectData } from "./project-data";

export async function GET(request: Request) {
  return Response.json(projectData);
}