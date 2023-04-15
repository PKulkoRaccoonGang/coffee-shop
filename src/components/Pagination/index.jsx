import PaginationItem from './PaginationItem';
import PaginationArrow from './PaginationArrow';

const paginationItems = [
  { href: '/', count: 1 },
  { href: '/', count: 2 },
  { href: '/', count: 3 },
  { href: '/', count: 4 },
  { href: '/', count: 5 },
];

export default function Pagination() {
  return (
    <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
      <PaginationArrow href="/" direction="Prev" />
      {paginationItems.map(({ href, count }) => (
        <PaginationItem key={count} href={href} count={count} />
      ))}
      <PaginationArrow href="/" direction="Next" />
    </ol>
  );
}
