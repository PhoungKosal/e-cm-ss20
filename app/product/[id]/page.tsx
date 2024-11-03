"use client";
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getProductID} from '@/app/server/actions/auth';
import ProductDetail from "@/components/ProductDetail";

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

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            {/*<Link href={'/product'}>Back</Link>*/}
            <ProductDetail image={data.image} title={data.title} rating={data.rating.count} price={data.price}/>
        </div>
    );
};

export default Page;
