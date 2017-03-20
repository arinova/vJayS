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
			scriptLoaded: false
		}
	}

	componentDidMount() {
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
		let url;
		console.log("command first:", this.props.command)
		switch(this.props.command){
			case "ellipse":
				url="/sketch.js"; break;
			case "snake":
				url="/snakeSketch.js"; break;
			default: url=null;
		}

		console.log("url", url);
		return (
			<div>
				<h4>We're at the main screen!!</h4>
        <div className="mainScreen">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FdUj7KCO_G0" frameborder="0" allowfullscreen></iframe>
          <div id="p5parent"></div>
					<Script
						url={url}
						onError={this.handleScriptError.bind(this)}
						onLoad={this.handleScriptLoad.bind(this)}
						/>
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
