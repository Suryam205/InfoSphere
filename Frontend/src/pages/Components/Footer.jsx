import React from 'react'
import About from './About'
import Contact from './Contact'

const Footer = () => {
  return (
    <div>
        
        <About/>
        <Contact/>
        <div className="footer">
          <p>&copy; 2023 Surya's Web. All rights reserved.</p>
          <p>Follow us on social media: Facebook | Twitter | Instagram</p>
        </div>

    </div>
  )
}

export default Footer
