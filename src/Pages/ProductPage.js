import React from 'react';
import styled from "styled-components";
import { Table,Badge,Image,Spinner,Button} from 'react-bootstrap';
import axios from 'axios';
import {MainLayout,InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import { addtocart } from '../redux/Actions/cartAction';
import { useSelector, useDispatch }from 'react-redux'

const ProductPage = () => {

    const [product,setProduct] = React.useState([])
    const [loading,setLoading] = React.useState([false])
    const [error,setError] = React.useState()

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cartReducer.cart)
    const item = useSelector((state) => state.cartReducer.item)

    const getData = async() =>{
        try{
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            setProduct(resp.data.data)
        } catch(error){
            setError(error)
            //console.log(error.response)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() =>{
        getData()
    },[])

    if(loading === true){
        return(
            <div className='text-center mt-5'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (error){
        return(
            <div className='text-center mt-5 text-danger'>
                <h4>Error from API,please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    const addCart = (p) => {
        const product = {
          id: p.id,
          name: p.title,
          price: p.view,
          qty: 1
        }
        dispatch(addtocart(product, cart))
    }

    return (
      <MainLayout>
        <ProductStyled>
          <InnerLayout>
            <Title title={"Product Page"} span={"Product Page"} />

                <div className="tablee">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Detail</th>
                        <th>Create date</th>
                        <th>View</th>
                        <th>Picture</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((p, index) => {
                        return (
                          <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.detail}</td>
                            <td>{p.date}</td>
                            <td>
                              <Badge variant="success"> {p.view}</Badge>
                            </td>
                            <td>
                              <Image src={p.picture} rounded width={60} />
                            </td>
                            <td>
                              {/* <NavLink to={`/detail/${p.id}/title/${p.title}`}><Button variant="outline-success"> <BiMessageSquareDetail className='mr-1' color="green"/>Click</Button></NavLink> */}
                              <Button
                                className="buy"
                                onClick={() => addCart(p)}
                              >
                                {" "}
                                Buy
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
          </InnerLayout>
        </ProductStyled>
      </MainLayout>
    );
}

const ProductStyled = styled.div`
    tr:nth-child(even) {background-color: var(--sidebar-dark-color);}
    tr:nth-child(odd) {background-color: var(--background-dark-color);}
    color: var(--font-light-color);
    .icon{
        width: 215px;
    }
    th{
        background-color: var(--sidebar-dark-color);
    }
    th, td {
        padding: 10px;
        border-color: var(--border-color);
  }
`
export default ProductPage