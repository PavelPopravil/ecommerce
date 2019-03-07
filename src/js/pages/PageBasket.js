import React, {Fragment} from 'react';
import BasketList from '../components/main/BasketList/index'
import {connect} from 'react-redux';
import ErrorMessage from '../components/extra/ErrorMessage/index';

class PageBasket extends React.PureComponent {

  renderContent = () => {
    const data = this.getProductsFromBasket();

    if (!data) {
      return <ErrorMessage>Корзина пуста</ErrorMessage>; //toDo error вынести в extra компонент
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
      products[item].forEach((basketItem) => {
        let itemToFind = prodList[item].byId[basketItem.id];
        itemToFind.count = basketItem.count;
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