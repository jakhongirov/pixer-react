import './Hero.css'

function Hero(){
   return(
      <>
      <section className="hero-page">
      <div className="container">
         <div className="hero">
            <div className="hero-left">
               <h1 className="hero-heading">Biznesingizni keyingi bosqichga olib chiqing</h1>
               <p className="hero-paragraph">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, 
                  eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
               </p>
               <a className="hero-link" href="#xizmatlar">Xizmatlar bilan tanishish</a>
            </div>
            
            <div className="hero-right">
               <iframe className="youtube-video"
               width="458" height="258" 
               src="https://www.youtube.com/embed/6_pru8U2RmM" 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
            </iframe>
         </div>
      </div>
   </div>
</section>
</>
   )
}

export default Hero;