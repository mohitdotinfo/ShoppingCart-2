import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';


class Category extends React.Component {
  // handleSelect = (event) => { console.log("function called", event.target.value) }




  render() {
    const {category} = this.props;
    return (
      <div>
        <h1> Category </h1>
        <Container fluid>
          <Row md={12}>
            <Col>

            


              <Form.Select aria-label="Default select example" value={category} onChange={this.props.handleSelect}>
                <option value="MEN">MEN</option>
                <option value="WOMEN">WOMEN</option>
                <option value="OTHER">OTHER</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Category;

//fewfeferfreg
// make counter for select item quantity and add total price button for shopping cart list