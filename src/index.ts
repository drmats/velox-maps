/**
 * Velox.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

/* eslint-disable no-console */




// ...
window.addEventListener("load", () => {
    const body = document.getElementsByTagName("body");
    const app = document.createElement("div");
    app.innerText = "Velox.";
    body.item(0)?.appendChild(app);
    console.info("Velox.");
});
