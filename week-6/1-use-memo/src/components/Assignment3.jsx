import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    // Your code starts here
    const totalValue = useMemo(() => {
        let val = 0
        items.map((item) => {
            val += item.value
        })
        return val
    }, [items])
    // Your code ends here
    const handleAddItem = (e) => {
        setItems([...items, { name: newItemName, value: Number(newItemPrice) }])
        setNewItemName('')
        setNewItemPrice('')
    }
    return (
        <div>
            {/* <ul>
                {items.map((item, index) => (
                    <li key={index}> {item.name} - Price: ${item.value}</li>
                ))}
            </ul> */}
            {/* <p>Total Value: {totalValue}</p> */}
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name} - Price : ${item.value}
                        </li>
                    )
                })}
            </ul>
            <p>Total Value : {totalValue} </p>
            {/* <form onSubmit={handleAddItem}> */}
            <input
                type="text"
                placeholder='Name'
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder='Price'
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
            />
            <br />
            <button onClick={handleAddItem}>Add Item</button>
            {/* </form> */}
        </div >

    );
};
