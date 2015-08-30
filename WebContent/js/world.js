window.onload = function(){
    /*Initializing Variables*/
    var brPickRates511 = [];
    var brPickRates514 = [];
    var brWinRates511 = [];
    var brWinRates514 = [];

    var naPickRates511 = [];
    var naPickRates514 = [];
    var naWinRates511 = [];
    var naWinRates514 = [];

    var krPickRates511 = [];
    var krPickRates514 = [];
    var krWinRates511 = [];
    var krWinRates514 = [];

    var ocePickRates511 = [];
    var ocePickRates514 = [];
    var oceWinRates511 = [];
    var oceWinRates514 = [];

    var eunePickRates511 = [];
    var eunePickRates514 = [];
    var euneWinRates511 = [];
    var euneWinRates514 = [];

    var lanPickRates511 = [];
    var lanPickRates514 = [];
    var lanWinRates511 = [];
    var lanWinRates514 = [];

    var trPickRates511 = [];
    var trPickRates514 = [];
    var trWinRates511 = [];
    var trWinRates514 = [];

    var euwPickRates511 = [];
    var euwPickRates514 = [];
    var euwWinRates511 = [];
    var euwWinRates514 = [];

    var ruPickRates511 = [];
    var ruPickRates514 = [];
    var ruWinRates511 = [];
    var ruWinRates514 = [];

    var lasPickRates511 = [];
    var lasPickRates514 = [];
    var lasWinRates511 = [];
    var lasWinRates514 = [];

    var regions = ["Brazil", "North America", "Korea", "Oceania", "EU Nordic & East", "Latin America North", "Turkey", "EU West", "Russia", "Latin America South"];
    var items = ["Needlessly Large Rod", "Athene's Unholy Grail", "Blasting Wand", "Magus/Runeglaive",
    "Rabadon's Deathcap", "Luden's Echo", "Liandry's Torment", "Will of the Ancients", "Seraph's Embrace", 
    "Morellonomicon", "Void Staff", "Nashor's Tooth", "Rylai's Crystal Scepter", "Amplifying Tome",
     "Rod of Ages", "Archangel's Staff", "Zhonyas Hourglass"];
    var lanes = ["Top", "Jungle", "Middle", "Bottom", "No Lane"];
    var queues = ["Ranked", "Normal"];
    var options = {scaleFontColor: "#fff", scaleLineColor : "#fff", scaleShowHorizontalLines: false, 
        scaleShowVerticalLines: false, responsive: true, multiTooltipTemplate: "<%= value %>%", scaleBeginAtZero: false};
    var options2 = {scaleFontColor: "#fff", scaleLineColor : "#fff", scaleShowHorizontalLines: false, 
        scaleShowVerticalLines: false, responsive: true, multiTooltipTemplate: "<%= value %>%"};


    /*Load JSON file and fill arrays with data*/
    request = new XMLHttpRequest();
    request.open('GET', '../item_analysis.json', true);

    request.onload = function() {
        console.log("request.onload")
      if (request.status >= 200 && request.status < 400){
        // Success!
        data = JSON.parse(request.responseText);

        /* If the form was submitted, this function allows us to get the arguments */
        var QueryString = function () {
          // This function is anonymous, is executed immediately and 
          // the return value is assigned to QueryString!
          var query_string = {};
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
                // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
              query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
              var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
              query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
              query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
          } 
            return query_string;
        }();
        var selQueue = parseInt(QueryString.queue);
        var selItem = parseInt(QueryString.item);
        var selLane = parseInt(QueryString.lane);

        if(isNaN(selItem)){
        } else {
            var filters = document.getElementById("filters");
            filters.innerHTML = "Selected Filters: " + items[selItem] + " in " + queues[selQueue] +", and " + lanes[selLane]; 
            var filters2 = document.getElementById("filters2");
            filters2.innerHTML = "Selected Filters: " + items[selItem] + " in " + queues[selQueue] +", and " + lanes[selLane]; 
            brPickRates511[0] = ((data.patches[1].queues[selQueue].regions[0].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            brPickRates514[0] = ((data.patches[0].queues[selQueue].regions[0].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            brWinRates511[0] = ((data.patches[1].queues[selQueue].regions[0].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            brWinRates514[0] = ((data.patches[0].queues[selQueue].regions[0].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            naPickRates511[0] = ((data.patches[1].queues[selQueue].regions[1].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            naPickRates514[0] = ((data.patches[0].queues[selQueue].regions[1].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            naWinRates511[0] = ((data.patches[1].queues[selQueue].regions[1].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            naWinRates514[0] = ((data.patches[0].queues[selQueue].regions[1].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            krPickRates511[0] = ((data.patches[1].queues[selQueue].regions[2].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            krPickRates514[0] = ((data.patches[0].queues[selQueue].regions[2].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            krWinRates511[0] = ((data.patches[1].queues[selQueue].regions[2].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            krWinRates514[0] = ((data.patches[0].queues[selQueue].regions[2].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            ocePickRates511[0] = ((data.patches[1].queues[selQueue].regions[3].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            ocePickRates514[0] = ((data.patches[0].queues[selQueue].regions[3].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            oceWinRates511[0] = ((data.patches[1].queues[selQueue].regions[3].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            oceWinRates514[0] = ((data.patches[0].queues[selQueue].regions[3].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            eunePickRates511[0] = ((data.patches[1].queues[selQueue].regions[4].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            eunePickRates514[0] = ((data.patches[0].queues[selQueue].regions[4].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            euneWinRates511[0] = ((data.patches[1].queues[selQueue].regions[4].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            euneWinRates514[0] = ((data.patches[0].queues[selQueue].regions[4].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            lanPickRates511[0] = ((data.patches[1].queues[selQueue].regions[5].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            lanPickRates514[0] = ((data.patches[0].queues[selQueue].regions[5].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            lanWinRates511[0] = ((data.patches[1].queues[selQueue].regions[5].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            lanWinRates514[0] = ((data.patches[0].queues[selQueue].regions[5].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            trPickRates511[0] = ((data.patches[1].queues[selQueue].regions[6].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            trPickRates514[0] = ((data.patches[0].queues[selQueue].regions[6].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            trWinRates511[0] = ((data.patches[1].queues[selQueue].regions[6].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            trWinRates514[0] = ((data.patches[0].queues[selQueue].regions[6].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            euwPickRates511[0] = ((data.patches[1].queues[selQueue].regions[7].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            euwPickRates514[0] = ((data.patches[0].queues[selQueue].regions[7].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            euwWinRates511[0] = ((data.patches[1].queues[selQueue].regions[7].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            euwWinRates514[0] = ((data.patches[0].queues[selQueue].regions[7].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            ruPickRates511[0] = ((data.patches[1].queues[selQueue].regions[8].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            ruPickRates514[0] = ((data.patches[0].queues[selQueue].regions[8].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            ruWinRates511[0] = ((data.patches[1].queues[selQueue].regions[8].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            ruWinRates514[0] = ((data.patches[0].queues[selQueue].regions[8].items[selItem].stats[selLane].win_rate)*100).toFixed(3);

            lasPickRates511[0] = ((data.patches[1].queues[selQueue].regions[9].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            lasPickRates514[0] = ((data.patches[0].queues[selQueue].regions[9].items[selItem].stats[selLane].pick_rate)*100).toFixed(3);
            lasWinRates511[0] = ((data.patches[1].queues[selQueue].regions[9].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
            lasWinRates514[0] = ((data.patches[0].queues[selQueue].regions[9].items[selItem].stats[selLane].win_rate)*100).toFixed(3);
        }
        
        var pick511 = {labels: ["5.11 Pick Rates"],
            datasets: [
                {
                    label: "Brazil",
                    fillColor: "rgba(253,228,89,0.5)",
                    strokeColor: "rgba(253,228,89,0.8)",
                    highlightFill: "rgba(253,228,89,0.75)",
                    highlightStroke: "rgba(253,228,89,1)",
                    data: brPickRates511
                },
                {
                    label: "EU Nordic & East",
                    fillColor: "rgba(253,119,3,0.5)",
                    strokeColor: "rgba(253,119,3,0.8)",
                    highlightFill: "rgba(253,119,3,0.75)",
                    highlightStroke: "rgba(253,119,3,1)",
                    data: eunePickRates511
                },
                {
                    label: "EU West",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: euwPickRates511
                },                
                {
                    label: "Korea",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: krPickRates511
                },
                {
                    label: "Latin America North",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: lanPickRates511
                },
                {
                    label: "Latin America South",
                    fillColor: "rgba(161,175,214,0.5)",
                    strokeColor: "rgba(161,175,214,0.8)",
                    highlightFill: "rgba(161,175,214,0.75)",
                    highlightStroke: "rgba(161,175,214,1)",
                    data: lasPickRates511
                },
                {
                    label: "North America",
                    fillColor: "rgba(182,231,83,0.5)",
                    strokeColor: "rgba(182,231,83,0.8)",
                    highlightFill: "rgba(182,231,83,0.75)",
                    highlightStroke: "rgba(182,231,83,1)",
                    data: naPickRates511
                },
                {
                    label: "Oceania",
                    fillColor: "rgba(197,116,60,0.5)",
                    strokeColor: "rgba(197,116,60,0.8)",
                    highlightFill: "rgba(197,116,60,0.75)",
                    highlightStroke: "rgba(197,116,60,1)",
                    data: ocePickRates511
                },                
                {
                    label: "Russia",
                    fillColor: "rgba(249,98,90,0.5)",
                    strokeColor: "rgba(249,98,90,0.8)",
                    highlightFill: "rgba(249,98,90,0.75)",
                    highlightStroke: "rgba(249,98,90,1)",
                    data: ruPickRates511
                },
                {
                    label: "Turkey",
                    fillColor: "rgba(204,86,47,0.5)",
                    strokeColor: "rgba(204,86,47,0.8)",
                    highlightFill: "rgba(204,86,47,0.75)",
                    highlightStroke: "rgba(204,86,47,1)",
                    data: trPickRates511
                }
            ]
        };

        var pick514 = {labels: ["5.14 Pick Rates"],
            datasets: [
                {
                    label: "Brazil",
                    fillColor: "rgba(253,228,89,0.5)",
                    strokeColor: "rgba(253,228,89,0.8)",
                    highlightFill: "rgba(253,228,89,0.75)",
                    highlightStroke: "rgba(253,228,89,1)",
                    data: brPickRates514
                },
                {
                    label: "EU Nordic & East",
                    fillColor: "rgba(253,119,3,0.5)",
                    strokeColor: "rgba(253,119,3,0.8)",
                    highlightFill: "rgba(253,119,3,0.75)",
                    highlightStroke: "rgba(253,119,3,1)",
                    data: eunePickRates514
                },
                {
                    label: "EU West",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: euwPickRates514
                },                
                {
                    label: "Korea",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: krPickRates514
                },
                {
                    label: "Latin America North",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: lanPickRates514
                },
                {
                    label: "Latin America South",
                    fillColor: "rgba(161,175,214,0.5)",
                    strokeColor: "rgba(161,175,214,0.8)",
                    highlightFill: "rgba(161,175,214,0.75)",
                    highlightStroke: "rgba(161,175,214,1)",
                    data: lasPickRates514
                },
                {
                    label: "North America",
                    fillColor: "rgba(182,231,83,0.5)",
                    strokeColor: "rgba(182,231,83,0.8)",
                    highlightFill: "rgba(182,231,83,0.75)",
                    highlightStroke: "rgba(182,231,83,1)",
                    data: naPickRates514
                },
                {
                    label: "Oceania",
                    fillColor: "rgba(197,116,60,0.5)",
                    strokeColor: "rgba(197,116,60,0.8)",
                    highlightFill: "rgba(197,116,60,0.75)",
                    highlightStroke: "rgba(197,116,60,1)",
                    data: ocePickRates514
                },                
                {
                    label: "Russia",
                    fillColor: "rgba(249,98,90,0.5)",
                    strokeColor: "rgba(249,98,90,0.8)",
                    highlightFill: "rgba(249,98,90,0.75)",
                    highlightStroke: "rgba(249,98,90,1)",
                    data: ruPickRates514
                },
                {
                    label: "Turkey",
                    fillColor: "rgba(204,86,47,0.5)",
                    strokeColor: "rgba(204,86,47,0.8)",
                    highlightFill: "rgba(204,86,47,0.75)",
                    highlightStroke: "rgba(204,86,47,1)",
                    data: trPickRates514
                }
            ]
        };

        var win511 = {labels: ["5.11 Win Rates"],
            datasets: [
                {
                    label: "Brazil",
                    fillColor: "rgba(253,228,89,0.5)",
                    strokeColor: "rgba(253,228,89,0.8)",
                    highlightFill: "rgba(253,228,89,0.75)",
                    highlightStroke: "rgba(253,228,89,1)",
                    data: brWinRates511
                },
                {
                    label: "EU Nordic & East",
                    fillColor: "rgba(253,119,3,0.5)",
                    strokeColor: "rgba(253,119,3,0.8)",
                    highlightFill: "rgba(253,119,3,0.75)",
                    highlightStroke: "rgba(253,119,3,1)",
                    data: euneWinRates511
                },
                {
                    label: "EU West",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: euwWinRates511
                },                
                {
                    label: "Korea",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: krWinRates511
                },
                {
                    label: "Latin America North",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: lanWinRates511
                },
                {
                    label: "Latin America South",
                    fillColor: "rgba(161,175,214,0.5)",
                    strokeColor: "rgba(161,175,214,0.8)",
                    highlightFill: "rgba(161,175,214,0.75)",
                    highlightStroke: "rgba(161,175,214,1)",
                    data: lasWinRates511
                },
                {
                    label: "North America",
                    fillColor: "rgba(182,231,83,0.5)",
                    strokeColor: "rgba(182,231,83,0.8)",
                    highlightFill: "rgba(182,231,83,0.75)",
                    highlightStroke: "rgba(182,231,83,1)",
                    data: naWinRates511
                },
                {
                    label: "Oceania",
                    fillColor: "rgba(197,116,60,0.5)",
                    strokeColor: "rgba(197,116,60,0.8)",
                    highlightFill: "rgba(197,116,60,0.75)",
                    highlightStroke: "rgba(197,116,60,1)",
                    data: oceWinRates511
                },                
                {
                    label: "Russia",
                    fillColor: "rgba(249,98,90,0.5)",
                    strokeColor: "rgba(249,98,90,0.8)",
                    highlightFill: "rgba(249,98,90,0.75)",
                    highlightStroke: "rgba(249,98,90,1)",
                    data: ruWinRates511
                },
                {
                    label: "Turkey",
                    fillColor: "rgba(204,86,47,0.5)",
                    strokeColor: "rgba(204,86,47,0.8)",
                    highlightFill: "rgba(204,86,47,0.75)",
                    highlightStroke: "rgba(204,86,47,1)",
                    data: trWinRates511
                }
            ]
        };

        var win514 = {labels: ["5.14 Win Rates"],
            datasets: [
                {
                    label: "Brazil",
                    fillColor: "rgba(253,228,89,0.5)",
                    strokeColor: "rgba(253,228,89,0.8)",
                    highlightFill: "rgba(253,228,89,0.75)",
                    highlightStroke: "rgba(253,228,89,1)",
                    data: brWinRates514
                },
                {
                    label: "EU Nordic & East",
                    fillColor: "rgba(253,119,3,0.5)",
                    strokeColor: "rgba(253,119,3,0.8)",
                    highlightFill: "rgba(253,119,3,0.75)",
                    highlightStroke: "rgba(253,119,3,1)",
                    data: euneWinRates514
                },
                {
                    label: "EU West",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: euwWinRates514
                },                
                {
                    label: "Korea",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: krWinRates514
                },
                {
                    label: "Latin America North",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: lanWinRates514
                },
                {
                    label: "Latin America South",
                    fillColor: "rgba(161,175,214,0.5)",
                    strokeColor: "rgba(161,175,214,0.8)",
                    highlightFill: "rgba(161,175,214,0.75)",
                    highlightStroke: "rgba(161,175,214,1)",
                    data: lasWinRates514
                },
                {
                    label: "North America",
                    fillColor: "rgba(182,231,83,0.5)",
                    strokeColor: "rgba(182,231,83,0.8)",
                    highlightFill: "rgba(182,231,83,0.75)",
                    highlightStroke: "rgba(182,231,83,1)",
                    data: naWinRates514
                },
                {
                    label: "Oceania",
                    fillColor: "rgba(197,116,60,0.5)",
                    strokeColor: "rgba(197,116,60,0.8)",
                    highlightFill: "rgba(197,116,60,0.75)",
                    highlightStroke: "rgba(197,116,60,1)",
                    data: oceWinRates514
                },                
                {
                    label: "Russia",
                    fillColor: "rgba(249,98,90,0.5)",
                    strokeColor: "rgba(249,98,90,0.8)",
                    highlightFill: "rgba(249,98,90,0.75)",
                    highlightStroke: "rgba(249,98,90,1)",
                    data: ruWinRates514
                },
                {
                    label: "Turkey",
                    fillColor: "rgba(204,86,47,0.5)",
                    strokeColor: "rgba(204,86,47,0.8)",
                    highlightFill: "rgba(204,86,47,0.75)",
                    highlightStroke: "rgba(204,86,47,1)",
                    data: trWinRates514
                }
            ]
        };

        var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx).Bar(pick511, options2);
        var ctx2 = document.getElementById("canvas2").getContext("2d");
            window.myBar2 = new Chart(ctx2).Bar(pick514, options2);
        var ctx3 = document.getElementById("canvas3").getContext("2d");
            window.myBar3 = new Chart(ctx3).Bar(win511, options);
        var ctx4 = document.getElementById("canvas4").getContext("2d");
            window.myBar4 = new Chart(ctx4).Bar(win514, options);
        
        document.getElementById('js-legend').innerHTML = myBar.generateLegend();
        document.getElementById('js-legend2').innerHTML = myBar.generateLegend(); 
      } else {
        // We reached our target server, but it returned an error
        alert("Failed to parse JSON. Please try again.");

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      alert("Failed to reach server. Please try again.");
    };

    request.send(); 
}