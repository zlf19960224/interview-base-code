//es5中的写法
var  Clild  = (function (Person) {
    //类的调用检测
        function  _classCheck(instance, constructor) {
            if (!(instance  instanceof  constructor)) {
            throw  new  Error('Class constructor Child cannot be invoked without new')
            }
        }
    //子类继承父类的方法
        function  _inherins(subclass, superclass) {
            subclass.prototype  =  Object.create(superclass.prototype, { constructor: { value:  subclass } })
            Object.setPrototypeOf(subclass, superclass)
        }
        _inherins(Clild, Person)
        function  Clild() {
            let obj=Person.call(this)//子类继承私有属性
            let that=this;
            if(typeof obj=='object'){
                that=obj
            }
            that.name=1;//解决了父类是引用类型的问题
            _classCheck(this, Clild)
            return that
        }
    return  Clild;
    })(Person);