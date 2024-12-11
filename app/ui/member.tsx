import clsx from 'clsx';
import { UserCircleIcon } from '@heroicons/react/24/solid';

function Member({ name, role, skill }:
  { name: string, role: string, skill: string }) {
  const icon = (name == "我")
    ? <img src="photo.png" alt="photo" title="photo"
      className="size-9 rounded-full bg-gray-200" />
    : <UserCircleIcon className='size-9 fill-gray-600' />;

  return (
    <div className={clsx("rounded-xl bg-white p-6 flex flex-col gap-3",
      (name == "我") ? "text-gray-900" : "text-gray-600")}>
      <div className="flex items-center gap-1.5">
        {icon}
        <p>{name}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg md:text-xl lg:text-2xl">{role}</h3>
        <p>{skill}</p>
      </div>
    </div>
  )
}

export default function Members({ data }:
  { data: { name: string, role: string, skill: string }[] }) {

  return (
    <div className="mx-auto w-full max-w-192">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        成員</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {data.map((item, index) => (
          <Member key={index} name={item.name} role={item.role} skill={item.skill} />
        ))}
      </div>
    </div>
  )
}