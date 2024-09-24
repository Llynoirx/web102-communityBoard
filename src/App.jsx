import './App.css';
import Store from './components/Store/Store'

const App = () => {
  const mangomango = {
    img: '/images/mangomango.jpeg',
    name: 'Mango Mango Dessert',
    location: 'Squirrel Hill',
    url: 'https://www.mangomangodessert.com/'
  };

  return (
    <div className="App">
      <h1>
        Delicious Bakeries & Cafes in PGH
      </h1>
      <Store 
        img={mangomango.img} 
        name={mangomango.name} 
        location={mangomango.location} 
        url={mangomango.url} 
      />
    </div>
    
  )
}

export default App