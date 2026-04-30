import AppFooter from "@/components/app-footer";
import ProductList from "@/components/product-list";

export default function Product() {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div>
            <ProductList products={products} />
            <hr />
            <AppFooter title="Product" />
        </div>
    );
}