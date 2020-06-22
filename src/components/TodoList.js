import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NullTodoItem from './NullTodoItem';
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    const container = {
      backgroundColor: '#F8BBD0',
      borderRadius: '5px',
      padding: '15px 22px 22px 22px',
    };

    return (
      <ul className='list-group my-5'>
        <h3 className='text-center' style={{ fontFamily: 'Tahoma' }}>
          Danh sách công việc
        </h3>
        <div style={container}>
          {this.props.items.length > 0 ? (
            items.map(item => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                />
              );
            })
          ) : (
            <NullTodoItem />
          )}

          <button
            type='button'
            className='btn btn-danger btn-block mt-4'
            onClick={clearList}
            style={{ fontFamily: 'Helvetica' }}
          >
            <i className='fas fa-trash' /> Xoá
          </button>
        </div>
      </ul>
    );
  }
}
