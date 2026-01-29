import React from 'react'

import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="w-full px-4 py-3">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="header_top__icon_wrapper">
                        <BsFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsTwitter />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsInstagram />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsLinkedin />
                    </div>
                </div>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[12px] text-gray-500">
                    <strong className="font-semibold">FREE SHIPPING </strong> THIS WEEK ORDER OVER - $55
                </div>
                <div className="flex items-center gap-6 text-[14px] text-gray-900">
                    <select name="currency" id="currency" className="cursor-pointer bg-transparent outline-none text-gray-500 text-[12px] w-[70px]">
                        <option value="CAD $">CAD $</option>
                        <option value="USD $">USD $</option>
                        <option value="EUR €">EUR €</option>
                    </select>

                    <select name="language" id="language" className="cursor-pointer bg-transparent outline-none text-gray-500 text-[12px] w-[px]">
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeaderTop;