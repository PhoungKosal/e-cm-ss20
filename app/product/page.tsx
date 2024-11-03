"use client";
import React from "react";
import Product from "@/public";
import Card from "@/components/Card";
import {getAllUsers} from "@/app/server/actions/auth";
import {useQuery} from "@tanstack/react-query";
import {ProductType} from "@/types";
import Image from "next/image";

const HomePage = () => {
    const {data, error, isLoading} = useQuery<ProductType[]>({
        queryKey: ['products'],
        queryFn: getAllUsers
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;
    console.log(data);
    return (

        <div className="mx-auto max-w-2xl  sm:px-0 sm:py-0 lg:max-w-7xl lg:px-8 lg:py-16">
            <section>
                <Image src={Product.headphones} alt="loog"/>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">Customers also
                    bought</h2>
            </section>
            <div
                className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 justify-center items-center">
                {data?.map((item) => (
                    <div className="flex justify-center items-center" key={item.id}>
                        <Card
                            link={item.id}
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            rating={item.rating.count}
                            price={item.price}
                            offer="BUY 1 GET 1"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};
export default HomePage;


