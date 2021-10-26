import './Main.css';
import Hero from '../Hero/Hero';
import  Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Order from '../Order/Order';

function Main(){
   return(
      <main className="main">
         <Hero/>
         <Services/>
         <Portfolio/>
         <Order/>
      </main>
   )
}

export default Main;