import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="123214"
          title="The lean startup: How Constant Inovation Creates Radically Successful
          Businesses Paperback"
          price={29.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="2342343"
          title="Kenwood kmix stand mixer for baking, sytlish kitchen mixer with k beater, dough hook and whisk, 5 litre glass bowl"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="24234"
          title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
        />
        <Product
          id="234233"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={90.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_UY218_.jpg"
        />
        <Product
          id="242452"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81-fnyTJMWS._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="657427"
          title="Samsung LC49RG90SSUXXEN 49 Curved LEG Gaming Monitor - Super Ultra Wide Dual"
          price={1094.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
