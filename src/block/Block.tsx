import React from 'react';
import './Block.css';

class Block extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      visited: false
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        I am a block!
      </div>
    );
  }
}

export default Block;
