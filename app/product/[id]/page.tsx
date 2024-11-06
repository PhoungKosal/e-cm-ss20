import React from 'react';
import ProductDetail from "@/components/ProductDetail";

interface PageProps {
    params: Promise<{ id: number }>;
}

export async function generateMetadata({params}: PageProps) {
    const {id} = await params;
    return {
        title: `Product Detail - ${id}`,
        description: "Product Detail",
    };
}

const DetailPage = async ({params}: PageProps) => {
    const {id} = await params;
    return (
        <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-full">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-full space-y-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product Detail</h2>
                    <div>
                        <ProductDetail id={id}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailPage;
