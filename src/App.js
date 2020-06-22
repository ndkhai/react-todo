import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import Alert from './components/Alert';
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
    alert: null,
  };

  handleChange = e => {
    this.setState({
      alert: null,
      item: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item.trim(),
    };

    let updatedItems = [...this.state.items];

    if (newItem.title.length > 0) {
      updatedItems = updatedItems.concat(newItem);
    } else {
      this.setState({
        alert: 'Vui lòng nhập công việc!',
      });
      setTimeout(
        () =>
          this.setState({
            alert: null,
          }),
        2500
      );
    }

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    const row = {};

    return (
      <div className='container'>
        <div className='row' style={row}>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <Alert alert={this.state.alert} />
            <h3 className='text-center' style={{ fontFamily: 'Tahoma' }}>
              Nhập Công Việc
            </h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
