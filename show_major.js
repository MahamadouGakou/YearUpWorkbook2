var studentName = "Mariam"
var studentMajor = "ENG"



if(studentMajor != "MKT" || "HIST" || "CSCI" || "BIOL")
{
    major="<UNKNOWN>"
}

if(studentMajor != "MKT" || "HIST" || "CSCI" || "BIOL")
{
    deparmentOffice="<UNKNOWN>"
}

if (studentMajor == "ENG")
{
    var deparmentOffice= "Kerr Hall, Room 201"

}
if ( studentMajor == "ENG")
{
    var major= "English"

}
//////////////////





if (studentMajor == "BIOL")
{
    var deparmentOffice= " Science Building Room 310"

}
if (studentMajor == "  BIOL")
{
    var major= "Biology"

}

/////////////////
if (studentMajor == "CSCI")
{
    var deparmentOffice= "Kerr Hall, Room 201"

}
if (studentName== "Betty" || studentMajor == "CSCI")
{
    var major= "Computer Science"

}

////////////////
if ( studentMajor == "HIST")
{
    var deparmentOffice= "Kerr Hall, Room 114"

}
if ( studentMajor == "HIST")
{
    var major= "History"

}

////////////////

if (studentMajor == "MKT")
{
    var deparmentOffice= "Westly Hall, Room 310"

}
if (studentMajor == "MKT")
{
    var major= "Marketing"

}





console.log("Student:" + studentName + "\n" +  "Major:" + major + "\n" +
"Advising Location:" + deparmentOffice)