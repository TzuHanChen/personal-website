import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function PageButton({ text, href }: { text: string, href: string }) {
  return (
    <Link href={href}
      className="rounded-3xl bg-white p-6 flex justify-end items-center gap-3">
      <span className="text-gray-900 text-2xl">{text}</span>
      <ArrowRightIcon className="size-6 stroke-gray-900" />
    </Link>
  )
}