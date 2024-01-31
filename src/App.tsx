import './App.css'
import { Introduction } from './components/Introduction'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
