import React from 'react';
import Sprite from './Sprite';
import List from './List';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  	const { moveElem,changeName } = this.props;
  	
    return (
      <div>
      	<Sprite coordinate = {this.props.coordinate} />
        <List listData = {this.props.listData} loadData = {this.props.loadData} />
      	<button onClick={()=>{
          let x = Math.random()*600
          let y = Math.random()*400
          moveElem(x,y)
        }}>move</button>
        <button onClick={()=>{
          changeName()
        }}>changeName</button>
      </div>
    );
  }
}
