import {createReducer} from "@reduxjs/toolkit"
let initState=0
export default createReducer(initState,{
    ['INCREMENT'] :(state) =>(state+1),
    ['DECREMENT'] :(state) =>(state-1),
    ['INIT'] :(state) =>(state=0)
})

// export default (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         case 'INIT':
//             return state = 0
//         default:
//             return state
//     }
// }