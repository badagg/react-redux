import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadData,listData } = this.props;
    loadData();
  }

  //优化
  shouldComponentUpdate(nextProps, nextState) {
  	const { listData } = this.props;
    return listData != nextProps.listData;
  }

  render() {
  	const { listData } = this.props;
  	console.log('我可是做了优化的哦 其他数据改变跟我无关')
    return (
      <div>
      	<h1>{listData.name || 'zkey'}</h1>
		<p>{listData.url}</p>
		<p>{listData.email}</p>
		<p>{listData.ip}</p>
		<p>{listData.datatime}</p>
      </div>
    );
  }
}
