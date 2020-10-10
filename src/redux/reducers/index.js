import {combineReducers} from "redux";
import {heroReducer} from "./heroes";

export const allReducers = combineReducers({heroReducer});
