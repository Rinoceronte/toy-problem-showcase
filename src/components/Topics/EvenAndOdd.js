import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput(value){
        this.setState({
            userInput: value
        });
    }

    split(str)
    {
        let arr = str.split(',');
        let evens = [];
        let odds = [];
        for(let i of arr)
        {
            if(i%2 === 0) {
                evens.push(i);
            }
            else {
                odds.push(i);
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        });
    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={e => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.split(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens: {this.state.evenArray}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray}</span>
            </div>
        )
    }


}