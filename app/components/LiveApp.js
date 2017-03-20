import React, { Component } from 'react'
import {connect} from 'react-redux'

// from state: liveEffect

var socket = io(window.location.origin)

export default class LiveApp extends Component {
	componentDidMount() {
		socket.on('connect', () => {
			console.log("~~~Getting the socket to work in this component!~~~~~")

			let x, y
			$(document).on('touchmove', function(e){
				e.preventDefault()
				x=e.pageX
				y=e.pageY
				socket.emit('mouse_position', {x, y})
			})
			// socket.on('mouse',
			// 	function(data) {
			// 		// Data comes in as whatever was sent, including objects
			// 		console.log("Received: 'mouse' " + data.x + " " + data.y);
			// 		// Send it to all other clients
			// 		socket.broadcast.emit('mouse', data);
			// 	}
			// );


		})
	}

	render() {
		return (
			<div>
				<h4>Getting to the live app!!</h4>
					<div id="p5parent"></div>
			</div>
		)
	}
}

// const mapStateToProps = state => ({
// 	liveEffect = state.liveEffect
// })

// export default connect(mapStateToProps)(LiveApp)
