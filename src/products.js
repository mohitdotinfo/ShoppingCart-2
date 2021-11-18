// import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

class Products extends React.Component {
  render() {


    const { productsList, CartData, category, handleIncrease, handleDecrease, Size, SizeSelect } = this.props;

    return (

      <div>

        <h1 className="alignCenter">List of Products</h1>


        <h1> {this.props.category} </h1>
        <div>

          <Row xs={1} md={3} className="g-4">

            {






              productsList.filter(ele => ele.category === category)
                .map((item, i) =>
                  <Col key={i}>

                    <Card>
                      <Card.Img height="350px" src={item.productimage} />
                      <Card.Body>
                        <Card.Title>{item.product}</Card.Title>
                        <Card.Text>
                          price <br />{item.price}
                          <Card.Text>
                            {console.log(item.itprice)}
                            {item.itprice.map((e) =>
                              <Button  class="btn btn-outline-secondary" onClick={() => SizeSelect(item.id, e)}>{e.Size}</Button>

                           
                                )

                               
                              }
                          </Card.Text>
                          {/* <Button onClick={() => SizeSelect(item.Size)}>M</Button>
                              <Button>XL</Button> */}
                        </Card.Text>
                        <p>{item.count}</p>
                        <Button  class="btn btn-outline-success" onClick={() => handleIncrease(item.id)}>+</Button>
                        <Button  class="btn btn-outline-success" onClick={() => handleDecrease(item.id)}>-</Button>
                        <br /><br />
                        <Button  class="btn btn-warning" type="submit" onClick={() => CartData(item)} >ADD TO CART</Button>

                      </Card.Body>
                    </Card>
                  </Col>
                )

            })



          </Row>


        </div>


      </div>
    );
  }
}
export default Products;