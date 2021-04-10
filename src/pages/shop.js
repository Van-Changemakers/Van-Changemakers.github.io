import React, { useState, useEffect } from 'react';
import './shop.scss';

import WeSite from '../components/wesite.js';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import Cart from '../components/cart/cart';

import Button from '../components/elements/button/button';

import Cards from '../assets/cards';

// decides whether to show or hide the products, based on whether any sale is currently active
import open from '../data/isCartOpen';

let sessionStorage = sessionStorage | { getItem() { return false } };

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

export default function Shop ({ location }) {

  const [ rerender, forceRerender ] = useState(0);

  // create to manage url search params
  const searchParams = new URLSearchParams(location.search);

  // use url cart if it exists, otherwise use an empty one
  const [ cart, setCart ] = useState(JSON.parse(sessionStorage?.getItem('cart')) || [0, 0, 0, 0, 0, 0, 0, 0]);

  const [ mobileCartOpen, setMobileCartOpen ] = useState(false);

  useEffect(() => {
    const onSetCart = () => {
      console.log('set cart');
      setCart(JSON.parse(sessionStorage.getItem('cart')))
    };

    window.addEventListener('set-cart', onSetCart);

    return () => {
      window.removeEventListener('set-cart', onSetCart);
    }
  })

  return open ? (
    <>
      <WeSite noCart />
      <Header image={Cards[0].image} title="Holiday Shop" subtitle="CHANGEMAKERS" showCalendar={false}></Header>
      <main className="wgs-main shop" style={{'padding-top': '64px', 'min-height': '100vh'}}>
        <h1 className="wgs-section-title" style={{'text-align': 'center'}}>Holiday Cards</h1>
        <div className="wgs-split-box">
          <div className="wgs-shop-products">
            <h2>Cards</h2>
            <p><i>Note: Orders are requested via email and processed by hand. Please be patient in awaiting a reply with further information. Thank you!</i></p>

            {Cards.map((card, index) => {
              return (
                <a className="wgs-ig-post" key={index} tabIndex="0" href="./" onClick={event => {
                  event.preventDefault();
                  let newCart = cart;
                  newCart[index]++;
                  console.log(newCart);
                  setCart(newCart);

                  // update storage
                  sessionStorage.setItem('cart', JSON.stringify(newCart));

                  // broadcast new cart event
                  window.dispatchEvent(new CustomEvent('set-cart'));

                  // rerender
                  setCart(newCart);
                  forceRerender(rerender + 1);
                }}>
                  <img className="wgs-ig-post-image" src={card.image} alt="Card" />
                  <div className="wgs-ig-post-info">
                    <h1>{card.title}</h1>
                    <p>Tap to add to cart →</p>
                  </div>
                </a>
              )
            })}
          </div>
          <Cart persistent />
        </div>
      </main>
      <Footer />
    </>
  ) : (
    <>
      <WeSite />
      <main className="wgs-main shop" style={{'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'}}>
        <h1>No sale is currently active.</h1>
        <h2>Check back soon!</h2>
      </main>
    </>
  );
}