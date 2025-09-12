import React from "react";

export default function Header() {
  return (
    <header className="bg-[#ff5200] ">
      {/* Logo */}
      <div className="flex items-center justify-between px-40 py-3 ">
        <img
          className="h-10 w-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy Logo"
        />

        {/* Navigation Links */}
        <nav className="flex gap-7 text-white font-medium  py-3 mt-2 text-center text-base items-center ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/corporate/"
            className="hover:underline"
          >
            Swiggy Corporate
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://partner.swiggy.com/login#/swiggy"
            className="hover:underline"
          >
            Partner With Us
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/mobile"
            className="hover:underline border-2 border-white px-4 py-3 rounded-xl "
          >
            Get The App
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/login"
            className="hover:underline bg-black px-6 py-3 rounded-xl "
          >
            Sign In
          </a>
        </nav>
      </div>

      <div className="pt-16 pb-8 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <img
          className="h-110 w-60 absolute top-0 right-0 "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
        <div className=" flex text-6xl text-white font-bold  max-w-[60%] justify-center text-center container m-auto ">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
      </div>

      <div className=" flex max-w-[70%] container justify-center items-center mx-auto gap-4 mt-5 pb-5">
        <input
          className="bg-white px-2 py-4 rounded-2xl text-gray-900 text-2xl w-[40%] font-medium"
          type="text"
          placeholder="Delhi, India"
        />
        <input
          className="bg-white px-2 py-4 rounded-2xl  text-gray-900 text-2xl w-[55%] font-medium"
          type="text"
          placeholder="Search for Restaurant, item or more"
        />
      </div>

      <div className="flex container max-w-[70%]  justify-center items-center mx-auto gap-4 mt-5  ">
        <a href="https://www.swiggy.com/restaurants">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt=""
          />
        </a>

        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt=""
          />
        </a>

        <a href="https://www.swiggy.com/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
}
