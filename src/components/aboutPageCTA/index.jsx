import React from 'react';
import { ReactComponent as ImageIcon } from '../../assets/imageIcon.svg';
const AboutPageCTA = () => {
  return (
    <div className="text-center mx-8 xl:pt-56  sm:pt-64  pt-20 space-y-6 ">
      <ImageIcon className="mx-auto" />

      <h2 className="text-blue-700 text-2xl">
        Share your story, help others and get help from others
      </h2>
      <p className="mx-auto lg:px-40 sm:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa quo
        obcaecati fuga adipisci? Pariatur perspiciatis reiciendis exercitationem
        expedita, quam dolor vitae suscipit dolore, minima adipisci qui est unde
        dolorem.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Sign Up
      </button>
    </div>
  );
};

export default AboutPageCTA;
