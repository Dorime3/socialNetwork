export const required = (value) => {
    if (value) return undefined;
    return 'this field is required'
}
export const maxLength = (countSymbols) => (value) => {
    if (value.length > countSymbols) {
        return `this field consists more then ${countSymbols} symbols`
    }
    return undefined
}