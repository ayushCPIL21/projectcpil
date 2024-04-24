import './App.css'
import Login from './components/LoginForm/Login';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Process from './components/Process/Process';
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App() {
  

  return (
    <section className='home-section'>
      <Router>
        <Routes>
            
            <Route path='/' element = {<PrivateRoute/>}>
                 <Route path='/' element = {<Process/> } />
            </Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
       
      </Router>

    </section>
  )
}

export default App
