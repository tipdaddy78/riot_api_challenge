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
    var options = {scaleFontColor: "#fff", scaleLineColor : "#fff", scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false, responsive: true, multiTooltipTemplate: "<%= value %>%", scaleBeginAtZero: false};

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
    var selChampion = QueryString.champion;
    var selItem = parseInt(QueryString.item);
    var selLane = QueryString.lane;


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
            rankedPickData511[i] = ((data.patches[1].queues[0].regions[5].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedPickData514[i] = ((data.patches[0].queues[0].regions[5].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedWinData511[i] = ((data.patches[1].queues[0].regions[5].items[i].stats[4].win_rate)*100).toFixed(2);
            rankedWinData514[i] = ((data.patches[0].queues[0].regions[5].items[i].stats[4].win_rate)*100).toFixed(2);
            normalPickData511[i] = ((data.patches[1].queues[1].regions[5].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalPickData514[i] = ((data.patches[0].queues[1].regions[5].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalWinData511[i] = ((data.patches[1].queues[1].regions[5].items[i].stats[4].win_rate)*100).toFixed(2);
            normalWinData514[i] = ((data.patches[0].queues[1].regions[5].items[i].stats[4].win_rate)*100).toFixed(2);
        }
        var table = document.getElementById("tableBody");
        var champName;
        var champLane;
        var rankedChampPick511;
        var rankedChampPick514;
        var rankedChampWin511;
        var rankedChampWin514;
        var normalChampPick511;
        var normalChampPick514;
        var normalChampWin511;
        var normalChampWin514;

        if(selLane == "" && selChampion != "") {// Lane IS specified, Champion not specified

        } else if (selLane != "" && selChampion == "") { // Lane not specified, Champion IS specified

        } else if (selLane != "" && selChampion != "") {

        } else {// Neither lane, nor champion specified
            var index = 9;
            for(i = 0; i < 126; i++) {
                champName = data.patches[0].queues[0].regions[5].items[selItem].stats[index].champion;
                champLane = data.patches[0].queues[0].regions[5].items[selItem].stats[index].lane; 
                rankedChampPick511 = ((data.patches[1].queues[0].regions[5].items[selItem].stats[index].pick_rate)*100).toFixed(2);
                rankedChampPick514 = ((data.patches[0].queues[0].regions[5].items[selItem].stats[index].pick_rate)*100).toFixed(2);
                rankedChampWin511 = ((data.patches[1].queues[0].regions[5].items[selItem].stats[index].win_rate)*100).toFixed(2);
                rankedChampWin514 = ((data.patches[0].queues[0].regions[5].items[selItem].stats[index].win_rate)*100).toFixed(2);
                normalChampPick511 = ((data.patches[1].queues[1].regions[5].items[selItem].stats[index].pick_rate)*100).toFixed(2);
                normalChampPick514 = ((data.patches[0].queues[1].regions[5].items[selItem].stats[index].pick_rate)*100).toFixed(2);
                normalChampWin511 = ((data.patches[1].queues[1].regions[5].items[selItem].stats[index].win_rate)*100).toFixed(2);
                normalChampWin514 = ((data.patches[0].queues[1].regions[5].items[selItem].stats[index].win_rate)*100).toFixed(2);

                var newRow   = table.insertRow(table.rows.length);

                // Insert a cell in the row at index 0
                var newCell  = newRow.insertCell(0);
                // Append a text node to the cell
                var data  = document.createElement('img');
                data.src = 'http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/' + champName + '.png';
                newCell.appendChild(data);

                newCell = newRow.insertCell(1);
                data = document.createTextNode(champLane);
                newCell.appendChild(data);

                newCell = newRow.insertCell(2);
                data = document.createTextNode(rankedChampPick511);
                newCell.appendChild(data);

                newCell = newRow.insertCell(3);
                data = document.createTextNode(rankedChampPick514);
                newCell.appendChild(data);

                newCell = newRow.insertCell(4);
                data = document.createTextNode(rankedChampWin511);
                newCell.appendChild(data);

                newCell = newRow.insertCell(5);
                data = document.createTextNode(rankedChampWin514);
                newCell.appendChild(data);

                newCell = newRow.insertCell(6);
                data = document.createTextNode(normalChampPick511);
                newCell.appendChild(data);

                newCell = newRow.insertCell(7);
                data = document.createTextNode(normalChampPick514);
                newCell.appendChild(data);

                newCell = newRow.insertCell(8);
                data = document.createTextNode(normalChampWin511);
                newCell.appendChild(data);

                newCell = newRow.insertCell(9);
                data = document.createTextNode(normalChampWin514);
                newCell.appendChild(data);

                index += 5;
            }
        }

        /* Set up pick/win rate graphs */
        var rankedPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: rankedPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(35,165,229,0.5)",
                    strokeColor: "rgba(35,165,229,1)",
                    highlightFill: "rgba(35,165,229,0.75)",
                    highlightStroke: "rgba(35,165,229,1)",
                    data: rankedPickData514
                }
            ]
        };

        var rankedWin = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: rankedWinData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(35,165,229,0.5)",
                    strokeColor: "rgba(35,165,229,1)",
                    highlightFill: "rgba(35,165,229,0.75)",
                    highlightStroke: "rgba(35,165,229,1)",
                    data: rankedWinData514
                }
            ]
        };

        var normalPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: normalPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(35,165,229,0.5)",
                    strokeColor: "rgba(35,165,229,1)",
                    highlightFill: "rgba(35,165,229,0.75)",
                    highlightStroke: "rgba(35,165,229,1)",
                    data: normalPickData514
                }
            ]
        };

        var normalWin = {labels: items,
            datasets: [
                {
                    label: "5.11",
                    fillColor: "rgba(114,231,255,0.5)",
                    strokeColor: "rgba(114,231,255,0.8)",
                    highlightFill: "rgba(114,231,255,0.75)",
                    highlightStroke: "rgba(114,231,255,1)",
                    data: normalWinData511
                },
                {
                    label: "5.14",
                    fillColor: "rgba(35,165,229,0.5)",
                    strokeColor: "rgba(35,165,229,1)",
                    highlightFill: "rgba(35,165,229,0.75)",
                    highlightStroke: "rgba(35,165,229,1)",
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