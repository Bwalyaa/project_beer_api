import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import BeerDetails from './components/beerDetails/BeerDetails'
import BeerList from './components/beerList/BeerList'
import RandomBeer from './components/randomBeer/RandomBeer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beerlist' element={<BeerList />} />
      <Route path='/beerlist/:id' element={<BeerDetails />} />
      <Route path='/random' element={<RandomBeer />} />
    </Routes>
    </>
  )
}

export default App
