import React from "react";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import {CartProvider} from "@/contexts/cart-context";
import {SearchProvider} from "@/contexts/search-contex";
import {getCurrentUser} from "@/app/server/actions/auth";

export default async function RootLayoutPage({
                                                 children,
                                             }: Readonly<{ children: React.ReactNode }>) {

    const data = await getCurrentUser();
    return (
        <main className="w-full min-h-screen flex flex-col">
            <CartProvider>
                <SearchProvider>
                    <Header user={data.user}/>
                    <main
                        className="flex-grow mt-16 px-8 py-10 overflow-y-auto overflow-x-hidden flex items-center justify-center h-fit dark:bg-gray-700 ">
                        {children}
                    </main>
                    <Footer/>
                </SearchProvider>
            </CartProvider>
        </main>

    );
}