"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 7106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/Card.jsx


const Card = ({ bounty })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: {
            pathname: "/detailpage",
            query: {
                id: bounty.id
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border border-gray-300 rounded-lg mt-4 w-96",
            children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: "overview-card-wrapper group/repo white ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "block p-2",
                    href: "/google/gemma-7b",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "flex items-center mb-0.5",
                            title: bounty.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "text-md truncate font-mono text-black dark:group-hover/repo:text-yellow-500 group-hover/repo:text-indigo-600 text-smd",
                                children: bounty.title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "truncate",
                                    children: [
                                        " By",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                            dateTime: "2024-02-28T14:51:22",
                                            title: "Wed, 28 Feb 2024 14:51:22 GMT",
                                            children: [
                                                " ",
                                                bounty.name
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "px-1.5 text-gray-300",
                                    children: "• "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            className: "h-4 w-4 text-green-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 7v9m-6-6h12"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-green-500 ml-1",
                                            children: [
                                                "$",
                                                bounty.amount
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Card = (Card);

// EXTERNAL MODULE: ./app/firebase.js
var firebase = __webpack_require__(9483);
;// CONCATENATED MODULE: ./app/BountiesPage/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const BountiesPage = ()=>{
    const [bounties, setBounties] = (0,react_.useState)([]);
    const [loading, setLoading] = (0,react_.useState)(true);
    (0,react_.useEffect)(()=>{
        const fetchBounties = async ()=>{
            try {
                const bounties = await (0,firebase/* getBounties */._5)();
                setBounties(bounties);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBounties();
    }, []);
    // Display only the first four bounties
    const displayedBounties = bounties.slice(0, 5);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-fit",
        children: displayedBounties.map((bounty)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                bounty: bounty
            }, bounty.id))
    });
};
/* harmony default export */ const page = (BountiesPage);


/***/ })

};
;