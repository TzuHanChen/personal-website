import clsx from 'clsx';
import { DocumentIcon, CalendarDateRangeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

function Time({ stage, text }: { stage: string, text: string }) {
  let icon = <></>;
  switch (stage) {
    case "開始":
      icon = <DocumentIcon className="size-6 stroke-white" />
      icon = <DocumentIcon className="size-6 stroke-white" />
      break;
    case "時程":
      icon = <CalendarDateRangeIcon className="size-6 stroke-white" />
      icon = <CalendarDateRangeIcon className="size-6 stroke-white" />
      break;
    case "結束":
      icon = <CheckBadgeIcon className="size-6 stroke-white" />
      icon = <CheckBadgeIcon className="size-6 stroke-white" />
      break;
    default:
      icon = <div className='size-6 rounded-full bg-gray-200'></div>
      icon = <div className='size-6 rounded-full bg-gray-200'></div>
      break;
  }

  return (
    <div className={clsx("min-w-20 flex flex-col items-center text-center",
      (stage == "時程") ? "text-gray-900" : "text-gray-600")}>
      <div className={clsx("mb-1.5 size-9 rounded-full bg-gray-200 flex items-center justify-center", (stage == "時程") ? "bg-gray-900" : "bg-gray-600")}>
        {icon}
      </div>
      <p>{stage}</p>
      <p className="text-lg md:text-xl lg:text-2xl">{text}</p>
    </div>
  )
}

function Line() {
  return <div className='hidden min-w-6 w-12 h-1 rounded-sm bg-gray-200 sm:block'></div>
}

export default function Timeline({ start, period, end }:
  { start: string, period: string, end: string }) {

  return (
    <div className="mx-auto">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        時間軸</h2>

      <div className="rounded-xl p-6 bg-white flex justify-between items-center gap-3">
        <Time stage="開始" text={start} />
        <Line />
        <Time stage="時程" text={period} />
        <Line />
        <Time stage="結束" text={end} />
      </div>
    </div>
  )
}