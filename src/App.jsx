import './App.css';
import ProductList from './components/product-list/product-list';

import data from './data/products.json';

function App() {

  return (
    <>
      <h1>Exo 02</h1>
      <ProductList products={data} />
    </>
  );
}

export default App;
