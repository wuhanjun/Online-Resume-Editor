/**
 * Created by lenovo on 2017/1/10.
 */
import defaultMember, * as myModule from './bar'; //在这里被导入 同时导入命名和默认的变量时，默认必须放在前面否则报错。

//myModule.bar(); //默认导入的不能这么写
defaultMember();//这样写
console.log(myModule.cube(3)); // 27*/
console.log(myModule.foo); //4.555806215962888只有导入参数包含myModule的时候可以这样写。
//import myModule, {foo, bar} from "my-module";的时候，foo和myModule.foo完全相同。