exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 9912:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5520));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4850));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1148))

/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 1148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8195);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7877);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5520);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Navbar = ()=>{
    const { user, googleSignIn, logOut } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.UserAuth)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const formatDisplayName = (displayName)=>{
        return displayName.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };
    const handleSignIn = async ()=>{
        try {
            await googleSignIn();
            localStorage.setItem("user", user.displayName);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignOut = async ()=>{
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    const toggleDropdown = ()=>{
        setShowDropdown(!showDropdown);
    };
    const closeDropdown = ()=>{
        setShowDropdown(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (showDropdown && !event.target.closest(".dropdown-container")) {
                closeDropdown();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        showDropdown
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const checkAuthentication = async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed  items-center top-0 w-full h-12 bg-white z-40 sborder-b-2 border-slate-200 mb-12 bg-yellow-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between nav",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex ml-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "mt-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://firebasestorage.googleapis.com/v0/b/data-bounty-9a821.appspot.com/o/WhatsApp%20Image%202024-02-20%20at%204.27.58%20PM.jpeg?alt=media&token=14bd86c5-9492-411c-bdf3-ed5d4798c617",
                                    width: 35,
                                    height: 35,
                                    alt: "Logo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2 cursor-pointer text-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: "Datalab AI"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__/* .faSearch */ .wn1,
                                                className: "w-4 h-4 text-gray-500 dark:text-gray-400"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "search",
                                            id: "default-search",
                                            className: "block w-96 mt-2 w-62 h-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                            placeholder: "Search for Datasets, Models...",
                                            required: true
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                !user ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex items-center text-base font-normal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2 mr-2",
                                children: "Models"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2 mr-2",
                                children: "Datasets"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2 mr-2",
                                children: "Bounties"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/listing",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2 mr-2",
                                children: "Create a Listing"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/datarequest",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "p-2",
                                children: "Data Request"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "p-2 ml-4 relative",
                            onClick: toggleDropdown,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: formatDisplayName(user.displayName)
                                    })
                                }),
                                showDropdown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "w-48 mt-2 absolute z-10 bg-white text-gray-400 border rounded-md dropdown-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "p-2 cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/profile",
                                                children: "Profile"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "p-2 cursor-pointer",
                                            onClick: handleSignOut,
                                            children: "Sign out"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                loading ? null : !user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: handleSignIn,
                            className: "p-2 cursor-pointer",
                            children: "Login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: handleSignIn,
                            className: "p-2 cursor-pointer",
                            children: "Sign up"
                        })
                    ]
                }) : null
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 5520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContextProvider: () => (/* binding */ AuthContextProvider),
/* harmony export */   UserAuth: () => (/* binding */ UserAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8166);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* __next_internal_client_entry_do_not_use__ AuthContextProvider,UserAuth auto */ 



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthContextProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const googleSignIn = ()=>{
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .GoogleAuthProvider */ .hJ();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signInWithPopup */ .rh)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, provider);
    };
    const logOut = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .signOut */ .w7)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .onAuthStateChanged */ .Aj)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>unsubscribe();
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            googleSignIn,
            logOut
        },
        children: children
    });
};
const UserAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};


/***/ }),

/***/ 9483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Az: () => (/* binding */ getBounty),
/* harmony export */   I8: () => (/* binding */ auth),
/* harmony export */   Rs: () => (/* binding */ addDataset),
/* harmony export */   _5: () => (/* binding */ getBounties),
/* harmony export */   _o: () => (/* binding */ addBounty),
/* harmony export */   cT: () => (/* binding */ uploadFile)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1288);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8166);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6853);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8120);
// Import the functions you need from the SDKs you need




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7ovwAAFJ-UTHmTQBuQWczVr0iyqftsj4",
    authDomain: "data-bounty-9a821.firebaseapp.com",
    projectId: "data-bounty-9a821",
    storageBucket: "data-bounty-9a821.appspot.com",
    messagingSenderId: "704526138200",
    appId: "1:704526138200:web:1a89ea4b894342754a832d"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .v0)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getFirestore */ .ad)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)(app);
const addBounty = async (bountyData)=>{
    try {
        // Add a new document to the 'bounties' collection
        // add doc to the collection named 'bounties' with the data passed in bountyData
        const bountiesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .collection */ .hJ)(db, "bounties");
        // i want to add one more keypair value to the bountyData object
        bountyData = {
            ...bountyData,
            createdBy: auth.currentUser.uid,
            name: auth.currentUser.displayName
        };
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .addDoc */ .ET)(bountiesCollection, bountyData);
        console.log("Bounty added with ID: ", docRef.id);
        return docRef.id; // Return the ID of the added document if needed
    } catch (error) {
        console.error("Error adding bounty: ", error.message);
        throw error;
    }
};
// get all the bounties from the database
const getBounties = async ()=>{
    try {
        const bountiesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .collection */ .hJ)(db, "bounties");
        const bountiesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getDocs */ .PL)(bountiesCollection);
        const bountiesList = bountiesSnapshot.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        console.log("Bounties: ", bountiesList);
        return bountiesList;
    } catch (error) {
        console.error("Error getting bounties: ", error.message);
        throw error;
    }
};
// get the bounty by doc id 
const getBounty = async (bountyId)=>{
    try {
        const bountyDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getDoc */ .QT)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .doc */ .JU)(db, "bounties", bountyId));
        if (bountyDoc.exists()) {
            console.log("Bounty data: ", bountyDoc.data());
            return {
                id: bountyDoc.id,
                ...bountyDoc.data()
            };
        } else {
            console.log("No such bounty!");
            return null;
        }
    } catch (error) {
        console.error("Error getting bounty: ", error.message);
        throw error;
    }
};
// i have to store the file in firebase called csv file, i have to store it like that was uploaded by that user
const uploadFile = async (file)=>{
    try {
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .iH)(storage, `csv-files/${auth.currentUser.uid}/${file.name}`);
        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .uploadBytesResumable */ .B0)(storageRef, file);
        const snapshot = await uploadTask;
        console.log("Uploaded a blob or file!", snapshot);
        return snapshot.ref.fullPath;
    } catch (error) {
        console.error("Error uploading file: ", error.message);
        throw error;
    }
};
// i have to create a collection datasets and the each document id is the user id and fields are the title, description, tags, file, uploadedAt, uploadedBy and also file you have to store in storage in the same way as the csv file
const addDataset = async (datasetData)=>{
    try {
        const datasetsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .collection */ .hJ)(db, "datasets");
        datasetData = {
            ...datasetData,
            uploadedBy: auth.currentUser.uid,
            uploadedAt: new Date()
        };
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .addDoc */ .ET)(datasetsCollection, datasetData);
        console.log("Dataset added with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding dataset: ", error.message);
        throw error;
    }
};
 // Exporting the auth object


/***/ }),

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(736);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./app/components/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kishore/Desktop/DatalabAI/app/components/Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
;// CONCATENATED MODULE: ./app/context/AuthContext.js

const AuthContext_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kishore/Desktop/DatalabAI/app/context/AuthContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthContext_esModule, $$typeof: AuthContext_$$typeof } = AuthContext_proxy;
const AuthContext_default_ = AuthContext_proxy.default;

const e0 = AuthContext_proxy["AuthContextProvider"];

const e1 = AuthContext_proxy["UserAuth"];

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(5291);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(7967);
;// CONCATENATED MODULE: ./app/layout.js







const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm/* ToastContainer */.Ix, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;