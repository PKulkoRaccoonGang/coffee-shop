const stats = [
  { id: 1, name: 'Delivered in 24 hours', value: '44 kilogram' },
  { id: 2, name: 'Spent on coffee', value: '$119 million' },
  { id: 3, name: 'Made orders', value: '46,000' },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map(({ id, name, value }) => (
            <div key={id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
