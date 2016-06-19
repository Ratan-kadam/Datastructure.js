/**
 * Created by ratan_000 on 3/1/2016.
 */


function rough () {
    this.a =9;
    var b = 10;

}

rough.prototype.print = function () {
    console.log(this.a);
    console.log(this.b);
};



var obj = new rough();

obj.print();