import { combineReducers } from "redux";
import { changeitems,selectitems} from "./reducer";
const rootreducer=combineReducers(
    {changeitems,selectitems})
export default rootreducer
