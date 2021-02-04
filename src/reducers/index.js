/** @format */

export default function (state = {}, action) {
    switch (action.type) {
        case "ADD_JOB_TO_FAV":
            return {
                ...state,
                fav: state.fav.concat(action.payload),

            };
        case "REMOVE_JOB_FROM_FAV":
            return {
                ...state,
                fav: state.fav.filter((job) => job.id !== action.payload),

            };
        case "SELECT_ONE_JOB":
            return {
                ...state,
                selected: action.payload,
            };

        default:
            return state;
    }
}
