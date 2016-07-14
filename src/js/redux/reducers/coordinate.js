import { MOVE_ELEM } from '../actions/actionType';

let elemPoint = {x:100,y:100}

const coordinate = (state=elemPoint, action) => {
	switch(action.type){
		case MOVE_ELEM:
			state.x = action.x ? action.x : state.x;
			state.y = action.y ? action.y : state.y;
			return {...state}; // 一定要返回一个新的对象才能更新state
		break;
		default:
			return state;
	}
}

export default coordinate