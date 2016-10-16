console.log('Loaded!');
var submitButton = document.getElementById("submitButton");
var firstName = document.getElementById("firstName");
var comments = document.getElementById("Comments");
submitButton.onclick = function() {myFunction()};

function myFunction() {
 var request = new XMLHttpRequest();
   console.log('here1');
 request.onreadystatechange = function(){
     console.log('here1.5');
     if(request.readyState === XMLHttpRequest.DONE){
         console.log('here2');
         if (request.status === 200){
             console.log('here3');
             var names = request.responseText;
             names = JSON.parse(names);
             var list = '';
             list = '<ul>';
             for (var i=0;i<names.length;i++){
                 list += '<li>'+names[i]+'</li>';
            }
            list += '</ul>';
            console.log('here4');
            var reslt = document.getElementById("Results");
            reslt.innerHTML = list;
         }
     }
     
 };
 var name = firstName.value+comments.value;
 request.open('GET','http://balamaheshwaranu.imad.hasura-app.io/commentsIncrement?name='+name,true);
  console.log('here5');
 request.send(null);
}



