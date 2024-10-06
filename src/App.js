import React from "react"
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders: [],

      items: [
        {
          id: 1,
          title: 'Пицца Маргарита',
          img: 'margharita.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: '299₽'
        },
        {
          id: 2,
          title: 'Пицца Неаполитанская',
          img: 'neopal.jpg',
          desc: 'Нет, неаполитанская самая вкусная ',
          category: 'pizzas',
          price: '549₽'
        },
        {
          id: 3,
          title: 'Пицца Маринара',
          img: 'marinara.jpg',
          desc: 'Маринара самая сочная ',
          category: 'pizzas',
          price: '499₽'
        },
        {
          id: 4,
          title: 'Пицца Пульеза',
          img: 'pulyesa.jpg',
          desc: 'Пульеза самая пульезная ',
          category: 'pizzas',
          price: '699₽'
        },
        {
          id: 5,
          title: 'Пицца Четыре сезона',
          img: 'four_seasons.jpg',
          desc: 'Четрые сезона как времена года ',
          category: 'pizzas',
          price: '599₽'
        },
        {
          id: 6,
          title: 'Пицца Четыре сыра',
          img: 'four_cheese.jpg',
          desc: 'Четыре сыра и самые сырные сыры ',
          category: 'pizzas',
          price: '599₽'
        },
        {
          id: 7,
          title: 'Пицца Капричоза',
          img: 'caprikoza.jpg',
          desc: 'Капрочоза капризничает ',
          category: 'pizzas',
          price: '499₽'
        },
        {
          id: 8,
          title: 'Пицца Кальцоне',
          img: 'calchone.jpg',
          desc: 'Кальцоне как кольцо ',
          category: 'pizzas',
          price: '699₽'
        },
        {
          id: 9,
          title: 'Пицца Дьябола',
          img: 'demon.jpg',
          desc: 'Дьябола как самый настоящий дьявол ',
          category: 'pizzas',
          price: '666₽'
        }
      ]
    }
    this.addToOtder = this.addToOtder.bind(this)
  }


  render() {
    return(
    <div className="wrapper">
      <Header orders={this.state.orders}/>
      <Items items={this.state.items} onAdd={this.addToOtder}/>
      <Footer />
    </div>
  )
  }

  addToOtder(item){
    let isInArr = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArr = true
    })
    if(!isInArr)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
