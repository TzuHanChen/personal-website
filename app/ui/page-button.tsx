import Link from "next/link";
import clsx from "clsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PageButton(
  { title, subtitle = "", href, align = "right", outside }:
    {
      title: string, subtitle?: string, href: string, outside?: boolean,
      align?: "right" | "left"
    }
) {
  return (
    <Link href={href} target={outside ? "_blank" : "_self"}
      className={clsx("shadow-sm rounded-3xl bg-white p-6 flex",
        align == "right" ? "flex-row" : "flex-row-reverse", 
        "justify-end items-center gap-3 group hover:shadow-xl transition-shadow duration-500")}>
      <div className={clsx("text-gray-900", align == "right" ? "text-right" : "text-left")}>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        <p className="text-2xl group-active:text-teal-700 transition-colors duration-300">
          {title}</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-full group-active:bg-teal-700 transition-colors duration-300">
        {align == "right"
          ? <ArrowRightIcon className="size-6 stroke-gray-900 group-active:stroke-teal-100 transition-colors duration-300" />
          : <ArrowLeftIcon className="size-6 stroke-gray-900 group-active:stroke-teal-100 transition-colors duration-300" />}
      </div>
    </Link>
  )
}