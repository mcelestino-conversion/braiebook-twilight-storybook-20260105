'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">the twilight storybook</h1>
            <div className="flex gap-4">
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">the twilight storybook</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">an interactive, atmospheric storybook web app inspired by the twilight zone, featuring eerie effects, animated transitions, and immersive storytelling experiences.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">Learn More</button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Ambient Sound Layer</h3>
            <p className="text-gray-600">Built-in ambient sound layer functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Animated Intro Narration</h3>
            <p className="text-gray-600">Built-in animated intro narration functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Choice-Based Story Navigation</h3>
            <p className="text-gray-600">Built-in choice-based story navigation functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Dark/Noir Aesthetic</h3>
            <p className="text-gray-600">Built-in dark/noir aesthetic functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Dynamic Transitions</h3>
            <p className="text-gray-600">Built-in dynamic transitions functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Random Episode Generator</h3>
            <p className="text-gray-600">Built-in random episode generator functionality ready to use.</p>
          </div>
        </div>

        {/* Pages Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">about</Link>
            <Link href="/credits" className="text-blue-600 hover:text-blue-800 hover:underline">credits</Link>
            <Link href="/home" className="text-blue-600 hover:text-blue-800 hover:underline">home</Link>
            <Link href="/stories" className="text-blue-600 hover:text-blue-800 hover:underline">stories</Link>
            <Link href="/story-viewer" className="text-blue-600 hover:text-blue-800 hover:underline">story viewer</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
