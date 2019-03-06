import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {PropMap} from '../../../helpers/constats';
import {setProdFilter} from '../../../redux/actions/prodListA';
import './style.scss';

import {Collapse} from 'reactstrap';

class ProductFilter extends React.PureComponent {

  static proptypes = {
    options: Proptypes.array.isRequired,
    path: Proptypes.array.isRequired
  };

  state = {
    isOpen: false,
    collapseText: 'Показать фильтры',
  };

  onCheckboxChange = (e) => {
    const {value, name, checked} = e.target;
    const map = this.props.checkboxes || {};

    if (checked) {
      map[name] = map[name] ? [...map[name], value] : [value];
    } else {
      map[name] = map[name].filter((item) => item !== value);
      if (!map[name].length) {
        delete map[name];
      }
    }

    this.props.setProdFilter(map);
  };

  renderCheckbox = (option, optGroup) => {

    const {checkboxes} = this.props;
    let isChecked = false;
    if (checkboxes && checkboxes[optGroup]) {
      isChecked = checkboxes[optGroup].includes(option);
    }

    return <div className='checkbox' key={option}>
            <label>
              <input className='cb-input' type="checkbox" name={optGroup} defaultChecked={isChecked} value={option} onChange={this.onCheckboxChange} />
              <span className='cb-icon'>
              </span>
              <span>{option}</span>
            </label>
           </div>;
  };

  renderFilters = () => { //toDo Сделать фильтрацию по категории товара (iphone 7, iphone 8)
    const {options} = this.props;
    return options.map((filter) => {

      return <div className='p-filter__item' key={filter.name}>
                <h5 className="p-filter__i-title">{PropMap[filter.name]}</h5>
                <div className="p-filter__options">
                  {filter.options.map((option) => {
                    return this.renderCheckbox(option, filter.name);
                  })}
                </div>
             </div>;
    });
  };

  toggleCollapse = () => {
    const {isOpen} = this.state;
    this.setState({isOpen: !isOpen, collapseText: isOpen ? 'Показать фильтры' : 'Скрыть фильтры'});
  };

  render() {

    const {isOpen, collapseText} = this.state;

    return(
      <div className='p-filter'>
        <div className="p-filter__inner">
          <h4 onClick={this.toggleCollapse} className={`p-filter__collapse-link ${!isOpen ? `collapsed` : ``}`}>{collapseText}</h4>
          <Collapse className='p-filter__collapse' isOpen={isOpen}>
            <div className="p-filter__list">
              {
                this.renderFilters()
              }
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const currentCatalog = ownProps.path;
  const currentProdlist = store.prodList[currentCatalog];

  return {
    checkboxes: currentProdlist.filter
  }
};

const MapDispatchToProps = {
  setProdFilter
};

export default connect(mapStateToProps, MapDispatchToProps)(ProductFilter);