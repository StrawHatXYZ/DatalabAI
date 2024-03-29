import Link from "next/link";
import { useState } from "react";

const ModelCard = ({ dataset }) => {
  return (
    <Link
      href={{
        pathname: "/Dataset",
        query: { id: dataset.name ,downloads: dataset.downloads, tags: dataset.tags},
      }}
    >
      <div className="bg-white p-2 rounded-lg mt-4 w-full">
        <article className="overview-card-wrapper group/repo white ">
          <a className="block p-2" href="/google/gemma-7b">
            <header className="flex items-center mb-0.5" title={dataset.name}>
              <h4 className="text-md truncate font-mono text-black dark:group-hover/repo:text-yellow-500 group-hover/repo:text-indigo-600 text-smd">{dataset.name}</h4>
            </header>
            {/* <p>{dataset.description}</p>  */}
            <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
              <span className="truncate">Updated
                <time datetime="2024-02-28T14:51:22" title="Wed, 28 Feb 2024 14:51:22 GMT"> about 16 hours ago</time>
              </span>
              <span className="px-1.5 text-gray-300">• </span>
              <svg className="flex-none w-3 text-gray-400 mr-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" viewBox="0 0 32 32">
                <path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"></path>
              </svg>
              142k
              <span className="px-1.5 text-gray-300">• </span>
              <svg className="flex-none w-3 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" fill="currentColor">
                <path d="M22.45,6a5.47,5.47,0,0,1,3.91,1.64,5.7,5.7,0,0,1,0,8L16,26.13,5.64,15.64a5.7,5.7,0,0,1,0-8,5.48,5.48,0,0,1,7.82,0L16,10.24l2.53-2.58A5.44,5.44,0,0,1,22.45,6m0-2a7.47,7.47,0,0,0-5.34,2.24L16,7.36,14.89,6.24a7.49,7.49,0,0,0-10.68,0,7.72,7.72,0,0,0,0,10.82L16,29,27.79,17.06a7.72,7.72,0,0,0,0-10.82A7.49,7.49,0,0,0,22.45,4Z"></path>
              </svg>
              1.59k
            </div>
          </a>
        </article>
      </div>
    </Link>
  );
};

export default ModelCard;
