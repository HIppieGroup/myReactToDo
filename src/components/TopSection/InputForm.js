import React, {Component} from 'react';

class InputForm extends Component {

  createTask(event){
    event.preventDefault();
    const payload = {
      payload: this.refs.inputTask.value,
      isApply: false,
      isEding: false,
      id: Date.now().toString()
    }
    this.props.onAddItem(payload);
    this.refs.inputTask.value = '';
  }

  render() {
    return(
      <form className="todo__form"  onSubmit={this.createTask.bind(this)}>
        <button className="arrow-down" type="button" onClick={this.props.onToggelAll}>V</button>
        <input className="todo__input" type="text" placeholder="what to do" ref="inputTask"/>
      </form>
    );
  }
}

export default InputForm;