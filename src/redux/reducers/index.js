import {combineReducers} from 'redux';
import {CalendarReducer} from "./calendar";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    form: formReducer,
    CalendarReducer
});

export default reducers;