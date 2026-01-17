"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { use, useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  return (
    <header className="">
      <div className="flex justify-between container items-center mx-auto h-[79px]">
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        ></Image>

        <nav
          className="flex gap-44 font-[500] font-medium
      "
        >
          <Link
            href="#"
            className="relative after:content-[] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-center text-white ">
              3
            </div>
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};
export default Header;
