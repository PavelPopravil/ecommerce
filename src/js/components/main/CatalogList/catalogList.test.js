import React from 'react';
import {shallow} from 'enzyme';

import {CatalogList} from './index';
import CatalogCard from '../CatalogCard/index';
import Preloader from '../../extra/Preloader/index';

describe('CatalogList render', () => {

  const props = {
    isLoading: false,
    data: [],
    errorMsg: null,
    onFetchCatalog: () => {}
  };

  describe('CatalogList initial state', () => {

    const mockFn = jest.fn();

    const newProps = {
      ...props,
      onFetchCatalog: mockFn
    };

    const catalogContainer = shallow(<CatalogList {...newProps} />);

    it('renders properly', () => {
      expect(catalogContainer).toMatchSnapshot();
    });

    it('should recive function from redux and call it once', () => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

  });

  describe('CatalogList fetch data start', () => {

    const newProps = {
      ...props,
      isLoading: true
    };

    const catalogContainer = shallow(<CatalogList {...newProps} />);

    it('Should render Preloader component', () => {
      expect(catalogContainer.find(Preloader)).toHaveLength(1);
    });

    it('Shouldn\'t render CatalogCard component', () => {
      expect(catalogContainer.find(CatalogCard)).toHaveLength(0);
    });

    it('Shouldn\'t render div with error message', () => {
      expect(catalogContainer.find('.failure-block')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(catalogContainer).toMatchSnapshot()
    })
  });

  describe('CatalogList fetch data success', () => {

    const newProps = {
      ...props,
      isLoading: false,
      data: [
        {
          mod: "big",
          id: 1,
          pic: "img/catalog_imac.png",
          title: "Mac",
          price: "от 1 650 руб"
        }
      ]
    };

    const catalogContainer = shallow(<CatalogList {...newProps} />);

    it('Shouldn\'t render Preloader component', () => {
      expect(catalogContainer.find(Preloader)).toHaveLength(0);
    });

    it('Shouldn\'t render div with error message', () => {
      expect(catalogContainer.find('.failure-block')).toHaveLength(0);
    });

    it('Should render CatalogCard component', () => {
      expect(catalogContainer.find(CatalogCard)).toHaveLength(newProps.data.length);
    });

    it('renders properly', () => {
      expect(catalogContainer).toMatchSnapshot()
    })

  });

  describe('CatalogList fetch data failure', () => {

    const newProps = {
      ...props,
      isLoading: false,
      errorMsg: 'fetch error'
    };

    const catalogContainer = shallow(<CatalogList {...newProps} />);

    it('Shouldn\'t render Preloader component', () => {
      expect(catalogContainer.find(Preloader)).toHaveLength(0);
    });

    it('Shouldn\'t render CatalogCard component', () => {
      expect(catalogContainer.find(CatalogCard)).toHaveLength(0);
    });

    it('Should return div with error message text', () => {
      expect(catalogContainer.find('.failure-block').text()).toEqual(`Произошла ошибка ${newProps.errorMsg}`);
    });

    it('renders properly', () => {
      expect(catalogContainer).toMatchSnapshot()
    })

  });
});