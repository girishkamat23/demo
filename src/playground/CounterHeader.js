import React from 'react';
import CounterHOC from './CounterHOC';

class CounterHeader extends React.Component{

    // state change or props change

    render() {
        return (
            <div>
                <h3 onClick={this.props.incrementCount}>Increment Counter</h3>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default CounterHOC(CounterHeader);


// actual parameter