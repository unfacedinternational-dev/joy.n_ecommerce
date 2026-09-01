import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import {products} from "../../data/products";

export default function NewArrivals(){
 const newest=[...products].slice(-8).reverse();
 return <>
  <Header/>
  <main className="shop page">
   <div className="pageTitle">
    <p className="eyebrow">JUST DROPPED</p>
    <h1>New Arrivals</h1>
    <p>Freshly curated finds for your collection.</p>
   </div>
   <div className="grid">{newest.map(p=><ProductCard p={p} key={p.id}/>)}</div>
  </main>
  <Footer/>
 </>
}
