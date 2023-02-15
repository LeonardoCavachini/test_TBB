import { useEffect, useState } from 'react';
import { getProducts } from './service/api';
import {SectionContainer} from './components/sectionContainer';
import {Header} from './components/header';

function App() {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  
  const loadProducts = async() => {
    const productsResult = await getProducts()
    setProducts(productsResult)
  }

  const checkName = () => {
    const filtro = products.filter((produto: any) => produto.name.startsWith(productName))
    setProducts(filtro)
  }
  useEffect(() => {
    loadProducts()
  },[]);

  return (
    <SectionContainer>
      <Header onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setProductName(e.target.value);
      }} onClick={() => checkName()}/>
    </SectionContainer>
  )
}

export default App
