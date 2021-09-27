export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;
    return 'this field is required'
}
export const maxLength = (countSymbols: number): FieldValidatorType => (value) => {
    if (value.length > countSymbols) {
        return `this field consists more then ${countSymbols} symbols`
    }
    return undefined
}