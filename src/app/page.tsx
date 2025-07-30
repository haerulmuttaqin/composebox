'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center">
                <Image
                  src="/composebox-logo.svg"
                  alt="ComposeBox Logo"
                  width={144}
                  height={144}
                  className="text-blue-400"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ComposeBox
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Playground & Preview for Jetpack Compose Multiplatform
            </p>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              Explore, experiment, and share your Compose UI instantly. 
              No setup required. Directly in your browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/playground"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Try Playground
              </Link>
              <Link 
                href="/about"
                className="bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl border border-zinc-600"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why ComposeBox?
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              The best playground platform for Jetpack Compose Multiplatform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-zinc-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Installation</h3>
              <p className="text-zinc-300">Directly in browser, no complex setup needed</p>
            </div>
            
            <div className="text-center p-6 bg-zinc-700 rounded-lg">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Preview</h3>
              <p className="text-zinc-300">See results instantly while writing code</p>
            </div>
            
            <div className="text-center p-6 bg-zinc-700 rounded-lg">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Sharing</h3>
              <p className="text-zinc-300">Share your experiments with simple links</p>
            </div>
            
            <div className="text-center p-6 bg-zinc-700 rounded-lg">
              <div className="w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multiplatform</h3>
              <p className="text-zinc-300">Full support for Jetpack Compose Multiplatform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experiment?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Start exploring Jetpack Compose Multiplatform now
          </p>
          <Link 
            href="/playground"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Get Started
          </Link>
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