import { useState } from "react";
function Product({product,addItem,removeItem})
{

  const [cartButtonText,setCartButtonText] = useState("Add to Cart");

    function setButtonMessage(existingMessage) 
    {
      if(existingMessage==="Add to Cart")
      {
        addItem(product);
        setCartButtonText("Remove from Cart");
      }
      else
      {
        removeItem(product);
        setCartButtonText("Add to Cart");
      }
    } 

   
    return <div className='col-sm-4 mb-3'>
         <div className="card" style={{width: '16rem'}}>
              <img src={product.image_url} className="card-img-top img-tf" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6>₹{product.price}</h6>
                <p>{product.description}</p>
                <button className="btn btn-primary container text-center" onClick ={ ()=> { setButtonMessage(cartButtonText) }}>{cartButtonText}</button>
              </div>
            </div>
    </div>
}

export default Product;