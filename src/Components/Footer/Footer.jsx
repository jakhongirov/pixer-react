import './Footer.css';

function Footer(){
   return(
      <footer className="footer" id="kontakt">
   <div className="container">
      <div className="kontakt-page">
         <h2 className="visually-hidden">Kontaktlar</h2>
         <div className="kontakt-left">
            <h3 className="kontakt-left-haeding">
               <a className="kontakt-left-haeding-link" href="./index.html">Copyright 2020</a>
            </h3>
            <p className="kontakt-left-paragaraph">
               <a className="kontakt-left-paragaraph-link" href="./index.html">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, 
                  eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</a>
               </p>
            </div>
            <div className="kontakt-right">
               <ul className="kontakt-list">
                  <li className="kontakt-item">
                     <h3 className="kontakt-heading">
                        <a className="kontakt-heading-link" href="./index.html">Sayt sahifalari</a>
                     </h3>
                     <ul className="left-list">
                        <li className="left-item">
                           <a className="left-item-link" href="./index.html" >Bosh sahifa</a>
                        </li>
                        <li className="left-item">
                           <a className="left-item-link" href="#xizmatlar" >Xizmatlar</a>
                        </li>
                        <li className="left-item">
                           <a className="left-item-link" href="#portfolio" >Portfolio</a>
                        </li>
                        <li className="left-item">
                           <a className="left-item-link" href="./jamoa.html">Jamoa</a>
                        </li>
                        <li className="left-item">
                           <a className="left-item-link" href="./blog.html">Blog</a>
                        </li>
                        <li className="left-item">
                           <a className="left-item-link" href="#kontakt">Kontaktlar</a>
                        </li>
                     </ul>
                     </li>
                     <li className="kontakt-item">
                        <h3 className="kontakt-heading">
                           <a className="kontakt-heading-link" href="./index.html">Biz internetda</a>
                        </h3>
                        <ul className="right-list">
                           <li className="right-item">
                              <a className="right-item-link" href="https://telegram.org/">Telegram</a>
                           </li>
                           <li className="right-item">
                              <a className="right-item-link" href="https://www.instagram.com/">Facebook</a>
                           </li>
                           <li className="right-item">
                              <a className="right-item-link" href="https://www.facebook.com/">Instagram</a>
                           </li>
                        </ul>
                     </li>
               </ul>
            </div>
         </div>
      </div>
   </footer>
   )
}

export default Footer;