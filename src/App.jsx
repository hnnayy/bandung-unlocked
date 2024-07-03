import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Map from './Map/Map'
import List from './List/List'
import PlaceDetails from './PlaceDetails/PlaceDetails'
import {CssBaseline, Grid} from '@material-ui/core'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './logins/login'


function App() {
  const [count, setCount] = useState(0)

  return (

      <>
      <CssBaseline/>

      <Router>
        <Routes>
          <Route path='/login' element = {<Login/>} ></Route>
          <Route path='/*' element={
            <>
              <Header/>
              <Grid container spacing={3} style={{width: '100%'}}>
              <Grid item xs={12} md={4}>
                <List/>
              </Grid>
              <Grid item xs={12} md={8}>
                <Map/>
              </Grid>
            </Grid>
            </>
          }></Route>
        </Routes>
      </Router>
      </>
      
  )
}

export default App
