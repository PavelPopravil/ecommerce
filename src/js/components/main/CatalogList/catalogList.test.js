import React from 'react';
import {shallow} from 'enzyme';

import {CatalogList} from './index';

// const catalogData = require('./catalogApi.json');

describe('CatalogList render', () => {

  const props = {
    isLoading: false,
    data: [],
    errorMsg: null,
    onFetchCatalog: () => {}
  };

  describe('CatalogList initial state', () => {

    const catalogContainer = shallow(<CatalogList {...props} />);

    it('not show Preloader component', () => {
      expect(catalogContainer.find('Preloader')).toHaveLength(0);
    });

    it('not show CatalogCard component', () => {
      expect(catalogContainer.find(CatalogList)).toHaveLength(0);
    });

  });

  describe('CatalogList isLoading state', () => {

    const newProps = {
      ...props,
      isLoading: true
    };

    const catalogContainer = shallow(<CatalogList {...newProps} />);

    console.log(catalogContainer.debug());

    it('shoud render Preloader', () => {
      expect(catalogContainer.find('Preloader')).toHaveLength(1);
    });
  });
});