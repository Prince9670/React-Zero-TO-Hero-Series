import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './RouterFolder/Home'
import Contact from './RouterFolder/Contact'
import About from './RouterFolder/About'

const Day9 = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Day9
