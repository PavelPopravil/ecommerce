import React from 'react';
import Proptypes from 'prop-types';
import BasketCard from '../BasketCard/index';
import './style.scss';

class BasketList extends React.PureComponent {

  static proptypes = {
    data: Proptypes.object.isRequired,
    totalPrice: Proptypes.number.isRequired
  };

  renderData = () => {
    const {data} = this.props;

    return data.map((item) => {
      return <BasketCard key={`${item.catalogPath}_${item.id}`} product={item} />
    });
  };

  onBuyBtnClick = () => {
    const {data, totalPrice} = this.props;
    const message = `Ваша покупка - ${data.map((item) => {
      return `${item.name}, в количестве ${item.count} шт. `
    }).join('')} Общая стоимость - ${totalPrice} BYN`;
    alert(message)
  };

  render() {

    const {totalPrice} = this.props;

    return (
      <div className='basket'>
        <div className="table-wrapper">
          <table className="basket__table">
            <tbody>
              {
                this.renderData()
              }
            </tbody>
          </table>
        </div>
        <div className="basket__footer">
          <div className="basket__price-wrap">
            <h3 className='basket__price'>Итого: {totalPrice} BYN</h3>
          </div>
          <div className="basket__btn-wrap">
            <button className='btn btn-primary' onClick={this.onBuyBtnClick}>Купить</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BasketList;