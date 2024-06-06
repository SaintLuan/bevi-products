import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver }  from "@hookform/resolvers/zod";

import styles from './ProductForm.module.scss';
import Title from "@/components/Title";
import Button from "@/components/Button";


const createProducSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.coerce.number(),
    status: z.coerce.number(),
    stock_quantity: z.coerce.number()
});

const ProductForm = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createProducSchema)
    });
    const onInvalid = (errors) => console.error(errors)

    function handleCreateProduct(data){
        console.log(data);
    }

    return(
        <section className="page_content">
            <Title pageTitle="Cadastro de produtos" />

            <section className={`${styles.form_wrapper}`}>
                <form className={`${styles.form_bevi}`} noValidate onSubmit={handleSubmit(handleCreateProduct, onInvalid)} >
                    <aside>
                        <fieldset className="lg">
                            <label htmlFor="name">Nome do produto</label>
                            <input type="text" id="name" {...register('name')} placeholder="Produto Bevi 01" />
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
                        <textarea id="description" {...register('description')} placeholder="Insira aqui a descrição deste produto..." ></textarea>
                    </fieldset>

                    <aside>
                        <fieldset>
                            <label htmlFor="price">Preço de venda</label>
                            <input type="text" id="price" {...register('price')} placeholder="48,89" />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="stock_quantity">Estoque disponível</label>
                            <input type="number" id="stock_quantity" {...register('stock_quantity')} placeholder="99" />
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
            </section>
        </section>
    );
}

export default ProductForm;