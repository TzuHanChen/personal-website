import { UserIcon, ArrowRightIcon, PencilIcon, PaintBrushIcon, DocumentTextIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Project } from "@/app/type";

/**
 * 產出項目
 * @param data "uxr" | "flow" | "ui" | "pro" | "page" | "site"
 */
function Item({ data }: { data: string }) {
  let icon = <></>
  let text = '';
  switch (data) {
    case "uxr":
      icon = <UserIcon className="size-6 stroke-white" />
      text = "使用者訪談";
      break;
    case "flow":
      icon = <ArrowRightIcon className="size-6 stroke-white" />
      text = "流程規劃";
      break;
    case "ui":
      icon = <PencilIcon className="size-5 stroke-white" />
      text = "介面設計";
      break;
    case "pro":
      icon = <PaintBrushIcon className="size-5 stroke-white" />
      text = "原型";
      break;
    case "page":
      icon = <DocumentTextIcon className="size-5 stroke-white" />
      text = "網頁";
      break;
    case "site":
      icon = <ComputerDesktopIcon className="size-6 stroke-white" />
      text = "網站";
      break;
  }

  return (
    <div className="rounded-xl bg-white min-w-28 aspect-square p-1.5 flex flex-col justify-center items-center text-center gap-1.5 md:min-w-32 md:p-3">
      <div className="size-9 rounded-full flex items-center justify-center bg-gray-500">
        {icon}
      </div>
      <p className="text-gray-500 text-base md:text-xl">{text}</p>
    </div>
  )
}

export default function Outputs({ outputs }: { outputs: Project["outputs"] }) {

  return (
    <div className="mx-auto">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        產出</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {outputs.map((data, index) => {
          return <Item data={data} key={index} />
        })}
      </div>
    </div>
  )
}