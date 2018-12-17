import {CalendarActionTypes} from "../../actions/types";

export const initialState = {
    dates: [],
    dateErr: null,
    addSuccess: false,
    removeSuccess: false,
    addErr: null,
    removeErr: null
};

export const CalendarReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case CalendarActionTypes.DATES_BY_MONTH:
            if(error) {
                return {
                    ...state,
                    dateErr: error,
                    addSuccess: false
                }
            }
            return {
                ...state,
                dates: payload,
                dateErr: null,
                addSuccess: false
            }
        case CalendarActionTypes.ADD_REMINDER:
            if(error) {
                return {
                    ...state,
                    addErr: error,
                    addSuccess: false,
                    removeSuccess: false
                }
            }
            return {
                ...state,
                addSuccess: true,
                removeSuccess: false,
                addErr: null
            }
        case CalendarActionTypes.REMOVE_REMINDER:
            if(error) {
                return {
                    ...state,
                    removeErr: error,
                    removeSuccess: false,
                    addSuccess: false,
                }
            }
            return {
                ...state,
                removeSuccess: true,
                addSuccess: false,
                removeErr: null
            }
        default:
            return state
    }
}