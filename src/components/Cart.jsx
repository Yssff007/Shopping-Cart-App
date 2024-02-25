import React,{useContext, useEffect, useState} from 'react';
import { appContext } from '../context/GlobalContext';
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

function Cart() {

  let {state:{cart}, dispatch} = useContext(appContext);
  let [total, setTotal] = useState();
  
  useEffect(()=>{
   setTotal(cart.reduce((acc,curr)=> acc + (curr.price * curr.qty) ,0)) ;
  },[cart])

  return (
    <>
    <div className="home">
      <div className="productContainer">
        <ListGroup className='mt-5'>
          {cart.map((prod)=>(
            <ListGroup.Item className='cartitem' key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image className='cartItemImg' src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>{prod.price}$</Col>
                <Col md={2}>
                  Rating: {prod.rating.rate}/5
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: 'CHANGE-QTY',
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(Math.round(prod.rating.rate)).keys()].map((x)=>(
                      <option key={x}>{x}</option>
                    ))}
                    
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE-FROM-CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title m-2">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20, margin:'10px' }}>Total = {Math.round(total)}</span>
        <Button variant='success' type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>  
    </>
  )
}

export default Cart