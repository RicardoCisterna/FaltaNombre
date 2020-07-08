//action type
const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEAR = 'CONTADOR/SETEAR'

//action creator
export const incrementar =() =>({
    type:INCREMENTAR
})
export const decrementar = () =>({
    type:DECREMENTAR
})
export const setear = payload =>({
    type: SETEAR,
    payload
})

const initialstate = 0
export default function (state = initialstate, action){
    console.log(action)
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        case SETEAR:
            return action.payload
        default:
            return state
    }
}