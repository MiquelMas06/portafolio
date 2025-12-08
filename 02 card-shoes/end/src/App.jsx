import './App.css'
import {data} from './data/data.js';
import Card from './assets/components/Card.jsx';
import Header from './assets/components/Header.jsx';

export default function App(){

  const products = data.map(product => <Card key={product.id} {...product} />)

  return(
    <>
      <Header/>
      <main>
        {products}
      </main>
    </>
  )
}