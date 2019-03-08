import React from 'react';
import {shallow} from 'enzyme';
import {ProductFilter} from './index';
describe('ProductFilter render', () => {

  const props = {
    path: 'mac',
    options: [
      {
        name: 'diskSize',
        options: ['2TB', '1TB', '512GB', '256GB', '128GB']
      },
      {
        name: 'coreMem',
        options: ['32GB', '16GB', '8GB']
      }
    ]
  };

  describe('should render fitler options form props', () => {

    const FilterContainer = shallow(<ProductFilter {...props} />);

    it('renders properly', () => {
      expect(FilterContainer).toMatchSnapshot();
    });

    it('filter-items length should equal to option.length', () => {
      expect(FilterContainer.find('.p-filter__item')).toHaveLength(props.options.length);
    });
  });

  describe('should render with checked checkboxes if filter state is enabled', () => {

    const propsFormRedux = {checkboxes: {
        diskSize: ['2TB', '1TB'],
        coreMem: ['32GB']
      }};

    const FilterContainer = shallow(<ProductFilter {...props} />);
    FilterContainer.setProps(propsFormRedux);

    it('Checkboxes form props.checkboxes should be checked', () => {
      expect(FilterContainer.find('[value="2TB"]').props().defaultChecked).toBeTruthy();
      expect(FilterContainer.find('[value="1TB"]').props().defaultChecked).toBeTruthy();
      expect(FilterContainer.find('[value="32GB"]').props().defaultChecked).toBeTruthy();
    });

    it('Another checkboxes shouldn\'t been checked', () =>{
      expect(FilterContainer.find('[value="512GB"]').props().defaultChecked).toBeFalsy();
      expect(FilterContainer.find('[value="16GB"]').props().defaultChecked).toBeFalsy();
    });
  });
});