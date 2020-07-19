import {useState, useEffect} from "react"

const useFetch = () =>{
    const [data, setData] = useState()

    const fetcher =  (endpoint,dataObj,e) =>{
        e.preventDefault();
        fetch (endpoint,{
        method: "POST",
        mode: "cors",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
        })
        .then(response => response.json())
        .then(parsedResponse =>{
            setData(parsedResponse)
        })
       
    }

    return {
        fetcher,
        data
    }
}

export default useFetch