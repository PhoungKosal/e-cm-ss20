import React from "react";
import Image from "next/image";
import image from "@/public";
import {Input} from "../ui/input";
import {Menu, ShoppingBag} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import SheetForm from "@/components/SheetDemo";
// import {SelectDemo} from "../Select";

export default function Header() {
    return (
        <header className="bg-white border-b text-black py-3 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
                <div className="lg:hidden">
                    <SheetForm id="1" title={<Image src={image.tinh_serey}
                                                    width={150}
                                                    height={80}
                                                    alt="logo"
                                                    className="object-contain mx-auto"/>}
                               description="welcome to ss20 store"
                               Trigger={<Menu size={24}/>}
                               form={<Input placeholder="Search..."/>}
                               side="left"
                               footer="skdjfkdsjkfj"/>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={image.tinh_serey}
                        width={150}
                        height={80}
                        alt="logo"
                        className="object-contain mx-auto"
                    />
                </div>
                <div className="w-[50%] lg:block hidden">
                    <Input
                        placeholder="Search..."
                    />
                </div>
                <div className="flex items-center justify-center space-x-3">
                    <ShoppingBag size={24}/>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
