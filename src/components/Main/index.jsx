const Main = () => {
  return (
      <main>
          <section
              className="relative bg-[url(https://cdn.shopify.com/s/files/1/0738/1409/products/subscription_6095fcca-65e3-45d7-87f0-9e7fa6cfa4a9.jpg?v=1661784005)] bg-cover bg-center bg-no-repeat"
          >
              <div
                  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
              >
                  <div className="max-w-xl text-center sm:text-left">
                      <h1 className="text-3xl font-extrabold sm:text-5xl">
                          Coffee made with love

                          <strong className="block font-extrabold text-rose-700">
                              Baker 75 Street.
                          </strong>
                      </h1>

                      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                          You will taken by the power that savoring a simple cup of coffee can have to connect people and create community...</p>

                      <div className="mt-8 flex flex-wrap gap-4 text-center">
                          <a
                              href="/"
                              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                          >
                              But coffee
                          </a>

                          <a
                              href="/"
                              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                          >
                              About us
                          </a>
                      </div>
                  </div>
              </div>
          </section>


      </main>
  );
};

export default Main;
