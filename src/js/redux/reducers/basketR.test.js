import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_PRODUCT_COUNT
} from '../actions/basketA';

import basketR from './basketR';

describe('Basket reducers tests', () => {

  const initialState = {
    counter: 0,
    totalPrice: 0,
    products: {}
  };

  describe('ADD_TO_BASKET', () => {

    it('ADD_TO_BASKET with empty initial state', () => {

      const state = {...initialState};

      const action = {
        type: ADD_TO_BASKET,
        product: {id: 1, price: 1200, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 1,
        totalPrice: 1200,
        products: {
          mac: [{id: 1, count: 1, price: 1200 }]
        }
      });
    });

    it('ADD_TO_BASKET with product in basket', () => {

      const state = {
        ...initialState,
        counter: 1,
        totalPrice: 1200,
        products: {
          'mac': [{id: 1, count: 1, price: 1200 }]
        }
      };

      const action = {
        type: ADD_TO_BASKET,
        product: {id: 2, price: 2700, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 2,
        totalPrice: 3900,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 1, price: 2700}]
        }
      });
    });

  });

  describe('REMOVE_FROM_BASKET', () => {

    it('REMOVE_FROM_BASKET with products in basket', () => {

      const state = {
        ...initialState,
        counter: 2,
        totalPrice: 3900,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 1, price: 2700}]
        }
      };

      const action = {
        type: REMOVE_FROM_BASKET,
        product: {id: 1, price: 1200, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 1,
        totalPrice: 2700,
        products: {
          mac: [{id: 2, count: 1, price: 2700}]
        }
      });
    });

    it('REMOVE_FROM_BASKET with one product in basket, it should delete catalog object if there are no products', () => {

      const state = {
        ...initialState,
        counter: 1,
        totalPrice: 1200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}]
        }
      };

      const action = {
        type: REMOVE_FROM_BASKET,
        product: {id: 1, price: 1200, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 0,
        totalPrice: 0,
        products: {}
      });
    });

    it('REMOVE_FROM_BASKET with few products + few product items', () => {

      const state = {
        ...initialState,
        counter: 2,
        totalPrice: 10200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 3, price: 9000}]
        }
      };

      const action = {
        type: REMOVE_FROM_BASKET,
        product: {id: 2, price: 3000, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 1,
        totalPrice: 1200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}]
        }
      });
    });
  });

  describe('SET_PRODUCT_COUNT', () => {

    it('SET_PRODUCT_COUNT increase product count', () => {

      const state = {
        ...initialState,
        counter: 2,
        totalPrice: 10200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 3, price: 9000}]
        }
      };

      const action = {
        type: SET_PRODUCT_COUNT,
        value: 2,
        product: {id: 1, price: 1200, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 2,
        totalPrice: 11400,
        products: {
          mac: [{id: 1, count: 2, price: 2400}, {id: 2, count: 3, price: 9000}]
        }
      });
    });

    it('SET_PRODUCT_COUNT decrease product count', () => {

      const state = {
        ...initialState,
        counter: 2,
        totalPrice: 10200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 3, price: 9000}]
        }
      };

      const action = {
        type: SET_PRODUCT_COUNT,
        value: 2,
        product: {id: 2, price: 3000, catalogPath: 'mac'}
      };

      expect(basketR(state, action)).toEqual({
        ...state,
        counter: 2,
        totalPrice: 7200,
        products: {
          mac: [{id: 1, count: 1, price: 1200}, {id: 2, count: 2, price: 6000}]
        }
      });
    });

  });
});

