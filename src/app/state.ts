/**
 * Component state shape description.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */




/**
 * App component initial state.
 */
export default {

    // is whole application initialized?
    ready: false,

    // is application visible (browser tab active)?
    visible: true,

    // last error
    error: null as string | null,

    // last state-change timestamp (global - any action)
    tick: Date.now(),

};
