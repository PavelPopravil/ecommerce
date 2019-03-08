import {SET_PRODLIST_FILTER, REMOVE_PRODLIST_FILTER} from '../actions/filterA';

import filterR from './fitlerR';

describe('fitler reducer tests', () => {

  it('SET_PRODLIST_FILTER with initial state', () => {
    const state = {};

    const action = {
      type: SET_PRODLIST_FILTER,
      path: 'mac',
      value: '17',
      name: 'screenSize'
    };

    expect(filterR(state, action)).toEqual({
      ...state,
      [action.path]: {
        [action.name]: [action.value]
      }
    });
  });

  it('SET_PRODLIST_FILTER with multiple option in one filter category', () => {

    const state = {
      mac: {
        screenSize: ['17']
      }
    };

    const action = {
      type: SET_PRODLIST_FILTER,
      path: 'mac',
      value: '25',
      name: 'screenSize'
    };

    expect(filterR(state, action)).toEqual({
      ...state,
      mac: {
        screenSize: ['17', '25']
      }
    });
  });

  it('SET_PRODLIST_FILTER add another filter category', () => {

    const state = {
      mac: {
        screenSize: ['17']
      }
    };

    const action = {
      type: SET_PRODLIST_FILTER,
      path: 'mac',
      value: '1TB',
      name: 'diskSize'
    };

    expect(filterR(state, action)).toEqual({
      ...state,
      mac: {
        screenSize: ['17'],
        diskSize: ['1TB']
      }
    });
  });

  it('REMOVE_PRODLIST_FILTER', () => {

    const state = {
      mac: {
        screenSize: ['17', '25']
      }
    };

    const action = {
      type: REMOVE_PRODLIST_FILTER,
      path: 'mac',
      value: '25',
      name: 'screenSize'
    };

    expect(filterR(state, action)).toEqual({
      ...state,
      mac: {
        screenSize: ['17'],
      }
    });
  });

  it('REMOVE_PRODLIST_FILTER if there no options filter categorie should be removed', () => {

    const state = {
      mac: {
        screenSize: ['17']
      }
    };

    const action = {
      type: REMOVE_PRODLIST_FILTER,
      path: 'mac',
      value: '17',
      name: 'screenSize'
    };

    expect(filterR(state, action)).toEqual({
      ...state,
      mac: {}
    });
  });

});