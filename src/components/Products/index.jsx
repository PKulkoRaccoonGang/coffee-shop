import Pagination from '../Pagination';
import Card from '../Card';

const products = [
    {
        id: 1,
        name: 'Lavazza Qualita Oro',
        href: '/',
        price: '$48',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442055-1_3.jpg',
        imageAlt: 'Having prepared coffee from Lavazza Qualita Oro, you will feel the pleasant aroma of flowers and fruits.',
    },
    {
        id: 2,
        name: 'Movenpick Caffe Crema',
        href: '/',
        price: '$35',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2458465_2.jpg',
        imageAlt: 'Movenpick Caffe Crema is a blend that includes a ton of benefits.',
    },
    {
        id: 3,
        name: 'Merrild Dansk Guld',
        href: '/',
        price: '$89',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1006117-1.jpg',
        imageAlt: 'Dansk Guld are 100% medium roast Arabica beans.',
    },
    {
        id: 4,
        name: 'Fineberry Original Blend',
        href: '/',
        price: '$35',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/5/857753.jpg',
        imageAlt: 'Selected Arabica beans from Nicaragua, Honduras and El Salvador make the taste of this drink unique.',
    },
    {
        id: 5,
        name: 'ISLA GOLD BLEND',
        href: '/',
        price: '$35',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/7698109-2_1.jpg',
        imageAlt: '100% Arabica from Brazil and Central America.',
    },
    {
        id: 6,
        name: 'Lavazza Crema e Aroma',
        href: '/',
        price: '$35',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2442021-1_2.jpg',
        imageAlt: 'Lavazza Crema e Aroma combines these three qualities and will definitely please every coffee connoisseur.',
    },
    {
        id: 7,
        name: 'MELITTA BellaCrema LaCrema',
        href: '/',
        price: '$89',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/5/2558805.jpg',
        imageAlt: 'Melitta is a brand created in Germany, owned by a company that produces equipment and accessories for making coffee, tea, and other food.',
    },
    {
        id: 8,
        name: 'Lucaffe Mr.Exclusive - 100% Arabica',
        href: '/',
        price: '$35',
        imageSrc: 'https://coffeeok.com.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/2462922_9.jpg',
        imageAlt: 'Melitta is a brand created in Germany, owned by a company that produces equipment and accessories for making coffee, tea, and other food.',
    },
]

const Products = () => (
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
                {products.map(({id, imageSrc, name, price}) => (
                    <Card id={id} imageSrc={imageSrc} name={name} price={price} />
                ))}
            </ul>
            <Pagination />
        </div>
    </section>
);

export default Products;
