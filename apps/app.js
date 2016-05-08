$(document).ready(function(){

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/Players/COL?" + $.param(params),
            dataType: "jsonp",
            type: "GET",
          
        })

        .success(function(data) {
            alert("success")
            var Name = "";
            var City = "";
          
          $.each(data, function(i, data) {
              var teamCity = data.City;
              console.log(data.Position + ": " + data.FirstName + " " + data.LastName + ",");

              Name += 'eggs';
              City += 'tuna';
              
              // $('#QA-holder').append(teamCity + " " + data.Division + ", ");
          })

         

        // .fail(function() {
        //     alert("error");
        // });
        });
       
    });

$("#first-choice").change(function() {

  var $dropdown = $(this);

  $.getJSON("data.json", function(data) {
    console.log(data)
    var key = $dropdown.val();
    var vals = [];
              
    switch(key) {
      case 'braves':
        vals = data.braves.split(",");
        break;
      case 'orioles':
        vals = data.orioles.split(",");
        break;
        case 'redSox':
        vals = data.redSox.split(",");
        break;
      case 'blueJays':
        vals = data.blueJays.split(",");
        break;
        case 'rays':
        vals = data.rays.split(",");
        break;
      case 'cubs':
        vals = data.cubs.split(",");
        break;
        case 'whiteSox':
        vals = data.whiteSox.split(",");
        break;
      case 'reds':
        vals = data.reds.split(",");
        break;
        case 'indians':
        vals = data.indians.split(",");
        break;
      case 'rockies':
        vals = data.rockies.split(",");
        break;
        case 'tigers':
        vals = data.tigers.split(",");
        break;
      case 'astros':
        vals = data.astros.split(",");
        break;
        case 'royals':
        vals = data.royals.split(",");
        break;
      case 'angels':
        vals = data.angels.split(",");
        break;
        case 'dodgers':
        vals = data.dodgers.split(",");
        break;
      case 'marlins':
        vals = data.marlins.split(",");
        break;
        case 'brewers':
        vals = data.brewers.split(",");
        break;
      case 'twins':
        vals = data.twins.split(",");
        break;
        case 'mets':
        vals = data.mets.split(",");
        break;
      case 'yankees':
        vals = data.yankees.split(",");
        break;
        case 'athletics':
        vals = data.athletics.split(",");
        break;
        case 'phillies':
        vals = data.phillies.split(",");
        break;
        case 'pirates':
        vals = data.pirates.split(",");
        break;
        case 'padres':
        vals = data.padres.split(",");
        break;
        case 'mariners':
        vals = data.mariners.split(",");
        break;
        case 'giants':
        vals = data.giants.split(",");
        break;
        case 'cardinals':
        vals = data.cardinals.split(",");
        break;
        case 'rangers':
        vals = data.rangers.split(",");
        break;
        case 'nationals':
        vals = data.nationals.split(",");
        break;
      case 'base':
        vals = ['Please choose from above'];
    }
    
    var $secondChoice = $("#second-choice");
    $secondChoice.empty();
    $.each(vals, function(index, value) {
      $secondChoice.append("<option>" + value + "</option>");
    });

  });
});

  });

    //-------------------------------------- end fantasydata code --------------------





