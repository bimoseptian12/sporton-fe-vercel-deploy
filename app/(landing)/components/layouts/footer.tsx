import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate">
      <div className=" pt-14 container mx-auto flex justify-between text-white h-[320px] ">
        <div className="w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="sporton logo"
            width={127}
            height={30}
          ></Image>
          <p className="mt-6 text-lg font-light">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className=" grid grid-cols-2 w-105">
          <div className="flex flex-col gap-7">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Explorer Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex flex-col gap-7">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#FFFFFF] "></div>
      <div className=" flex justify-between py-4 container mx-auto text-white">
        <div className="">
          <p>SportsOn © 2025 All Rights Reserverd.</p>
        </div>
        <div className="grid grid-cols-2 w-105">
          <div className="flex">
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="">
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
