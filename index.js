1.//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order





2.//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkingNumbers(arrayOfNumbers){
    return arrayOfNumbers.map(number =>{
          if(number > 0){
            return `${number}is positive`;
          }else if(number < 0){
             return `${number}is negative`;
          }else{
              return `${number} is zero`;
          }
      });
  };
  
  console.log(checkingNumbers([1,2,3,4,-5,-6,0]));

3.//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortingAnObject(employeesArrayObject){  
return employeesArrayObject.sort((a,b) => a.salary-b.salary);
    
}

console.log(sortingAnObject([
  { id: 1, name: "Jacky", salary: 10000 },
   { id: 2, name: "Jackie", salary: 60000},
  { id: 3, name: "Jacqueline", salary: 40000},
 ]));

4.//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

  function numberMultiplyByTwo(arrayOfNumbers){
      arrayOfNumbers.forEach(number => console.log(number*2));
  }
  
  numberMultiplyByTwo([1,2,3,4,5,-6,-7,-8]);

5.//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function numbersOperations(arrayOfNumbers) {
    arrayOfNumbers.forEach((number,index) => {
        if(index < 4){
            console.log(`${number * 8}`);
        }else if(index >= arrayOfNumbers.length-2){
            console.log(`${number + 5}`);
        }else{
            console.log(`${number}`);
        }
    })
}
    numbersOperations([1,2,3,4,5,6,7,8]);