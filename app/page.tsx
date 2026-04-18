export default function Home() {
  return (
    <main className="min-h-screen">
      
      <img
        src="/homebg.png"
        alt="Home background"
        className="w-full h-screen object-cover"
      />

      <section className="bg-[#f5f5f5] py-20 px-10 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/lipa.png" 
              alt="Heritage cooking"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.3em] text-[#b89b5e] uppercase mb-4">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7a1f1f] leading-tight mb-6">
              A Villa Born from Tradition
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nestled in the heart of Sri Lanka, Premo Heritage Villa stands as a testament to centuries-old traditions. Our villa embodies the authentic spirit of Sri Lankan culture, where every meal is prepared using ancestral methods – clay pots over wood fire, hand-ground spices, and fresh herbs from our garden.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Each element of our villa tells a story, from the hand-carved wooden pillars to the traditional terracotta roof tiles. We invite you to experience a living heritage that honors the past while embracing the present.
            </p>
            <div className="w-16 h-[2px] bg-[#b89b5e]"></div>
          </div>
        </div>
      </section>

    </main>
  );
}