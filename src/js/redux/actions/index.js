import { MOVE_ELEM,LOAD_DATA,CHANGE_NAME } from './actionType';
import $ from 'jquery';

// actions
export const moveElem = (x,y) => {
	return {
       type:MOVE_ELEM,
       x,
       y
    }
}

export const loadData = () => {
	return function (dispatch) {
		$.ajax({
			url: 'http://ued.yihaodian.com:3001/api/61',
			type: 'GET',
			dataType: 'jsonp'
		})
		.done(function(data) {
			dispatch({ 
				type:LOAD_DATA,
				data:data
			})
		})
    }
}

export const changeName = () =>{
	return {
		type:CHANGE_NAME
	}
}