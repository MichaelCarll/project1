import React, { Component } from 'react';

/* let styles = {
    header:{
        background:'#03a9f4'
    },
    logo:{
        color:'#fff',
        fontFamily: 'Anton',
        textAlign: 'center'
    }
} */

class Header extends Component {

    hello = () => {
        console.log('I was Clicked');
    }

    inputChange(event){
        console.log(event.target.value);
    }

    render(){
        return (
            <header>
                <div 
                    className="logo"
                    onClick={this.hello} //classes always need to use this when invoking references to functions
                >Logo</div>
                <input
                    onChange={ (event)=> this.inputChange(event) }
                />
            </header>
        )
    }


}


export default Header;