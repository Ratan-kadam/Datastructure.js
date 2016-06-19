/**
 * Created by ratan_000 on 3/1/2016.
 */


function Node(){
    this.root = {
        data:null,
        left:null,
        right:null
    }
}

Node.prototype.getData = function() {
    return this.root.data;
};

Node.prototype.setData = function(data) {
    this.root.data = data;
};

Node.prototype.getLeft = function() {
    return this.root.left;
};

Node.prototype.setLeft = function(left) {
    this.root.leftv= left;
};

Node.prototype.getRight = function() {
    return this.right;
};


Node.prototype.setRight = function(newnode) {
    this.right= newnode;
};

Node.prototype.push = function(ele) {

};
