import "./Portfolio.css";

function Portfolio(){
   return(
      <section class="portfolio-page" id="portfolio">
         <div class="container">
            <div class="portfolio">
               <h2 class="portfolio-heading">Biz qanday ishlaymiz?</h2>
               <p class="portfolio-paragaraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, 
                  eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
               </p>
               <ul class="portfolio-lsit">
                  <li class="portfolio-item">
                     <h3 class="portfolio-item-heading">Talablarni aniqlab chiqamiz</h3>
                     <p class="portfolio-item-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                  </li>
                  <li class="portfolio-item">
                     <h3 class="portfolio-item-heading">Bir necha yechimlarni taklif qilamiz</h3>
                     <p class="portfolio-item-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                  </li>
                  <li class="portfolio-item">
                     <h3 class="portfolio-item-heading">Loyiha uchun vaqt belgilaymiz</h3>
                     <p class="portfolio-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                  </li>
                  <li class="portfolio-item">
                     <h3 class="portfolio-item-heading">A’lo sifat bilan bajarib topshiramiz</h3>
                     <p class="portfolio-item-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                  </li>
                  <li class="portfolio-item">
                     <h3 class="portfolio-item-heading">Qo’llab-quvvatlab boramiz</h3>
                     <p class="portfolio-item-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                  </li>
               </ul>
               
               <a class="portfolio-link" href="#buyurtma_berish">Buyurtma berish</a>
            </div>
         </div>
      </section>
   )
}

export default Portfolio;