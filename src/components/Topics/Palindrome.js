import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={e => this.updateUser(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }

    updateUser(value){
        this.setState({userInput: value});
    }

    checkPalindrome(value)
    {
        let rev = [...value].reverse();
        let forward = [...value];
        let pal = true;
        for(let i =0;i<forward.length;i++)
        {
            if(rev[i] !== forward[i])
            {
                pal = false;
            }
        }
        this.setState({palindrome: pal.toString()});
    }
}