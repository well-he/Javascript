# JS 的成员查找机制（规则）

1. 当访问一个对象的属性（方法）时，首先查找<span style="color:red">**对象自身**</span>有没有该属性
2. 如果没有就查找它的原型（也就是——proto——指向的<span style="color:red">**prototype 的原型对象**</span>）
3. 如果还没有就查找原型对象的原型<span style="color:red">（**Object 的原型对象**</span>）
4. 以此类推一直到 Object 为止 (<span style="color:red">**null**</span>)
5. --proto--对象原型的意义就在于位对象成员查找机制提供一个方向，或者说一条路线。
