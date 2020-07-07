import React, { useState, useEffect} from 'react'

function TestConnection2() {

    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async ()=> {
        const data = await fetch('http://localhost:3011/api/species');
        const items = await data.json();
        // console.log(items);
        setItems(items);
    }

    return(
        <div>
            <h1>
                Checking Connection
                {items.map(item => (
                   <h2>{item.name}</h2>
                ))}
            </h1>
        </div>
    )

}

export default TestConnection2