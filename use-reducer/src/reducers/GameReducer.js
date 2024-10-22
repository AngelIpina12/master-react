export const GameReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_GAME":
            return [...state, action.payload];
        case "DELETE_GAME":
            return state.filter(game => game.id !== action.payload);
        case "UPDATE_GAME":
            return state.map(game => game.id === action.payload.id ? {...game, title: action.payload.title} : game);
        default:
            return state;
    }
}
