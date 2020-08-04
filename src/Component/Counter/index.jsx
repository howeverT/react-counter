import React from 'react';
import store from '../../reducer'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state={value:0 , groupSize:0}
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value : prevState.value + 1,
            
        }));
        // this.props.onIncrease()
        //store.dispatch({ type: 'INCREMENT' })
        this.props.increasement()
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
        // this.props.onDecrease()
        // store.dispatch({ type: 'DECREMENT' })
        this.props.decreasement()
    }

    static getDerivedStateFromProps(props,state) {//TODO
        if(props.groupSize !== state.groupSize) {
            return {
                value : 0,
                groupSize : props.groupSize
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        );
    }
}

export default Counter;