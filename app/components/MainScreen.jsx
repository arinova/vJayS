import React, { Component } from 'react'
import {connect} from 'react-redux'
import Script from 'react-load-script'

// from state: liveEffect

var socket = io(window.location.origin)

class MainScreen extends Component {

	constructor(){
		super()
		this.state={
			scriptError: false,
			scriptLoaded: false,
			url: ""
		}
	}

	componentWillMount(){
		const script = document.createElement("script");

		        script.src = "/sketch.js";
		        script.async = true;

		        document.body.appendChild(script);

	}

	componentDidMount() {
		socket.on('drawEllipse', ()=>{
			this.setState({url: "/sketch.js", scriptLoaded: false})
		})

		socket.on('drawSnake', ()=>{
			this.setState({url: "/snakeSketch.js",scriptLoaded: false})
		})
	}

	handleScriptLoad(){
		console.log("script loaded");
		this.setState({scriptLoaded: true})
	}

	handleScriptError(){
		console.log("script failed to load");
		this.setState({scriptError: true})
	}

	render() {
		console.log("url", this.state.url);
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

const mapStateToProps=state => {
	return {
		command: state.command
	}
}

export default connect(mapStateToProps)(MainScreen);
