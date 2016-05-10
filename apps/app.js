$(document).ready(function(){

$("#first-choice").change(function() {

    var $dropdown = $(this);
    var trigger = $dropdown.val();
    var vals = [];
    var oValue = $('#first-choice').val();
    console.log(oValue);

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/Players/" + oValue + "?" + $.param(params),
            dataType: "jsonp",
            type: "GET",

         })

        .success(function(data) {
          // alert("success")
          console.log(data[6].PlayerID);
          console.log(data[9].FirstName);
            var key = $dropdown.val();
            var vals = [];
            var Name = data.FirstName + ' ' + data.LastName;
            var PID = data.PlayerID;

          // switch(key) {
          //   case 'COL':
          //   vals = data.PlayerID.split(":");
          // }
            
            var $secondChoice = $("#second-choice");
            $secondChoice.empty();  

            var newValues = "";
            $("#second-choice").append("<option>Please Choose a Player...</option>");
            for (var i = 0; i < data.length; i++) {
              newValues+= $("#second-choice").append("<option value=" + data[i].PlayerID + ">" + data[i].FirstName + " " + data[i].LastName + "</option>");
          }

          }) 
});


$("#second-choice").change(function() {

    var $dropdown = $(this);
    var trigger = $dropdown.val();
    var vals = [];

})

$('#idGo').click(function playerData () {
  var PID2 = $('#second-choice').val();
});
  
  PID2 = $('#second-choice').val();

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };

        

        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/PlayerSeasonStatsByPlayer/2016/" + PID2 + "?" + $.param(params),
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


         
            console.log(PID2);

          
          $.each(data, function(i, data) {
              
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
          })
        })
  });
  });

  
//         // .fail(function() {
//         //     alert("error");
       
//         // });
       
  

// $("#first-choice").change(function() {

//   var $dropdown = $(this);

//   $.ajax({
//             url: "https://api.fantasydata.net/mlb/v2/JSON/PlayerSeasonStatsByTeam/2016/10000031?" + $.param(params),
//             dataType: "jsonp",
//             type: "GET",
          
//         })

 
      // $secondChoice.append("<li><a href= value=" + "'" + value + "'" + ">" + value + "</a></li>");

  

    //-------------------------------------- end fantasydata code --------------------





