
import { listproduct,selectproduct,removeselectdata,addcart,removecart} from '../Constaint.jsx/Constaint'

export const productlist=(data)=>{
    return{
        type:listproduct,
        data:data
    
    }
}
export const selectlist=(data)=>{
    return{
        type:selectproduct,
        data:data
    
    }
}
export const removeselectlist=()=>{
    return{
        type:removeselectdata}
}



