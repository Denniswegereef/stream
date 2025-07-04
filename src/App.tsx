import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* A dummy div for enabling scrolling */}
      <div className="h-100"></div>
    </>
  )
}

export default App
