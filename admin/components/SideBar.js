import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgProfile } from 'react-icons/cg';
import { GiCardRandom } from 'react-icons/gi';
const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm mt-0">
        <div className="flex flex-col">
            <Link href="/">
            <div className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center bg-primary  text-white font-bold transition-colors`}>
                <div>
                    <p>Categories</p>
                </div>
            </div>
            </Link>
            <Link href="/marketplace/streetwalker">
            <div className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/marketplace/streetwalker"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>StreetWalker</p>
                </div>
            </div>
            </Link>
            <Link href="/marketplace/wall">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/marketplace/wall"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Wall</p>
                </div>
            </div>
            </Link>
            <Link href="/marketplace/hwate">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/marketplace/hwate"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Hwate</p>
                </div>
            </div>
            </Link>
            <Link href="/skull">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/billing"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Skull</p>
                </div>
            </div>
            </Link>
            <Link href="/principles">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/billing"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Principles</p>
                </div>
            </div>
            </Link>
            <Link href="/lens">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/billing"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Lens</p>
                </div>
            </div>
            </Link>
            <Link href="/twigs">
            <div
                className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                router.pathname == "/billing"
                    ? "bg-primary text-gold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
            >
                <div>
                    <p>Twigs</p>
                </div>
            </div>
            </Link>
        </div>
        <div className="">
            <Link href="/marketplace/profile">
                <div
                    className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                    router.pathname == "/marketplace/profile"
                        ? "bg-primary text-gold"
                        : "text-primary hover:bg-primary hover:text-white"
                    }`}
                >
                    <div className="flex leading-5">
                        <CgProfile className="text-[20px]"/><p className="pl-2">Membership</p>
                    </div>
                </div>
            </Link>
            <Link href="/marketplace/mynfts">
                <div
                    className={`pl-6 py-3   text-center cursor-pointer border border-brown flex items-center font-bold transition-colors ${
                    router.pathname == "/marketplace/mynfts"
                        ? "bg-primary text-gold"
                        : "text-primary hover:bg-primary hover:text-white"
                    }`}
                >
                    <div className="flex leading-5">
                        <GiCardRandom className="text-[20px]"/><p className="pl-2">Minted NFTS</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
