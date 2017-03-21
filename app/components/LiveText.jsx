import React, { Component } from 'react'
import {connect} from 'react-redux'
import TextForm from './TextForm'

var socket = io(window.location.origin)

export default class LiveText extends Component {
	componentDidMount() {
		socket.on('connect', () => {
			console.log("~~~Getting the socket to work in this component!~~~~~")
		})
		this.handleSubmit=this.handleSubmit.bind(this)
	}

	handleSubmit(e){
		e.preventDefault()
    console.log("submit", e.target.message.value)
		socket.emit('sendMessage', e.target.message.value)
	}

	render() {
		return (
			<div>
				<h4>Enter a Text</h4>
				<TextForm
          handleSubmit={this.handleSubmit}
          />
			</div>
		)
	}
}
