import { fetchData } from './data/fetchData'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Data from './components/Data'
import { useState } from 'react'

function App() {
  const {data: calzados, loading, error} = fetchData();

  console.log(calzados)
  return (
    <>
      <div className='grid grid-cols-1'>
        <Header/>
        <main>
          {loading ? <p>Cargando...</p> : <Data data={calzados}/>}
          {error && <p>Error... {error}</p>}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
