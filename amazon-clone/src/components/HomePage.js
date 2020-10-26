import React from 'react'
import Product from './Product'

function HomePage() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image"></img>
            <div className="container home__content">
                <div className="row">
                    <div className="col-12 col-md-5 offset-md-1">
                    <Product id="0" title=" Cadbury Dairy Milk Silk Chocolate Bar" price={320} rating={5} image="https://images-eu.ssl-images-amazon.com/images/I/410dwX6xrbL._AC_SX184_.jpg"/>

                    </div>
                    <div className="col-12 col-md-5 offset-right-md-1">
                    <Product id="1" title=" How to Stop Worrying and Start Living" price={15} rating={4} image="https://m.media-amazon.com/images/I/41VDS6f7C3L.jpg"/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                    <Product id="3" title=" OnePlus 8 (8GB RAM+128GB Storage)" price={41999} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61UeA7TUrkL._SL1500_.jpg"/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Product id="4" title=" Apple iPad (10.2-inch, Wi-Fi, 32GB)" price={29900} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SL1500_.jpg"/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Product id="5" title=" Samsung 80 cm (32 inches) Series HD" price={15999} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81cB6pJsTaL._SL1500_.jpg"/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                    <Product id="6" title=" SONY WH-CH510 Wireless Headphone" price={4044} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/811u6QEwQxL._SL1500_.jpg"/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Product id="7" title=" Nikon D5600 Digital Camera 18-55mm" price={41990} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51DE4FICRGL.jpg"/>

                    </div>
                    <div className="col-12 col-md-4">
                    <Product id="8" title=" Mi Band 3 (Black) 0.78” OLED touch" price={1399} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71ZIrJ6XLLL._SL1500_.jpg"/>

                    </div>
                    
                </div>
            </div>
       
        </div>
    )
}

export default HomePage
