import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImportForm from './components/TopSection/InputForm';
import { ListItems } from './components/ListComponents';
import FilterButton from './components/FilterButton/FilterButton'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <ImportForm 
          onAddItem={this.onAddItem.bind(this)}
          onToggelAll={this.props.onToggelAll}
          />
        <FilterButton 
          onActive={this.props.filterReducer}
          onDisplayAll={this.props.onDisplayAll}
          onDisplayDone={this.props.onDisplayDone}
          onDisplayActive={this.props.onDisplayActive}
        />
        <ListItems 
          items={this.props.itemReducer} 
          onDoneItem={this.onDoneItem.bind(this)}
          onDeleteItem={this.onDeleteItem.bind(this)}
          onEdingItem={this.onEdingItem.bind(this)}
          onSaveItemEding={this.onSaveItemEding.bind(this)}
        />
      </div>
    );
  }


  onAddItem(taskText) {
    this.props.onAddTask(taskText);
  }

  onDoneItem(taskId) {
    this.props.onDoneTask(taskId);
  }

  onDeleteItem(taskId) {
    this.props.onDeleteTask(taskId);
  }

  onEdingItem(taskId) {
    this.props.onEdingTask(taskId);
  }

  onSaveItemEding(payload) {
    this.props.onSaveEdit(payload);
  }

}

export default connect(
  state => ({
    itemReducer: state.itemReducer.filter(item => { 
      if (state.filterReducer === null) {
        return true;
      }
      return item.isApply === state.filterReducer 
    }),
    filterReducer: state.filterReducer
  }),
  dispatch => ({
    onAddTask(payload) {
      dispatch({ type: 'ADD_TASK', payload})
    },
    onDoneTask(taskId) {
      dispatch({ type: 'TOGGLE_DONE', doneTask: taskId})
    },
    onDeleteTask(taskId) {
      dispatch({ type: 'DELETE_TASK', deleteTask: taskId})
    },
    onEdingTask(taskId) {
      dispatch({ type: 'EDING_TASK', editTask: taskId})
    },
    onSaveEdit(payload) {
      dispatch({ type: 'SAVE_EDING_TASK', payload })
    },
    onToggelAll() {
      dispatch({ type: 'TOGGLE_ALL' })
    },
    onDisplayAll() {
      dispatch({ type: 'DISPLAY_ALL'})
    },
    onDisplayDone() {
      dispatch({ type: 'DISPLAY_DONE'})
    },
    onDisplayActive() {
      dispatch({ type: 'DISPLAY_ACTIVE'})      
    }
  })
  )(App);
