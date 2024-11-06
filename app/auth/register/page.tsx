import React from "react";
import Image from "next/image";
import image from "@/public";
import RegisterForm from "@/components/auth-form/register-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Register",
    description: "Register to your account",
}

export default async function RegisterPage() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden lg:flex items-center justify-center">
                <div className="w-1/2 h-auto">
                    <Image
                        src={image.logo}
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
            <RegisterForm/>
        </div>
    );
}
