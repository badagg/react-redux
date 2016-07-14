import { MOVE_ELEM } from './actionType';

// actions
export const moveElem = (x,y) => {
	return {
       type:MOVE_ELEM,
       x,
       y
    }
} 