'use client'

import { useQuery } from "@tanstack/react-query";
import ProductList, { Product } from "./product-list";

export default function AppProduct() {
    const { isPending, error, data } = useQuery<Product[]>({
        queryKey: ['productData'],
        queryFn: () =>
        fetch('https://backend.codingthailand.com/v2/products').then((res) =>
            res.json(),
        ),
        retry: 2,
    });

    if (isPending) return <div>Loading...</div>;

    if (error) return <div className="text-red-500">เกิดข้อผิดพลาด โปรดลองใหม่: {error.message}</div>;

    return (
        <>
            {/* <p>{JSON.stringify(data)}</p> */}
            <ProductList products={data} />
        </>
    );
}