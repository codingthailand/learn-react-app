'use client';

type Product = {
    id: number;
    name: string;
    price: number;
}

type ProductListProp = {
    products: Product[]
}

export default function ProductList({ products }: ProductListProp) {
    return (
        <>
            <h1 style={{ color: "green", fontSize: "1.5rem" }}>สินค้าทั้งหมด {products.length} รายการ</h1>
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
        </>
    );
}