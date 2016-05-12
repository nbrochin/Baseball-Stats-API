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
            // var photoURL = data.photoUrl
            // var salary = data.Salary;
         

            var $secondChoice = $("#second-choice");
            $secondChoice.empty();  

            var newValues = "";
            // var salaries = "";
            $("#second-choice").append("<option>Please Choose a Player...</option>");
            for (var i = 0; i < data.length; i++) {
              newValues+= $("#second-choice").append("<option value=" + data[i].PlayerID + ">" + data[i].FirstName + " " + data[i].LastName + "</option>");
              // salary+= $("ul.footer-box").append(data[i].salary);

          }


        })
});


            $("#second-choice").change(function() {

                var $dropdown = $(this);
                var trigger = $dropdown.val();
                var vals = [];
                var PID2 = $('#second-choice').val();

           

            // $('#idGo').submit(function(e) {
            //   e.preventDefault();
            //   PID2 = $('#second-choice').val();
            // });
            
                var params = {
                key: "bb32e0f1b71046f4a5844dc55af9e844",

                };

                console.log(PID2);
                $.ajax({
                        url: "https://api.fantasydata.net/mlb/v2/JSON/PlayerSeasonStatsByPlayer/2016/" + PID2 + "?" + $.param(params),
                        dataType: "jsonp",
                        type: "GET",
                      
                })
          
              // e.preventDefault();
  

           .success(function(data) {
                alert("success")

            var Name = data.Name;
            var Team = data.Team;
            var Games = data.Games;
            var AtBats = data.AtBats;
            var Hits = data.Hits;
            var RBI = data.RunsBattedIn;
            var BattingAverage = data.BattingAverage.toFixed(3);
            var SLG = data.SluggingPercentage.toFixed(3);
            var OPS = data.OnBasePlusSlugging.toFixed(3);
            var OnBasePercentage = data.OnBasePercentage.toFixed(3);
            var Wins = data.Wins;
            var Losses = data.Losses;
            var IP = data.InningsPitchedDecimal;
            var ERA = data.EarnedRunAverage.toFixed(2);
            var pWalks = data.PitchingWalks;
            var pHits = data.PitchingHits;
            var BAA = data.PitchingBattingAverageAgainst.toFixed(3);
      

            if (data.PositionCategory == "P") {
                console.log(data.PositionCategory);
                $('table.pitcher-season-stats').show();
           
                $('div.yr-selector span.16').css({
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '5px'
                });
                $('div.top-data-section span.playerPhoto').html("<img src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + ">");
                $('div.top-data-section span.playerName').text(Name);
                $('div.top-data-section span.city-team-name').text(Team);
                $('td.Games').text(Games);
                $('td.Wins').text(Wins);
                $('td.Losses').text(Losses);
                $('td.IP').text(IP);
                $('td.ERA').text(ERA);
                $('td.pWalks').text(pWalks);
                $('td.pHits').text(pHits);
                $('td.BAA').text(BAA);
            
            } else  {

                $('table.batter-season-stats').show();
    
                $('div.yr-selector span.16').css({
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '5px'
                });
                $('div.top-data-section span.playerPhoto').html("<img src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + ">");
                $('div.top-data-section span.playerName').text(Name);
                $('div.top-data-section span.city-team-name').text(Team);
                $('td.Games').text(Games);
                $('td.AtBats').text(AtBats);
                $('td.Hits').text(Hits);
                $('td.RunsBattedIn').text(RBI);
                $('td.BattingAverage').text(BattingAverage);
                $('td.SluggingPercentage').text(SLG);
                $('td.OnBasePlusSlugging').text(OPS);
                $('td.OnBasePercentage').text(OnBasePercentage);
            
            }
          })
          })
          })
            // alert("success")
            // console.log(PID2);

          
         });
        

  





