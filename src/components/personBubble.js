import React from 'react';
import Img from 'gatsby-image';

export const PersonBubble = (props) => {
  return (
    <div className={`flex justify-center items-center w-16 h-16 border-gray-500 border rounded-full ${props.className} ${props.fixedImg ? props.bg : ''}`}>
      {props.emoji ? <span className="text-2xl">{props.emoji}</span> : <Img fluid={props.fixedImg} className="rounded-full w-full h-full" />}
    </div>
  );
};
