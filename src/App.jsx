import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Map from './Map/Map'
import List from './List/List'
import PlaceDetails from './PlaceDetails/PlaceDetails'
import {CssBaseline, Grid} from '@material-ui/core'


function App() {
  const [count, setCount] = useState(0)

  return (

      <>
      <CssBaseline/>
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
      
  )
}

export default App
