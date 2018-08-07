import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className='card'>
               { Input('Price X Years Ago') }
               { Input('Years') }  
               { Input('Price Today') } 
               { Input('Div/Yield') } 
               { Input('Initial Investment') } 
               { Input('Weekly Contribution') } 
            </div>
        )
    }
}

export default Card;