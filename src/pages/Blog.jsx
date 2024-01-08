import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/BlogLibraryHero'
import Footer from '../components/Footer'

const Blog = () => {
    return (
        <div className="bg-background-image bg-center w-full h-full bg-cover lg:px-[4em]">
          <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <Navbar />
            </div>
          </div>
          <div className="hero flex justify-center">
            <div className="xl:max-w-[1280px] w-full">
                <Hero prop={{heading:"Blog Categories", description:"category title"}}/>
            </div>
          </div>
          <div className="sm:px-16 px-6">
            <Footer styles="bottom-nav w-full sm:flex-col flex justify-between text-white"/>
          </div> 
        </div>
      )
}

export default Blog