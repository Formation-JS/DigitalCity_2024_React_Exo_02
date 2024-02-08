const defaultPrice = 'EUR';

/**
 * Affichage du prix formaté
 * @param {{value: number, currency: defaultPrice|'USD'|'JPY', className:string}} props 
 * @returns {JSX.Element}
 */
const Price = ({ value, currency, className }) => {

    const formattedValue = value.toLocaleString(undefined, {
        style: 'currency',
        currency
    });

    return <span className={className}>{formattedValue}</span>;
};

Price.defaultProps = {
    currency: defaultPrice,
    className: ''
};

export default Price;