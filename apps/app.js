$(document).ready(function(){

$(function() {
        var params = {
        key: "bb32e0f1b71046f4a5844dc55af9e844",
        // teams: "ARI",
        // callback: "callback"
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/json/teams?" + $.param(params),
            
            type: "GET",
            // Request body
            // data: 'Division',
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });


    //-------------------------------------- end fantasydata code --------------------



  // }); 
// FantasyData.mlb = {};

//   FantasyData.mlb.activeTeams = function(callback) {
//     var uri = buildMlbUrl('Teams');

//     makeRequest(uri, callback);
//   };



// function showResults(results){
//   $.each(results, function(index,fddata){
//   	  var Height = data.Player.Height;
//   	  var LastName = data.Player.LastName;


//     // console.log(video.snippet.thumbnails.medium.url);
//     // console.log(ytdata.nextPageToken);
//     // console.log(video.snippet.vTitle);
//   });

//   $('#search-results').html(LastName);

// }

});
