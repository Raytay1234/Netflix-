import React from "react";

export default function LandingPage({ setPage, darkMode }) {
    const overlay = darkMode
        ? "bg-gradient-to-t from-black/90 via-black/50 to-black/20"
        : "bg-gradient-to-t from-white/70 via-white/40 to-white/10";

    return (
        <div className={`relative w-full min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fe4aea29-d71f-4caf-a788-0ebdc53fe97e/web/en-large.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${overlay}`} />
            </div>

            {/* Header */}
            <header className="relative z-10 flex justify-between items-center px-6 py-4">
                <h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
                <button
                    onClick={() => setPage("signin")}
                    className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
                >
                    Sign In
                </button>
            </header>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 mt-28">
                <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">
                    Unlimited movies, TV shows and more.
                </h2>
                <p className="text-xl mt-4">Watch anywhere. Cancel anytime.</p>
                <p className="mt-6 text-lg">Ready to watch? Create or restart your membership.</p>

                <button
                    onClick={() => setPage("signup")}
                    className="mt-6 bg-red-600 text-white px-6 py-4 rounded text-xl font-semibold hover:bg-red-700 transition"
                >
                    Get Started →
                </button>
            </div>

            {/* Sections */}
            <div className="relative z-10 mt-32 space-y-20 pb-20">
                {/* Section 1 */}
                <section className="flex flex-col md:flex-row items-center justify-center px-6 gap-10">
                    <div className="max-w-lg">
                        <h3 className="text-3xl md:text-4xl font-bold">Enjoy on your TV.</h3>
                        <p className="text-lg mt-4">
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                            Blu-ray players and more.
                        </p>
                    </div>
                    <img
                        className="w-full max-w-md rounded"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        alt="TV"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex flex-col md:flex-row-reverse items-center justify-center px-6 gap-10">
                    <div className="max-w-lg">
                        <h3 className="text-3xl md:text-4xl font-bold">Download your shows to watch offline.</h3>
                        <p className="text-lg mt-4">
                            Save your favourites easily and always have something to watch.
                        </p>
                    </div>
                    <img
                        className="w-full max-w-md rounded"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        alt="Mobile Download"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex flex-col md:flex-row items-center justify-center px-6 gap-10">
                    <div className="max-w-lg">
                        <h3 className="text-3xl md:text-4xl font-bold">Watch everywhere.</h3>
                        <p className="text-lg mt-4">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>
                    <img
                        className="w-full max-w-md rounded"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                        alt="Device Pile"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex flex-col md:flex-row-reverse items-center justify-center px-6 gap-10">
                    <div className="max-w-lg">
                        <h3 className="text-3xl md:text-4xl font-bold">Create profiles for kids.</h3>
                        <p className="text-lg mt-4">
                            Send kids on adventures with their favourite characters in a space made just for them.
                        </p>
                    </div>
                    <img
                        className="w-full max-w-md rounded"
                        src="https://occ-0-116-34.akamaized.net/Content/oc/nflxicug/images/kids-covers-en.png"
                        alt="Kids"
                    />
                </section>
            </div>

            {/* Footer */}
            <footer className="relative z-10 text-center text-sm py-6 opacity-70">
                © 2025 Netflix Clone – Built by Ryan
            </footer>
        </div>
    );
}
