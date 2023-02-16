import { useEffect, useState } from 'react';
import { getProducts } from './service/api';
import {SectionContainer} from './components/sectionContainer';
import {Header} from './components/header';
import {NewsSection} from './components/newsletter';
import {SocialSection} from './components/socialSection';
import { Footer } from './components/footer';
import { Card } from './components/card';
import { Container } from './components/container';
import {Filter} from './components/filter/index';

function App() {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadProducts = async() => {
    const productsResult = await getProducts()
    setProducts(productsResult)
  }
  const filterHandle = () => {
    if(categories.length===0) {
      loadProducts()
      setOpen(false)
    }
    const filtro = products.filter((produto: any) => categories.includes(produto.category.name))
    setProducts(filtro)
    setOpen(false)
  }
  const checkName = () => {
    if (productName === '') {
      loadProducts()
    }
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
      }} onClick={() => checkName()} open={open} setOpen={setOpen}><Filter onClick={() => filterHandle()} categories={categories} setCategories={setCategories}/></Header>
      <Container>
        {products.map((elem: any, idx:number) => <Card key={idx} url={elem.images[0].asset.url} name={elem.name} alt={elem.images[0].alt}/>)}
      </Container>
      
      <NewsSection />
      <SocialSection />
      <Footer />
    </SectionContainer>
  )
}

export default App
