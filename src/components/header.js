import React from 'react';


const getTheYear = () => {
    const newDate = new Date; 
    return newDate.getFullYear()
}

const Header =() => {
    return <div>Header { getTheYear() }</div>
}

export default Header;