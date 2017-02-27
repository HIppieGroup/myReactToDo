import React, { Component } from 'react';

class Item extends Component {


  render() {
    return(
    <li className={this.colorItem()} onDoubleClick={this.props.onEdingItem.bind(this, this.props.item.id)}>
      {this.renderItem()}
    </li>
    )
  }

  colorItem() {
    let color = this.props.item.isApply ? 'out-list__item out-list__item_done' : 'out-list__item ';
    return color;
  }

  onSaveItem(event) {
    event.preventDefault();
    const payload = {
      taskText: this.refs.editInput.value,
      taskId: this.props.item.id
    }
    this.props.onSaveItemEding(payload);
  };

  renderDoneButton(){
    if (!this.props.item.isApply) {
      return (
       <button 
        className="out-list__button" 
        onClick={this.props.onDoneItem.bind(this, this.props.item.id)}>
      Done
      </button>
      )
    }
  }

  renderItem(){
    if (this.props.item.isEding) {
     return( 
      <form onSubmit={this.onSaveItem.bind(this)}>
        <input className="edit-imp" type="text" ref="editInput" defaultValue={this.props.item.payload}/>
      </form>
      )
    }
    return (
      <div className="out-list__item-iner">
        <button className="del-close" onClick={this.props.onDeleteItem.bind(this, this.props.item.id)}></button>
        <span className="out-list__content">{this.props.item.payload}</span>
        {this.renderDoneButton()}
      </div>
    )
  }

}

export default Item;