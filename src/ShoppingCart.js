import './App.css';
import React, { useState, Child } from 'react';
import { Container, Row, Col, Form, Card, Button, ListGroup, Offcanvas } from 'react-bootstrap'
import Category from './category';
import Products from './products';
import Cart from './cart';



function ShoppingCart() {
  const [category, setCategory] = useState("MEN");
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);
  const [componentKey, setComponentKey] = useState(0);
  const [Size, setSize] = useState();
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [phnumber, setphnumber] = useState('')
  const productsList = [
    { id: "1", category: "MEN", count: 1, product: "shirt", price: "500", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://st.depositphotos.com/1025801/4244/i/950/depositphotos_42448723-stock-photo-shirt-mens-shirt-folded-on.jpg" },
    { id: "2", category: "MEN", count: 1, product: "t-shirt", price: "300", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },
    { id: "3", category: "MEN", count: 1, product: "kurta", price: "600", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11312628/2020/1/17/551da653-fc10-4645-8957-e2110ba469561579252634270-See-Designs-Men-Blue--White-Printed-Straight-Kurta-715157925-1.jpg" },
    { id: "4", category: "MEN", count: 1, product: "jeans", price: "700", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPSTUDIO-NEXX-STUD271895E9835E4/1563102342524_0..jpg?imwidth=320&impolicy=hq" },
    { id: "5", category: "WOMEN", count: 1, product: "frok", price: "600", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://5.imimg.com/data5/SR/VE/MY-34291380/a-line-ladies-frock-500x500.jpeg" },
    { id: "6", category: "WOMEN", count: 1, product: "kurti", price: "500", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://m.media-amazon.com/images/I/719TfrgUmGL._UL1500_.jpg" },
    { id: "7", category: "WOMEN", count: 1, product: "saree", price: "900", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://rukminim1.flixcart.com/image/880/1056/k7tdj0w0/sari/z/3/m/free-saree101-tealblue-sariya-unstitched-original-imafpyybbfgpagkr.jpeg?q=50" },
    { id: "8", category: "WOMEN", count: 1, product: "dress", price: "400", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://rukminim1.flixcart.com/image/714/857/k572gsw0/dress/e/u/y/s-maxy-dress-196-black-daevish-original-imafnxw5wwtgjp3q.jpeg?q=50" },
    { id: "9", category: "OTHER", count: 1, product: "shoes", price: "600", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg" },
    { id: "10", category: "OTHER", count: 1, product: "jacket", price: "800", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://i.pinimg.com/originals/86/3e/4c/863e4c28ade87c4324648555edce94e1.jpg" },
    { id: "11", category: "OTHER", count: 1, product: "sandle", price: "600", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://5.imimg.com/data5/ZL/AT/BR/SELLER-2630785/men-sandle-1000x1000.png" },
    { id: "12", category: "OTHER", count: 1, product: "watch", price: "500", itprice: [{ Size: "M", Price: "100" }, { Size: "L", Price: "200" }, { Size: "XL", Price: "300" }], productimage: "https://m.media-amazon.com/images/I/7194FJHAS0L._AC_UL1300_.jpg" },


  ]
  const [products, setproducts] = useState(productsList);




  const SizeSelect = (id, size) => {
    const productindex = products.findIndex(ele => ele.id === id)
    products[productindex] = {
      ...products[productindex],
      selectedSize: size.Size,
      price: size.Price,
    }
    setCount((count + 1), products[productindex])




  }

  const handleSelect = (event) => {
    console.log("function called", event.target.value)
    setCategory(event.target.value)
  }


  //   const CartData = (data) => {s
  //     console.log("hello", data)
  //     setCartList([...cartList, data])

  //     const productIndex = products.every((item) => {
  //       return item.id !== data;
  //     });
  //     if (productIndex) {
  //       const cartdata = products.filter((el) => {
  //         return el.id === data;
  //       });
  //       setCartList([...cartdata, data]);
  //     } else {

  //   }
  // }

  // const CartData = (data) => {
  //   if(cartList.length){
  //     cartList && cartList.filter((cr, i)=> {


  const CartData = (data) => {
    // console.log(data.count);
    if (cartList.length) {
      cartList && cartList.filter((cr, i) => {
        if (cr.id === data.id && cr.selectsize === data.selectsize) {
          cartList[i] = {
            ...cartList[i],
            count: cartList[i].count + data.count,
          }
          setComponentKey(componentKey + 1)
          return;
        }
        setCartList([...cartList, data]);
      })
    } else {
      setCartList([...cartList, data]);
    }
  }


  //   const check_index = cartList.filter(item => item.id === data);
  //   if (check_index !== -1) {
  //     CartData[check_index].count + 1;
  //     console.log("Quantity updated:", CartData);
  //   } else {
  //     CartData.push({ ...products.find(el => el.id === data), count })
  //     console.log('The product has been added to cart:', CartData);
  //   }
  // }


  const RemoveEvent = (index) => {
    console.log(index)
    setCartList(cartList.filter((e, i) => i !== index))
    // setCartList(cartList.splice(index, 1))

    // cartList.splice(index, 1);
  }


  const handleIncrease = (id) => {
    const productindex = products.findIndex(ele => ele.id === id)
    products[productindex] = {
      ...products[productindex],
      count: products[productindex].count + 1,
    }
    setCount((count + 1), products[productindex])

    // setCount(count.filter(item =>  {
    //   item.index = item.index + 1; })
    // )
    // console.log("increase called");
    // setCount(count + 1)


    console.log(count);
  }
  const handleDecrease = (id) => {
    const productindex = products.findIndex(ele => ele.id === id)
    if (products[productindex].count > 1) {

      products[productindex] = {
        ...products[productindex],
        count: products[productindex].count - 1,
      }
    }
    setCount((count - 1), products[productindex])



    // setCount(count.filter(item =>  {
    //   item.index = item.index + 1; })
    // )
    // console.log("increase called");
    // setCount(count + 1)


    console.log(count);

    // const CartTotal = () => {
    //   const items = useSelector(state => state.cart.items);
    //   const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    // }
  }
  //
  // const handlesubmit = () => {
  //   localStorage.setItem("fname", fname)
  //   localStorage.setItem("lname", lname)
  //   localStorage.setItem("phnumber", phnumber)

  //   localStorage["fname"] = JSON.stringify();

  // }






  function OffCanvasExample({ ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesubmit = () => {
      localStorage.setItem('First_Name', fname);
      localStorage.setItem('Last_Name', lname);
      localStorage.setItem('ph_number', phnumber);
      localStorage[""] = JSON.stringify();
    };

    let formData = {};

    const inputChange = (e) => {
      const { name, value} = e.target
      formData = {
        ...formData,
        [name] : value
      }
    }

    const saveData = (e) => {
      const form = JSON.stringify(formData)
      localStorage.setItem("formData", form)
      e.preventDefault()
    }


    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          Menu
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Customer Details  Form</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

                       
             <label for="fname">ENTER YOUR FIRST NAME:</label>
              <input onChange = {inputChange}  type="text"  name="fname" id="fname" /><br /><br />
              <label for="lname">ENTER YOUR LAST NAME:</label>
              <input  onChange = {inputChange} type="text" name="lname" id="lname" /><br /><br />
              <label  for="ph.number">ENTER YOUR PHONE NUMBER:</label>
              <input onChange = {inputChange} type="text" name="phnumber" id="phnumber" /><br /><br />

              <input variant="primary" type="submit" name="submit" class="btn btn-success" onClick={saveData} /> 





          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  // localStorage["fname"] = JSON.stringify();

  // constructor(props) ;{
  //   super(props);

  // this.onChangeName = this.onChangefname.bind(this);
  // this.onChangeEmail = this.onChangelname.bind(this);
  // this.onChangePhone = this.onChangephnumber.bind(this);
  // this.onSubmit = this.onSubmit.bind(this);

  // this.state = {
  //   fname: '',
  //   lname: '',
  //   phnumber: ''
  // }





  // function r() {
  //   localStorage[""] = JSON.stringify();
  // }


  // let fname = document.getElementById("fname").value;
  // console.log(fname);

  // let lname = document.getElementById("lname").value;
  // console.log(lname);

  // let phnumber = document.getElementById("phnumber").value;
  // console.log(phnumber);




  // function Example() {
  //   return (
  //     <>
  //       {['end'].map((placement, idx) => (
  //         <OffCanvasExample key={idx} placement={placement} name={placement} />
  //       ))}
  //     </>
  //   );
  // }

  //  render(<Example />);




  //
  return (
    <div>

      <Container fluid>
        <Row md={12}>
          <Col>
            <h1>SHOPING CART</h1>
            <>
              {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
              ))}
            </>


          </Col>
        </Row>
        <hr />



        <Row>
          <Col md={3} ><Category handleSelect={handleSelect} category={category} /></Col>
          <Col md={6} ><Products productsList={products} handleIncrease={handleIncrease} handleDecrease={handleDecrease} category={category} CartData={CartData} SizeSelect={SizeSelect} /></Col>
          {/* <Col md={6} ><Products category={category} productsList = {productsList} /></Col> */}
          <Col md={3} ><Cart handleCartData={CartData} RemoveEvent={RemoveEvent} cartList={cartList} /></Col>



        </Row>
      </Container>
    </div>
  );
}







export default ShoppingCart;


// const getTotalCost = (productList) => {
//   return productList.reduce((totalCost, { cost: itemCost }) => totalCost + parseFloat(itemCost), 0);
// };


// switch (action.type) {
//   case ADD_TO_CART:
//       const productId = action.product.id;

//       if (findIndex(state.cart, product => product.id === productId) !== -1) {
//           const cart = state.cart.reduce((cartAcc, product) => {
//               if (product.id === productId) {
//                   // if (product.size === action.size) {
//                       cartAcc.push({ ...product, size: parseInt(product.size), qty: parseInt(product.qty) + parseInt(action.qty), sum: (product.discount ? product.salePrice : product.price) * (parseInt(product.qty) + parseInt(action.qty)) }) // Increment qty
//                   // } else {
//                   //     cartAcc.push(product)
//                   // }

//               } else {
//                   cartAcc.push(product)
//               }
//               return cartAcc
//           }, [])

//           return { ...state, cart }
//       }
//       return {
//           ...state,
//           cart: [
//               ...state.cart,
//               {
//                   ...action.product,
//                   qty: action.qty,
//                   size: action.size,
//                   sum: (action.product.discount ? action.product.salePrice : action.product.price) * action.qty
//               }
//           ]
//       } 



////\
{/* <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    } */}