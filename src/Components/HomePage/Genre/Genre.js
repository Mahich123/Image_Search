import React from "react";

const Genre = () => {
  return (
  <div className="container mx-auto lg:w-[95vw]">
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 sm:p-20">

    <div className="p-6 rounded-[10px] ">
      <p className="font-epi text-[#BE9548] xs:text-[14px] sm:text-[larger] md:text-[1.45rem]">Popular Genres</p>
        <h2 className="font-epi text-[#303B4C] text-[20px] font-bold  sm:text-[1.8rem] xs:text-[17px] bx:text-[20px]  sm:leading-[initial] md:text-[2rem] xl:text-[34px]">Choose your genres</h2>
        <button className="bg-[#BE9548] text-white font-epi text-[small] my-[2.5rem] py-1 px-3 sm:px-7 sm:py-[0.70rem] rounded inline-flex items-center ">
            <span>All Genres</span>
        </button>
    </div>
    <div className="p-6 bg-card1 bg-cover rounded-[10px] flex flex-col justify-center">
        <h3 className="font-epi font-medium text-white my-[1rem] md:text-[x-large]">Models</h3>
        <p className="font-epi text-white text-[10px]  break-all md:text-[13px] xl:w-[20vw] xl:text-[12px]">Explore the latest trends in fashion, beauty, and lifestyle.</p>
        <p className="font-epi text-[11px] my-[1.5rem] text-white">Read More</p>
    </div>

    <div className="p-6 bg-card2 bg-cover rounded-[10px] flex flex-col justify-center">
        <h3 className="font-epi font-medium text-white text-[16px] my-[0.5rem] md:text-[x-large]">Landscape</h3>
        <p className="font-epi text-white text-[10px] my-[0.3rem] md:text-[13px] xl:w-[20vw] xl:text-[12px]">Explore the wide variety of landscapes from all over the world, including mountains, forests, deserts, and more.</p>

        <p className="font-epi text-white text-[11px] my-[1.5rem] ">Read More</p>   
    </div>

    <div className="p-6 bg-card3 bg-cover rounded-[10px] flex flex-col justify-center">
        <h3 className="font-epi font-medium text-white text-[16px] my-[0.5rem] md:text-[x-large]">Random</h3>
        <p className="font-epi text-white text-[10px]  my-[0.3rem] md:text-[13px] xl:w-[20vw] xl:text-[12px]">Explore some random stills and wallpapers.</p>
        <p className="font-epi text-white text-[11px] my-[1.5rem] ">Read More</p>
    </div>

    <div className="p-6 bg-card4 bg-cover rounded-[10px] flex flex-col justify-center">
        <h3 className="font-epi font-medium text-white text-[16px] my-[0.5rem] md:text-[x-large]">Branding</h3>
        <p className="font-epi text-white text-[10px]  my-[0.3rem] md:text-[13px] xl:w-[20vw] xl:text-[12px]">Explore images for businesses and individuals.</p>
        <p className="font-epi text-white text-[11px] my-[1.5rem]">Read More</p>
    </div>

    <div className="p-6 bg-card5 bg-cover rounded-[10px] flex flex-col justify-center">
        <h3 className="font-epi font-medium text-white text-[16px] my-[0.5rem] md:text-[x-large]">Events</h3>
        <p className="font-epi text-white text-[10px]  my-[0.3rem] md:text-[13px] xl:w-[20vw] xl:text-[12px]">Explore everything from corporate events to weddings.</p>
        <p className="font-epi text-white text-[11px] my-[1.5rem] ">Read More</p>
    </div>
  </div>
</div>
  
  );
};

export default Genre;
