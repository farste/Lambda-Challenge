/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
	return("Hello World!");
}

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool(num) {
	if ((num % 3 === 0) && (num % 5 === 0)) return 'Lambda School';
	if ((num % 3 === 0) && (num % 5 !== 0)) return 'Lambda';
	if ((num % 3 !== 0) && (num % 5 === 0)) return 'School';
	if ((num % 3 !== 0) && (num % 5 !== 0)) return num;
}

/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/



/*
Write code to parse the array one by one while storing two pieces of information: the length of the longest string
in the array thus far and its location in the array. Use this information to find the first longest item in the array.
*/

function longestString(strs) {
	var z = 0;
	var i = 0;
	var y = 0;
	for (var x = 0; x < strs.length; x++) {
		if (y <  strs[x].length){
		z = strs[x];}
		y = strs[x].length};
		
			return z;
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {
	var y = 0
	for (var x = 0; x < users.length; x++){
		y = y + users[x].age;}
		var z = y/x;
		return Math.round(z);
	}
	

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};