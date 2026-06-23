import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Signatures from './components/Signatures.jsx'
import Marquee from './components/Marquee.jsx'
import Menu from './components/Menu.jsx'
import FamilySet from './components/FamilySet.jsx'
import Ambience from './components/Ambience.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-forest-950">
      {/* Attention */}
      <Hero />
      {/* Interest */}
      <Story />
      <Signatures />
      <Marquee />
      {/* Desire / Action — the menu is the centerpiece */}
      <Menu />
      <FamilySet />
      <Marquee
        tone="cream"
        items={[
          'Reserve by message',
          'Good for sharing',
          'Garden pavilion',
          'Private events',
          'Open daily',
        ]}
      />
      <Ambience />
      <Visit />
      <Footer />
    </main>
  )
}
