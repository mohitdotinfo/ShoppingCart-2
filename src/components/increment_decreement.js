// import React, { useState } from 'react';
// import Child from './child';


// function Incrementbutton() {
//     const [count, setCount] = useState(0);

//     const handleIncrease = () => {  
//         setCount(count + 1)
//     }
//     const handleDecrease = () =>{
//         setCount(count -1)
//     }

//     return (
//         <div>
//             <button onClick={handleIncrease} >+1</button>
//             <Child count = {count}/>
//             <button onClick={handleDecrease}>-1</button>
//         </div>
//     )
// }




// export default Incrementbutton;


// const handleIncerement = () => {
//     this.setState({
//       count: this.state.count + 1
//     });

//   }

//   const handleDecrement = () => {
//     if (this.state.count < 1) {
//       this.setState({
//         count: 0
//       });
//     } else {
//       this.setState({
//         count: this.state.count - 1
//       });
//     }
//   }


//
// const IncrementItem = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
//   const DecreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
//   }

//
//  const Increase = (index) => {
//     // console.log("iiiiiiiii",index);
//     products[index] = {
//         ...products[index],
//         count: products[index].count + 1,
        
//     }
//     // console.log(products[index].count);
//     setcountdata((countdata + 1),products[index])
//     // console.log("products[index]",products[index])
// }
// const Decrease = (index) => {
//     // console.log("iiiiiiiii",index);
//     products[index] = {
//         ...products[index],
//         count: products[index].count - 1,
        
//     }
//     // console.log(products[index].count);
//     setcountdata((countdata - 1),products[index])
//     // console.log("products[index]",products[index])
// }
//  <div>
//             Qty.{item.count} 
//             <br/>
//             Total Price.{item.price * item.count}
//             </div>



// function ShoppingCart() {
//     const [category, setCategory] = useState("MEN");
//     const [cartList, setCartList] = useState([]);
//     const [count, setCount] = useState(0);
//     const productsList = [
//       { id: "1", category: "MEN", count: 1, product: "shirt", price: "500",Size : ["M","L","XL"] ,itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}],  productimage: "https://st.depositphotos.com/1025801/4244/i/950/depositphotos_42448723-stock-photo-shirt-mens-shirt-folded-on.jpg" },
//       { id: "2", category: "MEN", count: 1, product: "t-shirt", price: "300", Size : [ "M","L","XL"],itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}],  productimage: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },
//       { id: "3", category: "MEN", count: 1, product: "kurta", price: "600", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11312628/2020/1/17/551da653-fc10-4645-8957-e2110ba469561579252634270-See-Designs-Men-Blue--White-Printed-Straight-Kurta-715157925-1.jpg" },
//       { id: "4", category: "MEN", count: 1, product: "jeans", price: "700", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPSTUDIO-NEXX-STUD271895E9835E4/1563102342524_0..jpg?imwidth=320&impolicy=hq" },
//       { id: "5", category: "WOMEN", count: 1, product: "frok", price: "600", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://5.imimg.com/data5/SR/VE/MY-34291380/a-line-ladies-frock-500x500.jpeg" },
//       { id: "6", category: "WOMEN", count: 1, product: "kurti", price: "500", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://m.media-amazon.com/images/I/719TfrgUmGL._UL1500_.jpg" },
//       { id: "7", category: "WOMEN", count: 1, product: "saree", price: "900", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://rukminim1.flixcart.com/image/880/1056/k7tdj0w0/sari/z/3/m/free-saree101-tealblue-sariya-unstitched-original-imafpyybbfgpagkr.jpeg?q=50" },
//       { id: "8", category: "WOMEN", count: 1, product: "dress", price: "400", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://rukminim1.flixcart.com/image/714/857/k572gsw0/dress/e/u/y/s-maxy-dress-196-black-daevish-original-imafnxw5wwtgjp3q.jpeg?q=50" },
//       { id: "9", category: "OTHER", count: 1, product: "shoes", price: "600", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg" },
//       { id: "10", category: "OTHER", count: 1, product: "jacket", price: "800", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://i.pinimg.com/originals/86/3e/4c/863e4c28ade87c4324648555edce94e1.jpg" },
//       { id: "11", category: "OTHER", count: 1, product: "sandle", price: "600", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://5.imimg.com/data5/ZL/AT/BR/SELLER-2630785/men-sandle-1000x1000.png" },
//       { id: "12", category: "OTHER", count: 1, product: "watch", price: "500", Size : [ "M","L","XL"], itprice:[{Size:"M",Price:"100"},{Size:"L" ,Price:"200"},{Size:"XL" , Price:"300"}], productimage: "https://m.media-amazon.com/images/I/7194FJHAS0L._AC_UL1300_.jpg" },
  
  
//     ]
//     const [products, setproducts] = useState(productsList);