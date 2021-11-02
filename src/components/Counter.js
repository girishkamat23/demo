import React from 'react';

//functional components- viewing purpose data

const Counter = (props) => {
    
    //object destructuring
    const { count, increment, decrement } = props;
    
    return (
        <div>
            <h1>Counter Function</h1>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button> 
        </div>
    )
}

export default Counter;


// That's all folkes