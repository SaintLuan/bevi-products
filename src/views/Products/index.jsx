import Button from "@/components/Button";
import Title from "@/components/Title";

const Products = () => {
    return(
        <section className="page_content">
            <Title pageTitle="Produtos" />
            <Button btnColor="primary-01" btnStyle="lg solid">
                <a href="/products/create">Novo Produto</a>
            </Button>
        </section>
    );
}

export default Products;