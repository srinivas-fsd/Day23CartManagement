import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product";
import Cart from "./Cart";
import { useState,useEffect } from "react";
import "./App.css"

function App()
{
  //For resizing window based on screen width
   const [width, setWindowWidth] = useState(0)
   useEffect(() => { 
    updateDimensions();
    window.addEventListener('resize',updateDimensions);
    return () => 
       window.addEventListener('resize',updateDimensions);
   }, [])
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   } 


  const [total,setTotal] = useState(0)
  const [items,setItems] = useState([]);

  let addItem = (prod) =>{
    setItems([...items,prod]);
    let tot= parseFloat(total + prod.price)
    setTotal(parseFloat(tot.toFixed(2)))

  }

  let removeItem = (prod) =>{
    let index = items.findIndex( item => item.name=== prod.name);
    if(index!=-1)
    {
      items.splice(index,1)
      
      setItems([...items])
      let tot= parseFloat(total - prod.price)
      setTotal( Math.round(tot))
    }
  }
  const products = [
    {
        "name": "Diamond Solitaire Ring",
        "price": 2499.99,
        "description": "1-carat diamond solitaire ring",
        "image_url": "https://www.thbaker.co.uk/pub/media/catalog/product/cache/e8812041c301388cf8cfa5724aae2db1/4/1/41-12-219_1.jpg"
    },
    {
        "name": "Heart Pendant Necklace",
        "price": 799.99,
        "description": "Elegant 18k gold heart chain",
        "image_url": "https://cdn.shopify.com/s/files/1/0326/2971/9176/products/18k-gold-plated-puffed-heart-pendant-necklace-jewelry-dailysale-382372_800x.jpg?v=1583245908"
    },
    {
        "name": "Emerald Earrings",
        "price": 1399.99,
        "description": "Exquisite 14k white gold.",
        "image_url": "https://romanovrussia.com/wp-content/uploads/2019/07/insta02-08-18_4492.jpg"
    },
    {
        "name": "Pearl Drop Earrings",
        "price": 299.99,
        "description": "Timeless 14k gold hooks",
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.3l9MY7E_w025kzjmGXDp3AHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Platinum Wedding Band",
        "price": 499.99,
        "description": "Classic band polished finish",
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.kqopInsYA8_9cpj0dk0wQgHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Rose Gold Bracelet",
        "price": 449.99,
        "description": "Delicate links & secure clasp",
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.u66ao7_qJxMmFUhCpZrjaQHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Sapphire Ring",
        "price": 1599.99,
        "description": "Deep blue  center stone",
        "image_url": "https://i.pinimg.com/originals/7d/2a/31/7d2a316a882c5963b4eaf0dfcefda18f.jpg"
    },
    {
        "name": "Vintage Silver Locket",
        "price": 349.99,
        "description": "Charming intricate engravings",
        "image_url": "https://i.etsystatic.com/12499385/r/il/0d5dd7/2158972239/il_fullxfull.2158972239_6wqc.jpg"
    },
    {
        "name": "Garnet Necklace",
        "price": 499.99,
        "description": "Pendant set in 14k gold",
        "image_url": "https://tse2.mm.bing.net/th?id=OIP.2rZ7M9Zh1Smd2AkmpN7dxwHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Gold Hoop Earrings",
        "price": 229.99,
        "description": "Classic polished finish",
        "image_url": "https://tse1.mm.bing.net/th?id=OIP.mTwQq_esJwtsxvircl_6ywHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Diamond Bracelet",
        "price": 1999.99,
        "description": "Sparkling diamonds 18k  gold",
        "image_url": "https://cdn.shopify.com/s/files/1/2988/2568/products/0E8A0097_9866aaf3-22cf-42ed-95a8-ad7983e9aaac_900x.jpg?v=1579560027"
    },
    {
        "name": "Opal Cocktail Ring",
        "price": 899.99,
        "description": "14k gold with diamonds.",
        "image_url": "https://tse3.mm.bing.net/th?id=OIP.OFfzfYNMlwT1V1RMDl7HiQHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
        "name": "Aquamarine Earrings",
        "price": 399.99,
        "description": "Elegant serene blue hue",
        "image_url": "https://i.pinimg.com/originals/4a/b3/a3/4ab3a34cc4a0a9e0ca1883904527c0a4.jpg"
    },
    {
        "name": "Silver Cufflinks",
        "price": 249.99,
        "description": "Cufflinks polished finish",
        "image_url": "https://img0.etsystatic.com/000/0/5330526/il_fullxfull.327615426.jpg"
    },
    {
        "name": "Ruby Diamond Pendant",
        "price": 799.99,
        "description": "Ruby diamond accents",
        "image_url": "https://i.pinimg.com/originals/4a/fc/fa/4afcfaf59998a760a302b145e6a8cad5.jpg"
    }
]

  return <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex flex-wrap">
              {
                products.map((product)=>{
                    return <Product  product={product} addItem = {addItem} removeItem={removeItem}/>
                })
              }
          </div>
          
        </div>
        <div className="col-lg-4">
            <h3 className="container text-center"> Cart({items.length}) </h3>
            <Cart items={items} total = {total} />
        </div>
      </div>
    </div>

  </div>
}

export default App;