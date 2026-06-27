"use client";

import useLocation from "@/hooks/useLocation";
import LocationPrompt from "@/components/LocationPrompt";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  const { location, loading, error, requestLocation } = useLocation();

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Header />

      {!location ? (
        <LocationPrompt onUseLocation={requestLocation} loading={loading} />
      ) : (
        <>
          <p className="mb-8 text-center text-lg text-gray-300">
            📍 Your location detected
          </p>

          <section className="mx-auto max-w-5xl px-8">
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <InfoCard title="Moon" emoji="🌖" value="Loading..." />

              <InfoCard title="ISS" emoji="🛰️" value="Loading..." />

              <InfoCard title="Visibility" emoji="☁" value="Loading..." />

              <InfoCard title="Rocket Launches" emoji="🚀" value="Loading..." />

              <InfoCard title="Planets" emoji="🪐" value="Loading..." />

              <InfoCard title="NASA APOD" emoji="📷" value="Loading..." />
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
