window.onload = function(){
    /*Initializing Variables*/
    var rankedPickData511 = [];
    var rankedPickData514 = [];
    var rankedWinData511 = [];
    var rankedWinData514 = [];
    var normalPickData511 = [];
    var normalPickData514 = [];
    var normalWinData511 = [];
    var normalWinData514 = [];
    var items = ["Needlessly Large Rod", "Athene's Unholy Grail", "Blasting Wand", "Magus/Runeglaive",
    "Rabadon's Deathcap", "Luden's Echo", "Liandry's Torment", "Will of the Ancients", "Seraph's Embrace", 
    "Morellonomicon", "Void Staff", "Nashor's Tooth", "Rylai's Crystal Scepter", "Amplifying Tome",
     "Rod of Ages", "Archangel's Staff", "Zhonyas Hourglass"];
     var options = {scaleFontColor: "#fff",
                    scaleLineColor : "#fff",
                    scaleShowHorizontalLines: false, 
                    scaleShowVerticalLines: false, 
                    responsive: true, 
                    multiTooltipTemplate: "<%= value %>%"};


    /*Load JSON file and fill arrays with data*/
    request = new XMLHttpRequest();
    request.open('GET', '../item_analysis.json', true);

    request.onload = function() {
        console.log("request.onload")
      if (request.status >= 200 && request.status < 400){
        // Success!
        data = JSON.parse(request.responseText);
        for(i = 0; i < items.length; i++) {
            console.log("Getting data for item" + i);
            rankedPickData511[i] = ((data.patches[1].queues[0].regions[2].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedPickData514[i] = ((data.patches[0].queues[0].regions[2].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedWinData511[i] = ((data.patches[1].queues[0].regions[2].items[i].stats[4].win_rate)*100).toFixed(2);
            rankedWinData514[i] = ((data.patches[0].queues[0].regions[2].items[i].stats[4].win_rate)*100).toFixed(2);
            normalPickData511[i] = ((data.patches[1].queues[1].regions[2].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalPickData514[i] = ((data.patches[0].queues[1].regions[2].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalWinData511[i] = ((data.patches[1].queues[1].regions[2].items[i].stats[4].win_rate)*100).toFixed(2);
            normalWinData514[i] = ((data.patches[0].queues[1].regions[2].items[i].stats[4].win_rate)*100).toFixed(2);
        }

        var rankedPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: rankedPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(44,196,83,0.5)",
                    strokeColor: "rgba(44,196,83,1)",
                    highlightFill: "rgba(44,196,83,0.75)",
                    highlightStroke: "rgba(44,196,83,1)",
                    data: rankedPickData514
                }
            ]
        };

        var rankedWin = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: rankedWinData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(44,196,83,0.5)",
                    strokeColor: "rgba(44,196,83,1)",
                    highlightFill: "rgba(44,196,83,0.75)",
                    highlightStroke: "rgba(44,196,83,1)",
                    data: rankedWinData514
                }
            ]
        };

        var normalPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: normalPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(44,196,83,0.5)",
                    strokeColor: "rgba(44,196,83,1)",
                    highlightFill: "rgba(44,196,83,0.75)",
                    highlightStroke: "rgba(44,196,83,1)",
                    data: normalPickData514
                }
            ]
        };

        var normalWin = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(140,230,148,0.5)",
                    strokeColor: "rgba(140,230,148,0.8)",
                    highlightFill: "rgba(140,230,148,0.75)",
                    highlightStroke: "rgba(140,230,148,1)",
                    data: normalWinData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(44,196,83,0.5)",
                    strokeColor: "rgba(44,196,83,1)",
                    highlightFill: "rgba(44,196,83,0.75)",
                    highlightStroke: "rgba(44,196,83,1)",
                    data: normalWinData514
                }
            ]
        };

        var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx).Bar(rankedPick, options);
            console.log("tried to make graph1");
        var ctx2 = document.getElementById("canvas2").getContext("2d");
            window.myBar2 = new Chart(ctx2).Bar(rankedWin, options);
            console.log("tried to make graph2");
        var ctx3 = document.getElementById("canvas3").getContext("2d");
            window.myBar3 = new Chart(ctx3).Bar(normalPick, options);
            console.log("tried to make graph3");
        var ctx4 = document.getElementById("canvas4").getContext("2d");
            window.myBar4 = new Chart(ctx4).Bar(normalWin, options);
            console.log("tried to make graph4");
        
        document.getElementById('js-legend').innerHTML = myBar.generateLegend();
        document.getElementById('js-legend2').innerHTML = myBar2.generateLegend(); 
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