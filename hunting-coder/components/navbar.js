import React from 'react'
import Link from "next/link";


const Navbar = () => {
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link text-success" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-success " href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-success" href="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-success" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
