import React from 'react';
import Proptypes from 'prop-types';
import BasketCard from '../BasketCard/index';
import './style.scss';

class BasketList extends React.PureComponent {

  static proptypes = {
    data: Proptypes.object.isRequired
  };

  renderData = () => {
    const {data} = this.props;

    return data.map((item) => {
      return <BasketCard key={item.id} product={item} />
    });
  };

  render() {

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
      </div>
    )
  }
}

export default BasketList;