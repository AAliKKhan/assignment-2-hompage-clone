import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden text-center">
      <img 
        src={imageSrc} 
        alt="Card Image" 
        className="w-full object-cover h-40"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
