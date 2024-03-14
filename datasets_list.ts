// import { listDatasets } from "@huggingface/hub";

// async function fetchDatasets() {
//   try {
//     const datasets = await listDatasets();
//     console.log(datasets);
//   } catch (error) {
//     console.error("Error fetching datasets:", error);
//   }
// }

// fetchDatasets();


// import { listDatasets } from "@huggingface/hub";

// async function searchDatasets(searchString) {
//   try {
//     const datasets = await listDatasets(); // Fetch the list of datasets
//     const filteredDatasets = datasets.filter(dataset => {
//       // Assuming each dataset object has a 'name' property you want to search by
//       return dataset.name.toLowerCase().includes(searchString.toLowerCase());
//     });

//     console.log(filteredDatasets); // Display the filtered list of datasets
//   } catch (error) {
//     console.error("Error searching datasets:", error);
//   }
// }

// // Replace 'your_search_string' with the string you're searching for
// searchDatasets('your_search_string');





// async function fetchDatasetsDirectly() {
//     try {
//       const response = await fetch('https://huggingface.co/api/datasets'); // Use the correct API URL
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching datasets directly:", error);
//     }
//   }
  
//   fetchDatasetsDirectly();
  
// datasets.ts

// datasets.ts

// WORKING

// import { listDatasets } from '@huggingface/hub';

// async function fetchDatasetsByKeyword(keyword: string): Promise<void> {
//   try {
//     const datasets = await listDatasets({ search: keyword });
//     const datasetList = [];
//     for await (const dataset of datasets) {
//       datasetList.push(dataset);
//     }
//     console.log(`Datasets related to "${keyword}":`, datasetList);
//   } catch (error) {
//     console.error('Error fetching datasets:', error);
//   }
// }

// // Example usage
// fetchDatasetsByKeyword('NLP'); // Replace 'NLP' with your desired keyword


import { listDatasets } from '@huggingface/hub';

declare type WidgetExampleFromModelcard = any;
declare type ModelIndex = any;


async function fetchDatasetsByKeyword(keyword: string): Promise<any[]> {
  try {
    // Specify additional fields to fetch
    
    // Specify the limit for the number of datasets to fetch
    const limit = 10;
    
    // Pass the additionalFields and limit options in the listDatasets call
    // const additionalFields = ['cardData', 'description', 'tags'];
    // const datasets = await listDatasets({ search: keyword, additionalFields: additionalFields, limit: limit });
    
    const additionalFields: ("cardData" | "description" | "tags")[] = ['cardData', 'description', 'tags'];

    const datasets = await listDatasets({
      search: { query: keyword }, // Fix here: Wrap the keyword in an object under the query property
      additionalFields: additionalFields,
      limit: limit
    });

    
    
    const datasetList = [];

    for await (const dataset of datasets) {
      // Now each dataset should include cardData, description, and tags along with the default fields
      // The total number of datasets fetched will be limited to 100
      datasetList.push(dataset);
    }

    // console.log(`Top 100 datasets related to "${keyword}":`, datasetList);
    
    return(datasetList);
  } catch (error) {
    console.error('Error fetching datasets:', error);
  }
}

export { fetchDatasetsByKeyword }; 
// Example usage
// fetchDatasetsByKeyword('NLP'); // Replace 'NLP' with your desired keyword


// import { downloadFile } from '@huggingface/hub';
// import * as fs from 'fs';

// const REPO_ID = '6244de99404da52375812a2a'; // Replace with your repo ID
// const FILENAME = 'data.csv'; // Replace with your dataset filename


// downloadFile({ repo: REPO_ID, path: FILENAME, range: [0,100] })
//   .then(data => {
//     // Process the downloaded data (e.g., parse CSV, JSON, etc.)
//     fs.writeFileSync('path/to/destination/data.csv', data);
//   })
//   .catch(error => {
//     console.error('Error fetching dataset:', error);
//   });


// import { downloadFile } from '@huggingface/hub';
// import * as fs from 'fs';

// const REPO_ID = 'Helsinki-NLP/bianet'; // Replace with your repo ID
// const FILENAME = ''; // Replace with your dataset filename

// downloadFile({ repo: REPO_ID, path: FILENAME, range: [0,100],credentials: {
//   accessToken: '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'
// } })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Failed to download file: ${response.statusText}`);
//     }
//     return response.arrayBuffer();  // Convert the response body to an ArrayBuffer
//   })
//   .then(buffer => {
//     fs.writeFileSync('path/to/destination/data.csv', Buffer.from(buffer));  // Write the ArrayBuffer to a file
//   })
//   .catch(error => {
//     console.error('Error fetching dataset:', error);
//   });
