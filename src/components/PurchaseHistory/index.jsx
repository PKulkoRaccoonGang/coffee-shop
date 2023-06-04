import { products } from '../Products';
import { Button } from '../Button';

export default function PurchaseHistory() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Purchase History</h1>
          </header>
          <div className="mt-8">
            <ul className="space-y-4">
              {products.map(({
                name, imageSrc, imageAlt, price, category,
              }) => (
                <li key={name} className="flex items-center gap-4">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm text-gray-900">{name}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Price:</dt>
                        <dd className="inline">{price}</dd>
                      </div>
                      <div>
                        <dt className="inline">
                          Category:
                          {category}
                        </dt>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    1
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>
                <div className="flex justify-end">
                  <Button>Download PDF</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
