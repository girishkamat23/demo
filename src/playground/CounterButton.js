import React from 'react';
import CounterHOC from './CounterHOC';



class CounterButton extends React.Component {
    render() {
        return (
                <div>
                    <button onClick={this.props.incrementCount}>Increment Counter</button>
                    <p>{this.props.count}</p>
                </div>
        )
        
    }
}

export default CounterHOC(CounterButton);


//state uplift


// App.js- parent
//     -> CounterButton- child
//     -> CounterHeader- child