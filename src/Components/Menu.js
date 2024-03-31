import React from 'react';
import './Menu.css'; // Import Menu.css
import cappuccinoImg from '../';
import latteImg from '../';
import croissantImg from '../';
import muffinImg from '../';

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Our Menu</h2>
            <div className="menu-item">
              <div className="menu-item-img">
                <img src={process.env.PUBLIC_URL + '/images/cappuccino.jpg'} alt="Cappuccino" />
              </div>
              <div className="menu-item-details">
                <h3>Cappuccino</h3>
                <p>Espresso, steamed milk, and topped with foam.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-img">
                <img src={process.env.PUBLIC_URL + '/images/latte.jpg'} alt="Latte" />
              </div>
              <div className="menu-item-details">
                <h3>Latte</h3>
                <p>Espresso with steamed milk and a touch of foam.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-img">
                <img src={process.env.PUBLIC_URL + '/images/croissant.jpg'} alt="Chocolate Croissant" />
              </div>
              <div className="menu-item-details">
                <h3>Chocolate Croissant</h3>
                <p>Flaky croissant filled with rich chocolate.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-img">
                <img src={process.env.PUBLIC_URL + '/images/muffins.jpg'} alt="Blueberry Muffin" />
              </div>
              <div className="menu-item-details">
                <h3>Blueberry Muffin</h3>
                <p>Moist muffin bursting with fresh blueberries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

