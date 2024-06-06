import { useEffect, useState } from "react";
import { beviApi } from "@/services/api";

import styles from './ProductsIndex.module.scss';

import Button from "@/components/Button";
import Title from "@/components/Title";
import { NavLink } from "react-router-dom";

const Products = () => {

    const [hasProducts, setHasProducts] = useState(false);
    const [products, setProducts] = useState([]);
    const [producMessage, setProductMesage] = useState("");

    useEffect(()=>{
        beviApi.post('product/list', {}).then((res) => {
            setProducts([]);
            if(res.status == 200 && res.data.success == true){
                setProducts(res.data.data);
                setHasProducts(true);
            }else{
                setProductMesage("Nenhum produto encontrado!");
                setHasProducts(false);
            }
        }).catch((err) => {
            setProductMesage(`Erro ao buscar produtos! <br> <span>Erro: ${err}</span>`);
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
                    <article className={`${styles.product_listing}`}>
                        <h2>Todos os produtos</h2>

                        <table className={`${styles.data_table}`}>
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

                                                <NavLink to={`/products/show/${product.id}`} state={{product: {product}}}>
                                                    <i className="uil uil-eye"></i>
                                                </NavLink>

                                                <NavLink to={`/products/edit/${product.id}`} state={{product: {product}}}>
                                                    <i className="uil uil-edit"></i>
                                                </NavLink>

                                                <NavLink to={`/products/delete/${product.id}`}><i className="uil uil-trash-alt"></i></NavLink>
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
                <article className={`${styles.product_listing}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: producMessage }} />
                </article>
            }
        </section>
    );
}

export default Products;