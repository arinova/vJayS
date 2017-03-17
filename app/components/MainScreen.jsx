import React, { Component } from 'react'
import {connect} from 'react-redux'

// from state: liveEffect

var socket = io(window.location.origin)

export default class MainScreen extends Component {
	componentDidMount() {
		// socket.on('connect', () => {
		// 	console.log("~~~MainScreen Socket~~~~~")
		// })
    //
    // socket.on('sendMousePostoMain', (data)=>{
    //   console.log("main",data);
    //   redraw();
    // })
	}

	render() {
		return (
			<div>
				<h4>We're at the main screen!!</h4>
        <div className="mainScreen">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FdUj7KCO_G0" frameborder="0" allowfullscreen></iframe>
          <div id="p5parent"></div>
        </div>
			</div>
		)
	}
}
