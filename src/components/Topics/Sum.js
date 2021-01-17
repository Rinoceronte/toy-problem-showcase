import React, {Component} from 'react';

export default class Sum extends Component{
    constructor(){
        super();

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={e => this.changeNum1(parseInt(e.target.value, 10))}/>
                <input className='inputLine' onChange={e => this.changeNum2(parseInt(e.target.value, 10))}/>
                <button className='confirmationButton' onClick={() => this.addNumbers(this.state.num1, this.state.num2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }

    changeNum1(val)
    {
        this.setState({num1: val});
    }

    changeNum2(val)
    {
        this.setState({num2: val});
    }

    addNumbers(num1, num2){
        let s = num1 + num2;
        this.setState({sum: s});
    }
}