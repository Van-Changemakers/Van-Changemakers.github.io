import React, { useState, useEffect } from 'react';
import './cart.scss';

import Button from '../elements/button/button';

import Cards from '../../assets/cards';

// decides whether to show or hide the products, based on whether any sale is currently active
import open from '../../data/isCartOpen';

let sessionStorage = sessionStorage || { getItem() { return false } };

function generateOrderLink (cart) {
  let mail = 'Hello! This email was generated from the changemakers website. It contains my order for holidary cards.%0d%0a%0d%0aI would like:%0d%0a';
  if (cart[0] > 0) {
    mail += `${cart[0]} Happy Holidays Tree Card${cart[0] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[1] > 0) {
    mail += `${cart[1]} Season's Greetings Card${cart[1] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[2] > 0) {
    mail += `${cart[2]} Happy Holidays Village Card${cart[2] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[3] > 0) {
    mail += `${cart[3]} Merry Christmas Card${cart[3] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[4] > 0) {
    mail += `${cart[4]} Happy Holidays Wreath Card${cart[4] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[5] > 0) {
    mail += `${cart[4]} Happy Holidays Snowman Card${cart[5] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[6] > 0) {
    mail += `${cart[4]} Happy Hanukkah Wreath Card${cart[6] > 1 ? 's' : ''}%0d%0a`;
  }
  if (cart[7] > 0) {
    mail += `${cart[4]} Happy Merry and Bright Card${cart[7] > 1 ? 's' : ''}%0d%0a`;
  }
  mail += `Total: $${(cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5] + cart[6] + cart[7]) * 5}%0d%0a`;
  mail += `%0d%0aThank you!`;

  return `mailto:katie663399@gmail.com?subject=Holiday Card Order&body=${mail}`;

}

export default function Cart ({ persistent }) {

  const [ cartOpen, setCartOpen ] = useState(false);
  const [ cart, setCart ] = useState(JSON.parse(sessionStorage.getItem('cart')) || [0, 0, 0, 0, 0, 0, 0, 0]);
  const [ rerender, forceRerender ] = useState(0);

  const cartCount = cart.reduce((a, b) => a + b, 0);

  useEffect(() => {

    // manage getting cart from shop page
    const onSetCart = () => {
      console.log('set cart');
      setCart(JSON.parse(sessionStorage.getItem('cart')))
    };
    window.addEventListener('set-cart', onSetCart);

    if (cartOpen) {
      const dialogue = document.querySelector('.wgs-cart-dialogue');
    
      let isMouseOverDialogue = false;
  
      const onHoverEnter = () => isMouseOverDialogue = true;
      const onHoverExit = () => isMouseOverDialogue = false;
  
      const onWindowClick = () => {
        if (!isMouseOverDialogue) setCartOpen(false);
      }
  
      dialogue.addEventListener('mouseenter', onHoverEnter);
      dialogue.addEventListener('mouseleave', onHoverExit);
  
      setTimeout(() => {
        window.addEventListener('click', onWindowClick);
      }, 500);
  
      return () => {
        window.removeEventListener('set-cart', onSetCart);

        dialogue.removeEventListener('mouseenter', onHoverEnter);
        dialogue.removeEventListener('mouseleave', onHoverExit);
  
        window.removeEventListener('click', onWindowClick);
      }
    } else {
      return () => {
        window.removeEventListener('set-cart', onSetCart);
      };
    }
  });

  return (
    <>
      {!persistent ? (
        <div className="wgs-cart-navbar_icon" onClick={() => {
          setCartOpen(true);
        }}>
          {cartCount > 0 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>}
        </div>
      ) : <></>}
      

      <div className={"wgs-cart-dialogue" + (persistent ? ' persistent' : '')} style={{display: cartOpen ? 'initial' : 'none'}}>
        <div className="scroll-container">
          <h2>Cart</h2>
          {open ? cart.map((count, index) => {
              if (count > 0) {
                return (
                  <div className="wgs-shop-cart-item" key={index}>
                    <img src={Cards[index].image} alt="Cart Item" />
                    <p>x {count}</p>
                    <button className="wgs-fab wgs-fab-small" onClick={event => {
                      let newCart = cart;
                      newCart[index]--;
                      console.log(newCart);
                      setCart(newCart);
                      event.target.parentElement.parentElement.classList.add('exit');
                      // update storage
                      sessionStorage.setItem('cart', JSON.stringify(newCart));
                      window.dispatchEvent(new CustomEvent('set-cart'));
                      setTimeout(() => {
                        forceRerender(rerender + 1);
                      }, 400);
                    }}><span className="wgs-fab-inner">
                      -
                    </span><mwc-ripple></mwc-ripple></button>
                  </div>
                );
              } else return <div key={index}></div>
            }) : <h3>No sale is currently active. Check back later.</h3>}
            <div style={{display: 'block', height: '140px'}}></div>
          </div>
          <div className="send-button">
            <p className="total">Total: ${(cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5] + cart[6] + cart[7]) * 5}</p>
            <a href={generateOrderLink(cart)}><Button disabled>Send Email</Button></a>
          </div>
      </div>
    </>
  )

}