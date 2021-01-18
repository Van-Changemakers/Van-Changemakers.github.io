import React, { useState } from 'react';
import './shop.scss';

import WeSite from '../components/wesite.js';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import Button from '../components/elements/button/button';

import Cards from '../assets/cards';

// decides whether to show or hide the products, based on whether any sale is currently active
const open = false;

const sessionStorage = window?.sessionStorage || { getItem() { return false } };

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

  return open ? (
    <>
      <WeSite />
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
          <div className={"wgs-shop-cart " + (mobileCartOpen ? 'open' : 'closed')}>
            <h2><button className="wgs-fab wgs-fab-small wgs-shop-cart-button" onClick={() => {
              setMobileCartOpen(!mobileCartOpen);
            }}><span className="wgs-fab-inner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            </span><mwc-ripple primary></mwc-ripple></button><span className="title">Cart</span></h2>
            {cart.map((count, index) => {
              if (count > 0) {
                return (
                  <div className="wgs-shop-cart-item">
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
                      setTimeout(() => {
                        forceRerender(rerender + 1);
                      }, 400);
                    }}><span className="wgs-fab-inner">
                      -
                    </span><mwc-ripple></mwc-ripple></button>
                  </div>
                );
              } else return <></>
            })}
            <div style={{display: 'block', height: '140px'}}></div>
            <div className="send-button">
              <p className="total">Total: ${(cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5] + cart[6] + cart[7]) * 5}</p>
              <a href={generateOrderLink(cart)}><Button>Send Email</Button></a>
            </div>
          </div>
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