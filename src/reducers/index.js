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
        case "POPULATE_JOB_LIST":
            return {
                ...state,
                jobList: action.payload,
            };
        //errors
        case "SET_ERROR_CODE":
            return {
                ...state,
                errCode: action.payload,
            };
        case "SET_ERROR_MESSAGE":
            return {
                ...state,
                errMessage: action.payload,
            };
        case "TOGGLE_ERROR":
            return {
                ...state,
                show: action.payload,
            };

        default:
            return state;
    }
}
