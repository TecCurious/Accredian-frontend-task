import React, { useState } from "react";
import { Button } from "./ui/button";
import ReferralModal from "./ReferralModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-custome-slate mx-4 sm:mx-8 md:mx-16 lg:mx-40 my-6 lg:my-10 rounded-lg relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[78vh] py-6 md:py-0">
        <div className="flex flex-col items-center md:items-start md:flex-row relative z-10 h-full">
          <div className="my-4 sm:my-8 md:my-12 lg:my-20 mx-4 sm:mx-6 lg:mx-8 flex gap-4 sm:gap-6 md:gap-10 lg:gap-14 flex-col text-center md:text-left">
            <div>
              <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold md:w-3/4 lg:w-2/3">
                Lets Learn & Earn
              </h2>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                Get a Chance to Win
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                  up-to
                </p>
                <span className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue">
                  Rs. 15,000
                </span>
              </div>
            </div>
            
          
            <div className="mt-4 md:mt-4 ">
              <Button 
                className="px-8 py-6 bg-custom-blue hover:bg-blue-600 text-lg md:text-xl " 
                onClick={() => setIsModalOpen(true)}
              >
                Refer Now
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-2 md:right-0 md:h-full">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-[41vw]"
            src="hero.png"
            alt=""
          />
        </div>
      </div>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;