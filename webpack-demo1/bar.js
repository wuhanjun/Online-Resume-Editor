/**   bar:条、棒 阻拦，酒吧
 * Created by lenovo on 2017/1/10.
 */
export default function bar() { //在这里被导出
    console.log('hello webpack');//每个脚本只能有一个默认导出
}
// module "my-module.js"
 export function cube(x) {
    return x * x * x;
}
var foo = Math.PI + Math.SQRT2;
export { foo };

