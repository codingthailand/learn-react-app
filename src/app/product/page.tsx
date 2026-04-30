'use client';

import AppFooter from "@/components/app-footer";

export default function Product() {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div>
            <h1>สินค้าทั้งหมด {products.length} รายการ</h1>
            <hr />
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name} - {product.id}</h2>
                        <p>ราคา: {product.price} บาท</p>
                        <button onClick={
                            () => {
                                alert(`คุณได้เลือกซื้อ ${product.name}`);
                            }
                        }>ซื้อสินค้า</button>
                        <hr />
                    </div>
                ))
            }
            <hr />
            <AppFooter title="Product" />
        </div>
    );
}