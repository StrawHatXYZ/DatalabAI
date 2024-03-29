"use strict";
// import { listDatasets } from "@huggingface/hub";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDatasetsByKeyword = void 0;
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
var hub_1 = require("@huggingface/hub");
function fetchDatasetsByKeyword(keyword) {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var limit, additionalFields, datasets, datasetList, _d, datasets_1, datasets_1_1, dataset, e_1_1, error_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 14, , 15]);
                    limit = 10;
                    additionalFields = ['cardData', 'description', 'tags'];
                    return [4 /*yield*/, (0, hub_1.listDatasets)({
                            search: { query: keyword },
                            additionalFields: additionalFields,
                            limit: limit
                        })];
                case 1:
                    datasets = _e.sent();
                    datasetList = [];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 7, 8, 13]);
                    _d = true, datasets_1 = __asyncValues(datasets);
                    _e.label = 3;
                case 3: return [4 /*yield*/, datasets_1.next()];
                case 4:
                    if (!(datasets_1_1 = _e.sent(), _a = datasets_1_1.done, !_a)) return [3 /*break*/, 6];
                    _c = datasets_1_1.value;
                    _d = false;
                    dataset = _c;
                    // Now each dataset should include cardData, description, and tags along with the default fields
                    // The total number of datasets fetched will be limited to 100
                    datasetList.push(dataset);
                    _e.label = 5;
                case 5:
                    _d = true;
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _e.trys.push([8, , 11, 12]);
                    if (!(!_d && !_a && (_b = datasets_1.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _b.call(datasets_1)];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: 
                // console.log(`Top 100 datasets related to "${keyword}":`, datasetList);
                return [2 /*return*/, (datasetList)];
                case 14:
                    error_1 = _e.sent();
                    console.error('Error fetching datasets:', error_1);
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
exports.fetchDatasetsByKeyword = fetchDatasetsByKeyword;
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