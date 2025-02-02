import React from 'react';
import useSWR from "swr";
import { fetchApiWithSanity } from '../../../sanity';
import { sanityImageUrlFor } from '../../../sanity';

const FlowerContainer = () => {
    const { data: flowers, error } = useSWR(
        `*[_type == "flower"]  | order(order asc){
            mainImage,
            pricePerCent,
            title,
            price,
            text
        }`,
        fetchApiWithSanity
    );

    console.log("Fetched flowers Data:", flowers); 

    if (error) return <p className="text-center">Failed to load flowers.</p>;
    if (!flowers || !Array.isArray(flowers) || flowers.length === 0) {
        return <p className="text-center">No flowers available.</p>;
    }

    return <Tulip flowers={flowers} />;
};

const Info = ({ mainImage, pricePerCent, title, price, text, titleSize = "text-[24px]", titleColor = "text-gray-900" }) => {
  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-full">
        <img 
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-125" 
          src={mainImage?.asset ? sanityImageUrlFor(mainImage.asset) : "/placeholder.jpg"}  
          alt={title} 
        />
      </div>

      <div className="absolute top-[10%] left-[5%] sm:top-[25px] sm:left-[20px] md:top-[30px] md:left-[40px] lg:top-[45px]">
        {pricePerCent && (
          <p className="text-[#ed59a0] text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            {pricePerCent}% Off
          </p>
        )}

        <h1 className={`font-bold ${titleSize} ${titleColor}`}>
          {title}    
        </h1>

        {price && (
          <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px]">
            Starting At ${price}.00
          </p>
        )}

        {text && (
          <p className="mt-2 text-[18px] tracking-[4.3px] text-gray-700">
            {text}
          </p>
        )}

        <i className="ri-arrow-right-circle-line text-2xl sm:text-3xl"></i>
      </div>
    </div>
  );
};

const Tulip = ({ flowers }) => {
  return (
    <div className='pt-[100px] pb-[80px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-5 items-stretch">
        <div className="lg:flex sm:grid">
          {flowers.length > 0 && <Info {...flowers[0]} titleSize="text-[55px]" titleColor="text-[#ed59a0]" />}
        </div>

        <div className="grid gap-4 md:gap-5 lg:gap-5">
          {flowers.length > 1 ? <Info {...flowers[1]} titleSize="text-[28px]" titleColor="text-[black]" /> : null}
          {flowers.length > 2 ? <Info {...flowers[2]} titleSize="text-[24px]" titleColor="text-[black]" /> : null}
        </div>
      </div>
    </div>
  );
};

export default FlowerContainer;
