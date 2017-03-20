import React, { Component } from 'react'
import {connect} from 'react-redux'

// from state: liveEffect

var socket = io(window.location.origin)

class LiveApp extends Component {
	componentDidMount() {
		socket.on('connect', () => {
			console.log("~~~Getting the socket to work in this component!~~~~~")

			// let x, y
			// $(document).on('touchmove', function(e){
			// 	e.preventDefault()
			// 	x=e.pageX
			// 	y=e.pageY
			// 	socket.emit('mouse_position', {x, y})
			// })
			// socket.on('mouse',
			// 	function(data) {
			// 		// Data comes in as whatever was sent, including objects
			// 		console.log("Received: 'mouse' " + data.x + " " + data.y);
			// 		// Send it to all other clients
			// 		socket.broadcast.emit('mouse', data);
			// 	}
			// );
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
