export default function AncientSection() {
  return (
    <section className="relative w-full h-[480px] overflow-hidden border-y-4 border-yellow-500">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Fallback.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div className="max-w-4xl">
                
                <h1 className="font-primary text-5xl font-black text-white md:text-6xl leading-tight">
                Taste the Flavors of Ancient Sri Lanka
                </h1>

                <p className="mx-auto mt-6 max-w-xl font-lato text-sm leading-7 text-gray-200 md:text-base">
                Every meal is a ceremony — cooked over firewood, served on banana
                leaves, seasoned with hand-ground spices grown in our garden.
                </p>

                <button className="mt-8 rounded-md bg-primary px-8 py-3 font-lato text-sm font-medium text-white transition hover:bg-red-800">
                Explore Our Menu
                </button>

            </div>
        </div>
    </section>
  );
}