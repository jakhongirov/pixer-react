import './Services.css';

function Services(){
   return(
      <section className="services-page" id="xizmatlar">
      <div className="container">
         <div className="services">
            <h2 className="services-heading">Xizmatlar</h2>
            <p className="services-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex,
               eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>
            <ul className="services-list">
               <li className="services-item">
                  <a className="services-item-link" href="./vebsayt.html" target="_blank">
                     <h3 className="services-item-heading">Vebsayt tuzish</h3>
                     <p className="services-item-paragraph">lorem ipsum</p>
                  </a>
               </li>
               <li className="services-item">
                  <a className="services-item-link" href="./telegrambot.html" target="_blank">
                     <h3 className="services-item-heading">Telegram bot</h3>
                     <p className="services-item-paragraph">lorem ipsum</p>
                  </a>
               </li>
               <li className="services-item">
                  <a className="services-item-link" href="./smm.html" target="_blank">
                     <h3 className="services-item-heading">SMM</h3>
                     <p className="services-item-paragraph">lorem ipsum</p>
                  </a>
               </li>
               <li className="services-item">
                  <a className="services-item-link" href="./grafikizayn.html" target="_blank">
                     <h3 className="services-item-heading">Grafik dizayn</h3>
                     <p className="services-item-paragraph">lorem ipsum</p>
                  </a>
               </li>
               <li className="services-item">
                  <a className="services-item-link" href="./crmtizim.html" target="_blank">
                     <h3 className="services-item-heading">CRM tizimlar</h3>
                     <p className="services-item-paragraph">lorem ipsum</p>
                  </a>
               </li>
            </ul>
            <div className="services-links">
               <a className="services-order-link" href="#buyurtma_berish">Buyurtma berish</a>
               <a className="services-link" href="./xizmatlar.html" target="_blank">Xizmatlar sahifasiga o’tish</a>
            </div>
         </div>
      </div>
   </section>
   )
}

export default Services;