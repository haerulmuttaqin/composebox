'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-zinc-800">
            <Header pageType="landing"/>
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
                                    width={142}
                                    height={142}
                                    className="text-blue-400"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl text-zinc-300 font-bold mb-8 max-w-3xl mx-auto">
                            Playground & Preview for Jetpack Compose Multiplatform
                        </h1>
                        <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
                            Explore, experiment, and share your Compose UI instantly.
                            No setup required. Directly in your browser.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/playground"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-md transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Try Playground
                            </Link>
                            <Link
                                href="/about"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-lg font-semibold text-md transition-colors duration-200 shadow-lg hover:shadow-xl border border-zinc-600"
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
                        <div className="text-center p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                            <div
                                className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No Installation</h3>
                            <p className="text-zinc-300">Directly in browser, no complex setup needed</p>
                        </div>

                        <div className="text-center p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                            <div
                                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Real-time Preview</h3>
                            <p className="text-zinc-300">See results instantly while writing code</p>
                        </div>

                        <div className="text-center p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                            <div
                                className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Easy Sharing</h3>
                            <p className="text-zinc-300">Share your experiments with simple links</p>
                        </div>

                        <div className="text-center p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                            <div
                                className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
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
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
} 