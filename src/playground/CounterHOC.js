import React from 'react';


//formal parameter
const CounterHOC = (Component) => {

    class EnhancedComponent extends React.Component{

        state = {
            count: 0
        }

        incrementCount = () => {
            this.setState({
                  count: this.state.count + 1
              })
        }

        render() {
            return (
                <div>
                    <h1>Enhanced Component</h1>
                    <Component  count={this.state.count} incrementCount={this.incrementCount}></Component>
                </div>
            )
        }
    }
    
    return EnhancedComponent;
}


export default CounterHOC;

// Component Based
// Code Reusability
