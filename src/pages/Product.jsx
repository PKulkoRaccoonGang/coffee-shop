import FeedbackMsg from '../components/Feedback/FeedbackMsg';
import Feedback from '../components/Feedback';
import Quantity from '../components/Quantity';
import Badge from '../components/Badge';

export default function Product() {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 my-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <img
            alt="Lavazza Qualita Oro"
            src="https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <div>
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  Lavazza Qualita Oro
                </h1>
              </div>
              <p className="text-lg font-bold">$48</p>
            </div>
            <div className="mt-4">
              <div className="prose max-w-none">
                <p>
                  Lavazza Qualita Oro coffee in beans is a classic among coffee gourmets and
                  a real benchmark of Italian coffee culture. His homeland is Italy. For the
                  first time, Lavazza began selling this mixture in 1956. And she fell in love
                  so much that she became the hallmark of Lavazza. Translated from Italian,
                  the name sounds like “Golden Quality”. And this applies not only to its
                  bright packaging, but also to the internal content.
                </p>
              </div>
            </div>
            <form className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Category</legend>
                <Badge text="Coffee beans" color="orange-900" />
              </fieldset>
              <Quantity />
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Customer Reviews</h2>
        <Feedback />
      </div>
      <FeedbackMsg />
    </section>
  );
}
