import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";

import styles from './ProductForm.module.scss';
import Title from "@/components/Title";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { beviApi } from "@/services/api";


const createProducSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.coerce.number(),
    status: z.coerce.number(),
    stock_quantity: z.coerce.number()
});

const ProductForm = ({action}) => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createProducSchema)
    });
    const onInvalid = (errors) => console.error(errors)

    function handleCreateProduct(data){
        console.log(data);
    }

    const [product, setProduct] = useState({});
    const [productFounded, setProductFounded] = useState({});
    const [isShow, setIsShow] = useState(false);
    useEffect(()=>{
        if(action != 'create'){
            const productId = 150;
            beviApi.get(`product/read?id=${productId}`).then((res) => {
                setProduct({});
                if(res.status == 200 && res.data.success == true){
                    setProduct(res.data.data);
                    setProductFounded(true);
                }else{
                    console.log("No products");
                    setProductFounded(false);
                }
            }).catch((err) => {
                console.log("AXIOS ERROR: ", err);
                setProductFounded(false);
            });

            if(action == 'show'){
                setIsShow(true);
            }
        }else{
            setProductFounded(true);
        }
    },[]);

    return(
        <section className="page_content">
            <Title pageTitle="Cadastro de produtos" />

            <section className={`${styles.form_wrapper}`}>
                {
                    productFounded ?
                        <form className={`${styles.form_bevi}`} noValidate onSubmit={handleSubmit(handleCreateProduct, onInvalid)} >
                            <aside>
                                <fieldset className="lg">
                                    <label htmlFor="name">Nome do produto</label>
                                    <input type="text" id="name" {...register('name')} value={action!='create' ? product.name : ''} placeholder="Produto Bevi 01" disabled={isShow} />
                                </fieldset>

                                <fieldset className="sm">
                                    <label htmlFor="status">Status do produto</label>
                                    <select id="status" {...register('status')}>
                                        <option value="1">Ativo</option>
                                        <option value="0">Inativo</option>
                                    </select>
                                </fieldset>
                            </aside>

                            <fieldset>
                                <label htmlFor="description">Descrição do produto</label>
                                <textarea id="description" {...register('description')} placeholder="Insira aqui a descrição deste produto..." disabled={isShow}>{action!='create' ? product.description : ''}</textarea>
                            </fieldset>

                            <aside>
                                <fieldset>
                                    <label htmlFor="price">Preço de venda</label>
                                    <input type="text" id="price" {...register('price')} value={action!='create' ? product.price : ''} placeholder="48,89" disabled={isShow}/>
                                </fieldset>

                                <fieldset>
                                    <label htmlFor="stock_quantity">Estoque disponível</label>
                                    <input type="number" id="stock_quantity" {...register('stock_quantity')} value={action!='create' ? product.stock_quantity : ''} placeholder="99" disabled={isShow} />
                                </fieldset>
                            </aside>       

                            <footer className={`${styles.form_actions}`}>
                                <Button btnColor="warning" btnStyle="solid lg" >
                                    Cancelar    
                                </Button> 

                                <Button btnColor="info" btnStyle="solid lg" type="submit">
                                    Cadastrar    
                                </Button>    
                            </footer>             
                        </form>
                    :
                        <h3>Produto não encontrado!</h3>
                }
            </section>
        </section>
    );
}

export default ProductForm;