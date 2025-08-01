'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {useRouter} from "next/navigation";
import {getPlaygroundUrl} from "@/app/utils/utils";


export default function HomePage() {
    const router = useRouter()
    const handleOpenPlayground = () => {
        router.push('/playground')
    }
    return (
        <div className="min-h-screen bg-zinc-800 flex flex-col">
            <Header pageType="landing"/>
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" style={{paddingBottom: "200px"}}>
                        <div className="text-center">
                            {/* Logo */}
                            <div className="mb-6 sm:mb-8">
                                <div className="relative inline-flex items-center justify-center">
                                    <Image
                                        src="/composebox-logo.svg"
                                        alt="ComposeBox Logo"
                                        width={142}
                                        height={142}
                                        className="text-blue-400 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40"
                                    />
                                    <span className="absolute top-3 sm:top-3 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full transform">
                                        BETA
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl text-zinc-300 font-bold mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                                Playground & Preview for Jetpack Compose Multiplatform
                            </h1>
                            <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                                Explore, experiment, and share your Compose UI instantly.
                                No setup required. Directly in your browser.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                                <Link
                                    href={getPlaygroundUrl()}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Try Playground
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg hover:shadow-xl border border-zinc-600"
                                >
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <div
                    style={{marginTop: "-150px"}}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        onClick={handleOpenPlayground}
                        style={{border: "solid 5px #fefefe21"}}
                        className="relative cursor-pointer w-full overflow-hidden rounded-lg shadow-xl aspect-video">
                        <video
                            style={{marginBottom: "-40px"}}
                            className="top-0 left-0 w-full h-full object-cover object-top"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/video-landing.webp"
                        >
                            <source src="/video-landing.webm" type="video/webm"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-zinc-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
                                Why ComposeBox?
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto px-4">
                                The best playground platform for Jetpack Compose Multiplatform
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            <div className="text-center p-4 sm:p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No Installation</h3>
                                <p className="text-sm sm:text-base text-zinc-300">Directly in browser, no complex setup needed</p>
                            </div>

                            <div className="text-center p-4 sm:p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Real-time Preview</h3>
                                <p className="text-sm sm:text-base text-zinc-300">See your changes instantly as you code</p>
                            </div>

                            <div className="text-center p-4 sm:p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                                <div className="relative">
                                    <span
                                        className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                                        Coming Soon
                                    </span>
                                    <div
                                        className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Easy Sharing</h3>
                                    <p className="text-sm sm:text-base text-zinc-300">Share your experiments with simple links</p>
                                </div>
                            </div>

                            <div className="text-center p-4 sm:p-6 bg-zinc-800 rounded-lg border-1 border-zinc-700">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Multiplatform</h3>
                                <p className="text-sm sm:text-base text-zinc-300">Support for Android, iOS, Desktop & Web</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-zinc-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
                            Ready to Start Coding?
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-300 mb-8 px-4">
                            Join thousands of developers exploring Jetpack Compose Multiplatform
                        </p>
                        <Link
                            href={getPlaygroundUrl()}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}