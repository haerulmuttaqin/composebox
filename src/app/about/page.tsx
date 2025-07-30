'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About ComposeBox
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Leading platform for Jetpack Compose Multiplatform
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-lg text-zinc-300 mb-8">
              ComposeBox was born from the need for developers to have an easy and fast playground 
              for experimenting with Jetpack Compose Multiplatform. We believe that every developer 
              deserves access to powerful tools without having to go through complex setup processes.
            </p>

            <h2 className="text-3xl font-bold text-white mb-8">Technology</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Next.js 15 with App Router</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Monaco Editor for code editing</li>
                </ul>
              </div>
              <div className="bg-zinc-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                <ul className="text-zinc-300 space-y-2">
                  <li>• Kotlin Multiplatform</li>
                  <li>• Jetpack Compose for Web</li>
                  <li>• WebAssembly (WASM)</li>
                  <li>• Gradle build system</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Preview</h3>
                  <p className="text-zinc-300">See your Compose code results directly without manual build</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">No Setup Required</h3>
                  <p className="text-zinc-300">Start coding immediately without installing Kotlin, Android Studio, or other tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Easy Sharing</h3>
                  <p className="text-zinc-300">Share your experiments with simple links</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multiplatform Support</h3>
                  <p className="text-zinc-300">Full support for Jetpack Compose Multiplatform</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-8">Team</h2>
            <p className="text-lg text-zinc-300 mb-8">
              ComposeBox is developed by a team of developers passionate about Kotlin Multiplatform 
              and Jetpack Compose. We are committed to providing the best experience for developers 
              in exploring and learning Compose Multiplatform.
            </p>

            <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
            <div className="bg-zinc-700 p-8 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Haerul Muttaqin</h3>
                  <div className="space-y-2 text-zinc-300">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:email.haerulmuttaqin@gmail.com" className="hover:text-white transition-colors">
                        email.haerulmuttaqin@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:contact@hae.my.id" className="hover:text-white transition-colors">
                        contact@hae.my.id
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Social Media</h3>
                  <div className="space-y-2 text-zinc-300">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href="https://linkedin.com/in/haerulmuttaqin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Haerul Muttaqin
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <a href="https://github.com/haerulmuttaqin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Haerul Muttaqin
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      <a href="https://hae.my.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        hae.my.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join Us</h3>
              <p className="text-zinc-300 mb-6">
                Have suggestions or want to contribute? We&apos;re always open to feedback and contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/haerulmuttaqin/composebox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  GitHub
                </a>
                <Link 
                  href="/playground"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ComposeBox */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ComposeBox</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Platform playground for Jetpack Compose Multiplatform
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/haerulmuttaqin/composebox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Tools & Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools & Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://mocknroll.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    MockNRoll
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ogx.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    OGX Web
                  </a>
                </li>
                <li>
                  <a 
                    href="https://medium.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Medium Web
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="/about"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="/playground"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Playground
                  </a>
                </li>
                <li>
                  <a 
                    href="https://kotlinlang.org/docs/multiplatform.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Kotlin Multiplatform
                  </a>
                </li>
                <li>
                  <a 
                    href="https://developer.android.com/jetpack/compose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Jetpack Compose
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="mailto:email.haerulmuttaqin@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    email.haerulmuttaqin@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@hae.my.id"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    contact@hae.my.id
                  </a>
                </li>
                <li>
                  <a 
                    href="https://hae.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    hae.my.id
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-700 mt-8 pt-8 text-center">
            <p className="text-zinc-400 text-sm">
              © 2024 ComposeBox. Built with ❤️ using Next.js & Kotlin Multiplatform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 