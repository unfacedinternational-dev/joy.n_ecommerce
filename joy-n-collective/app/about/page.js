import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function About(){
 return <>
  <Header/>
  <main className="aboutPage">
   <p className="eyebrow">THE JOY N COLLECTIVE STORY</p>
   <h1>Curated finds for everyday living.</h1>
   <p className="lead">JOY N COLLECTIVE brings together thoughtfully selected products across fashion, beauty, gadgets, home and lifestyle.</p>
   <div className="aboutGrid">
    <div><h2>Curated</h2><p>We focus on finds that feel useful, stylish and worth discovering.</p></div>
    <div><h2>Modern</h2><p>A flexible collection built for changing tastes and everyday needs.</p></div>
    <div><h2>Always Growing</h2><p>New categories and products can be added as the collective evolves.</p></div>
   </div>
   <Link className="primary dark" href="/shop">EXPLORE THE COLLECTION →</Link>
  </main>
  <Footer/>
 </>
}
