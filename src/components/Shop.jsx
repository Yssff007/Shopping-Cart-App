import React ,{useContext} from 'react';
import { appContext } from '../context/GlobalContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Shop() {
  let {products,state:{cart},dispatch} = useContext(appContext);
  
  
  return (
    <>
    <div className="container">
      <div className="row g-auto">
        {products.map((product,id) =><div key={id} className='col-md-4 my-3'>
            <Card style={{ width: '19rem' }}>
              <Card.Img variant="top" src={`${product.image}`} style={{width:'15rem', height:'15rem'}} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title>{product.title}</Card.Title> 
                <Card.Text>
                  {product.description.split(' ').splice(0,15).join(' ')}
                </Card.Text>
                <Card.Text>{product.price + `$`}</Card.Text>
                {
                  cart.some((p)=>p.id === product.id)?(<Button variant="danger" onClick={()=>{
                    dispatch({
                      type:'REMOVE-FROM-CART',
                      payload: product
                    })
                  }}>Remove from Cart</Button>)
                  :
                  (<Button variant="primary" onClick={()=>{
                    dispatch({
                      type:'ADD-TO-CART',
                      payload:product
                    })
                  }}>Add to Cart</Button>)
                }
                
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>  
    </>
  )
}

export default Shop