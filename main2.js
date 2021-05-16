function submitNames(){
    var studentNamesArray=[];
    var displayNamesArray=[];
    for (var i=1;i<=4;i++)
    {var studentNames=document.getElementById("input"+i).value;
    console.log(studentNames);
    studentNamesArray.push(studentNames)};
    console.log(studentNamesArray);
    
    for (var b=0;b<4;b++)
    {displayNamesArray.push("<h4> Name: "+studentNamesArray[b]+"</h4>");
    console.log(displayNamesArray)};
    
    document.getElementById(submit).style.display="none";
    document.getElementById(sort).style.display="inline-block";
    document.getElementById(displayNames).innerHTML=displayNamesArray;
}

function sortNames(){
    var studentNamesArray.sort()
    console.log(studentNames);
    displaySortedNamesArray=[];
    for (var c=0;c<4;c++)
    var DSA.push("<h4> Name: "+studentNamesArray[b]+"</h4>");
    console.log(DSA);
    document.getElementById(sort).style.display="none";
    document.getElementById(displaySortedNames).innerHTML=DSA;
}
