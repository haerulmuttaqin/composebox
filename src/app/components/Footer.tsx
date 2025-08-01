import React from "react";
import {OtherTool, OtherTools} from "@/app/data/other-tools";
import Link from "next/link";

const Footer: React.FC = () => {
    return <footer className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {/* ComposeBox */}
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">ComposeBox</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4">
                        Platform playground for Jetpack Compose Multiplatform
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/haerulmuttaqin/composebox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Tools & Products */}
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Other Tools</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        {
                            OtherTools.map((data: OtherTool) => (
                                <li key={data.url}>
                                    <Link
                                        href={data.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors break-all"
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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
                                className="text-zinc-400 hover:text-white transition-colors break-all"
                            >
                                Kotlin Multiplatform
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://developer.android.com/jetpack/compose"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors break-all"
                            >
                                Jetpack Compose
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <li>
                            <a
                                href="mailto:email.haerulmuttaqin@gmail.com"
                                className="text-zinc-400 hover:text-white transition-colors break-all"
                            >
                                email.haerulmuttaqin@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:contact@hae.my.id"
                                className="text-zinc-400 hover:text-white transition-colors break-all"
                            >
                                contact@hae.my.id
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://hae.my.id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors break-all"
                            >
                                hae.my.id
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
                <p className="text-zinc-400 text-xs sm:text-sm">
                    © {new Date().getFullYear()} ComposeBox. Built with ❤️ using Next.js & Kotlin Multiplatform.
                </p>
            </div>
        </div>
    </footer>;
}
export default Footer