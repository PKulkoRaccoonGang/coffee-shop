const posts = [
    {
        id: 1,
        description:
            'Aside from the beautiful building, the cool shirts and mugs and the awesome owners.... the COFFEE is killer! Great job, y\'all!',
        author: {
            name: 'Keanu Reeves',
            role: 'Actor',
            imageUrl:
                'https://media1.popsugar-assets.com/files/thumbor/4J1Ae4-0TCdHqesVNiAwKZKDczs/747x57:2332x1642/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/845/n/1922398/72b43cc95e42fddddb7c75.82501526_/i/Keanu-Reeves.jpg',
        },
    },
    {
        id: 2,
        description:
            'Excellent coffee and service! Had a double espresso as well as a pourover. I was glad to see a La Mazocco espresso machine in use, which produces top-notch shots. They brew Counter Culture coffee, which is great. The staff seemed very knowledgeable and skilled at their craft. The artwork around the café was beautiful. Also, the décor was very delightful. Overall, a great experience!',
        author: {
            name: 'Lionel Messi',
            role: 'Footballer',
            imageUrl:
                'https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1',
        },
    },
    {
        id: 3,
        description:
            'His recommendation, The Liquid Gold, is AMAZING. The coffee is excellent and organic and all of their syrups are made in house! We also loved the atmosphere and great mix of people there- lots of families with young children, newlyweds, artists, church groups, young students, couples on date night, etc. This place is exactly what Macon needed!',
        author: {
            name: 'Mark Zuckerberg',
            role: 'CEO Meta',
            imageUrl:
                'https://hips.hearstapps.com/hmg-prod/images/Mark-Zuckerberg_GettyImages-512304736.jpg?resize=1200:*',
        },
    },
    {
        id: 4,
        description:
            'Prices are comparable to what I\'d expect in a Starbucks, and the quality is SOOOO much better (seriously guys) That Iced vanilla honey chai was unbelievable.',
        author: {
            name: 'Lady Gaga',
            role: 'Singer, actress',
            imageUrl: 'https://i.iheart.com/v3/catalog/artist/39335?ops=fit(720%2C720)',
        },
    },
    {
        id: 5,
        description: 'Came in today and loved the place and the coffee. So nice to talk to you. We WILL be back.',
        author: {
            name: 'Joe Biden',
            role: '46th U.S. President',
            imageUrl: 'https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain_1x1_992.jpg',
        },
    },
    {
        id: 6,
        description: 'Great friends, great atmosphere, and Liquid Gold....oh my....good stuff!',
        author: {
            name: 'Jay Z',
            role: 'Musician',
            imageUrl: 'https://static01.nyt.com/images/2015/03/31/business/31jayz-web2/31jayz-web2-mediumSquareAt3X-v3.jpg',
        },
    },
];

const Testimonials = () => (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                {posts.map(({ id, description, author }) => (
                    <div key={id} className="mb-8 sm:break-inside-avoid">
                        <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                            <p className="leading-relaxed text-gray-700">
                                {description}
                            </p>
                        </blockquote>
                        <div className="mt-4 flex items-center gap-4">
                            <img
                                className="h-12 w-12 rounded-full object-cover"
                                src={author.imageUrl}
                                alt={author.name}
                            />
                            <div className="text-sm">
                                <p className="font-medium">{author.name}</p>
                                <p className="mt-1">{author.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
