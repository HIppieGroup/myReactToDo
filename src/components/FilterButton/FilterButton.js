import React, { Component } from 'react';

 class FilterButton extends Component {

  activeButton(action) {
    return this.props.onActive === action ? 'action-button__btn active_btn' : 'action-button__btn'      
  }

  render() {
    return (
      <div className="action-button">
        <button className={this.activeButton(null)} onClick={this.props.onDisplayAll}>All</button>
        <button className={this.activeButton(true)} onClick={this.props.onDisplayDone}>Done</button>
        <button className={this.activeButton(false)} onClick={this.props.onDisplayActive}>Active</button>
      </div>
    )
  }
};

export default FilterButton;