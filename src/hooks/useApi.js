import { useEffect } from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

export const useApi = (url)=>{

     const [products,setProducts] = useState([]);
     const[loading,setLoading]= useState(true);

    useEffect(()=>{
        setLoading(true)
             fetch(url)
           .then(data=>data.json())
            .then(res=>setProducts(res))
            .finally(()=>{
                setLoading(false);
            })
    },[url])

    return {products,loading};

}