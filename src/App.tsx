import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        {/* A dummy div for enabling scrolling */}
        <div className="h-screen"></div>
      </main>
    </>
  )
}

export default App
