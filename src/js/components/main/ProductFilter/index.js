import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {PropMap} from '../../../helpers/constats';
import {setProdFilterOption, removeProdFilterOption} from '../../../redux/actions/filterA';
import './style.scss';

import {Collapse} from 'reactstrap';

export class ProductFilter extends React.PureComponent {

  static proptypes = {
    options: Proptypes.array.isRequired,
    path: Proptypes.array.isRequired
  };

  state = {
    isOpen: false,
    collapseText: 'Показать фильтры',
  };

  onCheckboxChange = (e) => {
    const {path} = this.props;
    const {value, name, checked} = e.target;

    checked ? this.props.setProdFilterOption(path, value, name) : this.props.removeProdFilterOption(path, value, name);
  };

  setCheckboxState = (option, optGroup) => {
    const {checkboxes} = this.props;
    let isChecked = false;
    if (checkboxes && checkboxes[optGroup]) {
      isChecked = checkboxes[optGroup].includes(option);
    }
    return isChecked;
  };

  renderCheckbox = (option, optGroup) => {

    return <div className='checkbox' key={option}>
            <label>
              <input className='cb-input' type="checkbox" name={optGroup} defaultChecked={this.setCheckboxState(option, optGroup)} value={option} onChange={this.onCheckboxChange} />
              <span className='cb-icon'>
              </span>
              <span>{option}</span>
            </label>
           </div>;
  };

  renderFilters = () => {
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

  return {
    checkboxes: store.filter[currentCatalog]
  }
};

const MapDispatchToProps = {
  setProdFilterOption,
  removeProdFilterOption
};

export default connect(mapStateToProps, MapDispatchToProps)(ProductFilter);