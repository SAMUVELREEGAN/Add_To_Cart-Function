import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty , totalUniqueItems , items , totalItems,cartTotal  ,updateItemQuantity ,removeItem ,emptyCart} = useCart()
    if(isEmpty)  return( <h1 className='text-center'>Your Cart is Emty</h1>)
  return (
    <div>
        <Container>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart({totalUniqueItems}) Total Items : ({totalItems})</h5>
                    <table>
                        <tbody>
                        {
                            items.map((item,index)=>{
                               return (
                               <div className="cart_all">
                                 <tr key={index} className='cart_tr'>
                                <td>
                                    <img src={item.pic} style={{width:"200px"}} alt=''/>
                                </td>
                                <td>{item.name}</td>
                                <td> Total Price :{item.price}</td>
                                <td>Quantity :{item.quantity}</td>
                                <td>
                                    <button onClick={()=>updateItemQuantity(item.id , item.quantity-1)} className='bg-primary'>-</button>
                                    <button onClick={()=>updateItemQuantity(item.id , item.quantity+1)} className='bg-primary'>+</button>
                                    <button onClick={()=>removeItem(item.id )} className='bg-dark text-light'>Remove Item</button>
                                </td>
                            </tr>
                               </div>
                               )
                            })
                        }
                        </tbody>
                        
                    </table>
                    <h2>Total Price :{cartTotal}</h2>
                    <button onClick={emptyCart} className='bg-danger text-light my-4'>Clear Cart</button>
                    <button className='ms-4 bg-success text-light'>Buy Now</button>
                </div>
               
            </div>
        </Container>
        
    </div>
    
  )
}

export default Cart