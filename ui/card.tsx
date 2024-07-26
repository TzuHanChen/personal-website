import clsx from "clsx"

export default function Card(
  { imageUrl = "", title, description, direction = "imageFirst" }:
    { imageUrl?: string, title: string, description: string, direction?: "imageFirst" | "titleFirst" }) {
  return (
    <div className={clsx("rounded-3xl flex", direction == "imageFirst" ? "flex-col" : "flex-col-reverse")}>
      <img src={imageUrl} alt={title} title={title}
        className={clsx("w-full aspect-video", direction == "imageFirst" ? "rounded-t-3xl" : "rounded-b-3xl", "bg-gray-200")} ></img>
      <div className={clsx(direction == "titleFirst" ? "rounded-t-3xl" : "rounded-b-3xl", "bg-white p-6 flex flex-col justify-between")}>
        <h3 className="mb-3 text-2xl text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}