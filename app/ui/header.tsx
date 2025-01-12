'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  HomeIcon as HomeIconOutline, FolderIcon as FolderIconOutline, UserIcon as UserIconOutline
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid, FolderIcon as FolderIconSolid, UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';

function Button({ item, pathname }: {
  item: { name: string, href: string, iconDefault: JSX.Element, iconSelected: JSX.Element },
  pathname: string
}) {
  const isCurrentPage = (href: string) => {
    if (href === pathname) {
      return true;
    } else if (pathname.startsWith(href) && href !== '/') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Link href={item.href} data-current-page={isCurrentPage(item.href)}
      className='pt-3 px-3 pb-4 flex flex-col justify-center items-center gap-1 group *:transition-all *:duration-700 *:*:transition-opacity *:*:duration-700'>
      <span className='w-16 h-8 rounded-full py-1 px-5 group-data-[current-page=true]:bg-teal-100'>
        {item.iconDefault}
        {item.iconSelected}
      </span>
      <span className='text-gray-900 text-sm group-data-[current-page=true]:font-bold'>
        {item.name}</span>
    </Link>
  )
}

export default function Header() {
  const iconDefaultClassName = 'size-6 stroke-gray-900 opacity-100 group-data-[current-page=true]:opacity-0';
  const iconSelectedClassName = 'relative -top-6 size-6 fill-gray-900 opacity-0 group-data-[current-page=true]:opacity-100';

  const list = [
    {
      name: "首頁",
      href: "/",
      iconDefault: <HomeIconOutline className={iconDefaultClassName} />,
      iconSelected: <HomeIconSolid className={iconSelectedClassName} />,
    },
    {
      name: "專案",
      href: "/project",
      iconDefault: <FolderIconOutline className={iconDefaultClassName} />,
      iconSelected: <FolderIconSolid className={iconSelectedClassName} />,
    },
    // {
    //   name: "文章",
    //   href: "/article",
    //   iconDefault: <FolderIconOutline className={iconDefaultClassName} />,
    //   iconSelected: <FolderIconSolid className={iconSelectedClassName} />,
    // },
    {
      name: "關於我",
      href: "/about",
      iconDefault: <UserIconOutline className={iconDefaultClassName} />,
      iconSelected: <UserIconSolid className={iconSelectedClassName} />,
    },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed top-[calc(100%-80px)] inset-x-0 h-20 bg-teal-50 flex justify-center gap-2 md:inset-y-0 md:left-0 md:w-20 md:h-screen md:flex-col">
      {list.map((item) => <Button key={item.href} item={item} pathname={pathname} />)}
    </header>
  )
}