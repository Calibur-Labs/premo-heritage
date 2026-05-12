export default function HeritageSection() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-20 px-10 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src="/lipa.png"
            alt="Heritage cooking"
          />
          <div>

            <p className="font-secondary text-sm tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
              Our Heritage
            </p>

            <h2 className="text-5xl md:text-6xl font-black font-primary text-primary leading-[1] mb-6">
  A Villa Born from Tradition
</h2>

            <p className="text-gray-600 mb-4 leading-relaxed max-w-xl">
              Nestled in the heart of Sri Lanka, Premo Heritage Villa stands as a testament to centuries-old traditions. Our villa embodies the authentic spirit of Sri Lankan culture, where every meal is prepared using ancestral methods — clay pots over wood fire, hand-ground spices, and fresh herbs from our garden.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
              Each element of our villa tells a story, from the hand-carved wooden pillars to the traditional terracotta roof tiles. We invite you to experience a living heritage that honors the past while embracing the present.
            </p>

            <div className="w-36 h-[2px] bg-[#b89b5e]"></div>

          </div>
        </div>
      </section>

      <section className="bg-[#8B1A1A] py-10 px-6 md:px-10">

        <div className="flex items-center justify-center gap-6 md:gap-10">
          <span className="text-[#C9A84C] text-2xl opacity-80 flex-shrink-0">
            ✦
          </span>

          <p className="font-primary text-center text-white italic text-xl md:text-2xl leading-relaxed max-w-[54rem]">
            A living sanctuary rooted in Sri Lankan heritage — crafted for those who seek culture,
            comfort, and authenticity.
          </p>

          <span className="text-[#C9A84C] text-2xl opacity-80 flex-shrink-0">
            ✦
          </span>
        </div>
      </section>

    </>
  );
}