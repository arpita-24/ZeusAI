import React from 'react'
import { Article, Brand, Cta, Feature, Navbar} from './components';
import './App.css';
import './index.css';
import { Header } from './container';
const App = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />  
        <Brand />
        <Header />
      </div>
      
      <Article />
      <Cta />
      <Feature />
    </div>
  )
}

export default App