import './Order.css';

function Order(){
   return(
      <section className="order-page" id="buyurtma_berish">
      <div className="container">
         <div className="order">
            <h2 className="order-heading">Buyurtma berish</h2>
            <p className="order-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex,
               eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>
            <div className="write-order">
               <form  className="order-form"
               action="#"			
               method="POST"
               autocomplete="off"
               spellcheck="false">
               <div className="write">
                  <label className="name" for="user_name"></label>
                  <input className="name-input"
                  type="text"
                  placeholder="Ismingiz"
                  name="user_name"
                  id="user_name"
                  required/>
               </div>
               <div className="write">
                  <label for="user_phone"></label>
                  <input className="tel-input"
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  name="user_phone"
                  id="user_phone"
                  required/>
               </div>
               <div className="write">
                  <label className="user_services-choose" for="user_services-choose" ></label>
                  <select className="services-select" name="user_services-choose" id="user_services-choose" required>
                     <option value="" disabled selected>Xizmat turi</option>
                     <option  className="services-option" value="website_creation">Vebsayt tuzish</option>
                     <option  className="services-option" value="">Telegram bot</option>
                     <option  className="services-option" value="smm">SMM</option>
                     <option  className="services-option" value="graphic_design">Grafik dizayn</option>
                     <option  className="services-option" value="crm_systems">CRM tizimlar</option>
                  </select>
               </div>
               <button className="send-message" type="submit">Buyurtma berish</button>
            </form>
         </div>
      </div>
   </div>
</section>
   )
}

export default Order;