//questions: how do we know what to export?!??!



import {Map} from 'immutable';

// export default function reducer(state, action) {


export const MOVE = 'MOVE';

export const move = (player, position) => ({
	type: MOVE,
	position,
	player
});


function turn (current = 'X', action) {
	if (action.type === MOVE){
		return current === 'X' ? 'O' : 'X';
	} else {
		return current;
	}
}


function board (board = Map(), {type, position, player}){
	if (type === MOVE){
		return board.setIn(position, player);
	} else {
		return board;
	}
}

// function streak(){

// }

// export function winner(){

// }

export default function reducer(state = {}, action){


}
	// const newState = Object.assign({}, state)
	// 	switch(action.type){
	// 		case MOVE:

	// 		board = newState.board
	// 		turn = newState.turn
	// 	}

	// return {
	// 	board: board(state.board,action),
	// 	turn: turn(state.turn, action),
	// }


// }
