"use client";
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getProductID} from '@/app/server/actions/auth';
import ProductDetail from "@/components/ProductDetail";
import SpinLoading from "@/app/product/loading";
import {useCartContext} from "@/contexts/cart-context";
import {CartItem} from "@/types";

interface PageProps {
    params: Promise<{ id: number }>;
}

const Page: React.FC<PageProps> = ({params}) => {
    const {id} = React.use(params);
    const {data, error, isLoading} = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductID(id),
        enabled: !!id,
    });

    const cartItems: CartItem = {
        id: id,
        name: data?.title,
        price: data?.price,
        quantity: 1,
        imageUrl: data?.image,
    }
    const {addItem} = useCartContext();

    if (isLoading) {
        return <SpinLoading/>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <ProductDetail image={data?.image} title={data?.title} rating={data?.rating.count}
                           price={data?.price}
                           onAddToCart={() => addItem(cartItems)}/>
        </div>
    );
};

export default Page;
