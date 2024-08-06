# App URL : https://cartdealsforyou.netlify.app/ 
# App Description :
This app shows the list of products with name, price and description on left section
We can add the products to cart and remove products from cart
On right section, information of added products will be shown with total price and number of products added

# Additional functionality :
When the mouse is placed over any product image, image will be showm as maximized

# File Details  :
 Along with App.jsx , added 2 more files Product.jsx which shows products details and Cart.jsx which shows summary of Cart with total
 Product details are defined in JSON array and passed to Product Component
 To implement responsiveness, inside useEffects of App.js , added code to setWindowWidth
