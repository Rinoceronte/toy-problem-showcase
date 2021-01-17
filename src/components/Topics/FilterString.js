import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={e => this.changeInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }

    changeInput(value)
    {
        this.setState({userInput: value});
    }

    filterString(value)
    {
        let filtArr = this.state.unFilteredArray.filter(n => n.includes(value));
        this.setState(
            {
                filteredArray: filtArr
            }
        )
    }
}