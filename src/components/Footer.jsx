import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer flex flex-row justify-between sm:footer-horizontal bg-white text-black-content items-center p-4">
        {/* <aside className="grid-flow-col items-center"> */}
          <img src="/images/mm-logo-1.png" alt="mindful moments" className="w-20 h-20"></img>
          
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        {/* </aside> */}
        <nav className="flex flex-col md:flex-row">
          <a href={"www.linkedin.com/in/barbara-goldbeck-7ba383367"}
            className="text-sm">LinkedIn</a>

          <a href={"https://github.com/Baba-labab"}
            className="text-sm">GitHub</a>
        </nav>
      </footer>

    </>
  )
}

export default Footer