import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { InfoBubble } from '../components/infoBubble';
import { Btns } from '../components/btns';

const HomePage = ({ data }) => {
  return (
    <div className="h-mobile phone px-6 py-16 overflow-hidden relative rounded-2xl content justify-center items-start bg-gray-200 flex flex-col">
      <h1 className="font-bold text-3xl mb-10">Cześć, Igor!</h1>
      <div className="flex flex-col justify-center items-center self-center shadow-2xl p-10  rounded-lg">
        <div className="relative">
          <Img className="bag z-20" alt="awdawd" fixed={data.file.childImageSharp.fixed} />
          <div className="abs-center z-10 rounded-full bg-orangish w-44 h-44" />
        </div>
        <h2 className="font-bold text-2xl">
          #PosiłekDla<span className="text-red-700">Seniora</span>
        </h2>
        <p className="text-brownish text-center mt-6">Super, że chcesz się do nas przyłączyć i wspierać Seniorów! Zobacz ile udało się zdziałaś do tej pory.</p>
        <div className="flex justify-between relative w-full px-6 mt-6">
          <div className="divider" />
          <InfoBubble icon="🍴" text="posiłków" howMany="203,201" />
          <InfoBubble icon="👩‍🍳" text="wpłacających" howMany="1,084" />
        </div>
      </div>
      <Btns />
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "bag.png" }) {
      childImageSharp {
        fixed(width: 200, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
export default HomePage;
