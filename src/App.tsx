import { Header } from './components/Header'
import { Hero } from './components/Hero'

const DATA = {
  propertySummary: {
    city: 'Amsterdam',
    room: 'Entire place',
    bedrooms: 2,
    ariaLabel:
      'Estimates for Amsterdam, Entire place, 2 bedrooms, Tell us about your place to customize the estimate',
  },
} as const

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
