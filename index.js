require('datejs');

function combineUsers(...args){
  const combinedObject = {users: [] };
  for (let x of args) { //loops through each array in args
    combinedObject.users = [...combinedObject.users, ...x]; //merge the arrays into the users property
  }; 
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}
// combinedObject.users → the array of users we’ve collected so far.
// arr → the new array we want to merge in.


//test
console.log(combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"]));


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};