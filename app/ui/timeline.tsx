import { DocumentIcon, CalendarDateRangeIcon, CheckBadgeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Time({ stage, text }: { stage: string, text: string }) {
  // (name == "我") ? "text-gray-900" : "text-gray-600"

  return (
    <div className="flex flex-col items-center gap-1.5">
      {/* {
          ? <img src="photo.png" alt="photo" title="photo"
            className="size-9 rounded-full bg-gray-200" />
          : <UserCircleIcon className='size-9 stroke-gray-600' />
        } */}
      <h3 className="text-lg text-center md:text-xl lg:text-2xl">{stage}</h3>
        <p className="text-center">{text}</p>
    </div>
  )
}

export default function Timeline({ start, period, end }:
  { start: string, period: string, end: string }) {

  return (
    <div className="mx-auto">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        時間軸</h2>

      <div className="flex items-center">
        {/* {data.map((item, index) => (
          <Member key={index} name={item.name} role={item.role} skill={item.skill} />
        ))} */}
      </div>
    </div>
  )
}