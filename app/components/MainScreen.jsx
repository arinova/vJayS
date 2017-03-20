import React, { Component } from 'react'
import {connect} from 'react-redux'
import Script from 'react-load-script'
import P5Wrapper from 'react-p5-wrapper'
import {sketch, sketch2} from '../sketches/sketch'

// from state: liveEffect


class MainScreen extends Component {
	render() {
		
		let sketchFunction

		switch(this.props.command) {
			case "white": 
				sketchFunction = sketch; break;

			case "color":
				sketchFunction = sketch2; break;

			default: sketchFunction = sketch;
		}

		return (
			<div>
				<h4>We're at the main screen!!</h4>
        <div className="mainScreen">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FdUj7KCO_G0" frameBorder="0" allowFullScreen></iframe>
					<div id="p5parent">
						<P5Wrapper sketch={sketchFunction}/>
					</div>
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
