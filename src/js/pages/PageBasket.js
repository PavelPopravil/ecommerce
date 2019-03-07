import React, {Fragment} from 'react';
import BasketList from '../components/main/BasketList/index'
import {connect} from 'react-redux';

class PageBasket extends React.PureComponent {

  renderContent = () => {
    const data = this.getProductsFromBasket();
    // const data = [ // toDo remove - mockData
    //   {
    //     "id": "5",
    //     "pic": "imac_5.png",
    //     "name": "iMac",
    //     "price": "5 780.00",
    //     "properties": {
    //       "screenSize": "27\"",
    //       "release": "2017",
    //       "screenResolution": "5K Retina",
    //       "processor": "Core i5 3.5GHz",
    //       "videoCard": "Radeon Pro 575 4GB",
    //       "coreMem": "8GB",
    //       "diskSize": "1TB",
    //       "diskType": "Fusion Drive"
    //     }
    //   },
    //   {
    //     "id": "6",
    //     "pic": "imac_6.png",
    //     "name": "iMac",
    //     "price": "6 600.00",
    //     "properties": {
    //       "screenSize": "27\"",
    //       "release": "2017",
    //       "screenResolution": "5K Retina",
    //       "processor": "Core i5 3.8GHz",
    //       "videoCard": "Radeon Pro 580 8GB",
    //       "coreMem": "8GB",
    //       "diskSize": "2TB",
    //       "diskType": "Fusion Drive"
    //     }
    //   },
    //   {
    //     "id": "3",
    //     "pic": "iphone_3.jpeg",
    //     "catalogPath": "iphone",
    //     "name": "iPhone 7",
    //     "price": "1 210.00",
    //     "properties": {
    //       "diskSize": "32GB",
    //       "color": "gold"
    //     }
    //   }
    // ];

    if (!data) {
      return <div className='error'>Корзина пуста</div>; //toDo error вынести в extra компонент
    } else {
      return <BasketList totalPrice={this.props.basket.totalPrice} data={data}/>;
    }
  };

  getProductsFromBasket = () => {
    const {prodList, basket} = this.props;
    let resultArr = [];
    const products = basket.products;

    const basketItems = Object.keys(products);

    if (!basketItems.length) {
      return false;
    }

    basketItems.forEach((item) => {
      products[item].forEach((id) => {
        let itemToFind = prodList[item].byId[id];
        resultArr.push(itemToFind);
      });
    });

    return resultArr;
  };

  render() {

    return (
      <Fragment>
        <h1>Корзина</h1>
        {
          this.renderContent()
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    basket: store.basket,
    prodList: store.prodList
  }
};

export default connect(mapStateToProps)(PageBasket);