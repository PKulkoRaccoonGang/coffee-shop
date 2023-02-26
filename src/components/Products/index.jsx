const products = [
    {
        id: 1,
        name: 'Lavazza Qualita Oro',
        href: '#',
        price: '$48',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-3_2.jpg',
        imageAlt: 'Having prepared coffee from Lavazza Qualita Oro, you will feel the pleasant aroma of flowers and fruits.',
    },
    {
        id: 2,
        name: 'Movenpick Caffe Crema',
        href: '#',
        price: '$35',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465_2.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465-1_2.jpg',
        imageAlt: 'Movenpick Caffe Crema is a blend that includes a ton of benefits.',
    },
    {
        id: 3,
        name: 'Merrild Dansk Guld',
        href: '#',
        price: '$89',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1006117-1.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1006117-2.jpg',
        imageAlt: 'Dansk Guld are 100% medium roast Arabica beans.',
    },
    {
        id: 4,
        name: 'Fineberry Original Blend',
        href: '#',
        price: '$35',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/5/857753.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/4/5433609_2_3.jpg',
        imageAlt: 'Selected Arabica beans from Nicaragua, Honduras and El Salvador make the taste of this drink unique.',
    },
    {
        id: 5,
        name: 'ISLA GOLD BLEND',
        href: '#',
        price: '$35',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7698109-2_1.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7698109-1_1.jpg',
        imageAlt: '100% Arabica from Brazil and Central America.',
    },
    {
        id: 6,
        name: 'Lavazza Crema e Aroma',
        href: '#',
        price: '$35',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442021-1_2.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442021_2.jpg',
        imageAlt: 'Lavazza Crema e Aroma combines these three qualities and will definitely please every coffee connoisseur.',
    },
    {
        id: 7,
        name: 'MELITTA BellaCrema LaCrema',
        href: '#',
        price: '$89',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/5/2558805.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/5/2558805-1_2.jpg',
        imageAlt: 'Melitta is a brand created in Germany, owned by a company that produces equipment and accessories for making coffee, tea, and other food.',
    },
    {
        id: 8,
        name: 'Lucaffe Mr.Exclusive - 100% Arabica',
        href: '#',
        price: '$35',
        imageSrc1: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2462922_9.jpg',
        imageSrc2: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2462922-1.png',
        imageAlt: 'Melitta is a brand created in Germany, owned by a company that produces equipment and accessories for making coffee, tea, and other food.',
    },
]

const Products = () => {
  return (
      <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Product Collection
                  </h2>

                  <p className="mt-4 max-w-md text-gray-500">
                      Choose delicious, high-quality coffee, and we will make sure that it is fast and convenient.
                  </p>
              </header>

              <div className="mt-8">
                  <p className="text-right text-sm text-gray-500">
                      Showing <span> 4 </span> of 40
                  </p>
              </div>

              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map(product => {
                      return (
                          <li>
                              <a href="/" className="group block overflow-hidden">
                                  <img
                                      src={product.imageSrc1}
                                      alt=""
                                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                  />

                                  <div className="relative bg-white pt-3">
                                      <h3
                                          className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                      >
                                          {product.name}
                                      </h3>

                                      <p className="mt-2">
                                          <span className="sr-only"> Regular Price </span>

                                          <span className="tracking-wider text-gray-900"> {product.price} </span>
                                      </p>
                                  </div>
                              </a>
                          </li>
                      )
                  })}
              </ul>

              <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
                  <li>
                      <a
                          href="/"
                          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                      >
                          <span className="sr-only">Prev Page</span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fill-rule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                              />
                          </svg>
                      </a>
                  </li>

                  <li>
                      <a
                          href="/"
                          className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                      >
                          1
                      </a>
                  </li>

                  <li
                      className="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white"
                  >
                      2
                  </li>

                  <li>
                      <a
                          href="/"
                          className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                      >
                          3
                      </a>
                  </li>

                  <li>
                      <a
                          href="/"
                          className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                      >
                          4
                      </a>
                  </li>

                  <li>
                      <a
                          href="/"
                          className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                      >
                          <span className="sr-only">Next Page</span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                              />
                          </svg>
                      </a>
                  </li>
              </ol>
          </div>
      </section>


  )
}

export default Products;
