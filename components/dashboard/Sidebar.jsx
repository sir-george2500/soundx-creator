import { useEffect, useState } from 'react';
import { mdiChartBox, mdiCurrencyUsd, mdiMusic } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Sidebar = () => {
  const params = useSearchParams();
  const view = params.get('view');

  return (
    <div className="h-70 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mt-1 rounded-md">
      <div className="bg-neutral-950 h-full p-6 ">
        <h1 className="text-3xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 bg-yellow-600 mb-3 p-2">Menu</h1>
        <ul className="text-gray-200 text-lg list-none space-y-4 ">
          <Link href="/board?view=overview">
            <li className={`transition duration-300 flex items-center p-2 ${view === 'overview' ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent' : 'hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-clip-text hover:text-transparent'}`}>
              <Icon path={mdiChartBox} size={1} className="mr-2 hover:fill-current" /> Overview
            </li>
          </Link>
          <Link href="/board?view=music">
          <li className={`flex items-center p-2 `}>
          <p className={`transition duration-300 ${view === 'music' ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent' : 'hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-clip-text hover:text-transparent'}`}> 
              <Icon path={mdiMusic} size={1} className="mr-2 hover:fill-current" /> 
              </p>
              <p className={`transition duration-300 ${view === 'music' ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent' : 'hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-clip-text hover:text-transparent'}`}> My Music</p>
              </li>
          </Link>
          <Link href="/board?view=earning">
            <li className={`transition duration-300 flex items-center p-2 ${view === 'earning' ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent' : 'hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-clip-text hover:text-transparent'}`}>
              <Icon path={mdiCurrencyUsd} size={1} className="mr-2 hover:fill-current" /> Earning
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
