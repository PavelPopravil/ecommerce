import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {PropMap} from '../../../helpers/constats';
import {setProdFilter} from '../../../redux/actions/prodFilterA';

class ProductFilter extends React.PureComponent {

  static proptypes = {
    options: Proptypes.array.isRequired
  };

  propMap = {};

  onCheckboxChange = (e) => {
    const {value, name, checked} = e.target;
    const map = this.propMap;

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
    return <div className='checkbox' key={option}>
            <label>
              <input type="checkbox" name={optGroup} value={option} onChange={this.onCheckboxChange} />
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

  render() {

    return(
      <div className='p-filter'>
        <div className="p-filter__inner">
          <div className="p-filter__list">
            {
              this.renderFilters()
            }
          </div>
        </div>
      </div>
    )
  }
}

const MapDispatchToProps = {
  setProdFilter
};

export default connect(null, MapDispatchToProps)(ProductFilter);