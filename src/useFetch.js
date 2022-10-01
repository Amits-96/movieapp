import { useState, useEffect } from "react";
const useFetch = (request) => {
    

    let [data, setData]= useState(null);
    
    let [pending,setPending] = useState(true);
    let [error,seterror] = useState(null);

    
    useEffect(()=>{
        setTimeout(() => {
            fetch(request)
   
    .then((Response)=>{ if(Response.ok===false)
        {
            throw Error("Data not found 401, Check movies instead")
        }
        return Response.json();
    })
    .then((movieName)=>{
        setData(movieName);
        setPending(false);
    })

    .catch((error)=>{
        seterror(error.message);
        setPending(false);
    })
            
        }, 1000);
},[])

return{data , pending, error}
}
 
export default useFetch;