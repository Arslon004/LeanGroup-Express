import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import tab1 from "../../assets/images/tab1.svg"
import tab2 from "../../assets/images/tab2.svg"
import tab3 from "../../assets/images/tab3.svg"
import tab4 from "../../assets/images/tab4.svg"
import tab5 from "../../assets/images/tab5.svg"


import "./Product.scss";
export class Product extends Component {
  render() {
    return (
      <section id='product'>
        <div className="container">
          <div className="product">
            <div className="product_header">
              <h1>Наша <span>продукция</span></h1>
            </div>
            <div className="product_body">\
       <Tabs>
        <TabList>
          <Tab>Ламинатные тубы</Tab>
          <Tab>Экструзионные тубы</Tab>
          <Tab>Другая упаковка</Tab>
        </TabList>
        <TabPanel>
          <img src={tab1} alt="rasm" />
          <img src={tab2} alt="rasm" />
          <img src={tab3} alt="rasm" />
          <img src={tab4} alt="rasm" />
        </TabPanel>

        <TabPanel>
          <img src={tab1} alt="rasm" />
          <img src={tab2} alt="rasm" />
          <img src={tab3} alt="rasm" />
          <img src={tab4} alt="rasm" />
          <img src={tab5} alt="rasm" />
        </TabPanel>

        <TabPanel>
          <img src={tab1} alt="rasm" />
          <img src={tab2} alt="rasm" />
          <img src={tab3} alt="rasm" />
        </TabPanel>
       </Tabs>
       </div>
       <div className="product_footer">
        <button>Перейти в каталог</button>
       </div>
       </div>
        </div>
      </section>
    )
  }
}

export default Product