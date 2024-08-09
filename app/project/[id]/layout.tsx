function ProjectSideBar({ projectId }: { projectId: string }) {
  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:w-96 lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">專案資訊 {projectId}</h1>
      <p>專案描述專案描述專案描述專案描述專案描述專案描述專案描述</p>
      <button className="w-max self-end">DEMO</button>
    </div>
  )
}

export default function ProjectLayout({ children, params }:
  { children: React.ReactNode, params: { id: string } }) {
  return (
    <main className="bg-gray-50 md:ml-20 selection:bg-teal-600 selection:text-gray-50">
      <ProjectSideBar projectId={params.id} />
      {children}
    </main>
  )
}