function ProjectSideBar({ projectId }: { projectId: string }) {
  return (
    <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:sticky lg:top-0 lg:w-96 lg:h-screen lg:py-36 lg:px-12">
      <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">
        專案資訊 {projectId}</h1>
      <p className="text-gray-700">專案描述專案描述專案描述專案描述專案描述專案描述專案描述</p>
      <button className="w-max self-end">DEMO</button>
    </div>
  )
}

export default function ProjectLayout({ children, params }:
  { children: React.ReactNode, params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50 md:ml-20 selection:bg-teal-600 selection:text-gray-50 lg:flex">
      <ProjectSideBar projectId={params.id} />
      {children}
    </main>
  )
}