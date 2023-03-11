import { ButtonLink } from '../components/Button';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-orange-900">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-orange-900">
            We can’t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesnt exist
            or has been moved.
          </p>

          <div className="flex flex-col items-center mt-6 gap-x-3 md:flex-row">
            <ButtonLink href="/" text="Go back" styles="mb-4 md:m-0" />
            <ButtonLink href="/" text="Take me home" />
          </div>
        </div>
      </div>
    </section>
  );
}
