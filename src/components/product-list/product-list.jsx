import Price from '../price/price';
import style from './product-list.module.css';

const ProductListItem = ({ name, price, isDiscount }) => (
    <article className={style.product}>
        <p className={style.name}>{name}</p>
        <p className={isDiscount ? style.isDiscount : ''}>
            <Price value={price} className={style.price} />{' '}
            {isDiscount && (
                <span>(Solde)</span>
            )}
        </p>
    </article>
);

const ProductList = ({ products }) => {

    const productsJSX = products.map(product => (
        <ProductListItem {...product} key={product.id} />
    ));

    return (
        <>
            <h2>Liste des products :</h2>
            {productsJSX}
        </>
    );
};


export default ProductList;