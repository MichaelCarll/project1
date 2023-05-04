import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
    return (
    <> 
        <h1>Hello World</h1> 
        <div>Good Bye</div>
    </>
    )
    //as of 16.8 react allows React.Fragments to allow devs from creating multiple divs and ingecting those to their apps - shorthand <></>
    //this converts the bottom code snip into this line behind the scenes for ease of use
    //return React.createElement('h1',{className:'title'},'Hello World',React.createElement('div'))
}

ReactDOM.render(<App/>,document.getElementById('root'))