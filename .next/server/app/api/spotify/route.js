"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/spotify/route";
exports.ids = ["app/api/spotify/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspotify%2Froute&page=%2Fapi%2Fspotify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspotify%2Froute.ts&appDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspotify%2Froute&page=%2Fapi%2Fspotify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspotify%2Froute.ts&appDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_doeonkwon_Documents_Learn_AI_grass_app_api_spotify_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/spotify/route.ts */ \"(rsc)/./app/api/spotify/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/spotify/route\",\n        pathname: \"/api/spotify\",\n        filename: \"route\",\n        bundlePath: \"app/api/spotify/route\"\n    },\n    resolvedPagePath: \"/Users/doeonkwon/Documents/Learn AI/grass/app/api/spotify/route.ts\",\n    nextConfigOutput,\n    userland: _Users_doeonkwon_Documents_Learn_AI_grass_app_api_spotify_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/spotify/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzcG90aWZ5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZzcG90aWZ5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3BvdGlmeSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRvZW9ua3dvbiUyRkRvY3VtZW50cyUyRkxlYXJuJTIwQUklMkZncmFzcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkb2Vvbmt3b24lMkZEb2N1bWVudHMlMkZMZWFybiUyMEFJJTJGZ3Jhc3MmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvd2luZy1tZW1vcnkvPzFlNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2RvZW9ua3dvbi9Eb2N1bWVudHMvTGVhcm4gQUkvZ3Jhc3MvYXBwL2FwaS9zcG90aWZ5L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zcG90aWZ5L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3BvdGlmeVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3BvdGlmeS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kb2Vvbmt3b24vRG9jdW1lbnRzL0xlYXJuIEFJL2dyYXNzL2FwcC9hcGkvc3BvdGlmeS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3BvdGlmeS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspotify%2Froute&page=%2Fapi%2Fspotify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspotify%2Froute.ts&appDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/spotify/route.ts":
/*!**********************************!*\
  !*** ./app/api/spotify/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;\nconst CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;\nconst REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;\nlet accessToken = null;\nlet tokenExpiry = 0;\nasync function refreshToken() {\n    console.log(\"Starting token refresh...\");\n    console.log(\"Credentials check:\", {\n        hasClientId: !!CLIENT_ID,\n        hasClientSecret: !!CLIENT_SECRET,\n        hasRefreshToken: !!REFRESH_TOKEN\n    });\n    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {\n        throw new Error(\"Missing Spotify credentials\");\n    }\n    try {\n        console.log(\"Making request to Spotify token endpoint...\");\n        const response = await fetch(\"https://accounts.spotify.com/api/token\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\",\n                Authorization: \"Basic \" + Buffer.from(CLIENT_ID + \":\" + CLIENT_SECRET).toString(\"base64\")\n            },\n            body: new URLSearchParams({\n                grant_type: \"refresh_token\",\n                refresh_token: REFRESH_TOKEN\n            })\n        });\n        console.log(\"Token response status:\", response.status);\n        const data = await response.json();\n        if (!response.ok) {\n            console.error(\"Token Refresh Error Response:\", {\n                status: response.status,\n                data: data\n            });\n            throw new Error(data.error_description || data.error || \"Failed to refresh token\");\n        }\n        console.log(\"Token refresh successful\");\n        accessToken = data.access_token;\n        tokenExpiry = Date.now() + data.expires_in * 1000;\n        return data.access_token;\n    } catch (error) {\n        console.error(\"Token Refresh Error:\", error);\n        throw error;\n    }\n}\nasync function getAccessToken() {\n    console.log(\"Getting access token...\");\n    console.log(\"Current token state:\", {\n        hasToken: !!accessToken,\n        tokenExpiry: tokenExpiry,\n        currentTime: Date.now()\n    });\n    // If we have a valid token, return it\n    if (accessToken && tokenExpiry > Date.now() + 1000) {\n        console.log(\"Using existing token\");\n        return accessToken;\n    }\n    // Otherwise, refresh the token\n    console.log(\"Token expired or missing, refreshing...\");\n    return refreshToken();\n}\nasync function getCurrentlyPlaying(token) {\n    console.log(\"Fetching currently playing...\");\n    const response = await fetch(\"https://api.spotify.com/v1/me/player/currently-playing\", {\n        headers: {\n            Authorization: `Bearer ${token}`,\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        next: {\n            revalidate: 0\n        }\n    });\n    console.log(\"Currently playing response status:\", response.status);\n    if (response.status === 204) {\n        return {\n            playing: false,\n            message: \"No track currently playing\"\n        };\n    }\n    if (response.status === 401) {\n        console.log(\"Token unauthorized, forcing refresh\");\n        accessToken = null;\n        tokenExpiry = 0;\n        throw new Error(\"Token expired\");\n    }\n    if (!response.ok) {\n        const error = await response.json();\n        console.error(\"Spotify API Error:\", error);\n        throw new Error(error.error?.message || \"Failed to fetch currently playing\");\n    }\n    const data = await response.json();\n    console.log(\"Successfully fetched currently playing\");\n    return data;\n}\nasync function GET() {\n    try {\n        let retries = 0;\n        const maxRetries = 2;\n        while(retries < maxRetries){\n            try {\n                console.log(`Attempt ${retries + 1} of ${maxRetries}`);\n                const token = await getAccessToken();\n                const data = await getCurrentlyPlaying(token);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n            } catch (error) {\n                console.error(`Error on attempt ${retries + 1}:`, error);\n                if (error instanceof Error && error.message === \"Token expired\" && retries < maxRetries - 1) {\n                    retries++;\n                    accessToken = null;\n                    tokenExpiry = 0;\n                    continue;\n                }\n                throw error;\n            }\n        }\n    } catch (error) {\n        console.error(\"Final error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch currently playing\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEQsR0FDQTtZQUFFbkIsUUFBUTtRQUFJO0lBRXRCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG93aW5nLW1lbW9yeS8uL2FwcC9hcGkvc3BvdGlmeS9yb3V0ZS50cz84MTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5jb25zdCBDTElFTlRfSUQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRDtcbmNvbnN0IENMSUVOVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XG5jb25zdCBSRUZSRVNIX1RPS0VOID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9SRUZSRVNIX1RPS0VOO1xubGV0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbmxldCB0b2tlbkV4cGlyeTogbnVtYmVyID0gMDtcblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyB0b2tlbiByZWZyZXNoLi4uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlZGVudGlhbHMgY2hlY2s6XCIsIHtcbiAgICAgICAgaGFzQ2xpZW50SWQ6ICEhQ0xJRU5UX0lELFxuICAgICAgICBoYXNDbGllbnRTZWNyZXQ6ICEhQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgaGFzUmVmcmVzaFRva2VuOiAhIVJFRlJFU0hfVE9LRU4sXG4gICAgfSk7XG5cbiAgICBpZiAoIUNMSUVOVF9JRCB8fCAhQ0xJRU5UX1NFQ1JFVCB8fCAhUkVGUkVTSF9UT0tFTikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFNwb3RpZnkgY3JlZGVudGlhbHNcIik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWtpbmcgcmVxdWVzdCB0byBTcG90aWZ5IHRva2VuIGVuZHBvaW50Li4uXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgXCIgKyBCdWZmZXIuZnJvbShDTElFTlRfSUQgKyBcIjpcIiArIENMSUVOVF9TRUNSRVQpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IFJFRlJFU0hfVE9LRU4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJUb2tlbiByZXNwb25zZSBzdGF0dXM6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRva2VuIFJlZnJlc2ggRXJyb3IgUmVzcG9uc2U6XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9kZXNjcmlwdGlvbiB8fCBkYXRhLmVycm9yIHx8IFwiRmFpbGVkIHRvIHJlZnJlc2ggdG9rZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlRva2VuIHJlZnJlc2ggc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgYWNjZXNzVG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgdG9rZW5FeHBpcnkgPSBEYXRlLm5vdygpICsgZGF0YS5leHBpcmVzX2luICogMTAwMDtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUb2tlbiBSZWZyZXNoIEVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgYWNjZXNzIHRva2VuLi4uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0b2tlbiBzdGF0ZTpcIiwge1xuICAgICAgICBoYXNUb2tlbjogISFhY2Nlc3NUb2tlbixcbiAgICAgICAgdG9rZW5FeHBpcnk6IHRva2VuRXhwaXJ5LFxuICAgICAgICBjdXJyZW50VGltZTogRGF0ZS5ub3coKSxcbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCB0b2tlbiwgcmV0dXJuIGl0XG4gICAgaWYgKGFjY2Vzc1Rva2VuICYmIHRva2VuRXhwaXJ5ID4gRGF0ZS5ub3coKSArIDEwMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2luZyBleGlzdGluZyB0b2tlblwiKTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVmcmVzaCB0aGUgdG9rZW5cbiAgICBjb25zb2xlLmxvZyhcIlRva2VuIGV4cGlyZWQgb3IgbWlzc2luZywgcmVmcmVzaGluZy4uLlwiKTtcbiAgICByZXR1cm4gcmVmcmVzaFRva2VuKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRseVBsYXlpbmcodG9rZW46IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgY3VycmVudGx5IHBsYXlpbmcuLi5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ1wiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDAgfSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudGx5IHBsYXlpbmcgcmVzcG9uc2Ugc3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICAgIHJldHVybiB7IHBsYXlpbmc6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHRyYWNrIGN1cnJlbnRseSBwbGF5aW5nXCIgfTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUb2tlbiB1bmF1dGhvcml6ZWQsIGZvcmNpbmcgcmVmcmVzaFwiKTtcbiAgICAgICAgYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgICB0b2tlbkV4cGlyeSA9IDA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIGV4cGlyZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNwb3RpZnkgQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5lcnJvcj8ubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBmZXRjaCBjdXJyZW50bHkgcGxheWluZ1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGZldGNoZWQgY3VycmVudGx5IHBsYXlpbmdcIik7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJldHJpZXMgPSAwO1xuICAgICAgICBjb25zdCBtYXhSZXRyaWVzID0gMjtcblxuICAgICAgICB3aGlsZSAocmV0cmllcyA8IG1heFJldHJpZXMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGVtcHQgJHtyZXRyaWVzICsgMX0gb2YgJHttYXhSZXRyaWVzfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q3VycmVudGx5UGxheWluZyh0b2tlbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBvbiBhdHRlbXB0ICR7cmV0cmllcyArIDF9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlID09PSBcIlRva2VuIGV4cGlyZWRcIiAmJiByZXRyaWVzIDwgbWF4UmV0cmllcyAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0cmllcysrO1xuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuRXhwaXJ5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZpbmFsIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggY3VycmVudGx5IHBsYXlpbmdcIixcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJDTElFTlRfSUQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJDTElFTlRfU0VDUkVUIiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiUkVGUkVTSF9UT0tFTiIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsImFjY2Vzc1Rva2VuIiwidG9rZW5FeHBpcnkiLCJyZWZyZXNoVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiaGFzQ2xpZW50SWQiLCJoYXNDbGllbnRTZWNyZXQiLCJoYXNSZWZyZXNoVG9rZW4iLCJFcnJvciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImJvZHkiLCJVUkxTZWFyY2hQYXJhbXMiLCJncmFudF90eXBlIiwicmVmcmVzaF90b2tlbiIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwib2siLCJlcnJvciIsImVycm9yX2Rlc2NyaXB0aW9uIiwiYWNjZXNzX3Rva2VuIiwiRGF0ZSIsIm5vdyIsImV4cGlyZXNfaW4iLCJnZXRBY2Nlc3NUb2tlbiIsImhhc1Rva2VuIiwiY3VycmVudFRpbWUiLCJnZXRDdXJyZW50bHlQbGF5aW5nIiwidG9rZW4iLCJBY2NlcHQiLCJuZXh0IiwicmV2YWxpZGF0ZSIsInBsYXlpbmciLCJtZXNzYWdlIiwiR0VUIiwicmV0cmllcyIsIm1heFJldHJpZXMiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/spotify/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspotify%2Froute&page=%2Fapi%2Fspotify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspotify%2Froute.ts&appDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdoeonkwon%2FDocuments%2FLearn%20AI%2Fgrass&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();