import NavBar from './components/NavBar'
import Hero from './components/Hero'
import PrivateMessaging from './components/PrivateMessaging'
import LiveStreaming from './components/LiveStreaming'
import CreatorEarnings from './components/CreatorEarnings'
import PrivacyControl from './components/PrivacyControl'
import DownloadCta from './components/DownloadCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <PrivateMessaging />
        <LiveStreaming />
        <CreatorEarnings />
        <PrivacyControl />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  )
}
