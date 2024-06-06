import Button from "@/components/Button";
import Title from "@/components/Title";
import { beviApi } from "@/services/api";
import { useEffect, useState } from "react";

const Products = () => {

    const [hasProducts, setHasProducts] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        beviApi.post('product/list', {}).then((res) => {
            setProducts([]);
            if(res.status == 200 && res.data.success == true){
                console.log(res.data.data);
                setProducts(res.data.data);
                setHasProducts(true);
            }else{
                console.log("No products");
                setHasProducts(false);
            }
        }).catch((err) => {
            console.log("AXIOS ERROR: ", err);
            setHasProducts(false);
        });
        
    },[]);
    return(
        <section className="page_content">
            <Title pageTitle="Produtos" />
            <Button btnColor="primary-01" btnStyle="lg solid">
                <a href="/products/create">Novo Produto</a>
            </Button>
            
            {
                hasProducts ?
                    <article>
                        <h2>Todos os produtos</h2>

                        <table>
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Produto</td>
                                    <td>Quantidade disponível</td>
                                    <td>Preço de venda</td>
                                    <td>Status</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map(product =>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.stock_quantity}</td>
                                            <td>R$ {product.price}</td>
                                            <td>{product.status}</td>
                                            <td>
                                                <a href={`products/edit/${product.id}`}><i className="uil uil-edit"></i></a>
                                                <a href={`products/delete/${product.id}`}><i className="uil uil-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td>#</td>
                                    <td>Produto</td>
                                    <td>Quantidade disponível</td>
                                    <td>Preço de venda</td>
                                    <td>Status</td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>
                : 
                <article>
                    <h2>Nenhum produto cadastrado</h2>
                </article>
            }
        </section>
    );
}

export default Products;