import React, { Component } from 'react'

export default props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <input
          name= "message"
          className="form-control"
          placeholder="Enter message here..."
          />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  )
}
