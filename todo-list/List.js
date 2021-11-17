import React, { useEffect, useRef, useState } from 'react';

const List = () => {

    const divRef = useRef();
    const [countries, setCountries] = useState([]);
    const [listItems, setListItems] = useState([{
        title: 'Study React',
        id: '1',
        dateCreated: '15-11-2021',
        validTill: '15-12-2021'
    }]);

    const addToList = () => {

        let item = [...listItems, {
            title: 'Apply for Jobs',
            id: '2',
            dateCreated: '15-12-2021',
            validTill: '1-1-2022'
        }];
        setListItems(item);
    }

    useEffect(() => {      
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json()      
        }).then((res) => console.log(res))

        console.log("Component Mounted")
        
        return (() => {
            console.log("Component Unmounted")
        })
    })
    
    useEffect(() => {
        // let parent = document.getElementById('parent-div')
        console.log("Component Upadted on ListItems", divRef.current);
        // divRef.current.style.display = 'none';
    }, [])


    return (
            <>
            <h3>To Do List</h3>
            <div ref={divRef}>
                {
                    listItems && listItems.length ?
                        listItems.map((item, index) => (
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'left'}}>
                            <span>{item.id}</span>
                            <h4>{item?.title}</h4>
                            <span>{item?.dateCreated}</span>
                            <span>{item?.validTill}</span>
                        </div>
                        )) :
                    <h2>No tasks</h2>

                }
            </div>
            <button onClick={addToList}>Add To List</button>
            </>
    )
}

export default List;


//16.8 version Hooks- useState, useEffect, useRef, useMemo, useCallback etc.
// useState, useEffect(componentDidMount, componentWillUnmount, componentDidUpdate), useRef