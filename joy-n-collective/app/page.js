"use client";
import {useEffect,useState} from "react";
import "./style.css";
const products=[
["Luna Tote","Accessories","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80","₱1,490"],
["Aura Wireless Headphones","Gadgets","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80","₱2,490"],
["Silk Glow Set","Beauty","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80","₱890"],
["Minimal Watch","Accessories","https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80","₱1,990"],
["Modern Lounge Chair","Home & Living","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80","₱4,990"],
["Essential Sneakers","Fashion","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80","₱2,190"],
["Signature Sunglasses","Fashion","https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80","₱790"],
["Smart Desk Lamp","Home & Living","https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80","₱1,290"]
];
export default function Home(){
const [cart,setCart]=useState([]);
const [filter,setFilter]=useState("All");
useEffect(()=>setCart(JSON.parse(localStorage.getItem("joycart")||"[]")),[]);
function add(p){let c=[...cart,p];setCart(c);localStorage.setItem("joycart",JSON.stringify(c))}
let cats=["All",...new Set(products.map(x=>x[1]))];
let shown=filter==="All"?products:products.filter(x=>x[1]===filter);
return <main>
<header><div className="brand">JOY N <span>COLLECTIVE</span></div><nav>HOME　SHOP　NEW ARRIVALS　ABOUT</nav><div className="cart">🛍 {cart.length}</div></header>
<section className="hero"><div><p className="eyebrow">CURATED FINDS. EVERYDAY ELEVATED.</p><h1>Discover your next<br/>favorite find.</h1><p>Thoughtfully selected fashion, beauty, gadgets and everyday essentials.</p><button onClick={()=>document.getElementById("shop").scrollIntoView({behavior:"smooth"})}>SHOP THE COLLECTION</button></div></section>
<section className="intro"><p className="eyebrow">JOY N COLLECTIVE</p><h2>Curated for modern living.</h2><p>A premium collection of finds chosen to elevate your everyday.</p></section>
<section id="shop" className="shop"><div className="sectionHead"><div><p className="eyebrow">SHOP</p><h2>Featured Finds</h2></div><div className="filters">{cats.map(c=><button className={filter===c?"active":""} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></div>
<div className="grid">{shown.map((p,i)=><article className="card" key={i}><img src={p[2]} alt={p[0]}/><p className="cat">{p[1]}</p><h3>{p[0]}</h3><strong>{p[3]}</strong><button onClick={()=>add(p)}>ADD TO CART</button></article>)}</div></section>
<section className="banner"><p>JOIN THE COLLECTIVE</p><h2>New finds. Fresh inspiration.</h2><button>SUBSCRIBE</button></section>
<footer><div className="brand">JOY N <span>COLLECTIVE</span></div><p>CURATED FINDS. EVERYDAY ELEVATED.</p><p>© 2026 JOY N COLLECTIVE</p></footer>
</main>}
