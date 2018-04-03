import React, {Component} from 'react';
import Tile from './Tile';

class Board extends Component {
	constructor(props) {
		super(props);
	}

	board(id, value) {
		this.props.changedBoard(id, value);
	}

	render() {
		const tiles = this.props.board.split('');
		let newTile;
		if (tiles) {
			newTile = tiles.map((tile, index) => {
				if (tile === '.') {
					tile = '';
				}
				return (
					<Tile 
					key = {index}
					id = {index} 
					value = {tile}
					board = {this.board.bind(this)}
					blockTile = {this.props.initialBoard[index] !== '.' ? 'block' : 'modify'}
					/>
				);
			});
		}
		return (
			<div className={'board'}>
				{newTile}
			</div>
		);
	}
}

export default Board;