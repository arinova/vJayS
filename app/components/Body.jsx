import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Deck} from './Deck'
import Controller from '../containers/Controller'

export const Body = () => (
	<Grid columns='three' divided>
		<Grid.Row>
			<Grid.Column>
				<Deck 
					direction='Left'
				/>
			</Grid.Column>
			<Grid.Column>
				{<Controller />}
			</Grid.Column>
			<Grid.Column>
				<Deck 
					direction='Right'
				/>
			</Grid.Column>
		</Grid.Row>
	</Grid>
)