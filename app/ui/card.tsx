import Link from "next/link"
import clsx from "clsx"

export default function Card(
  { href = "/", imageUrl = "", title, description, skill = "", direction = "imageFirst" }:
    { href?: string, imageUrl?: string, title: string, description: string, skill?: string, direction?: "imageFirst" | "titleFirst" }) {
  return (
    <Link href={href} className={clsx("rounded-3xl flex", direction == "imageFirst" ? "flex-col" : "flex-col-reverse")}>
      <img src={imageUrl} alt={title} title={title}
        className={clsx("w-full aspect-video", direction == "imageFirst" ? "rounded-t-3xl" : "rounded-b-3xl", "bg-gray-200")} ></img>
      <div className={clsx(direction == "titleFirst" ? "rounded-t-3xl" : "rounded-b-3xl", "flex-1 bg-white p-6 flex flex-col gap-3")}>
        <h3 className="text-2xl text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
        {skill && <p className="text-gray-500">{skill}</p>}
      </div>
    </Link>
  )
}