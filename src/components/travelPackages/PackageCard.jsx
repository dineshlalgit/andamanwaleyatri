/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import PackageModal from "./PackageModal";
import { CheckCircle } from 'lucide-react'

const PackageCard = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`mt-5 relative filter w-full sm:w-[90%] md:w-[45%] lg:w-[31%] xl:w-[25.5%] font-roboto rounded-sm shadow-lg shadow-[rgba(0,0,0,0.2)] items-stretch pb-12 ${isModalOpen ? "overflow-hidden" : ""
        }`}
      onClick={openModal}
    >
      <img
        className="rounded-t-sm min-h-[256px]"
        src={item?.image}
        alt="Card image"
        id="travelpackages1"
        height={2562}
        width={3840}
      />
      <div className="flex flex-col w-full p-5 gap-y-3">
        {item?.totalCost ? (
          <h5 className="font-bold text-xl tracking-wider">
            {item?.duration}
          </h5>
        ) : (
          <h5 className="text-center font-bold text-xl tracking-wider">
            {item?.name}
          </h5>
        )}
        {item.totalCost ? (
          <>
            {/* <p className="text-center font-montserrat line-through">
              {item?.totalCost}
            </p> */}
            {/* <p className="text-center font-montserrat">
              {item?.discountedCost}
            </p> */}
          </>
        ) : (
          <p className="font-montserrat">
            Total : {item?.duration}
          </p>
        )}
        {item?.description?.map((desc, index) => (
          <div key={index} className="flex gap-2 font-montserrat text-[#212529]">
            <div className="min-w-6"><CheckCircle size='16' /></div>
            <span>{desc}</span>
          </div>
        ))}
        {/* <p className="text-center font-montserrat text-[#212529]">
          {item?.description}
        </p> */}
        <p className="text-center mt-auto">
          <small className="text-gray-400">Last updated 3 mins ago</small>
        </p>

        <p className="absolute bottom-4 bg-gradient-to-tl from-[#ffa399] to-[#f73b3b] font-medium left-0 w-full p-2 text-center"><a href="tel:7063516120">₹ On Request /-</a></p>
      </div>

      {isModalOpen && <PackageModal item={item} closeModal={closeModal} />}
    </div>
  );
};

export default PackageCard;
