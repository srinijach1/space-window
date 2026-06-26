import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Header />
      <section className="mx-auto max-w-7xl px-8 py-20">

        <h1 className="text-6xl font-bold">
          Space Window
        </h1>

        <p className="mt-4 text-gray-400">
          What can you see in space right now?
        </p>
        
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <InfoCard
            title="Moon"
            emoji="🌖"
            value="Loading..."
          /> 

          <InfoCard
            title="ISS"
            emoji="🛰️"
            value="Loading..."
          /> 

          <InfoCard
            title="Visibility"
            emoji="☁"
            value="Loading..."
          /> 

          <InfoCard
            title="Rocket Launches"
            emoji="🚀"
            value="Loading..."
          /> 

          <InfoCard
            title="Planets"
            emoji="🪐"
            value="Loading..."
          /> 

          <InfoCard
            title="NASA APOD"
            emoji="📷"
            value="Loading..."
          /> 

        </div>

      </section>
    <Footer />
    </main>
  );
}
