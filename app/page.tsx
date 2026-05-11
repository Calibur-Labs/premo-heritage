import HeritageSection from "./components/home/heritageSection";
import GuestStoriesSection from "./components/home/GuestStoriesSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      
      <img
        src="/homebg.png"
        alt="Home background"
        className="w-full h-screen object-cover"
      />

      <HeritageSection />
      <GuestStoriesSection />

    </main>
  );
}