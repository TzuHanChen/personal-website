'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HomeIcon, HomeIconFilled, WorkIcon, WorkIconFilled, ArticleIcon, ArticleIconFilled, PersonIcon, PersonIconFilled } from "./icons";

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
      iconDefault: <HomeIcon className={iconDefaultClassName} />,
      iconSelected: <HomeIconFilled className={iconSelectedClassName} />,
    },
    {
      name: "專案",
      href: "/project",
      iconDefault: <WorkIcon className={iconDefaultClassName} />,
      iconSelected: <WorkIconFilled className={iconSelectedClassName} />,
    },
    {
      name: "文章",
      href: "/article",
      iconDefault: <ArticleIcon className={iconDefaultClassName} />,
      iconSelected: <ArticleIconFilled className={iconSelectedClassName} />,
    },
    {
      name: "關於我",
      href: "/about",
      iconDefault: <PersonIcon className={iconDefaultClassName} />,
      iconSelected: <PersonIconFilled className={iconSelectedClassName} />,
    },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed z-10 top-[calc(100%-80px)] inset-x-0 shadow-sm h-20 bg-teal-50 flex justify-center items-center md:inset-y-0 md:left-0 md:w-20 md:h-screen">
      <div className='w-full max-w-96 flex justify-between md:max-h-96 md:flex-col'>
        {list.map((item) => <Button key={item.href} item={item} pathname={pathname} />)}
      </div>
    </header>
  )
}