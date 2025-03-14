import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="mb-20 w-full bg-gray-50 pb-16 px-6 text-gray-700 sm:px-12 md:mb-0 md:pl-32">
      <hr className="mx-auto mb-16 w-full border-gray-300" />

      <div className="mx-auto w-full max-w-240 flex flex-col justify-between gap-9 sm:flex-row">
        <Link href='/' className="flex items-center gap-3 self-start">
          <Image src="/icon.svg" alt="logo" title="logo"
            width={36} height={36} className="rounded-full size-9" />
          <span>陳子涵</span>
        </Link>

        <div className="flex flex-col gap-3 *:flex *:items-center *:gap-2">
          <p>
            <MapPinIcon className="size-6 stroke-gray-700" />
            <span>台灣，台北市</span>
          </p>
          <p>
            <EnvelopeIcon className="size-6 stroke-gray-700" />
            <Link href='mailto:hahachentzuhan@gmail.com'
              className="underline hover:text-teal-600 active:text-teal-600 transition-colors duration-300">
              hahachentzuhan@gmail.com</Link>
          </p>
          <p>
            <CodeBracketIcon className="size-6 stroke-gray-700" />
            <Link href='https://github.com/TzuHanChen' target="_blank"
              className="underline hover:text-teal-600 active:text-teal-600 transition-colors duration-300">
              GitHub</Link>
          </p>
        </div>

        <p className="text-right self-end">
          &copy; {new Date().getFullYear()} 陳子涵</p>
      </div>
    </footer>
  )
}
