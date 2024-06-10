import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";
import Swal from 'sweetalert2';

import styles from './ProductForm.module.scss';
import Title from "@/components/Title";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { beviApi } from "@/services/api";


const createProducSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.coerce.number(),
    status: z.coerce.number(),
    stock_quantity: z.coerce.number()
});

const ProductForm = ({action}) => {
    const [isShow, setIsShow] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const location = useLocation();
    const { state } = location;

    const { register, handleSubmit } = useForm({
        defaultValues:state ? {
            id: state.product.product.id,
            name: state.product.product.name,
            description: state.product.product.description,
            price: state.product.product.price,
            status: state.product.product.status,
            stock_quantity: state.product.product.stock_quantity,
        } : undefined,
        resolver: zodResolver(createProducSchema)
    });
    const onInvalid = (errors) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errors,
        });
    }

    function handleCreateProduct(data){
        if(state){
            data.id= state.product.product.id;
            beviApi.put('product/update', data).then((res) => {
                if(res.status == 200 && res.data.success == true){
                    Swal.fire({
                        icon: "success",
                        title: "Sucesso!",
                        text: "Produto editado com sucesso!",
                    });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Erro ao editar este produto... Tente novamente mais tarde",
                    });
                }
            }).catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Erro ao editar este produto... Tente novamente mais tarde",
                });
            });
        }else{
            beviApi.post('product/create', data).then((res) => {
                if(res.status == 200 && res.data.success == true){
                    Swal.fire({
                        icon: "success",
                        title: "Sucesso!",
                        text: "Produto cadastrado com sucesso!",
                    });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Erro ao cadastrar este produto... Tente novamente mais tarde",
                    });
                }
            }).catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Erro ao cadastrar este produto... Tente novamente mais tarde",
                });
            });
        }
    }

    useEffect(()=>{
        if(action == 'create'){
            setPageTitle(`Novo produto`);
        }else{
            if(action == 'edit'){
                setPageTitle(`Edição do produto ${state.product.product.name}`);
            }else{
                setPageTitle(`${state.product.product.name}`);
                setIsShow(true);
            }
        }
    },[]);


    return(
        <section className="page_content">
            <Title pageTitle={pageTitle} />

            <section className={`${styles.form_wrapper}`}>
                <form className={`${styles.form_bevi}`} noValidate onSubmit={handleSubmit(handleCreateProduct, onInvalid)} >
                    <aside>
                        <fieldset className="lg">
                            <label htmlFor="name">Nome do produto</label>
                            <input type="text" id="name" {...register('name')} placeholder="Produto Bevi 01" disabled={isShow} />
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
                        <textarea id="description" {...register('description')} placeholder="Insira aqui a descrição deste produto..." disabled={isShow}></textarea>
                    </fieldset>

                    <aside>
                        <fieldset>
                            <label htmlFor="price">Preço de venda</label>
                            <input type="text" id="price" {...register('price')} placeholder="48,89" disabled={isShow}/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="stock_quantity">Estoque disponível</label>
                            <input type="number" id="stock_quantity" {...register('stock_quantity')} placeholder="99" disabled={isShow} />
                        </fieldset>
                    </aside>       
                    
                    {
                        !isShow ? 
                            <footer className={`${styles.form_actions}`}>
                                <Button btnColor="warning" btnStyle="solid lg" fontSize="md" >
                                    Cancelar    
                                </Button> 

                                <Button btnColor="info" btnStyle="solid lg" fontSize="md" type="submit">
                                    Cadastrar    
                                </Button>    
                            </footer>      
                        :
                            <></>       
                    }
                </form>
                {/* // <h3>Produto não encontrado!</h3> */}
            </section>
        </section>
    );
}

export default ProductForm;