import { Link } from "react-router-dom";
function Product(props){
    
    return(
        <>
    <div className="card" style={{width:400}} id="card">
    <img className="card-img-top" src={props.img1} 
     style={{ height: '250px', objectFit: 'cover', borderRadius: '12px' }}alt="Card image"/>
    <div className="card-body">
    <h4 className="card-title">{props.id}</h4>
    <p className="card-text">{props.name}</p>
    <p className="card-text">{props.category}</p>
    <p className="card-text">{props.price}</p>
    <Link to = {`/product/${props.id}`} className="btn btn-primary">Read More</Link>
    </div>
    </div>
        
        </>
    )
}
export default Product;
