import React, { useContext } from 'react'
import CartContext from '../CartContext'


function Cart() {
  let {state,dispatch}=useContext(CartContext)
  return (
    <>
   <div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {state.cartItems.map((a)=>(
   <tr>
   <td className="col-sm-8 col-md-6">
     <div className="media">
       <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: 72, height: 72}} /> </a>
       <div className="media-body">
         <h4 className="media-heading"><a href="#">{a.title}</a></h4>
         <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
         <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
       </div>
     </div></td>
     

   <td className="col-sm-1 col-md-1">
     <button  type="button" className="btn btn-danger" onClick={()=>dispatch({type:'remove',payload:a})} >
       <span className="glyphicon glyphicon-remove" /> Remove
     </button></td>
 </tr>
          ))}
       
          
           
          
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td><h5>Estimated shipping</h5></td>
            <td className="text-right"><h5><strong>$6.94</strong></h5></td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td><h3>Total</h3></td>
            <td className="text-right"><h3><strong>$31.53</strong></h3></td>
          </tr>
          <tr>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td> &nbsp; </td>
            <td>
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
              </button></td>
            <td>
              <button type="button" className="btn btn-success">
                Checkout <span className="glyphicon glyphicon-play" />
              </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  )
}

export default Cart
