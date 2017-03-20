import React, { Component } from 'react'
import {connect} from 'react-redux'

// from state: liveEffect

var socket = io(window.location.origin)

export default class Controller extends Component {


	componentDidMount() {

	}

  handleClearButton(){
    socket.emit("clearButtonClicked")
  }

	handleEllipseButton(){
		socket.emit("ellipseButtonClicked")
	}

	handleSnakeButton(){
		socket.emit("snakeButtonClicked")
	}

	render() {
		return (
			<div>
				<h4>Controllerrrr</h4>
				<button onClick={this.handleEllipseButton}>Clear</button>
				<button onClick={this.handleSnakeButton}>Clear</button>
        <button onClick={this.handleClearButton}>Clear</button>
			</div>
		)
	}
}
