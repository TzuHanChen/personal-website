import clsx from 'clsx';
import { DocumentIcon, CalendarDateRangeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

function Time({ stage, text }: { stage: string, text: string }) {
  let icon = <></>;
  switch (stage) {
    case "開始":
      icon = <DocumentIcon className="size-9 stroke-gray-600" />
      break;
    case "時程":
      icon = <CalendarDateRangeIcon className="size-9 stroke-gray-900" />
      break;
    case "結束":
      icon = <CheckBadgeIcon className="size-9 stroke-gray-600" />
      break;
    default:
      icon = <div className='size-9 bg-gray-200'></div>
      break;
  }

  return (
    <div className={clsx("rounded-xl py-1.5 px-3 bg-white flex flex-col items-center gap-1.5", (stage == "時程") ? "text-gray-900" : "text-gray-600")}>
      {icon}
      <h3 className="text-lg text-center md:text-xl lg:text-2xl">{stage}</h3>
      <p className="text-center">{text}</p>
    </div>
  )
}

function Line() {
  return <div className='min-w-6 w-9 h-1 rounded-sm bg-gray-200'></div>
}

export default function Timeline({ start, period, end }:
  { start: string, period: string, end: string }) {

  return (
    <div className="mx-auto">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        時間軸</h2>

      <div className="flex items-center">
        <Time stage="開始" text={start} />
        <Line />
        <Time stage="時程" text={period} />
        <Line />
        <Time stage="結束" text={end} />
      </div>
    </div>
  )
}