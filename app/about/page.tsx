'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About the twilight storybook</h1>
          <p className="text-lg text-gray-700 mb-6">an interactive, atmospheric storybook web app inspired by the twilight zone, featuring eerie effects, animated transitions, and immersive storytelling experiences.</p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">We are committed to delivering high-quality solutions and exceptional user experiences.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
