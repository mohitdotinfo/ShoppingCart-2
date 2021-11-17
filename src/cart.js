import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row, ListGroup, Badge } from 'react-bootstrap';


class Cart extends React.Component {
  render() {
    const { handleCartData, message, cartList, RemoveEvent, index } = this.props
    console.log(cartList)
    return (
      <div>
        <h1> Cart List </h1>
        {
          cartList.map((row, i) =>
            <ListGroup numbered key={i}>
              <ListGroup.Item

                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{row.product}</div>
                </div>
                <Badge variant="primary" pill>
                  {/* {row.price} */}
                  {row.selectedSize &&
                  <div> {row.selectedSize}</div>}

                  <div>
                    Qun.{row.count}<br />
                    total price  {row.price * row.count}

                  </div>
                </Badge>
                <Button onClick={() => RemoveEvent(i)}>REMOVE</Button>
              </ListGroup.Item>

            </ListGroup>

          )
        }

        





        <div>
          Total Price:{
            cartList.reduce((a, item) => a = Number(a) + (Number(item.price) * item.count), 0)
          }


        </div>

      </div>

    );

  }
}
export default Cart;

// {cartList.map((row) =>
//   <>
//     <h4>{row.product}</h4>
//   </>
// )}