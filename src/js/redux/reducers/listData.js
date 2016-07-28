import { LOAD_DATA,CHANGE_NAME } from '../actions/actionType';

let initData = [];

const listData = (state=initData, action) => {
	switch(action.type){
		case LOAD_DATA:
			state = action.data;
			return {...state};
		break;
		case CHANGE_NAME:
			state.name = "韩红桃";
			return {...state}
		break;
		default:
			return state;
	}
}

export default listData