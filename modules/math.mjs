export const PI = 3.141492
export function pow(base, exponential) {
    if (exponential === 0) return 1
    return base * pow(base, exponential -1)
}
