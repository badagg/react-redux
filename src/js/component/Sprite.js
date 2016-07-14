import React from 'react';

export default class Sprite extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	const { coordinate } = this.props;

  	let newStyles = {
  		...styles.box,
  		left:coordinate.x,
  		top:coordinate.y
  	}

    return (
      <div style={newStyles}></div>
    );
  }
}

const styles = {
	box:{
		width:50,
		height:50,
		backgroundColor:'#f60',
		position:'absolute',
	}
}