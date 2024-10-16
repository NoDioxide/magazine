import React from "react"
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Пицца Маргарита',
          img: 'margharita.jpg',
          desc: 'Маргарита самая вкусная ',
          category: 'classic',
          price: '299₽'
        },
        {
          id: 2,
          title: 'Пицца Неаполитанская',
          img: 'neopal.jpg',
          desc: 'Нет, неаполитанская самая вкусная ',
          category: 'unusual',
          price: '549₽'
        },
        {
          id: 3,
          title: 'Пицца Маринара',
          img: 'marinara.jpg',
          desc: 'Маринара самая сочная ',
          category: 'classic',
          price: '499₽'
        },
        {
          id: 4,
          title: 'Пицца Пульеза',
          img: 'pulyesa.jpg',
          desc: 'Пульеза самая пульезная ',
          category: 'spicy',
          price: '699₽'
        },
        {
          id: 5,
          title: 'Пицца Четыре сезона',
          img: 'four_seasons.jpg',
          desc: 'Четрые сезона как времена года ',
          category: 'season',
          price: '599₽'
        },
        {
          id: 6,
          title: 'Пицца Четыре сыра',
          img: 'four_cheese.jpg',
          desc: 'Четыре сыра и самые сырные сыры ',
          category: 'season',
          price: '599₽'
        },
        {
          id: 7,
          title: 'Пицца Капричоза',
          img: 'caprikoza.jpg',
          desc: 'Капрочоза капризничает ',
          category: 'classic',
          price: '499₽'
        },
        {
          id: 8,
          title: 'Пицца Кальцоне',
          img: 'calchone.jpg',
          desc: 'Кальцоне как кольцо ',
          category: 'unusual',
          price: '699₽'
        },
        {
          id: 9,
          title: 'Пицца Дьябола',
          img: 'demon.jpg',
          desc: 'Дьябола как самый настоящий дьявол ',
          category: 'spicy',
          price: '666₽',
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOtder = this.addToOtder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }


  render() {
    return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOtder}/>
      <Footer />
    </div>
  )
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
