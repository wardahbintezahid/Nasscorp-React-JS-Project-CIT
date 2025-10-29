import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import Contribution from './components/Contribution'
import About from './components/About'
import About02 from './components/About02'
import Testimonial from './components/Testimonial'
import Teams from './components/Teams'
import Contact from './components/Contact'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function App() {
  return (
    <main>
      <Navbar />
      <Cover />
      <Contribution />
      <About />
      <About02 />
      <Testimonial />
      <Teams />
      <Contact />
      <Quote />
      <Footer />
      <Copyright />
    </main>
  )
}

export default App
