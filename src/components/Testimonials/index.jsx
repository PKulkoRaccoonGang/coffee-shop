// const posts = [
//     {
//         id: 1,
//         title: 'Boost your conversion rate',
//         href: '#',
//         description:
//             'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//             name: 'Michael Foster',
//             role: 'Co-Founder / CTO',
//             href: '#',
//             imageUrl:
//                 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//     },
//     {
//         id: 2,
//         title: 'Boost your conversion rate',
//         href: '#',
//         description:
//             'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//             name: 'Michael Foster',
//             role: 'Co-Founder / CTO',
//             href: '#',
//             imageUrl:
//                 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//     },
//     {
//         id: 3,
//         title: 'Boost your conversion rate',
//         href: '#',
//         description:
//             'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//             name: 'Michael Foster',
//             role: 'Co-Founder / CTO',
//             href: '#',
//             imageUrl:
//                 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//     },
// ];

const Testimonials = () => {
  return (
      <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div
                  className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
              >
                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              Aside from the beautiful building, the cool shirts and mugs and the awesome owners....
                              the COFFEE is killer! Great job, y'all!
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://media1.popsugar-assets.com/files/thumbor/4J1Ae4-0TCdHqesVNiAwKZKDczs/747x57:2332x1642/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/845/n/1922398/72b43cc95e42fddddb7c75.82501526_/i/Keanu-Reeves.jpg"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Keanu Reeves</p>
                              <p className="mt-1">Actor</p>
                          </div>
                      </div>
                  </div>

                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              Excellent coffee and service! Had a double espresso as well as a pourover.
                              I was glad to see a La Mazocco espresso machine in use, which produces top-notch shots.
                              They brew Counter Culture coffee, which is great. The staff seemed very knowledgeable and skilled at their craft.
                              The artwork around the café was beautiful. Also, the décor was very delightful.
                              Overall, a great experience!
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Lionel Messi</p>
                              <p className="mt-1">Footballer</p>
                          </div>
                      </div>
                  </div>

                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              His recommendation, The Liquid Gold, is AMAZING.
                              The coffee is excellent and organic and all of their syrups are made in house!
                              We also loved the atmosphere and great mix of people there- lots of families with young children,
                              newlyweds, artists, church groups, young students, couples on date night, etc.
                              This place is exactly what Macon needed!
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://hips.hearstapps.com/hmg-prod/images/Mark-Zuckerberg_GettyImages-512304736.jpg?resize=1200:*"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Mark Zuckerberg</p>
                              <p className="mt-1">CEO Facebook</p>
                          </div>
                      </div>
                  </div>

                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              Prices are comparable to what I'd expect in a Starbucks, and the quality is SOOOO
                              much better (seriously guys) That Iced vanilla honey chai was unbelievable.
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://i.iheart.com/v3/catalog/artist/39335?ops=fit(720%2C720)"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Lady Gaga</p>
                              <p className="mt-1">Singer, actress</p>
                          </div>
                      </div>
                  </div>

                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              Came in today and loved the place and the coffee. So nice to talk to you. We WILL be back.
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://s.abcnews.com/images/International/biden-michigan-ap-rc-200909_hpMain_1x1_992.jpg"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Joe Biden</p>
                              <p className="mt-1">46th U.S. President
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                          <p className="leading-relaxed text-gray-700">
                              Great friends, great atmosphere, and Liquid Gold....oh my....good stuff!
                          </p>
                      </blockquote>

                      <div className="mt-4 flex items-center gap-4">
                          <img
                              alt="Woman"
                              src="https://static01.nyt.com/images/2015/03/31/business/31jayz-web2/31jayz-web2-mediumSquareAt3X-v3.jpg"
                              className="h-12 w-12 rounded-full object-cover"
                          />

                          <div className="text-sm">
                              <p className="font-medium">Jay Z</p>
                              <p className="mt-1">Musician</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  );
};

export default Testimonials;
