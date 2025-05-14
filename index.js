/** A uniform alias for the close or exit function in bun, deno, node and the browser */
export const exit = (() => {
    if (typeof Deno === 'object') return Deno.exit

    else if (typeof process === 'object') return process.exit

    else if (typeof close === 'function') return close

    else throw new Error('The close or exit function was not detected')
})()