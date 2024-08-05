import React from 'react'

function Cart({items,total,removeItem}) {
  return (
    <div>
        
        <ol className="list-group list-group-numbered">
          { 
           
           items.map ( (item) =>{
            return <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
              {item.price}
            </div>
            </li>
           })
            
            
            }
        </ol>

        <h2 className = "container text-center mt-2"> Total : ₹{total} </h2>
    </div>
  )
}

export default Cart