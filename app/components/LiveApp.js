import React, { Component } from 'react'
import {connect} from 'react-redux'
import TextForm from './TextForm'

// from state: liveEffect

var socket = io(window.location.origin)

class LiveApp extends Component {
	componentDidMount() {
		socket.on('connect', () => {
			console.log("~~~Getting the socket to work in this component!~~~~~")
		})
		this.handleTouchMove=this.handleTouchMove.bind(this)
	}

	handleTouchMove(e){
		e.preventDefault()
		console.log("handleTouchMove", e)
		let x, y
		x=e.touches[0].clientX
		y=e.touches[0].clientY
		socket.emit('mouse_position', {x, y})
	}

	handleSubmit(e){
		e.preventDefault()
		socket.emit('mouse_position', {x, y})
	}

	render() {
		return (
			<div>
				<h4>Getting to the live app!!</h4>
				<h3>Command: {this.props.command}</h3>
					<div id="p5parent" onTouchMove={this.handleTouchMove}></div>
			</div>
		)
	}
}

const mapStateToProps=state => {
	return {
		command: state.command
	}
}

export default connect(mapStateToProps)(LiveApp);
