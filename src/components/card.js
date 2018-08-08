import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()
        this.state = {
            //THIS IS WHERE I PUT TO BE RENDERED
            pricePast: '',
            yearsAgo: '',
            priceToday: '',
            divYield: 2.31,
            initialInvestment: 10000,
            weeklyContribution: ''
        }
    }

    handleInputChange() {
        this.setState({divYield: 2.99})
    }

    render() {

        return (
            <div className='card'>
                <h1>{this.state.divYield}</h1>
                <input/>
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