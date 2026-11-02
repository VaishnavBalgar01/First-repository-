const{add,subtract}=require('./math');
console.log(process.argv);
let [first,second]=[process.argv[2],process.argv[3]];
console.log(add(first,second))