$(document).ready(function(){

// $(function() {
//         var params = {
//         key: "bb32e0f1b71046f4a5844dc55af9e844",

//         };
      
//         $.ajax({
//             url: "https://api.fantasydata.net/mlb/v2/JSON/Players/PIT?" + $.param(params),
//             dataType: "jsonp",
//             type: "GET",
          
//         })

//         .success(function(data) {
//             // alert("success")
//             var Name = "";
          
//           $.each(data, function(i, data) {
//               var teamCity = data.City;
//               // console.log(data.Position + ": " + data.FirstName + " " + data.LastName + ",");

//               Name += 'eggs';
              
//               $('#QA-holder').append(teamCity + " " + data.Name + ", ");
//           })

         

//         // .fail(function() {
//         //     alert("error");
//         // });
//         });
       
//     });

$("#first-choice").change(function() {

  var $dropdown = $(this);

  $.getJSON("data.json", function(data) {
    console.log(data)
    var key = $dropdown.val();
    var vals = [];
              
    switch(key) {
      case 'orioles':
        vals = data.orioles.split(",");
        break;
      case 'pirates':
        vals = data.pirates.split(",");
        break;
      case 'base':
        vals = ['Please choose from above'];
    }
    
    var $secondChoice = $("#second-choice");
    $secondChoice.empty();
    $.each(vals, function(index, value) {
      $secondChoice.append("<li>" + value + "</li>");
    });

  });
});

  });

    //-------------------------------------- end fantasydata code --------------------





