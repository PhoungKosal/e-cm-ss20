"use client";
import React from "react";
import Image from "next/image";
import image from "@/public";
import {Menu, ShoppingBag} from 'lucide-react';
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import SheetForm from "@/components/SheetDemo";
import Link from "next/link";
import {useCartContext} from "@/contexts/cart-context";
import AccountInfo from "@/components/accoung-info";
import {userType} from "@/types";
import {useQuery} from "@tanstack/react-query";
import {ModeToggle} from "@/components/togle-dark-mode";
import {getAllCategories} from "@/app/server/actions/product";
import {Search} from "@/components/search-product";
import {logoutUser} from "@/app/server/actions/auth";

export default function Header({user}: { user: userType }) {
    const {itemQuantity, cart} = useCartContext();
    const [isLogin, setIsLogin] = React.useState(true);
    React.useEffect(() => (
        setIsLogin(!!user)
    ), [user]);
    return (
        <header
            className=" w-screen bg-gray-50 border-b text-black py-3 fixed top-0 left-0  z-50 shadow-md dark:bg-slate-700">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
                <div className="lg:hidden">
                    <SheetForm id="1" title={<Image src={image.tinh_serey}
                                                    width={150}
                                                    height={80}
                                                    alt="logo"
                                                    className="object-contain mx-auto"/>}
                               description="welcome to ss20 store"
                               Trigger={<Menu size={24} className="dark:text-white"/>}
                               form={<SideBarSearch/>}
                               side="left"
                               footer="sfjlsdjflkjfdsjlk"/>
                </div>
                <div className="flex-shrink-0">
                    <Link href="/product">
                        <Image
                            src={image.tinh_serey}
                            width={150}
                            height={80}
                            alt="logo"
                            className="object-contain mx-auto"
                        />
                    </Link>
                </div>
                <div className="w-[50%] lg:block hidden">
                    <Search/>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <div className="dark:text-white">
                        <ModeToggle/>
                    </div>
                    <Link href="/product/cart"
                          className="relative">
                        <ShoppingBag size={24}
                                     className="cursor-pointer transform hover:scale-110 transition-transform duration-200 text-blue-800 dark:text-white"/>
                        {cart && (<span
                            className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{itemQuantity}</span>)}
                    </Link>
                    {isLogin ? (<AccountInfo trigger={<Avatar>
                        <AvatarFallback
                            className="dark:bg-white dark:text-gray-800">{user?.full_name[0]}</AvatarFallback>
                    </Avatar>} label="My Account" item3="Logout" action={() => logoutUser()}/>) : (
                        <Link href={'/auth/login'}>Login</Link>)}
                </div>
            </div>
        </header>
    );
}


const SideBarSearch = () => {
    const {data} = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    });
    return (
        <div className="space-y-8">
            <Search/>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col justify-center items-center space-y-5">
                    {data}
                </div>
                <div className="flex flex-col justify-center items-center space-y-5">
                </div>
            </div>
        </div>
    )
}
export {SideBarSearch};