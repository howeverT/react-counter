import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state={value:props.store.getState() , groupSize:0, store:props.store}
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value : prevState.value + 1,
            
        }));
        this.props.onIncrease()
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
        this.props.onDecrease()
    }

    static getDerivedStateFromProps(props,state) {
        if(props.groupSize !== state.groupSize) {
            return {
                value : 0,
                groupSize : props.groupSize
            }
        }
        return null;
    }

    render() {
        this.state.store.subscribe(() =>{
            this.setState({
                value:this.state.store.getState()
            })
        })
        return (
            <div>
                <button onClick={() => this.state.store.dispatch({ type: 'DECREMENT' })}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={() => this.state.store.dispatch({ type: 'INCREMENT' })}>+</button>
            </div>
        );
    }
}

export default Counter;