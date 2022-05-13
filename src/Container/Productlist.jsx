import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { productlist } from '../Redux/Action/Action'
import { Link } from "react-router-dom";

export default function Productlist() {
  const obj1 = useSelector(
    (state) =>                                   //Here callback func which is seperate function returs it owns seperate value and usd as params.
    { return state.changeitems }

  )




  const data = obj1.plist.map((value) =>
    <div className='col-lg-4 plist' key={value.id}>
      <Link to={`/productdetail/${value.id}`}>

        <img src={value.image} width='100px' height='80px' />
        <h4>Title:{value.title}</h4>
        <h4>Category:{value.category}</h4>
        <h4>Description:{value.description}</h4>
        <h4>Price:{value.price}</h4>
      

        </Link>
    </div>
  )
  const dispatch = useDispatch()
  const plist = async () => {
    const response = await fetch('https://fakestoreapi.com/products').catch((error) => { console.log(error) })
    const jdata = await response.json()
    dispatch(productlist(jdata)
    )
  }
  useEffect(() => {
    plist()
  }, [])



  return (
    <div>

      <Header />
      <div className='container'>
        <div className='row'>
          {data}

        </div>
      </div>
    </div>
  )
}
