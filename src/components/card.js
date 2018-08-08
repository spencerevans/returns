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
            divYield: '',
            initialInvestment: '',
            weeklyContribution: '',
            yearsInvesting: '',
            reInvestDividends: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {

        const inputData = [
            {title: 'Price X Years Ago', state: this.state.pricePast, name: 'pricePast'},
            {title: 'X (Years)', state: this.state.yearsAgo, name: 'yearsAgo'},
            {title: 'Price Today', state: this.state.priceToday, name: 'priceToday'},
            {title: 'Div/Yield', state: this.state.divYield, name: 'divYield'},
            {title: 'Initial Investment', state: this.state.initialInvestment, name: 'initialInvestment'},
            {title: 'Weekly Contribution', state: this.state.weeklyContribution, name: 'weeklyContribution'},
            {title: 'Years of Investing', state: this.state.yearsInvesting, name: 'yearsInvesting'},
            {title: 'Reinvest Dividends?', state: this.state.reInvestDividends, name: 'reInvestDividends'}
            
        ]

        return (

            
            <div className='card'>
            {
                inputData.map(data => Input( (data) , this.handleInputChange ))
            
            }

            {/* {
                inputData.map(data => {
                    return <div key={index}>{data.title}</div>
                })
            } */}
               {/* { Input('Price X Years Ago', this.state.pricePast, this.handleInputChange, 'pricePast') }
               { Input('X (Years)', this.state.yearsAgo, this.handleInputChange, 'yearsAgo') }
               { Input('Price Today', this.state.priceToday, this.handleInputChange, 'priceToday') }
               { Input('Div/Yield', this.state.divYield, this.handleInputChange, 'divYield') }
               { Input('Initial Investment', this.state.initialInvestment, this.handleInputChange, 'initialInvestment') }
               { Input('Weekly Contribution', this.state.weeklyContribution, this.handleInputChange, 'weeklyContribution') }
               { Input('Years of Investing', this.state.yearsInvesting, this.handleInputChange, 'yearsInvesting') }
               { InputBool('Reinvest Dividends?', this.state.reInvestDividends, this.handleInputChange, 'reInvestDividends') } */}
            </div>
        )
    }
}

export default Card;