import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectlist,removeselectlist} from '../Redux/Action/Action'


export default function Productdetail() {
  
  const dispatch = useDispatch()
  const { productid } = useParams()
  const singleproduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${productid}`).catch((error) => { console.log(error) })
    const sdata = await response.json()
    dispatch(selectlist(sdata))
  }

  const getobj = useSelector((state) => { return state.selectitems })
  
  

  const removelist=()=>{
    dispatch(removeselectlist())
  }
  
  useEffect(() => {
    if(productid && productid!==" ")
    {
      singleproduct()
      return removelist();
    }
    
      
      //after visit page when close it removes selected product in current reducer
  


  }, [productid])

 

  return (
    <div className='container'>
  
      <div className='row'>
        <div className='col-lg-12 my-5'>
        <h2 className='py-4'>Product-Detail</h2>
         <img src={getobj.plist.image} width='180px' height='180px'/>
          <h3 className='my-4'>Title:{getobj.plist.title}</h3>
          <h5>{getobj.plist.description}</h5>
          <h4>Category{getobj.plist.category}</h4>
          <a className='btn btn-primary px-2' >ADD TO CART</a>
          <a className='btn btn-danger'>REMOVE TO CART</a>


        </div>
      </div>
    </div>
  )
}
