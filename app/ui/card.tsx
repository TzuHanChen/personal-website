import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Card({ linkHref, imageSrc, name, description }: {
  linkHref: string, imageSrc: string, name: string, description: string
}) {
  return (
    <Link href={linkHref}
      className="shadow-sm rounded-3xl flex flex-col group hover:shadow-xl transition-shadow duration-500">
      <Image src={imageSrc} alt={name} title={name} width={384} height={216}
        className="w-full aspect-video object-cover rounded-t-3xl bg-gray-200" />
      <div className="rounded-b-3xl flex-1 bg-white p-6 flex flex-col justify-between">
        <div>
          <h3 className="mb-3 flex items-center gap-3 text-2xl text-gray-900 group-active:text-teal-700 transition-colors duration-300">
            <span>{name}</span>
            <span className="bg-gray-100 p-2 rounded-full group-active:bg-teal-700 transition-colors duration-300">
              <ArrowRightIcon className="size-6 stroke-gray-900 group-active:stroke-teal-100 transition-colors duration-300" />
            </span>
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export function Loading() {
  return (
    <div className="rounded-3xl min-h-80 bg-white p-6 flex flex-col justify-center items-center">
      <p className="mb-3 text-2xl">載入中 ...</p>
    </div>
  )
}