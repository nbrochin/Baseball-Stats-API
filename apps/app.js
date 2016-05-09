$(document).ready(function(){

$("#first-choice").change(function() {

    var $dropdown = $(this);
    var trigger = $dropdown.val();
    var vals = [];
    var oValue = $('#first-choice option:selected').text();
    console.log(oValue);

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/PlayerSeasonStatsByPlayer/2016/10000031?" + $.param(params),
            dataType: "jsonp",
            type: "GET",
          
        })


        .success(function(data) {
            alert("success")
            var Name = data.Name;
            var Team = data.Team;
            var Games = data.Games;
            var AtBats = data.AtBats;
            var Hits = data.Hits;
            var RunsBattedIn = data.RunsBattedIn;
            var BattingAverage = data.BattingAverage.toFixed(3);
            var SluggingPercentage = data.SluggingPercentage.toFixed(3);
            var OnBasePlusSlugging = data.OnBasePlusSlugging.toFixed(3);
            var OnBasePercentage = data.OnBasePercentage.toFixed(3);

          
          $.each(data, function(i, data) {
              // console.log(data.PlayerID + ": " + data.FirstName + " " + data.LastName + ",");
              // console.log(data);
              // Name += 'eggs';
              // City += 'tuna';
              
              $('div.top-data-section h2').text(Name);
              $('div.top-data-section h2 span .city-team-name').text(Team);
              $('table.season-stats td.Games').text(Games);
              $('table.season-stats td.AtBats').text(AtBats);
              $('table.season-stats td.Hits').text(Hits);
              $('table.season-stats td.RunsBattedIn').text(RunsBattedIn);
              $('table.season-stats td.BattingAverage').text(BattingAverage);
              $('table.season-stats td.SluggingPercentage').text(SluggingPercentage);
              $('table.season-stats td.OnBasePlusSlugging').text(OnBasePlusSlugging);
              $('table.season-stats td.OnBasePercentage').text(OnBasePercentage);
          })
        });

      });   

//         // .fail(function() {
//         //     alert("error");
       
//         // });
       
    });

$("#first-choice").change(function() {

  var $dropdown = $(this);

  $.getJSON("data.json", function(data) {
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
      // $secondChoice.append("<li><a href= value=" + "'" + value + "'" + ">" + value + "</a></li>");

    });

  });
});

  });

    //-------------------------------------- end fantasydata code --------------------





