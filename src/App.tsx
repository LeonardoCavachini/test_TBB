import { useState } from 'react';
import {SectionContainer} from './components/sectionContainer';
import {Header} from './components/header';

function App() {
  const [productName, setProductName] = useState('');
  console.log(productName)
  return (
    <SectionContainer>
      <Header onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setProductName(e.target.value);
      }}/>
    </SectionContainer>
  )
}

export default App
