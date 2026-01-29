import React from 'react';

import {BsSearch} from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import {FiHeart} from "react-icons/fi";
import {HiOutlineShoppingBag} from "react-icons/hi";

const HeaderMain = () => {
  return <div className="border-b border-gray-200 py-6">
        <div className="w-full px-4">
            <div className="mx-auto max-w-6xl">
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between sm:justify-start">
                        <div className="text-[24px] font-semibold tracking-tight">Omnify</div>
                    </div>

                    {/* Centered search (doesn't shift with left/right widths) */}
                    <div className="w-full sm:absolute sm:left-1/2 sm:w-[520px] sm:-translate-x-1/2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter any product name..."
                                className="h-10 w-full rounded-md border border-gray-200 bg-white px-4 pr-10 text-[13px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-accent"
                            />
                            <BsSearch
                                size={18}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                        </div>
                    </div>

                    <div className=" hidden lg:flex items-center justify-end gap-6 text-gray-900">
                        <button type="button" className="p-1">
                            <BiUser size={22} />
                        </button>

                        <button type="button" className="relative p-1">
                            <FiHeart size={22} />
                            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-medium text-white">
                                0
                            </span>
                        </button>

                        <button type="button" className="relative p-1">
                            <HiOutlineShoppingBag size={22} />
                            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-medium text-white">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
}

export default HeaderMain