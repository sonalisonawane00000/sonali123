import Product from "./Product";

function Productlist(props){

        const prod = props.products1;


    return(<>
    <p></p>
    {/* <Product  {...prod[0]}/>
    <Product {...prod[1]}/>
    <Product {...prod[3]}/>
    <Product {...prod[4]}/>
    <Product {...prod[5]}/>
    <Product {...prod[6]}/>
    <Product {...prod[7]}/> */}
    {
        prod && prod.map((p,ind)=>{
            return (
                <Product {...p} key={ind}/>
            );
        })
    }


    </>
    );
}

export default Productlist;