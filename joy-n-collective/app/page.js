"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import {products} from "../data/products";

export default function Home(){
 return <>
  <Header/>

  <section className="hero">
    <div className="heroContent">
      <div className="saleBadge">LIMITED TIME • UP TO 40% OFF SELECTED FINDS</div>
      <p className="eyebrow">CURATED FINDS. EVERYDAY ELEVATED.</p>
      <h1>Discover your next<br/>favorite find.</h1>
      <p>Thoughtfully selected fashion, beauty, gadgets and everyday essentials.</p>

      <div className="heroActions">
        <Link className="primary heroCTA" href="/shop">
          <span>SHOP THE COLLECTION</span><b>→</b>
        </Link>
        <Link className="secondary heroDeals" href="/shop?deal=true">
          VIEW TODAY'S DEALS <span>↗</span>
        </Link>
      </div>

      <div className="heroNote">
        <span>✦</span> Tap the collection button to explore our latest curated finds
      </div>
    </div>
  </section>

  <section className="promoStrip">
    <span>FREE SHIPPING ON SELECTED ORDERS</span>
    <span>•</span>
    <span>NEW FINDS ADDED REGULARLY</span>
    <span>•</span>
    <span>CURATED FOR MODERN LIVING</span>
  </section>

  <section className="intro">
    <p className="eyebrow">JOY N COLLECTIVE</p>
    <h2>Curated for modern living.</h2>
    <p>A premium collection of finds chosen to elevate your everyday.</p>
  </section>

  <section className="shop">
    <div className="sectionHead">
      <div><p className="eyebrow">SHOP</p><h2>Featured Finds</h2></div>
      <Link className="viewAll" href="/shop">VIEW ALL FINDS →</Link>
    </div>
    <div className="grid">{products.slice(0,8).map(p=><ProductCard p={p} key={p.id}/>)}</div>
  </section>

  <section className="discountBanner">
    <div><p className="eyebrow">SEASONAL OFFER</p><h2>Discover more. Spend less.</h2><p>Explore selected finds and limited-time offers.</p></div>
    <Link className="primary dark" href="/shop?deal=true">SHOP OFFERS →</Link>
  </section>

  <Footer/>
 </>
}
