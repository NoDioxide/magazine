import React from "react"
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      items: [
        {
          id: 1,
          title: 'Пицца Маргарита',
          img: 'margharita.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 2,
          title: 'Пицца Неаполитанская',
          img: 'neopal.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 3,
          title: 'Пицца Маринара',
          img: 'marinara.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 4,
          title: 'Пицца Пульеза',
          img: 'pulyesa.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 5,
          title: 'Пицца Четыре сезона',
          img: 'four_seasons.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 6,
          title: 'Пицца Четыре сыра',
          img: 'four_cheese.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 7,
          title: 'Пицца Капричоза',
          img: 'caprikoza.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 8,
          title: 'Пицца Кальцоне',
          img: 'calchone.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        },
        {
          id: 9,
          title: 'Пицца Дьябола',
          img: 'demon.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'pizzas',
          price: ''
        }
      ]
    }
  }


  render() {
    return(
    <div className="wrapper">
      <Header />
      <Footer />
    </div>
  )
  }
}

export default App;
