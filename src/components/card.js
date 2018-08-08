import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()
        this.state = {
            //THIS IS WHERE I Call TO BE RENDERED
            pricePast: '',
            yearsAgo: '',
            priceToday: '',
            divYield: 2.31,
            initialInvestment: 10000,
            weeklyContribution: '',
            yearsInvesting: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ divYield: event.target.value })
    }

    render() {

        return (
            <div className='card'>
                <h1>{this.state.divYield}</h1>
                <input onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )

        return (

            
            <div className='card'>
                <h1>{this.state.divYield}</h1>
                <h1>{this.state.divYield}</h1>
                <h1>{this.state.divYield}</h1>
                <h1>{this.state.divYield}</h1>
                <h1>{this.state.divYield}</h1>
                <h1>{this.state.divYield}</h1>
               { Input('Price X Years Ago') }
               { Input('X (Years)') }  
               { Input('Price Today') } 
               { Input('Div/Yield') } 
               { Input('Initial Investment') } 
               { Input('Weekly Contribution') } 
               { Input('Years of Investing')}
            </div>
        )
    }
}

export default Card;