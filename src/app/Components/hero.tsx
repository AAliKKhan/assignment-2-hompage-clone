

import React from 'react';
import Image from 'next/image';
import HeroSlider from './heroslider';

const Hero = () => {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <div className=" flex flex-col items-center text-center py-16 px-4">
        {/* Heading */}
        <h1 className="text-customBlue text-4xl md:text-5xl font-extrabold mb-6 max-w-4xl leading-tight">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-4xl leading-relaxed">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/img1.png" alt="Image 1" width={400} height={300} className="rounded-lg shadow-lg" />
          <Image src="/img2.png" alt="Image 2" width={400} height={300} className="rounded-lg shadow-lg" />
          <Image src="/img3.png" alt="Image 3" width={400} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Hero Slider */}
      <HeroSlider />
    </div>
  );
};

export default Hero;
