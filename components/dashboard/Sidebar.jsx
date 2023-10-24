import { useEffect, useState } from 'react';
import { mdiChartBox, mdiCurrencyUsd, mdiMusic} from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

const Sidebar = () => {
  return (
<div className="h-70 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mt-1">
    <div className="bg-neutral-950 h-full p-6">
      <h1 className="text-3xl font-extrabold text-white mb-6">Menu</h1>
      <ul className="text-white text-lg list-none space-y-4">
        <Link href="/board?view=overview">
          <li className="hover:text-amber-500 transition duration-300 flex items-center">
            <Icon path={mdiChartBox} size={1} className="mr-2" /> Overview
          </li>
        </Link>
        <Link href="/board?view=music">
        <li className="hover:text-yellow-300 transition duration-300 flex  items-center ">
          <Icon path={mdiMusic} size={1} className="mr-2" /> Music
        </li>
        </Link>
        <Link href="/board?view=earning">
        <li className="hover:text-yellow-300 transition duration-300 flex items-center">
          <Icon path={mdiCurrencyUsd} size={1} className="mr-2" /> Earning
        </li>
        </Link>
      </ul>
    </div>
</div>
  );
};

export default Sidebar;
