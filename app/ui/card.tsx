import Link from "next/link";
import Image from "next/image";

export default function Card(
  { href = "/", imageUrl = "", title, description }:
    { href?: string, imageUrl?: string, title: string, description: string }) {
  return (
    <Link href={href} className="rounded-3xl flex flex-col group">
      <Image src={imageUrl} alt={title} title={title} width={384} height={216}
        className="w-full aspect-video rounded-t-3xl bg-gray-200" />
      <div className="rounded-b-3xl flex-1 bg-white p-6 flex flex-col gap-3 group-active:bg-teal-700 transition-colors duration-300">
        <h3 className="text-2xl text-gray-900 group-active:text-white transition-colors duration-300">
          {title}</h3>
        <p className="text-gray-700 group-active:text-teal-100 transition-colors duration-300">
          {description}</p>
      </div>
    </Link>
  )
}