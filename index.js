// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toLocaleUpperCase();

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr = sentence.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toLocaleUpperCase());
}
sentence = arr.join(" ")

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.substring(1, 2);

