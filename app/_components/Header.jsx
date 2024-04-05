"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
    const { data } = useSession();

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleScrollToServices = () => {
        const popularBusinessesSection =
            document.getElementById("popular-businesses");
        if (popularBusinessesSection) {
            popularBusinessesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLogout = async () => {
        await signOut();
        window.location.href = "/";
    };

    return (
        <div
            className="py-5 px-5 md:px-16 shadow-md flex justify-between items-center
    "
        >
            <div className="flex items-center xl:gap-[480px] gap-24">
                <Link href="/" passHref>
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                </Link>
                <div className="md:flex items-center gap-6 hidden justify-center flex-grow">
                    <Link
                        href={"/"}
                        className="focus:outline-none focus:ring-1 focus:ring-offset-1 border border-white bg-gray-50 cursor-pointer px-6 py-3 font-semibold text-primary text-md leading-3 shadow-md rounded transition-colors hover:bg-sky-300 hover:text-zinc-700"
                    >
                        Home
                    </Link>
                    <button
                        onClick={handleScrollToServices}
                        className="focus:outline-none focus:ring-1 focus:ring-offset-1 border border-white bg-gray-50 cursor-pointer px-6 py-3 font-semibold text-primary text-md leading-3 shadow-md rounded transition-colors hover:bg-sky-300 hover:text-zinc-700"
                    >
                        Services
                    </button>
                    <Link
                        href={"/about"}
                        className="focus:outline-none focus:ring-1 focus:ring-offset-1 border border-white bg-gray-50 cursor-pointer px-6 py-3 font-semibold text-md text-primary leading-3 shadow-md rounded transition-colors hover:bg-sky-300 hover:text-zinc-700"
                    >
                        About
                    </Link>
                </div>
            </div>
            <div>
                {data?.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image
                                src={data?.user?.image}
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={"/mybooking"}>My Bookings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Button
                        onClick={() => signIn("descope")}
                        className="rounded-md"
                    >
                        Login / Register
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Header;
