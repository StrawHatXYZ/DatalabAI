import Link from 'next/link';

const Card = ({ bounty }) => {
  return (
    <Link
      href={{
        pathname: "/detailpage",
        query: { id: bounty.id }, // pass the id as an object
      }}
    >
      <div className="border border-gray-300 rounded-lg mt-4 w-96">
        <article className="overview-card-wrapper group/repo white ">
          <a className="block p-2" href="/google/gemma-7b">
            <header className="flex items-center mb-0.5" title={bounty.title}>
              <h4 className="text-md truncate font-mono text-black dark:group-hover/repo:text-yellow-500 group-hover/repo:text-indigo-600 text-smd">{bounty.title}</h4>
            </header>
            <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
              <span className="truncate"> By
                <time dateTime="2024-02-28T14:51:22" title="Wed, 28 Feb 2024 14:51:22 GMT"> {bounty.name}</time>
              </span>
              <span className="px-1.5 text-gray-300">• </span>
              {/* Add the dollar symbol as an SVG */}
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v9m-6-6h12"/>
                </svg>
                <span className="text-green-500 ml-1">${bounty.amount}</span>
              </span>
            </div>
          </a>
        </article>
      </div>
    </Link>
  );
};

export default Card;
