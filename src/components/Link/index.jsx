const Link = ({id, href, name}) => (
    <li key={id}>
        <a className="text-gray-700 transition hover:text-orange-900" href={href}>
            {name}
        </a>
    </li>
);

export default Link;
