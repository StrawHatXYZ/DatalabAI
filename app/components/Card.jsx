import Link from 'next/link';

const Card = ({ bounty }) => {
  return (
    <Link
      href={{
        pathname: "/detailpage",
        query: { id: bounty.id },
      }}
    >
      <div className="bg-white rounded-lg shadow p-3  w-full md:w-96">
        <article className="overflow-hidden">
          <a className="block p-4 md:p-2" href={`/detailpage?id=${bounty.id}`}>
            <header className="flex items-center" title={bounty.title}>
              <h4 className="text-md truncate font-mono text-black dark:text-yellow-500 md:text-smd">{bounty.title}</h4>
            </header>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 truncate">By {bounty.name}</span>
                <span className="px-1.5 text-gray-300">•</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v9m-6-6h12"/>
                  </svg>
                  <span className="text-green-500 ml-1">${bounty.amount}</span>
                </span>
              </div>
              <div className="hidden md:block">
                {/* Add an image here if needed */}
              </div>
            </div>
          </a>
        </article>
      </div>
    </Link>
  );
};

export default Card;
