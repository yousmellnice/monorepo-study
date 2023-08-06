import cloneDeep from 'lodash-es/cloneDeep';
export function formatNum(num: number) {
    const obj1 = {
        name: 'ysn',
        age: 20
    }
    const obj2 = cloneDeep(obj1);
    obj1.name = 'hhhhh'
    console.log(obj1, obj2);
    return num + '元';
}