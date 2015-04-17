//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

var inner = outer();

inner();
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

//Once you do that, invoke inner.

  //Code Here



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

callFriend()('435-215-9248');

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.


  //Code Here



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  function makeCounter()
  {
    return function ()
    {
      console.log("1");
      return function ()
      {
        console.log("2");
        return function ()
        {
          console.log("3");
          return function ()
          {
            return console.log("4");
          }
        }
      }
    }
  }

  var count = makeCounter();
  count()()()() // 1




//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

function firstFunc (secondFunc, n)
{
  return function ()
  {
    for (var i = 0; i < n; i++)
    {
      secondFunc();
    }
    console.log('STAHHP');
  }
}

var secondFunc = function ()
{
  console.log("Yipee!");
}

var run = firstFunc(secondFunc, 5);

run()





