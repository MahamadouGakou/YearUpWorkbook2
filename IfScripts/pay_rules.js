//////Input

var payRate = 17.3;
var hoursWorked = 45
var payRate2 =payRate * 1.5
var overtime =hoursWorked - 40
////// Operations

if( hoursWorked <= 40)
{
    grosspay=payRate * hoursWorked
}

else if (hoursWorked > 40)
{
   grosspay = ( 40 * payRate + (overtime * payRate2) )
}

console.log(grosspay)









