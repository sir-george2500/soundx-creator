"use client"
import { useSearchParams } from 'next/navigation';
import { mdiChartBox, mdiCurrencyUsd, mdiMusic} from '@mdi/js';
import Icon from '@mdi/react';



const DisplayView = () => {

  const query = useSearchParams().get("view");

  const renderContent = () => {
    switch (query) {
      case 'overview':
        return <div>Overview Content</div>;
      case 'music':
        return <div>Upload Music Content</div>;
      case 'earning':
        return <div>Earning Content</div>;
      default:
        return <div>Overview Content</div>;
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 ml-1 mt-1">
      <div className="bg-neutral-950 h-full p-6">
        <h1 className="text-3xl font-extrabold text-white mb-6">Menu</h1>
        <ul className="text-white text-lg list-none space-y-4">
          <li className="hover:text-amber-500 transition duration-300 flex items-center">
            <Icon path={mdiChartBox} size={1} className="mr-2" /> Overview
          </li>
          <li className="hover:text-yellow-300 transition duration-300 flex  items-center">
            <Icon path={mdiMusic} size={1} className="mr-2" />Music
          </li>
          <li className="hover:text-yellow-300 transition duration-300 flex items-center">
            <Icon path={mdiCurrencyUsd} size={1} className="mr-2" /> Earning
          </li>
          {renderContent()}
        </ul>
      </div>
    </div>
  );
};

export default DisplayView;
