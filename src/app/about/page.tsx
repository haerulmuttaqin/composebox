'use client';

import React from 'react';
import Link from 'next/link';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {getPlaygroundUrl} from "@/app/utils/utils";


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-800">
            <Header pageType="landing"/>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
                            About ComposeBox
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto px-4">
                            Leading platform for Jetpack Compose Multiplatform
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-12 sm:py-16 md:py-20 bg-zinc-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg mx-auto prose-invert">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Our Vision</h2>
                        <p className="text-base sm:text-lg text-zinc-300 mb-6 sm:mb-8">
                            ComposeBox was born from the need for developers to have an easy and fast playground
                            for experimenting with Jetpack Compose Multiplatform. We believe that every developer
                            deserves access to powerful tools without having to go through complex setup processes.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Technology</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                            <div className="bg-zinc-700 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Frontend</h3>
                                <ul className="text-sm sm:text-base text-zinc-300 space-y-2">
                                    <li>• Next.js 15 with App Router</li>
                                    <li>• TypeScript for type safety</li>
                                    <li>• Tailwind CSS for styling</li>
                                    <li>• Monaco Editor for code editing</li>
                                </ul>
                            </div>
                            <div className="bg-zinc-700 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Backend</h3>
                                <ul className="text-sm sm:text-base text-zinc-300 space-y-2">
                                    <li>• Kotlin Multiplatform</li>
                                    <li>• Jetpack Compose for Web</li>
                                    <li>• WebAssembly (WASM)</li>
                                    <li>• Gradle build system</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Key Features</h2>
                        <div className="space-y-6 mb-8 sm:mb-12">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div
                                    className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Real-time Preview</h3>
                                    <p className="text-sm sm:text-base text-zinc-300">See your Compose code results directly without manual
                                        build</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div
                                    className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No Setup Required</h3>
                                    <p className="text-sm sm:text-base text-zinc-300">Start coding immediately without installing Kotlin,
                                        Android Studio, or other tools</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div
                                    className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Easy Sharing</h3>
                                    <p className="text-sm sm:text-base text-zinc-300">Share your experiments with simple links</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div
                                    className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Multiplatform Support</h3>
                                    <p className="text-sm sm:text-base text-zinc-300">Full support for Android, iOS, Desktop & Web platforms</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Contact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                            <div className="bg-zinc-700 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Email</h3>
                                <div className="space-y-2 text-sm sm:text-base text-zinc-300">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href="mailto:email.haerulmuttaqin@gmail.com"
                                           className="hover:text-white transition-colors break-all">
                                            email.haerulmuttaqin@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href="mailto:contact@hae.my.id"
                                           className="hover:text-white transition-colors break-all">
                                            contact@hae.my.id
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-700 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Social</h3>
                                <div className="space-y-2 text-sm sm:text-base text-zinc-300">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                        <a href="https://linkedin.com/in/haerulmuttaqin" target="_blank"
                                           rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            Haerul Muttaqin
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        <a href="https://github.com/haerulmuttaqin" target="_blank"
                                           rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            Haerul Muttaqin
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor"
                                             viewBox="0 0 512 512" id="_x30_1" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z"></path>
                                        </svg>
                                        <a href="https://hae.my.id" target="_blank" rel="noopener noreferrer"
                                           className="hover:text-white transition-colors">
                                            Website (hae.my.id)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Join Us</h2>
                        <p className="text-base sm:text-lg text-zinc-300 mb-6 sm:mb-8">
                            Have suggestions or want to contribute? We&apos;re always open to feedback and
                            contributions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/haerulmuttaqin/composebox"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl border border-zinc-600 text-center"
                            >
                                View on GitHub
                            </a>
                            <Link
                                href={getPlaygroundUrl()}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                            >
                                Try Playground
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
} 