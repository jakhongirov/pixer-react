import './Header.css';
import Logo  from '../../Assets/image/pixer-logo.svg'

function Header() {
	return (
		<header class="header">
      <div className="container">
         <a className="logo-link" href="/">
            <img className="img-logo" src={Logo}  alt="logo-pixer" width="58" height="20"/></a>
            
            <nav className="nav">
               <ul className="nav-list">
                  <li className="nav-item"><a className="nav-link" href="./index.html" >Bosh sahifa</a></li>
                  <li className="nav-item"><a className="nav-link" href="#xizmatlar" >Xizmatlar</a>
                     <ul className="submenu">
                        <li className="submenu-item"><a className="submenu-link" href="./vebsayt.html">Vebsayt</a></li>
                        <li className="submenu-item"><a className="submenu-link" href="./telegrambot.html">Telegram bot</a></li>
                        <li className="submenu-item"><a className="submenu-link" href="./smm.html">SMM</a></li>
                        <li className="submenu-item"><a className="submenu-link" href="./grafikdizayn.html">Grafik dizayn</a></li>
                        <li className="submenu-item"><a className="submenu-link" href="./crgtizim.html">CRM tizim</a></li>
                     </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#portfolio" >Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="./jamoa.html">Jamoa</a></li>
                  <li className="nav-item"><a className="nav-link" href="./blog.html">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="#kontakt">Kontaktlar</a></li>
               </ul>
               <a className="nav-link-tel" href="tel:+998909213711">+998 90 921 37 11</a>
            </nav> 
         </div>
      </header>  
	);
}

export default Header;
