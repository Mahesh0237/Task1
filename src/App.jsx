import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Coursesection from './components/Coursesection'
import Chooseplan from './components/Chooseplan'
import Customerreview from './components/Customerreview'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className='bannersection'>
        <Banner />
      </div>
      <Coursesection />
      <Chooseplan />
      <Customerreview />
      <div className='footersection'>
        <Footer />
      </div>
    </>
  )
}

export default App