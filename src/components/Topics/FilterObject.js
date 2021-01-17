import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();

        this.state={
            unFilteredArray: [{name: 'Jimmy Joe', title: 'Hack0r', age: 12}, {name: 'Jeremy Schrader', age: 24, hairColor: "brown"}, {name: 'Carly Armstrong', title: 'CEO'}],
            userInput: '',
            filteredArray: []
        }
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={e => this.changeInput(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterObject(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }

    changeInput(value){
        this.setState({userInput: value});
    }

    filterObject(filter){
        let unfiltered = this.state.unFilteredArray;
        let filtArr = unfiltered.filter((i) => i[filter] );
        this.setState(
            {
                filteredArray: filtArr
            }
        );
    }
}