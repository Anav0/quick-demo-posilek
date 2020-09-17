import React from 'react';
import HouseIcon from '../assets/house.svg';
import UserIcon from '../assets/user.svg';
import PlusIcon from '../assets/plus.svg';

export const Btns = () => {
  const size = '16';
  const btnSize = `flex justify-center items-center w-10 h-10 rounded-full w-${size} h-${size}`;
  const iconStyle = `h-auto`;
  return (
    <div className="flex justify-evenly w-full mt-12">
      <button className={`scale-anim ${btnSize}`}>
        <HouseIcon className={`w-10 ${iconStyle} svg-gray`} />
      </button>
      <button className={`scale-anim bg-red-700 glow ${btnSize}`}>
        <PlusIcon className={`w-10 ${iconStyle} svg-white`} />
      </button>
      <button className={`scale-anim ${btnSize}`}>
        <UserIcon className={`w-10 ${iconStyle} svg-gray`} />
      </button>
    </div>
  );
};
