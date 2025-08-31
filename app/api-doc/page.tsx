import { firaCode } from "@/app/ui/fonts";

function PathMethodList() {
  return (
    <section className="shadow-sm rounded-2xl h-max bg-white p-6 flex flex-col gap-3 lg:sticky lg:top-6 lg:w-xs">
      <p className="font-medium">目錄</p>
      <div className="border border-gray-200">
        <a className="block bg-gray-100 p-3" href="#api-project-list">
          <pre className="font-bold">/api/project/list</pre>
        </a>
        <div className="p-3 flex flex-col gap-3">
          <Method method={"GET"} description="取得專案清單資料" />
        </div>
      </div>
      <div className="border border-gray-200">
        <a className="block bg-gray-100 p-3" href="#api-project-content">
          <pre className="font-bold">/api/project/content</pre>
        </a>
        <div className="p-3 flex flex-col gap-3">
          <Method method="GET" description="取得專案內容資料" />
        </div>
      </div>
    </section>
  )
}

function Path({ path, description, children }: {
  path: string,
  description?: string,
  children?: React.ReactNode
}) {
  return (
    <section id={`api${path.replaceAll('/', '-')}`}
      className="mx-auto shadow-sm rounded-2xl w-full max-w-5xl bg-gray-50">
      <div className="rounded-t-2xl border-b border-b-gray-200 bg-gray-50 p-6 flex items-center gap-6 flex-wrap">
        <h2 className="text-xl font-bold"><pre>/api{path}</pre></h2>
        {description && <p>{description}</p>}
      </div>
      <div className="rounded-b-2xl bg-white p-6 flex flex-col gap-4">{children}</div>
    </section>
  )
}

function Method({ method, description }: {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD',
  description?: string,
}) {
  let methodTag = <></>
  switch (method) {
    case 'GET':
      methodTag = <span className="rounded-full bg-sky-100 py-2 px-4 text-sky-800 font-bold">{method}</span>
      break;
    case "POST":
      methodTag = <span className="rounded-full bg-green-100 py-2 px-4 text-green-800 font-bold">{method}</span>
      break;
    case "PUT":
      methodTag = <span className="rounded-full bg-orange-100 py-2 px-4 text-orange-800 font-bold">{method}</span>
      break;
    case "PATCH":
      methodTag = <span className="rounded-full bg-teal-100 py-2 px-4 text-teal-800 font-bold">{method}</span>
      break;
    case "DELETE":
      methodTag = <span className="rounded-full bg-red-100 py-2 px-4 text-red-800 font-bold">{method}</span>
      break;
    case "OPTIONS":
      methodTag = <span className="rounded-full bg-indigo-100 py-2 px-4 text-indigo-800 font-bold">{method}</span>
      break;
    case "HEAD":
      methodTag = <span className="rounded-full bg-purple-100 py-2 px-4 text-purple-800 font-bold">{method}</span>
      break;
    default:
      break;
  }
  return (
    <p className="flex gap-4 items-center">
      {methodTag}
      {description && <span className="font-medium">{description}</span>}
    </p>
  )
}

type Parameter = { name: string, type: string, required: boolean, rule: string };

