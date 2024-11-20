import React from "react";
import Product from "@/public";
import Image from "next/image";
import ProductPage from "@/components/client-component/product-page";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Product",
    description: "Product Page",
}
const HomePage = () => {
    return (
        <div className=" ">
            <section className="w-full flex flex-col items-center justify-center">
                <Image src={Product.headphones} alt="logo"/>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">Customers also
                    bought</h2>
            </section>
            <div
                className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 justify-center items-center">
                <ProductPage/>
            </div>
        </div>

    );
};
export default HomePage;

