import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { InfoBubble } from '../components/infoBubble';
import { Btns } from '../components/btns';
import { PersonBubble } from '../components/personBubble';

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div className="h-mobile phone px-6 py-16 overflow-hidden relative rounded-2xl content justify-center items-start bg-gray-200 flex flex-col">
      <h1 className="font-bold text-3xl mb-10">Cześć, Igor!</h1>
      <div className="flex flex-col relative overflow-x-hidden overflow-y-hidden justify-center items-center self-center shadow-2xl p-10  rounded-lg">
        <div className="absolute upper-bubbles">
          <PersonBubble emoji="😍" />
          <PersonBubble fixedImg={data.man1.childImageSharp.fluid} bg="bg-yellow-200" />
          <PersonBubble emoji="✨" />
          <PersonBubble fixedImg={data.man2.childImageSharp.fluid} bg="bg-blue-200" />
          <PersonBubble emoji="😳" />
        </div>
        <div className="absolute middle-bubbles">
          <PersonBubble className="col-start-1 col-end-2" fixedImg={data.man3.childImageSharp.fluid} bg="bg-green-200" />
          <PersonBubble className="col-start-2 col-end-3" emoji="😊" />
          <PersonBubble className="col-start-6 col-end-7" emoji="💗" />
          <PersonBubble className="col-start-7 col-end-8" fixedImg={data.lady1.childImageSharp.fluid} bg="bg-teal-200" />
        </div>
        <div className="absolute lower-bubbles">
          <PersonBubble className="col-start-1 col-end-2" fixedImg={data.lady1.childImageSharp.fluid} bg="bg-red-200" />
          <PersonBubble className="col-start-4 col-end-5" fixedImg={data.man3.childImageSharp.fluid} bg="bg-purple-200" />
        </div>
        <div className="relative mt-10">
          <Img className="bag z-20" alt="awdawd" fixed={data.bag.childImageSharp.fixed} />
          <div className="abs-center z-10 rounded-full bg-orangish w-40 h-40 mt-2" />
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
    bag: file(relativePath: { eq: "bag.png" }) {
      childImageSharp {
        fixed(width: 175, height: 225) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    man1: file(relativePath: { eq: "man1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    man2: file(relativePath: { eq: "man2.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    man3: file(relativePath: { eq: "man3.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    lady1: file(relativePath: { eq: "lady1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
export default HomePage;
