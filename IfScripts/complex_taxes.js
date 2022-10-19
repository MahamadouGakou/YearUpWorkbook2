//////Input

var payRate = 10;
var hoursWorked = 45
var payRate2 =payRate * 1.5
var overtime =hoursWorked - 40;
var filingstatus= "single"







////// Operations

if( hoursWorked <= 40)
{
    grosspay=payRate * hoursWorked
}

else if (hoursWorked > 40)
{
   grosspay = ( 40 * payRate + (overtime * payRate2) )
}


 var annualIncome= grosspay*52
 
 console.log(annualIncome) 

 //////////Advanced operations

 

 if(filingstatus== "single" && annualIncome <= 12000)
 {
    taxRate= .05
 }

 else if(filingstatus= "married" && annualIncome<=12000)
 {
taxRate= 0
 }



 if(filingstatus== "single" && annualIncome <= 24999.99)
 {
    taxRate= .1
 }

 else if(filingstatus= "married" && annualIncome<=24999.99)
 {
taxRate= .06
 }

    
 
 
    if(filingstatus== "single" && annualIncome <= 74999.99)
 {
    taxRate= .15
 }
  else if(filingstatus= "married"&& annualIncome<=74999.99)
 {
taxRate= .11
 }

 
 
 else {taxRate=.2}

 var withHolding = taxRate*grosspay;
 var netpay= grosspay - withHolding

 console.log(grosspay)

 
