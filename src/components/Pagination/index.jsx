import PaginationItem from './PaginationItem';
import PaginationArrow from './PaginationArrow';

const paginationItems = [
  { id: 1, href: '/', count: 1 },
  { id: 2, href: '/', count: 2 },
  { id: 3, href: '/', count: 3 },
  { id: 4, href: '/', count: 4 },
  { id: 5, href: '/', count: 5 },
];

function Pagination() {
  return (
    <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
      <PaginationArrow href="/" direction="Prev" />
      {paginationItems.map(({ id, href, count }) => (
        <PaginationItem id={id} href={href} count={count} />
      ))}
      <PaginationArrow href="/" direction="Next" />
    </ol>
  );
}

export default Pagination;
