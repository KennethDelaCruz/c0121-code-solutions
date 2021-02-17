function ExampleConstructor() {

}

var aExample = new ExampleConstructor();
console.log('type of aExample', aExample);

var checking = aExample instanceof ExampleConstructor;

console.log('is aExample an instanceof ExampleConstructor?', checking);
