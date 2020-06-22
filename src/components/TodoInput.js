import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div
        className='card card-body my-3'
        style={
          editItem
            ? { backgroundColor: '#C8E6C9' }
            : { backgroundColor: '#73BDF8' }
        }
      >
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div
                className={
                  editItem
                    ? 'input-group-text bg-success text-white'
                    : 'input-group-text bg-primary text-white'
                }
              >
                <i className='fas fa-book' />
              </div>
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='Nhập công việc...'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className={
              editItem
                ? 'btn btn-block btn-success mt-3'
                : 'btn btn-block btn-primary mt-4'
            }
            style={{ fontFamily: 'Helvetica' }}
          >
            <i className={editItem ? 'fas fa-sync' : 'fas fa-plus'} />
            {editItem ? ' Sửa' : ' Thêm'}
          </button>
        </form>
      </div>
    );
  }
}
