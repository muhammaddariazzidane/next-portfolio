import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Certificate = () => {
  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="container mx-auto px-8 lg:px-12">
      <h1 className="text-center my-20 text-4xl font-semibold text-black">My Certificate</h1>
      <div className="w-full flex justify-center items-center ">
        <MdChevronLeft onClick={SlideLeft} className="lg:w-12 lg:h-12 w-8 h-8 block left-0 absolute  rounded-full cursor-pointer z-10" />
        <div id={"slider"} className="w-full scrollbar-hide h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dicoding.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/cisco.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/pcap.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/skilvull.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/codefirst.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dea1.png" alt="/" width={300} height={30} />
          </div>
          <div className="inline-block relative p-2 cursor-pointer">
            <Image className="shadow-lg" src="/dea2.png" alt="/" width={300} height={30} />
          </div>
        </div>
        <MdChevronRight onClick={SlideRight} className="lg:w-12 lg:h-12 w-8 h-8 block right-0 absolute  rounded-full cursor-pointer z-1" />
      </div>
    </div>
  );
};

export default Certificate;
