import React, {Component} from 'react';
import Board from './Board';
import sudoku from 'sudoku-umd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    };

    this.newGame = this.newGame.bind(this);
    this.restart = this.restart.bind(this);
    this.check = this.check.bind(this);
    this.solve = this.solve.bind(this);

  }

  newGame() {
    const newBoard = sudoku.generate('medium');
    this.setState({
      initialBoard: newBoard,
      board: newBoard
    });
  }

  solve() {
    const solvedBoard = sudoku.solve(this.state.initialBoard);
    this.setState({
      board: solvedBoard
    });
  }

  restart() {
    const restartBoard = this.state.initialBoard;
    this.setState({
      board: restartBoard
    });
  }

  changedBoard(id, value) {
    const actualSudoku = this.state.board.split('');
    const changesValue = actualSudoku.splice(id, 1, value);
    const updatedSudoku = actualSudoku.join('');
    this.setState({
      board: updatedSudoku
    });
  }

  check() {
    const actualSudoku = this.state.board.split('');
    const solvedBoard = sudoku.solve(this.state.initialBoard).split('');
    const compere = actualSudoku.slice().map((item, index) => {
      if (item === '.') {
        return 'NS';
      } else {
        return item === solvedBoard[index];
      }
    })
    if (compere.indexOf(false) !== -1) {
        alert('You made a mistake');
    } else if (compere.indexOf('NS') !== -1) {
        alert('Keep going, everything is all right');
    } else {
          alert('Congratulations, you solved it!');
    }
}


  render() {
    return (
      <div className='App'>
        <h1>Sudoku</h1>
        <div className='buttons'>
          <button onClick={this.newGame}>New Game</button>
          <button onClick={this.restart}>Restart</button>
          <button onClick={this.check}>Check</button>
          <button onClick={this.solve}>Solution</button>
        </div>
          <Board board={this.state.board} initialBoard={this.state.initialBoard} changedBoard={this.changedBoard.bind(this)}/>
      </div>
    );
  }
}

export default App;
