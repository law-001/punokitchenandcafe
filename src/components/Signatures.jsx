// Gapless dense bento: one tall hero plate + two stacked plates, no empty cells.
// 6-col x 2-row grid -> 4x2 + 2x1 + 2x1 = 12 cells, perfectly filled.

function DishCard({ img, alt, name, price, blurb, className }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-forest-900 ${className}`}
    >
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
        {blurb && (
          <p className="mb-3 max-w-sm text-pretty font-sans text-sm leading-relaxed text-bone/0 opacity-0 transition-all duration-500 group-hover:text-bone/80 group-hover:opacity-100">
            {blurb}
          </p>
        )}
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-2xl font-normal text-cream md:text-3xl">{name}</h3>
          <span className="shrink-0 rounded-full bg-cream/95 px-3 py-1 font-sans text-sm font-bold text-forest">
            {price}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Signatures() {
  return (
    <section className="relative bg-forest px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-balance font-light text-cream"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.02 }}>
            What lands on the
            <span
              className="mx-3 inline-block h-9 w-20 translate-y-1 rounded-full bg-cover bg-center align-middle ring-1 ring-cream/20 md:h-12 md:w-28"
              style={{ backgroundImage: 'url(/img/food/sisig.jpg)' }}
              aria-hidden
            />
            table
          </h2>
          <p className="max-w-xs text-pretty font-sans text-sm leading-relaxed text-bone/70">
            A short list of plates we are known for. Built for two or three, set
            down in the middle, gone in minutes.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(0,1fr)] grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-6 sm:grid-rows-2"
             style={{ minHeight: 'min(78vh, 720px)' }}>
          <DishCard
            className="sm:col-span-4 sm:row-span-2"
            img="/img/food/kare-kare.jpg"
            alt="Pork Belly Kare-Kare in creamy peanut sauce with vegetables"
            name="Pork Belly Kare-Kare"
            price="PHP 450"
            blurb="Crispy pork belly and tender tripe in a creamy peanut sauce, served with vegetables and bagoong."
          />
          <DishCard
            className="min-h-[230px] sm:col-span-2 sm:row-span-1 sm:min-h-0"
            img="/img/food/sisig.jpg"
            alt="Puno Crispy Sisig topped with a poached egg and chilies"
            name="Puno Crispy Sisig"
            price="PHP 350"
            blurb="Crispy pork with chicken liver sauce and a poached egg."
          />
          <DishCard
            className="min-h-[230px] sm:col-span-2 sm:row-span-1 sm:min-h-0"
            img="/img/food/wings.jpg"
            alt="Salted Egg Wings with garlic aioli"
            name="Salted Egg Wings"
            price="PHP 380"
            blurb="Crispy wings coated in buttery salted egg sauce, with creamy garlic aioli."
          />
        </div>
      </div>
    </section>
  )
}
