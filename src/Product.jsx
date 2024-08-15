import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart'

const Product = (props) => {
    const {addItem} = useCart()
  return (
    <div>
         <Card className='product_card'>
      <Card.Img variant="top" src={props.pic} className='product_img'/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>Price : {props.price}</Card.Title>
        <Button variant="primary" onClick={()=>addItem(props.item)}>Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product