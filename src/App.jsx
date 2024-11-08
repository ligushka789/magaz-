  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title:'Victor',
            image:'./img/victor.jpg',
            desc: "Silly boy with stinky foot",
            category:"Children",
            price:"10.27",
            count: "0"
          },
          {
            id:2,
            title:'Babayev',
            image:'./img/babayev.jpg',
            desc: "Cool chetyrka driver",
            category:"Drivers",
            price:"110.37",
            count: "0"
            },
            {
              id:3,
              title:'Gribanov',
              image:'./img/gribanov.jpg',
              desc: "Cool mthfckr crz 79 btchz manchik",
              category:"Cool guys",
              price:"15.27",
              count: "0"
              },
              {
                id:4,
                title:'Pavel',
                image:'./img/pavel.jpg',
                desc: "English guy",
                category:"Children",
                price:"100.45",
                count: "0"
              },
              {
                id:5,
                title:'Temirlan',
                image:'./img/temirlan.jpg',
                desc: "Instagram prikoli monsterr",
                category:"Children",
                price:"105.18",
                count: "0"
              },
              {
                id:6,
                title:'Vlad',
                image:'./img/vlad.jpg',
                desc: "Forza gubastik guy",
                category:"Children",
                price:"85.18",
                count: "0"
              },
              {
              id:7,
              title:'Miras',
              image:'./img/miras.jpg',
              desc: "Shestyorka monstr ubica driver",
              category:"Drivers",
              price:"56.29",
              count: "0"
              },
              {
                id:8,
                title:'Ilnur',
                image:'./img/ilnur.jpg',
                desc: "Take a look at ma gfrnd mers/lex/hon/japan driver",
                category:"Drivers",
                price:"120.89",
                count: "0"
              },
              {
                id:9,
                title:'Dias',
                image:'./img/dias.jpg',
                desc: "quas alcoholik",
                category:"Drivers",
                price:"135.11",
                count: "0"
              },
              {
                id:10,
                title:'Denchik',
                image:'./img/denchik.jpg',
                desc: "Boss of the gym, monstryak from Pen'kovo",
                category:"Cool guys",
                price:"140.55",
                count: "0"
              },
              {
                id:11,
                title:'Semenuk',
                image:'./img/semenuk.jpg',
                desc: "Cool prepod without bazzar",
                category:"Cool guys",
                price:"1000.50",
                count: "0"
              },
              {
                id:12,
                title:'Denchik Astapenko',
                image:'./img/astapenko.jpg',
                desc: "Sleepy manchik beer guy",
                category:"Pacanchiki",
                price:"65.54",
                count: "0"
              },
              {
                id:13,
                title:'Sanzhik',
                image:'./img/sanzhik.jpg',
                desc: "crab stick corn dog guy",
                category:"Pacanchiki",
                price:"120.65",
                count: "0"
              },
              {
                id:14,
                title:'Dima',
                image:'./img/dima.jpg',
                desc: "Smart guy",
                category:"Pacanchiki",
                price:"160.11",
                count: "0"
              },
              {
                id:15,
                title:'Bukirov',
                image:'./img/bukirov.jpg',
                desc: "Boss of the gym 2",
                category:"Cool guys",
                price:"200.98",
                count: "0"
              },
              {
                id:16,
                title:'Pridurok',
                image:'./img/pridurok.jpg',
                desc: "Pridurok na 40 camry why did you stop in that day?",
                category:"Drivers",
                price:"1.13",
                count: "0"
              },
              {id:17,
              title:'Artyom',
              image:'./img/artyom.jpg',
              desc: "Funny baby bibls gibls beer guy",
              category:"Children",
              price:"110.37",
              count: "0"
              },
              { id:18,
                title:'Maksoid',
                image:'./img/maksoid.jpg',
                desc: "Tapchik in a head, my mama is ded(i mean dedushka)",
                category:"Pacanchiki",
                price:"167.37",
                count: "0"
                },
                {
                  id:19,
                  title:'Dasha',
                  image:'./img/dasha.jpg',
                  desc: "Diasik's Dashonka",
                  category:"Devchonkas for kazakh's pie",
                  price:"0.05",
                  count: "0"
                },
                {
                  id:20,
                  title:'Girls from Lenina',
                  image:'./img/girls.jpg',
                  desc: "mmm babes babes come on to our tusovka, that will be great party girls",
                  category:"Devchonkas for kazakh's pie",
                  price:"110.37",
                  count: "0"
                },
                {
                  id:21,
                  title:'None',
                  image:'./img/none.jpg',
                  desc: "so, nobody from female part of the planet came to our cool mtchfkr party so lets just drink and watch some movies :)",
                  category:"Devchonkas for kazakh's pie",
                  price:"5000.55",
                  count: "0"
                },
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  ////////////////////////////////

  incrementCount = (id) => {
    this.setState((prevState) => ({
        items: prevState.orders.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
    }));
}


  ///////////////////////////////

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    