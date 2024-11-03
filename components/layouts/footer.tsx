import React from "react";
import Image from "next/image";
import Logo from "@/public";
import font from "../../app/fonts";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div
                className="container mx-auto py-4 xl:px-40 flex flex-col md:flex-row justify-between items-center md:items-start">
                {/* Left section: Logo and description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
                    <Image
                        src={Logo.tinh_serey}
                        width={200}
                        height={100}
                        alt="logo"
                        className="object-contain"
                    />
                    <p className={font.koulen.className}>
                        ទីញទំនិញដោយស៉េរី នឹង​​សុវត្តិភាពជាមួយយើង
                    </p>
                </div>

                {/* Right section: Address and contact info */}
                <div className="text-center md:text-right">
                    <h4 className={font.koulen.className}>ទំនាក់ទំនង</h4>
                    <p className={font.inter.className}>
                        setec institute, ផ្លូវ ១៧៨, សង្កាត់បឹងកក់, ខណ្ឌចំការមន,
                        រាជធានីភ្នំពេញ
                    </p>
                    <p className="text-sm">012 1111 2222 | tinhserey@gmail.com</p>
                </div>
            </div>

            {/* Divider line */}
            <div className="border-t border-gray-600 mt-6"></div>

            {/* Bottom section: Copyright */}
            <div className="container mx-auto px-4 text-center mt-4">
                <p className="text-sm">
                    Copyright © 2024 TinhSerey. All rights reserved
                </p>
            </div>
        </footer>
    );
}
