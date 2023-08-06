export let obj = {
    name: '111',
    age: 12,
}
export interface ChangeValue {
    name: string;
    age: number;
}
export const change = (value: ChangeValue) => {
    obj = {
        ...value
    }
}