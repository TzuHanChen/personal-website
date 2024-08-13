import clsx from 'clsx';
import { UserCircleIcon } from '@heroicons/react/24/outline';

function Member({ name, role, skill }:
  { name: string, role: string, skill: string }) {
  return (
    <div className={clsx("bg-white rounded-xl p-3 flex flex-col items-center gap-3", (name == "我") ? "text-gray-900" : "text-gray-600", "md:p-6")}>
      <div className="flex items-center gap-1.5">
        {(name == "我")
          ? <img src="photo.png" alt="photo" title="photo"
            className="size-9 rounded-full bg-gray-200" />
          : <UserCircleIcon className='size-9 stroke-gray-600' />
        }
        <p>{name}</p>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <h3 className="text-lg text-center md:text-xl lg:text-2xl">{role}</h3>
        <p className="text-center">{skill}</p>
      </div>
    </div>
  )
}

export default function Members() {
  const data = [
    { name: "我", role: "網站後端", skill: "XAMPP, PHP, MySQL" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
  ];

  return (
    <div className="mx-auto w-full max-w-192">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        成員</h2>

      <div className="grid grid-cols-2 gap-3 md:gap-6 xl:grid-cols-3">
        {data.map((item, index) => (
          <Member key={index} name={item.name} role={item.role} skill={item.skill} />
        ))}
      </div>
    </div>
  )
}