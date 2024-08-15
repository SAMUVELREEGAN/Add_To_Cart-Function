import React, { useState } from 'react'
import data from './data/AllData'
import Product from './Product'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
    const [datas] =useState(data)
  return (
   <Container>
     <div className='home_product'>
        {
            datas.map((item,index)=>{
               return(
                <Product pic={item.pic} name={item.name} price={item.price} key={index} item={item}/>
               )
            })
        }
    </div>
   </Container>
  )
}

export default Home