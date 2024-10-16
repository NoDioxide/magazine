import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все пиццы'
                },
                {
                    key: 'classic',
                    name: 'Классические пиццы'
                },
                {
                    key: 'season',
                    name: 'Сезонные пиццы'
                },
                {
                    key: 'spicy',
                    name: 'Острые пиццы'
                },
                {
                    key: 'unusual',
                    name: 'Необычные пиццы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories