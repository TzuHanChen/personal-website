'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import {
  HomeIcon as HomeIconOutline, FolderIcon as FolderIconOutline, UserIcon as UserIconOutline
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid, FolderIcon as FolderIconSolid, UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';

export default function Header() {
  const list = [
    {
      name: "首頁",
      href: "/",
      iconDefault: <HomeIconOutline className='size-6 stroke-gray-900' />,
      iconSelected: <HomeIconSolid className='size-6 fill-gray-900' />,
    },
    {
      name: "專案",
      href: "/project",
      iconDefault: <FolderIconOutline className='size-6 stroke-gray-900' />,
      iconSelected: <FolderIconSolid className='size-6 fill-gray-900' />,
    },
    {
      name: "關於我",
      href: "/about",
      iconDefault: <UserIconOutline className='size-6 stroke-gray-900' />,
      iconSelected: <UserIconSolid className='size-6 fill-gray-900' />,
    },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed top-[calc(100%-80px)] inset-x-0 h-20 bg-teal-50 flex justify-center gap-2 md:inset-y-0 md:left-0 md:w-20 md:h-screen md:flex-col">
      {
        list.map((item) => {
          return <Link key={item.href} href={item.href}
            className='pt-3 px-3 pb-4 flex flex-col justify-center items-center gap-1' >
            <span className={clsx('w-16 h-8 rounded-full py-1 px-5',
              item.href == pathname && 'bg-teal-100')}>
              {item.href == pathname ? item.iconSelected : item.iconDefault}
            </span>
            <span className={clsx('text-gray-900 text-sm',
              item.href == pathname && 'font-bold')}>{item.name}</span>
          </Link>
        })
      }
    </header>
  )
}