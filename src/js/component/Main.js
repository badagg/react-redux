import React from 'react';
import Sprite from './Sprite';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { moveElem } = this.props;
  	
    return (
      <div>
      	<Sprite {...this.props} />
      	<button onClick={()=>moveElem(300,200)}>move</button>
      </div>
    );
  }
}
