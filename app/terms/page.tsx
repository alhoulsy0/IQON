"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-24">
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400 mb-12">
                        Last Updated: December 19, 2025
                    </p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Qertex ("we," "us," or "our"), concerning your access to and use of our website and services. By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site and various services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; and (4) you are not a minor in the jurisdiction in which you reside.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Activities</h2>
                            <p>
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of the United Arab Emirates. Qertex and yourself irrevocably consent that the courts of the United Arab Emirates shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                            </p>
                            <p className="mt-4 text-iqon-red font-bold">
                                info@qertex.com
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
