$(document).ready(function(){

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/Players/OAK?" + $.param(params),
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
    // console.log(data)
    var key = $dropdown.val();
    var vals = [];
              
    switch(key) {
      case 'Braves':
        vals = data.braves.split(",");
        break;
      case 'Orioles':
        vals = data.orioles.split(",");
        break;
        case 'Red Sox':
        vals = data.redSox.split(",");
        break;
      case 'Blue Jays':
        vals = data.blueJays.split(",");
        break;
        case 'Rays':
        vals = data.rays.split(",");
        break;
      case 'Cubs':
        vals = data.cubs.split(",");
        break;
        case 'White Sox':
        vals = data.whiteSox.split(",");
        break;
      case 'Reds':
        vals = data.reds.split(",");
        break;
        case 'Indians':
        vals = data.indians.split(",");
        break;
      case 'Rockies':
        vals = data.rockies.split(",");
        break;
        case 'Tigers':
        vals = data.tigers.split(",");
        break;
      case 'Astros':
        vals = data.astros.split(",");
        break;
        case 'Royals':
        vals = data.royals.split(",");
        break;
      case 'Angels':
        vals = data.angels.split(",");
        break;
        case 'Dodgers':
        vals = data.Dodgers.split(",");
        break;
      case 'Marlins':
        vals = data.marlins.split(",");
        break;
        case 'Brewers':
        vals = data.brewers.split(",");
        break;
      case 'Twins':
        vals = data.twins.split(",");
        break;
        case 'Mets':
        vals = data.mets.split(",");
        break;
      case 'Yankees':
        vals = data.yankees.split(",");
        break;
        case 'Athletics':
        vals = data.athletics.split(",");
        break;
        case 'Phillies':
        vals = data.phillies.split(",");
        break;
        case 'Pirates':
        vals = data.pirates.split(",");
        break;
        case 'Padres':
        vals = data.padres.split(",");
        break;
        case 'Mariners':
        vals = data.mariners.split(",");
        break;
        case 'Giants':
        vals = data.giants.split(",");
        break;
        case 'Cardinals':
        vals = data.cardinals.split(",");
        break;
        case 'Rangers':
        vals = data.rangers.split(",");
        break;
        case 'Nationals':
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





