import React, { Component } from 'react'
import {connect} from 'react-redux'
import Script from 'react-load-script'
import P5Wrapper from 'react-p5-wrapper'
import {sketch, sketch2} from '../sketches/sketch'

// from state: liveEffect
var socket = io(window.location.origin)

class MainScreen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sketchFunction: sketch
		}
	}

	componentDidMount() {
		socket.on('drawColorEllipse', () => {
			this.setState({sketchFunction: sketch2})
		})

		socket.on('drawWhiteEllipse', () => {
			this.setState({sketchFunction: sketch})
		})
	}

	render() {

		// let sketchFunction

		// switch(this.props.command) {
		// 	case "white":
		// 		sketchFunction = sketch; break;

		// 	case "color":
		// 		sketchFunction = sketch2; break;

		// 	default: sketchFunction = sketch;
		// }

		return (
			<div>
				<h4>We're at the main screen!!</h4>
        <div className="mainScreen">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FdUj7KCO_G0" frameBorder="0" allowFullScreen></iframe>
          {
          	this.state.sketchFunction === sketch ?
						<div id="p5parent" class="p5parents">
							<P5Wrapper sketch={sketch}/>
						</div> : null
          }
          {
          	this.state.sketchFunction === sketch2 ?
						<div id="p6parent" class="p5parents">
							<P5Wrapper sketch={sketch2}/>
						</div> : null
          }
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
