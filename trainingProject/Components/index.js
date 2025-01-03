function Person(){
    this.name = 'GOKUl'
    this.val = '20'
    this.fun = ()=>{
        console.log(this.name,this.val);
    }
}
let y = new Person()
y.fun()