import React, { ReactNode } from 'react';
import Block from '../block/Block';
import './Board.css'

interface BoardProps {

};

interface BoardState {
  numberRows: number;
  numberCols: number;
};

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps | Readonly<BoardState>) {
    super(props)
    this.state = {
      numberRows: 4,
      numberCols: 4
    };
  }

  // Seeing that I won't actually be persiting the state of individual blocks here, this method is 
  // Kind of useless in itself. Think about modifying this in the future.
  generateBoard(): Array<Array<Block>> {
    const board = new Array<Array<Block>>();
    for (let row = 0; row < this.state.numberRows; row++) {
      let row = new Array<Block>();
      for(let col = 0; col < this.state.numberCols; col++) {
        row.push(new Block({}));
      }
      board.push(row);
    }
    return board;
  }

  render(): React.ReactNode {
    const board = this.generateBoard();
    return (
      <div className='board'>
        {board.map((row, index) => {
          return (
            <div>
            {row.map((item, index) => {
              return <Block />;
            })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
