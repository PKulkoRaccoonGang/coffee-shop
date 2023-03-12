export default function About() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
        >
          <div
            className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-orange-900">Baker 75 Street</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The coffee situation is getting better and better.
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  There are many places in Kharkiv where you can have either a
                  quick bracing coffee or a looong relaxing one. Black and white,
                  in beans or instant. Cappuccino, latte, mocca, americano or espresso,
                  with caramel, chocolate or cognac.... Fortunately, the choice is big here!
                </p>
              </div>
            </div>
          </div>
          <div
            className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          >
            <img
              className="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-[100%]"
              src="https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg"
              alt="Coffee cup"
            />
          </div>
          <div
            className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Life goes fast and people don&apos;t want to waste time for comparing cafés
                  and choosing the one where a cup of coffee will not become a bad surprise.
                  What a pity!!! If they did, we&apos;d find here a better culture of preparing
                  and serving a nice cup of joe.
                </p>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Good coffee.</strong>
                      {' '}
                      A friend of ours to the question &apos;What is the sense of life&apos;
                      once answered &apos;To have as many cups of good coffee as you can&apos;.
                      Good coffee is a rare thing in Kharkov, but it does exist!
                      And knowing so called coffee spots&apos;, you will not get into
                      a trouble when decide to enjoy a cup of hot aromatic and so
                      desired coffee. We like coffee, so here you go: A whole
                      category devoted to kharkov&apos;s &apos;coffee spots&apos;.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Additives.</strong>
                      {' '}
                      Marshmallows, cookies and light summer delicious
                      mousses with fruits and berries, biscuit,
                      salted caramel and peanut butter.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Coffee selection.</strong>
                      {' '}
                      There is a big choice of coffee, you can even buy ground
                      coffee for home if would like to. Coffee itself is really tasty.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  We in coffee house embody the theory of
                  a comfortable place. The first place is the house,
                  the second place is the work, and the third ...
                  Here everyone can forget about the social framework
                  and freely communicate with the city&apos;s celebrity,
                  famous musicians like to come here.
                  Every client here is a guest.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Did you know:
                </h2>
                <p className="mt-6">
                  First coffee house in Vienna was opened by a Ukrainian,
                  Yuriy Kulchitskiy, in XVI century. At the beginning this
                  drink was not popular in Vienna. But later Yuiry started
                  adding sugar, honey and milk to coffee. The drink became
                  extremely popular, mostly among men, who would come to his
                  coffee house three times a day to read newspapers, discuss
                  recent news and enjoy coffee. Famous &apos;Wiener Melange&apos;
                  was also invented by Kulchitskiy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
