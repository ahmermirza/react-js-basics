import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
    }

    handleIncrement = counter => {
        // console.log(id);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2 ml-5'>Reset</button><br />
                {this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} >
                    <h1>banjo</h1>
                </Counter>)}
            </React.Fragment>
        );
    }
}

export default Counters;