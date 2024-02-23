import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer'
import './App.css'

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
