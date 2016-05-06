$(document).ready(function(){

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// $(function(){
//   $('#search-term').submit(function(event){
//     event.preventDefault();
//     var teamID = $('#query').val();
//     getRequest(teamID);
//    $('li.topic-title').html(teamID);
//   });
// });


// function getRequest(q, token){
//   var params = {
//     q: q,
//     part:'snippet',
//     key:'AIzaSyDhcv5fxPkNS9EpFfuhJryGtMike4zwOPE',
//     maxResults:15,
//     pageToken:token,
//   };

//   $.ajax({
//     url: "https://api.stackexchange.com/2.2/questions/unanswered",
//     data: request,
//     dataType: "jsonp",//use jsonp to avoid cross origin issues
//     type: "GET",
//   })
//   .done(function(result){ //this waits for the ajax to return with a succesful promise object
//     var searchResults = showSearchResultsQ(request.tagged, result.items.length);

//-------------------------------------- start fantasydata code --------------------
    $(function () {
        var params = {
          season: 2016,
          teamID: 'NYY',

            // Request parameters
        };

        teamID = $('#query').val();

        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/JSON/Players?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","bb32e0f1b71046f4a5844dc55af9e844");
            },
            
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
FantasyData.mlb = {};

  FantasyData.mlb.activeTeams = function(callback) {
    var uri = buildMlbUrl('Teams');

    makeRequest(uri, callback);
  };



function showResults(results){
  $.each(results, function(index,fddata){
  	  var Height = data.Player.Height;
  	  var LastName = data.Player.LastName;


    // console.log(video.snippet.thumbnails.medium.url);
    // console.log(ytdata.nextPageToken);
    // console.log(video.snippet.vTitle);
  });

  $('#search-results').html(LastName);

}

});
