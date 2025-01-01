import Image from 'next/image';
import clsx from 'clsx';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Project } from "@/app/type";

function Member({ name, role }: { name: string, role: string }) {
  const icon = (name == "我")
    ? <Image src="/image/my-icon.svg" alt="陳子涵的照片" title="陳子涵的照片"
      width={36} height={36} className="size-9 rounded-full bg-gray-200" />
    : <UserCircleIcon className='size-9 fill-gray-500' />;

  return (
    <div className={clsx("rounded-xl bg-white p-6 flex flex-col gap-3",
      (name == "我") ? "text-gray-800" : "text-gray-500")}>
      <div className="flex items-center gap-1.5">
        {icon}
        <p>{name}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg md:text-xl lg:text-2xl">{role}</h3>
        {/* <p>{skill}</p> */}
      </div>
    </div>
  )
}

export default function Members({ members }: { members: Project["members"] }) {

  return (
    <div className="mx-auto w-full max-w-192">
      <h2 className="mb-6 text-2xl text-gray-800 text-center md:mb-9 md:text-3xl lg:text-4xl">
        成員</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {members.map((item, index) => (
          <Member key={index} name={item.name} role={item.role} />
        ))}
      </div>
    </div>
  )
}