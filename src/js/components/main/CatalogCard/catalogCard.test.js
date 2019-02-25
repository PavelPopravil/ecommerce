import React from 'react';
import {shallow} from 'enzyme';

import CatalogCard from './index';

describe('CatalogCard render', () => {

  const props = {
    path: 'mac',
    pic: 'catalog_imac.png',
    title: 'Заголовок карточки',
    price: 'Цена карточки'
  };

  const catalogCard = shallow(<CatalogCard {...props}/>);

  it('should render properly', () => {
    expect(catalogCard).toMatchSnapshot();
  });

  it('should contain picture', () => {
    expect(catalogCard.find('.catalog-card__pic')).toHaveLength(1);
  });

  it('should contain title', () => {
    const title = catalogCard.find('.catalog-card__title');
    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(props.title)
  });

  it('should contain price', () => {
    const price = catalogCard.find('.catalog-card__price');
    expect(price).toHaveLength(1);
    expect(price.text()).toEqual(props.price);
  });

});