import Blockquote from '../Blockquote';

const Main = () => (
    <main className="relative bg-[url(https://cdn.shopify.com/s/files/1/0738/1409/products/subscription_6095fcca-65e3-45d7-87f0-9e7fa6cfa4a9.jpg?v=1661784005)] bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Coffee made with love
                    <strong className="block font-extrabold text-orange-800">
                        Baker 75 Street.
                    </strong>
                </h1>
                <Blockquote
                    className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed"
                    text="You will taken by the power that savoring a simple cup of coffee can have to connect people and create community..."
                />
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="/"
                       className="block w-full rounded bg-orange-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-orange-700 sm:w-auto"
                    >
                        But coffee
                    </a>
                    <a href="/"
                       className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-900 shadow hover:text-orange-800 focus:outline-none focus:ring active:text-orange-700 sm:w-auto"
                    >
                        About us
                    </a>
                </div>
            </div>
        </div>
    </main>
);

export default Main;
