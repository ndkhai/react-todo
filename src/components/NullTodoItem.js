import React, { Component } from 'react';

export default class NullTodoItem extends Component {
  render() {
    return (
      <li className='list-group-item d-flex justify-content-between my-2'>
        <h6 style={{ color: 'grey' }}>Không có công việc cần làm</h6>
      </li>
    );
  }
}
