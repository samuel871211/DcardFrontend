export default function AllReducers(state = {}, action) {
    switch (action.type) {
        case 'ROUTEANDCOUNT':
            return action.payload
        default:
            return state
    }
}