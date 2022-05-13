
import { listproduct,selectproduct,removeselectdata} from "../Constaint.jsx/Constaint"

 const initialstate={
     plist:[]
 }
 
export const changeitems=((state=initialstate,action)=>{

    switch(action.type){
        case listproduct:
            return{...state,
                    plist:action.data}
            
        default:return state
    }

})
 
export const selectitems=((state=initialstate,action)=>{

    switch(action.type){
        case selectproduct:
            return{...state,
                    plist:action.data}
        case removeselectdata:return {
            ...state,plist:[]
        }
            
        default:return state
    }

})

