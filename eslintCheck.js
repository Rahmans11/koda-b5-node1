// getter-return
const p = {
    get name(){
    }
};// not allow

Object.defineProperty(p, "age", {
    get: function (){
        return 17;
    }
});// allow

// no-dupe-keys

const foo = {
    bar: "baz",
    qux: "qux"
};// allow

const bar = {
    "bar": "baz",
    bar: "qux"
};// not allow

const baz = {
    0x1: "baz",
    1: "qux"
};// not allow