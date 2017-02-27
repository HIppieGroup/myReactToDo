import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {

  renderItems(){
    console.log(this.props.items);
    return this.props.items.map( (item, index) => {
      return <Item 
        key={index} 
        item={item} 
        onDoneItem={this.props.onDoneItem.bind(this)}
        onDeleteItem={this.props.onDeleteItem.bind(this)}
        onEdingItem={this.props.onEdingItem.bind(this)}
        onSaveItemEding={this.props.onSaveItemEding.bind(this)}
      />
    })
  };

  render() {
    return(
      <ul className="out-list">
        {this.renderItems()}
      </ul>
    )
  }
}

export default ListItem;