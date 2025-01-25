import { useState } from 'react'
import { fetchData } from './data/fetchData'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Data from './components/Data'

function App() {
  const {data: calzados, loading, error} = fetchData();

  console.log(calzados)
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <main className='flex-1'>
          {loading ? <p>Cargando...</p> : <Data data={calzados}/>}
          {error && <p>Error... {error}</p>}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
