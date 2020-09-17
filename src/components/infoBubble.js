import React from 'react';

export const InfoBubble = (props) => {
  return (
    <div className="z-10 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-16 h-16 bg-gray-300 rounded-full">
        <span className="text-2xl">{props.icon}</span>
      </div>
      <span className="mt-3 text-2xl text-red-700 font-bold">{props.howMany}</span>
      <span className="font-semibold text-brownish mt-1">{props.text}</span>
    </div>
  );
};
