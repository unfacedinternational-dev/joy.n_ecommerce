"use client";
import {createContext,useContext,useEffect,useState} from "react";
const C=createContext();
export function StoreProvider({children}){
 const [cart,setCart]=useState([]),[user,setUser]=useState(null);
 useEffect(()=>{setCart(JSON.parse(localStorage.getItem("jnc_cart")||"[]"));setUser(JSON.parse(localStorage.getItem("jnc_user")||"null"))},[]);
 useEffect(()=>localStorage.setItem("jnc_cart",JSON.stringify(cart)),[cart]);
 function add(p,qty=1){setCart(c=>{let x=c.find(i=>i.id===p.id);return x?c.map(i=>i.id===p.id?{...i,qty:i.qty+qty}:i):[...c,{...p,qty}]})}
 function update(id,qty){setCart(c=>qty<=0?c.filter(i=>i.id!==id):c.map(i=>i.id===id?{...i,qty}:i))}
 function logout(){setUser(null);localStorage.removeItem("jnc_user")}
 return <C.Provider value={{cart,setCart,add,update,user,setUser,logout}}>{children}</C.Provider>
}
export const useStore=()=>useContext(C);
