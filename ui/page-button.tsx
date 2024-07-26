import Link from "next/link";
import clsx from "clsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PageButton(
  { title, subtitle = "", href, align = "right" }:
    { title: string, subtitle?: string, href: string, align?: "right" | "left" }
) {
  return (
    <Link href={href}
      className={clsx("rounded-3xl bg-white p-6 flex",
        align == "right" ? "flex-row" : "flex-row-reverse", "justify-end items-center gap-3 group")}>
      <div className={clsx("text-gray-900", align == "right" ? "text-right" : "text-left")}>
        {subtitle && <p className="">{subtitle}</p>}
        <p className="text-2xl group-active:text-teal-700">{title}</p>
      </div>
      <div className="bg-transparent p-2 rounded-full group-active:bg-teal-600">
        {align == "right"
          ? <ArrowRightIcon className="size-6 stroke-gray-900 group-active:stroke-white" />
          : <ArrowLeftIcon className="size-6 stroke-gray-900 group-active:stroke-white" />}
      </div>
    </Link>
  )
}