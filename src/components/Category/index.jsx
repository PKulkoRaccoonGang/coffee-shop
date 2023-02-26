const callouts = [
    {
        name: 'Coffee beans',
        description: 'Coffee beans',
        imageSrc: 'https://images.photowall.com/products/53211/more-coffee-beans.jpg?h=699&q=85',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Instant coffee',
        description: 'Instant coffee',
        imageSrc: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/making-instant-coffee.jpg?quality=82&strip=all',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Organic coffee',
        description: 'Organic coffee',
        imageSrc: 'https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/ozryzxisypyx8u2miaix.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
];

const Category = () => {
  return (
      <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                  <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                      {callouts.map((callout) => (
                          <div key={callout.name} className="group relative">
                              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                  <img
                                      src={callout.imageSrc}
                                      alt={callout.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                  />
                              </div>
                              <h3 className="mt-6 text-sm text-gray-500">
                                  <a href={callout.href}>
                                      <span className="absolute inset-0" />
                                      {callout.name}
                                  </a>
                              </h3>
                              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Category;


