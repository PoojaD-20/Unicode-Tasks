const n=4;
console.log(n);
let arr = ["bcdef","bcdefgh","bcdef","abcdef"];
const counter={};
arr.forEach(ele => {
	if (counter[ele]) {
		counter[ele] += 1;
	} else {
		counter[ele] = 1;
	}
});
console.log(counter);