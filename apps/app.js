$(document).ready(function(){

    $("#first-choice").change(function() {

        var $dropdown = $(this);
        var trigger = $dropdown.val();
        var vals = [];
        var teamId = $('#first-choice').val();
        var teamName = $('#first-choice option:selected').text();
        console.log(teamId);

      

          $(function() {
                  var params = {
                  key: "1594d70c78514591b0c0a90a66f7555e",

                  };
                
                  $.ajax({
                      url: "https://api.fantasydata.net/mlb/v2/JSON/Players/" + teamId + "?" + $.param(params),
                      dataType: "jsonp",
                      type: "GET",


                   })

                    .success(function(data) {
                      // alert("success")
                      // console.log(data[6].PlayerID);
                      // console.log(data[9].FirstName);
                        var key = $dropdown.val();
                        var vals = [];
                        var Name = data.FirstName + ' ' + data.LastName;
                        var PID = data.PlayerID;
                        var salary = {};
                        var jerseyNo = {};
                        console.log(data[6].Jersey)

                        var $secondChoice = $("#second-choice");
                        $secondChoice.empty();  

                        var newValues = "";
                        // var salaries = "";
                        $("#second-choice").append("<option>Please Choose a Player...</option>");
                        for (var i = 0; i < data.length; i++) {
                          salary[data[i].PlayerID] = data[i].Salary;
                          jerseyNo[data[i].PlayerID] = data[i].Jersey;
                          newValues+= $("#second-choice").append("<option value=" + data[i].PlayerID + ">" + data[i].FirstName + " " + data[i].LastName + "</option>");
                          // salary+= $("ul.footer-box").append(data[i].salary);

                      }

          $("#idGo").click(function() {

                var $dropdown = $(this);
                var trigger = $dropdown.val();
                var vals = [];
                var PID2 = $('#second-choice').val();
                
                function toUSD(number) {
                var number = number.toString(), 
                dollars = number.split('.')[0], 
                cents = (number.split('.')[1] || '') +'00';
                dollars = dollars.split('').reverse().join('')
                    .replace(/(\d{3}(?!$))/g, '$1,')
                    .split('').reverse().join('');
                return '$' + dollars + '.' + cents.slice(0, 2);
                }

          
            
                var params = {
                key: "bb32e0f1b71046f4a5844dc55af9e844",

                };

                console.log(PID2);
                $.ajax({
                        url: "https://api.fantasydata.net/mlb/v2/JSON/PlayerSeasonStatsByPlayer/" + season + "/" + PID2 + "?" + $.param(params),
                        dataType: "jsonp",
                        type: "GET",
                      
                })
          
              // e.preventDefault();
  

           .success(function(data) {

            var Name = data.Name, 
                Team = data.Team,
                Games = data.Games,
                AtBats = data.AtBats,
                Hits = data.Hits,
                RBI = data.RunsBattedIn,
                BattingAverage = data.BattingAverage.toFixed(3),
                SLG = data.SluggingPercentage.toFixed(3),
                OPS = data.OnBasePlusSlugging.toFixed(3),
                OnBasePercentage = data.OnBasePercentage.toFixed(3),
                Wins = data.Wins,
                Losses = data.Losses,
                IP = data.InningsPitchedDecimal,
                ERA = data.EarnedRunAverage.toFixed(2),
                pWalks = data.PitchingWalks,
                pHits = data.PitchingHits,
                BAA = data.PitchingBattingAverageAgainst.toFixed(3),
                Salary = salary[PID2],
                JerseyNumber = jerseyNo[PID2];

                function toUSD(number) {
                    if (number == undefined) {
                      $('div.top-data-section span.playerSalary').text("N/A");
                    }
                var number = number.toString(), 
                dollars = number.split('.')[0], 
                cents = (number.split('.')[1] || '') +'00';
                dollars = dollars.split('').reverse().join('')
                    .replace(/(\d{3}(?!$))/g, '$1,')
                    .split('').reverse().join('');
                return '$' + dollars;
                }

            if (data.PositionCategory == "P") {
                // console.log(data.PositionCategory);
                $('table.pitcher-season-stats').show();
                $('table.batter-season-stats').hide();


           
                $('div.yr-selector span.16').css({
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '5px'
                });
                $('div.top-data-section span.playerPhoto').html("<img style='border: solid 2px #444444; background-color: white; padding: 6px 6px 0px 6px' src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + " alt='" + Name + "'>");
                $('div.top-data-section span.playerName').text(Name);
                $('div.top-data-section span.city-team-name').text(teamName);
                $('div.top-data-section span.playerNumber').text(JerseyNumber);
                $('div.top-data-section span.playerSalary').text(toUSD(Salary));
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
                $('table.pitcher-season-stats').hide();
    
                $('div.yr-selector span.16').css({
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '5px'
                });
                $('div.top-data-section span.playerPhoto').html("<img src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + ">");
                $('div.top-data-section span.playerName').text(Name);
                $('div.top-data-section span.city-team-name').text(Team);
                $('div.top-data-section span.playerNumber').text(JerseyNumber);
                $('div.top-data-section span.playerSalary').text(toUSD(Salary));
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

        })
});


                var season = "none";
                $(".seasonSelect").click(function() {
                   season = $(this).attr("data-name");
                   $('div.yr-selector span.seasonSelect').css({
                      color: 'white',
                      backgroundColor: 'black',
                      padding: '3px'
                   });
                  // $(".seasonSelect").hide();
                });

                // $("#test").click(function() {
                //    alert(season);
                // });
            // alert("success")
            // console.log(PID2);

          
         });