function ParametersTable({ parameters }: { parameters: Parameter[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="text-left [&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-100 [&_th]:py-2 [&_th]:px-4 [&_th]:font-medium [&_td]:border [&_td]:border-gray-200 [&_td]:py-2 [&_td]:px-4">
        <thead>
          <tr>
            <th>參數名稱</th><th>類型</th><th>必要</th><th>限制</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) =>
            <tr key={index}>
              <td>{param.name}</td>
              <td>{param.type}</td>
              <td>{param.required && '＊'}</td>
              <td>{param.rule}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function SearchParams({ searchParams }: { searchParams: Parameter[] }) {
  return (
    <div>
      <p className="mb-2 font-medium">SearchParams</p>
      <ParametersTable parameters={searchParams} />
    </div>
  )
}

function Params({ params }: { params: Parameter[] }) {
  return (
    <div>
      <p className="mb-2 font-medium">Params</p>
      <ParametersTable parameters={params} />
    </div>
  )
}

function RequestBody({ requestBody }: { requestBody: Parameter[] }) {
  return (
    <div>
      <p className="mb-2 font-medium">Request body</p>
      <ParametersTable parameters={requestBody} />
    </div>
  )
}

function TextBlock({ children }: { children?: React.ReactNode }) {
  return <div className="rounded-lg bg-gray-50 p-4">{children}</div>
}

function CodeBlock({ children }: { children?: React.ReactNode }) {
  return <pre className="rounded-lg overflow-x-auto bg-gray-800 p-4 text-gray-200">{children}</pre>
}

// function RequestExample() {
// 	return <></>
// }

function ResponseExample({ responseExample }: { responseExample: string }) {
  return (
    <div>
      <p className="mb-2 font-medium">Response example</p>
      <CodeBlock>{responseExample}</CodeBlock>
    </div>
  )
}

function Line() {
  return <hr className="my-3 border-t-gray-200" />
}

function Paths() {
  return (<>
    <Path path="/project/list" description="專案清單">
      <Method method={"GET"} description="取得專案清單資料" />
      <SearchParams searchParams={[
        {
          name: 'count',
          type: 'number',
          required: false,
          rule: '正整數'
        },
      ]} />
      <ResponseExample responseExample={
        `{
  status: 200, body: [
    {
      "slug": "personal-website",
      "key_visual": "personal-website.png",
      "name": "個人網站",
      "description": "我為自己設計與開發的個人網站，在此展示我的專案、經歷與技能"
    },
  ]
}

{ status: 500, error: "System error, please try again later" }`} />
    </Path>

    <Path path="/project/content" description="專案內容">
      <Method method="GET" description="取得專案內容資料" />
      <SearchParams searchParams={[
        {
          name: 'slug',
          type: 'string',
          required: true,
          rule: ''
        },
      ]} />
      <ResponseExample responseExample={
        `{
  status: 200, body: {
    "id": 7,
    "slug": "personal-website",
    "name": "個人網站",
    "description": "我為自己設計與開發的個人網站，在此展示我的專案、經歷與技能",
    "key_visual": "personal-website.png",
    "link": "https://github.com/tzuhanchen/personal-website",
    "timeline": "2021/08 ~ 2023/07 ~ 2024/04 ~ 持續更新",
    "output": "網站",
    "skills": [
      {
        "id": 21,
        "name": "Next.js"
      }
    ],
    "members": [
      {
        "id": 16,
        "role_name": "網站前端",
        "members_name": "我"
      },
    ],
    "next": {
      "slug": "teamie",
      "name": "Teamie"
    },
    "prev": {
      "slug": "todo-list",
      "name": "待辦清單"
    }
  }
}

{ status: 404, error: "slug not provided" }

{ status: 404, error: "slug does not exist" }

{ status: 500, error: "System error, please try again later" }`} />
    </Path>
  </>)
}

export default function APIdocument() {
  return (
    <main className={`bg-gray-100 py-12 px-6 flex flex-col gap-12 md:pl-26 ${firaCode.variable} [&_code]:font-fira-code [&_pre]:font-fira-code`}>
      <h1 className="mx-auto w-full max-w-5xl text-3xl font-bold">API 文件</h1>

      <div className="relative mx-auto w-full max-w-5xl flex flex-col gap-6 lg:flex-row">
        <PathMethodList />
        <div className="flex flex-col gap-6 lg:w-[calc(100%-20rem-1.5rem)]">
          {/* <section className="shadow-sm rounded-2xl bg-white p-6">
						<p className="mb-2 font-medium">Request headers</p>
						<CodeBlock>{`"Content-Type": "application/json; charset=utf-8"`}</CodeBlock>
					</section> */}
          <Paths />
        </div>
      </div>
    </main>
  )
}