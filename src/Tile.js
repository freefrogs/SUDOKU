import React, {Component} from 'react';

class Tile extends Component {

	handleChange(event) {
		if (event.target.value > 0 && event.target.value < 10 && event.target.value.length === 1) {
			this.props.board(event.target.id, event.target.value);
		}
	}

	handleSelect(event) {
		event.target.select();
	}

	render() {
		let tileItem;
		if (this.props.blockTile === 'modify') {
			tileItem =
			<input 
				className = 'modify'
				id = {this.props.id}
				type = 'number'
				min = '1'
				max = '9'
				value = {this.props.value}
				onChange = {this.handleChange.bind(this)}
				onClick = {this.handleSelect.bind(this)}
			/>
		} else {
			tileItem = <input type='number' value={this.props.value} className='read_only' readOnly />
		}
		
		return (
			<div className='tile'>
				{tileItem}
			</div>
		);
	}
}

export default Tile;