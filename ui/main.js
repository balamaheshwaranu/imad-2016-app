console.log('Loaded!');
var submitButton = document.getElementById("submitButton");
var firstName = document.getElementById("firstName");
var comments = document.getElementById("Comments");
submitButton.onclick = function() {myFunction()};

function myFunction() {
 var request = new XMLHttpRequest();
 
 request.onreadystatechange = function(){
     if(request.readystate === XMLHttpRequest.DONE){
         if (request.status === 200){
             var names = request.responseText;
             names.JSON.parse(names);
             var list = '';
             list = '<ul>';
             for (var i=0;i<names.length;i++){
                 list += '<li>'+names[i]+'</li>';
            }
            list += '</ul>';
            var reslt = document.getElementById("Results");
            reslt.innerHTML = list;
         }
     }
     
 };
 var name = firstName+':'+comments;
 request.open('GET','http://http://balamaheshwaranu.imad.hasura-app.io/commentsIncrement?name='+name,true);
 request.send(null);
}



