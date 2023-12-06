import React from 'react';
import "../styles/Footer.scss";
const Footer = () => {

  const FooterLinks = (element) => {
    const AllFooterLinks = document.querySelectorAll(".FooterLinks");
  
    switch (element) {
      case 0:
  
        AllFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
  
        case 1:
  
        AllFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
        case 2:
  
        AllFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
        case 3:
  
        AllFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
        case 4:
  
        AllFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
        case 5:
  
        AllFooterLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.4)
        );
        break;
      default:
        AllFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };
  
  const linksBacktoNormal = () =>{
    const AllFooterLinks = document.querySelectorAll(".FooterLinks");
    AllFooterLinks.forEach((item) => (item.style.opacity = 1));
  }
  
  return (
    <>
    <footer>
      <h1>
        Let's
        <br />
        #ConnectOncutting?
      </h1>

      <aside onMouseLeave={linksBacktoNormal}>
      <a href="/" className='FooterLinks' onMouseOver={() => FooterLinks(0)}
      data-cursorpointermini = {true}
      >
  Home
</a>

<a href="/story" className='FooterLinks' onMouseOver={() => FooterLinks(1)}
data-cursorpointermini = {true}
>
  Story
</a>

<a href="/Media" className='FooterLinks' onMouseOver={() => FooterLinks(2)}
data-cursorpointermini = {true}
>
  Media
</a>

<a href="/franchise" className='FooterLinks' onMouseOver={() => FooterLinks(3)}
data-cursorpointermini = {true}
>
  Franchise
</a>

<a href="/event" className='FooterLinks' onMouseOver={() => FooterLinks(4)}
data-cursorpointermini = {true}
>
  Events
</a>

<a href="/chaiwalacares" className='FooterLinks' onMouseOver={() => FooterLinks(5)}
data-cursorpointermini = {true}
>
  Chai wala Cares
</a>

      </aside>

      <div>
        <h5>Email</h5>
        <a href="mailto:Info@mbachaiwala.com">Info@mbachaiwala.com</a>
        <a href="mailto:franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
      </div>

      <div>
        <h5>Phone</h5>
        <a href="tel:+91722905222">+91722905222</a>
      </div>

      <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
    </footer>
    <div className='footer'></div>
    </>
  );
}

export default Footer;
