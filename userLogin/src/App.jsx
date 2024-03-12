import './App.css'
import Login from './components/LoginForm/Login';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Process from './components/Process/Process';

function App() {
  

  return (
    <section className='home-section'>
      <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/process' element = {<Process/> } />
        </Routes>
       
      </Router>

    </section>
  )
}

export default App
