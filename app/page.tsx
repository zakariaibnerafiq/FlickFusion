
export default function Home() {
  return (
    <section className="space-y-40 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="pt-40">
            <div className="flex flex-col justify-center sm:items-center">
                <h1 className="flex flex-col justify-center sm:items-center sm:gap-6 gap-4">
                    <span className="md:text-5xl sm:text-4xl  text-3xl font-bold text-white">Welcome to <br /></span>
                    <span className="md:text-8xl sm:text-6xl text-5xl font-bold text-peach sm:hover:animate-pulse">FlickFusion</span>
                </h1>
                <p className="mt-4 md:max-w-4xl sm:max-w-xl max-w-md md:text-xl sm:text-center text-slate-400">Introducing FlickFusion, your all-in-one movie streaming service that brings the magic of cinema right to your fingertips. <span className="sm:inline hidden">With a vast library of blockbusters, indie gems, timeless classics, and exclusive originals.</span></p>
            </div>
        </div>

      </div>
    </section>
  );
}
