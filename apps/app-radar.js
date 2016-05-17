$(document).ready(function(){

$("#first-choice").change(function() {

    var $dropdown = $(this);
    var trigger = $dropdown.val();
    var vals = [];
    var team_id = $('#first-choice').val();
    console.log(team_id);

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",

        };
      
        $.ajax({
            url: "https://api.sportradar.us/mlb-t5/seasontd/2016/REG/teams/1d678440-b4b1-4954-9b39-70afb3ebbcfa/statistics.json?api_key=pfqnd9eqk9j4jjc7au287rdt",
            // dataType: "jsonp",
            // type: "GET",

// http://api.sportradar.us/mlb-t5/seasontd/2016/REG/teams/1d678440-b4b1-4954-9b39-70afb3ebbcfa/statistics.json?api_key=pfqnd9eqk9j4jjc7au287rdt

         })

        .success(function(data) {
          // alert("success")
          // console.log(data[6].PlayerID);
          // console.log(data[9].FirstName);
            var key = $dropdown.val();
            var vals = [];
            var Name = data.first_name + ' ' + data.last_name;
            var PID = data.players.id;
            var salary = {};
            // var formSalary = salary.formula
         

            var $secondChoice = $("#second-choice");
            $secondChoice.empty();  

            var newValues = "";
            // var salaries = "";
            $("#second-choice").append("<option>Please Choose a Player...</option>");
            for (var i = 0; i < data.length; i++) {
              // salary[data[i].player.id] = data[i].Salary;
              newValues+= $("#second-choice").append("<option value=" + data[i].id + ">" + data[i].first_name + " " + data[i].last_name + "</option>");
              // salary+= $("ul.footer-box").append(data[i].salary);

          }

          $("#second-choice").change(function() {

                var $dropdown = $(this);
                var trigger = $dropdown.val();
                var vals = [];
                var PID2 = $('#second-choice').val();
                
                // function toUSD(number) {
                // var number = number.toString(), 
                // dollars = number.split('.')[0], 
                // cents = (number.split('.')[1] || '') +'00';
                // dollars = dollars.split('').reverse().join('')
                //     .replace(/(\d{3}(?!$))/g, '$1,')
                //     .split('').reverse().join('');
                // return '$' + dollars + '.' + cents.slice(0, 2);
                // }

           

            // $('#idGo').submit(function(e) {
            //   e.preventDefault();
            //   PID2 = $('#second-choice').val();
            // });
            
                var params = {
                key: "bb32e0f1b71046f4a5844dc55af9e844",

                };

                console.log(PID2);
                $.ajax({
                        url: "https://api.sportradar.us/mlb-t5/seasontd/2016/REG/teams/" + team_id + "/statistics.json?api_key=pfqnd9eqk9j4jjc7au287rdt",
                        // dataType: "jsonp",
                        // type: "GET",
                      
                })
          
              // e.preventDefault();
  

           .success(function(data) {

            var Name = data.Name, 
                Team = data.Team,
                Jersey = data.players.jersey_number,
                Games = data.players.statistics.games[1],
                AtBats = data.players.statistics.ab,
                Hits = data.players.statistics.h,
                RBI = data.players.statistics.rbi,
                BattingAverage = data.players.statistics.avg.toFixed(3),
                SLG = data.players.statistics.slg.toFixed(3),
                OPS = data.players.statistics.ops.toFixed(3),
                OnBasePercentage = data.players.statistics.obp.toFixed(3),
                Wins = data.players.statistics.win,
                Losses = data.players.statistics.loss,
                IP = data.players.statistics.ip_1,
                ERA = data.players.statistics.era.toFixed(2),
                pWalks = data.players.statistics.pitching.onbase.bb,
                pHits = data.players.statistics.pitching.onbase.h,
                BAA = data.players.statistics.pitching.whip.toFixed(2);
                // Salary = salary[PID2];
                console.log(data[4].players.jersey_number);

                // function toUSD(number) {
                // var number = number.toString(), 
                // dollars = number.split('.')[0], 
                // cents = (number.split('.')[1] || '') +'00';
                // dollars = dollars.split('').reverse().join('')
                //     .replace(/(\d{3}(?!$))/g, '$1,')
                //     .split('').reverse().join('');
                // return '$' + dollars;
                // }

            if (data.PositionCategory == "P") {
                // console.log(data.PositionCategory);
                $('table.pitcher-season-stats').show();
                $('table.batter-season-stats').hide();


           
                $('div.yr-selector span.16').css({
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '5px'
                });
                // $('div.top-data-section span.playerPhoto').html("<img src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + ">");
                $('div.top-data-section span.playerName').text(Name);
                $('div.top-data-section span.city-team-name').text(Team);
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
                // $('div.top-data-section span.playerPhoto').html("<img src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + ">");
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

        })
});
            // alert("success")
            // console.log(PID2);

          
         });
        

  





