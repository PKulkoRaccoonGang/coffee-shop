import { Button } from '../Button';

export default function FeedbackMsg() {
  return (
    <section className="bg-white-100">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl">Send Feedback</h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Leave a review about the purchased product. This helps us to better
              interact with customers and provide quality services! You can also
              thank us by the contact number below or visit our store:
            </p>
            <div className="mt-8">
              <a href="tel:+3800933786928" className="text-2xl font-bold text-pink-600">
                +380 093 378 6928
              </a>
              <address className="mt-2 not-italic">
                Sumska St, 21, Kharkiv
              </address>
            </div>
          </div>
          <div className="rounded-lg bg-white lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                />
              </div>
              <div className="mt-4">
                <Button text="Send Feedback" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
