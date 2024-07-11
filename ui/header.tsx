import {
  HomeIcon as HomeIconOutline, FolderIcon as FolderIconOutline, UserIcon as UserIconOutline
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid, FolderIcon as FolderIconSolid, UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';

export default function Header() {
  const list = [];

  return (
    <header className="absolute top-[calc(100%-80px)] inset-x-0 h-20 bg-teal-50 flex justify-center gap-2">
      <button className='pt-3 px-6 pb-4 flex flex-col justify-center items-center gap-1'>
        <span className='w-16 h-8 rounded-full bg-teal-100 py-1 px-5'>
          <HomeIconSolid className='size-6 fill-gray-900' />
        </span>
        <span className='text-gray-900 text-sm font-bold'>首頁</span>
      </button>
      <button className='pt-3 px-6 pb-4 flex flex-col justify-center items-center gap-1'>
        <span className='w-16 h-8 rounded-full bg-teal-100 py-1 px-5'>
          <FolderIconOutline className='size-6 stroke-gray-900' />
        </span>
        <span className='text-gray-900 text-sm'>專案</span>
      </button>
      <button className='pt-3 px-6 pb-4 flex flex-col justify-center items-center gap-1'>
        <span className='w-16 h-8 rounded-full bg-teal-100 py-1 px-5'>
          <UserIconOutline className='size-6 stroke-gray-900' />
        </span>
        <span className='text-gray-900 text-sm'>關於我</span>
      </button>
    </header>
  )
}