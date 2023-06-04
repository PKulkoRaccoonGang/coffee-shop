import Card from '../components/Card';
import { products } from '../components/Products';
import Select from '../components/Select';
import Filter from '../components/Filter';
import { Button } from '../components/Button';

export default function MarketPlace() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Coffee marketplace</h2>
            <p className="mt-4 max-w-md text-gray-500">
              Choose delicious, high-quality coffee, and we will make sure
              that it is fast and convenient.
            </p>
          </header>
          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="hidden sm:flex sm:gap-4">
              <Filter title="Coffee sorts ">
                <div className="z-50 absolute">
                  <div className="w-96 rounded border border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700">0 Selected</span>
                      <Button>Reset</Button>
                    </header>
                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            Coffee beans (200 packs)
                          </span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="h-5 w-5 rounded border-gray-300"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            Instant coffee (250 packs)
                          </span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            Organic coffee (150 packs)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </Filter>
              <Filter title="Price">
                <div className="z-50 absolute">
                  <div className="w-96 rounded border border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700">
                        The highest price is $600
                      </span>
                      <Button>Reset</Button>
                    </header>
                    <div className="border-t border-gray-200 p-4">
                      <div className="flex justify-between gap-4">
                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>
                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>
                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Filter>
            </div>
            <Select label="SortBy" options={['From cheap to expensive', 'From expensive to cheap', 'New']} />
          </div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({
              imageSrc, name, price, href,
            }) => (
              <Card key={name} imageSrc={imageSrc} name={name} price={price} href={href} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
