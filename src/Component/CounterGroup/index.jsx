import React from 'react';
import Counter from '../Counter'
import { connect } from 'react-redux';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = { size: 0, total: props.sum };
    }

    handleResize = (event) => {
        if (this.state.size != event.target.value) {
            this.setState({
                size: !event.target.value ? 0 : parseInt(event.target.value) >= 0 ? parseInt(event.target.value) : 0
            })
            this.props.init()
        }
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return (
            <div>
                <label>
                    Group Size:
                    <input onBlur={this.handleResize} defaultValue={0}></input>
                </label><br></br>
                <label>
                    Total Number: {this.props.sum}
                </label>
                {
                    initArray.map(key => <Counter
                        key={key}
                        groupSize={this.state.size}
                        increasement={this.props.increasement}
                        decreasement={this.props.decreasement}
                    />)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { sum: state }
};

const mapDispatchToProps = dispatch => ({
    increasement: () => dispatch({
        type: 'INCREMENT'
    }),
    decreasement: () => dispatch({
        type: 'DECREMENT'
    }),
    init: () => dispatch({
        type: 'INIT'
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);

