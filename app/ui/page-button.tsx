import Link from "next/link";
import { ArrowBackIcon, ArrowForwardIcon } from "./icons";

export default function PageButton(
  { title, subtitle = "", href, align = "right", outside }:
    {
      title: string, subtitle?: string, href: string,
      outside?: boolean, align?: "right" | "left"
    }
) {
  return (
    <Link href={href} target={outside ? "_blank" : "_self"} data-align={align}
      className="shadow-sm rounded-3xl bg-white p-6 flex data-[align=right]:flex-row data-[align=left]:flex-row-reverse justify-end items-center gap-3 group hover:shadow-xl transition-shadow duration-500">
      <div className={align === "right" ? "text-right" : "text-left"}>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        <p className="text-2xl text-gray-900 group-active:text-teal-700 transition-colors duration-300">
          {title}</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-full group-active:bg-teal-700 transition-colors duration-300">
        {align === "right"
          ? <ArrowForwardIcon className="size-6 fill-gray-700 group-active:fill-teal-100 transition-colors duration-300" />
          : <ArrowBackIcon className="size-6 fill-gray-700 group-active:fill-teal-100 transition-colors duration-300" />}
      </div>
    </Link>
  )
}