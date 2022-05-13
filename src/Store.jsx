import { legacy_createStore as createstore} from "redux";
import rootreducer from "./Redux/Reducer";
export const storedata=createstore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())