import Navigation from './navigation/Navigation'
import HeroBackground from './hero/HeroBackground'
import HeroContent from './hero/HeroContent'
import ImageGallery from './hero/ImageGallery'

export default function Hero() {
  return (
    <div className="bg-white">
      <Navigation />
      <main>
        <div className="relative isolate">
          <HeroBackground />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <HeroContent />
                <ImageGallery />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}