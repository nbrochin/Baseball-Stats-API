$(document).ready(function(){

    $("#first-choice").change(function() {

        var $dropdown = $(this);
        var trigger = $dropdown.val();
        var vals = [];
        var teamId = $('#first-choice').val();
        var teamName = $('#first-choice option:selected').text();

      

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
                      // console.log(data[9].FirstName);
                        var key = $dropdown.val(),
                            vals = [],
                            Name = data.FirstName + ' ' + data.LastName,
                            PID = data.PlayerID,
                            salary = {},
                            jerseyNo = {},
                            $secondChoice = $("#second-choice");
                            $secondChoice.empty();  

                        var newValues = "";
                        $("#second-choice").append("<option>Please Choose a Player...</option>");
                        for (var i = 0; i < data.length; i++) {
                          salary[data[i].PlayerID] = data[i].Salary;
                          jerseyNo[data[i].PlayerID] = data[i].Jersey;
                          newValues+= $("#second-choice").append("<option value=" + data[i].PlayerID + ">" + data[i].FirstName + " " + data[i].LastName + "</option>");

                      }

          $("#idGo").click(function() {

                var $dropdown = $(this);
                var trigger = $dropdown.val();
                var vals = [];
                var PID2 = $('#second-choice').val();
                var season = $('#third-choice').val();
                
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

            var q = data.Name, 
                Team = data.Team,
                Games = data.Games,
                AtBats = data.AtBats.toFixed(0),
                Hits = data.Hits.toFixed(0),
                HRs = data.HomeRuns.toFixed(0),
                RBI = data.RunsBattedIn.toFixed(0),
                BattingAverage = (data.Hits / data.AtBats).toFixed(3),
                SLG = data.SluggingPercentage.toFixed(3),
                OPS = data.OnBasePlusSlugging.toFixed(3),
                OnBasePercentage = data.OnBasePercentage.toFixed(3),
                Wins = data.Wins.toFixed(0),
                Losses = data.Losses.toFixed(0),
                Saves = data.Saves.toFixed(0),
                IP = data.InningsPitchedDecimal,
                ERA = data.EarnedRunAverage.toFixed(2),
                pWalks = data.PitchingWalks.toFixed(0),
                pHits = data.PitchingHits.toFixed(0),
                BAA = data.PitchingBattingAverageAgainst.toFixed(3),
                Salary = salary[PID2],
                JerseyNumber = jerseyNo[PID2],
                Position = data.Position;


                function toUSD(number) {
                    if (number == undefined | null) {
                      $('div.top-data-section span.playerSalary').text("N/A");

                    } else {

                      var number = number.toString(), 
                          dollars = number.split('.')[0], 
                          cents = (number.split('.')[1] || '') +'00';
                          dollars = dollars.split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
                          return '$' + dollars;
                          }
                }

            if (data.PositionCategory == "P") {
                // console.log(data.PositionCategory);
                $('table.pitcher-season-stats').show();
                $('table.batter-season-stats').hide();
                $('div.top-data-section span.playerPhoto').html("<img style='border: solid 3px #444444; background-color: wheat; padding: 6px 6px 0px 6px;' src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + " alt='" + Name + "'>");
                $('div.top-data-section span.playerName').text(q);
                $('div.top-data-section span.city-team-name').text(teamName);
                $('div.top-data-section span.playerNumber').text(JerseyNumber);
                $('div.top-data-section span.playerPosition').text(Position);
                $('div.top-data-section span.playerSalary').text(toUSD(Salary));
                $('td.Games').text(Games);
                $('td.Wins').text(Wins);
                $('td.Losses').text(Losses);
                $('td.Saves').text(Saves);
                $('td.IP').text(IP);
                $('td.ERA').text(ERA);
                $('td.pWalks').text(pWalks);
                $('td.pHits').text(pHits);
                $('td.BAA').text(BAA);
            
            } else  {

                $('table.batter-season-stats').show();
                $('table.pitcher-season-stats').hide();
                $('div.top-data-section span.playerPhoto').html("<img style='border: solid 3px #444444; background-color: white; padding: 6px 6px 0px 6px;' src='http://static.fantasydata.com/headshots/mlb/low-res/" + PID2 + ".png'" + " alt='" + Name + "'>");
                $('div.top-data-section span.playerName').text(q);
                $('div.top-data-section span.city-team-name').text(teamName);
                $('div.top-data-section span.playerNumber').text(JerseyNumber);
                $('div.top-data-section span.playerPosition').text(Position);
                $('div.top-data-section span.playerSalary').text(toUSD(Salary));
                $('td.Games').text(Games);
                $('td.AtBats').text(AtBats);
                $('td.Hits').text(Hits);
                $('td.HomeRuns').text(HRs);
                $('td.RunsBattedIn').text(RBI);
                $('td.BattingAverage').text(BattingAverage);
                $('td.SluggingPercentage').text(SLG);
                $('td.OnBasePlusSlugging').text(OPS);
                $('td.OnBasePercentage').text(OnBasePercentage);

            
            }

                              $(function(){
                              
                                  q = data.Name;
                                  getRequest(q);
                                 
                                
                              });


                              function getRequest(q){
                                var params = {
                                  key:'AIzaSyAx-5dsAUcbAFDTm_8AL7gwwq_kh7UVwXY',
                                  cx: '005664771509859456768:nroszt1ynw4',
                                  q: q,
                                  // imgType: 'photo',
                                  // num: '16',
                                  // maxResults:15,
                                  // pageToken:token,
                                  // imgSize:'medium', // for image size
                                  // callback: 'hndlr',
                                  searchType:'image' // compulsory 
                                  
                                };

                                  
                                url = 'https://www.googleapis.com/customsearch/v1';

                                  $.getJSON(url, params, function(data){
                                  // console.log(data.items);
                                  var thumbnailLink = {};
                                  var image = {};
                                  var items = {};
                                  var link = {};
                                  var item = data.items;
                                  var images = "";

                                      
                                    for (var i = 0; i < item.length; i++) {
                                
                                      // in production code, item.htmlTitle should have the HTML entities escaped.
                                      // $("section#QA-holder").append += "<br>" + response.items[i];
                                      images += "<span><a href='" + item[i].link + "' target='_blank'><img src='" + item[i].image.thumbnailLink + "'></a></span>";
                                      
                                      
                                    }
                                    $("section#image-search-holder").html(images);
                                });
                                    
                                  
                                };

          })
          })
          })

        })
  });


                //    var season = $('#third-choice').val();
                //    var dataName = "";
                //    $(".seasonSelect").click(function() {
                //       season = $(this).attr("dataName");
                //       $(".seasonSelect").removeClass('active');
                //       $(this).addClass('active');

                // });

              

          
         });
