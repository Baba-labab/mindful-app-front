import React from 'react'
import NavbarPublic from '../components/NavbarPublic'
import Footer from '../components/Footer'

function Sources() {
  return (
    <div>
        
        <NavbarPublic />
        <div className="px-4 min-h-screen bg-[url(/images/to-go-biking.jpg)] bg-cover bg-no-repeat bg-center">
            <h1 className="text-black text-center text-4xl pt-10">List of Resources</h1>
        </div>

        <Footer />


    </div>
  )
}

export default Sources