"use client";
import Link from "next/link";
import {ShoppingBag,Search,User} from "lucide-react";
import {useStore} from "./Store";

export default function Header(){
  const {cart}=useStore();
  const count=cart.reduce((a,b)=>a+b.qty,0);
  return (
    <header className="header">
      <Link className="logo" href="/">JOY N <span>COLLECTIVE</span></Link>

      <nav className="mainNav">
        <Link className="navHome" href="/">HOME</Link>
        <Link className="navShop" href="/shop">SHOP</Link>
        <Link className="navNew" href="/new-arrivals">NEW ARRIVALS</Link>
      </nav>

      <div className="headerRight">
        <Link className="navAbout" href="/about">ABOUT</Link>
        <div className="icons">
          <Link href="/shop" aria-label="Search products"><Search size={19}/></Link>
          <Link href="/account" aria-label="Account"><User size={19}/></Link>
          <Link href="/cart" className="cartIcon" aria-label="Shopping cart">
            <ShoppingBag size={20}/><b>{count}</b>
          </Link>
        </div>
      </div>
    </header>
  );
}
