import Link from "next/link";
import { MapPinIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="mb-20 w-full bg-gray-100 py-12 px-6 flex flex-col justify-center gap-9 text-gray-700 sm:px-12 sm:flex-row md:mb-0 md:pl-32">
      <hr className="max-w-[960px] border-t-none border-b border-b-gray-300" />

      <div className="w-full max-w-[960px] flex flex-col justify-between gap-9 sm:flex-row">
        <Link href='/' className="flex items-center gap-3 self-start">
          {/* <img src="logo.svg" alt="logo" /> */}
          <span>陳子涵</span>
        </Link>

        <div className="flex flex-col gap-3 *:flex *:items-center *:gap-2">
          <p>
            <MapPinIcon className="size-6 stroke-gray-500" />
            <span>台灣，台北市</span>
          </p>
          <p>
            <EnvelopeIcon className="size-6 stroke-gray-500" />
            <Link href='mailto:hahachentzuhan@gmail.com' className="underline">
              hahachentzuhan@gmail.com</Link>
          </p>
          <p>
            <CodeBracketIcon className="size-6 stroke-gray-500" />
            <Link href='https://github.com/TzuHanChen' target="_blank" className="underline">
              GitHub</Link>
          </p>
        </div>

        <p className="text-right self-end">
          &copy; {new Date().getFullYear()} 陳子涵</p>
      </div>
    </footer>
  )
}
