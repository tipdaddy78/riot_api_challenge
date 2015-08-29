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
            rankedPickData511[i] = ((data.patches[1].queues[0].regions[7].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedPickData514[i] = ((data.patches[0].queues[0].regions[7].items[i].stats[4].pick_rate)*100).toFixed(2);
            rankedWinData511[i] = ((data.patches[1].queues[0].regions[7].items[i].stats[4].win_rate)*100).toFixed(2);
            rankedWinData514[i] = ((data.patches[0].queues[0].regions[7].items[i].stats[4].win_rate)*100).toFixed(2);
            normalPickData511[i] = ((data.patches[1].queues[1].regions[7].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalPickData514[i] = ((data.patches[0].queues[1].regions[7].items[i].stats[4].pick_rate)*100).toFixed(2);
            normalWinData511[i] = ((data.patches[1].queues[1].regions[7].items[i].stats[4].win_rate)*100).toFixed(2);
            normalWinData514[i] = ((data.patches[0].queues[1].regions[7].items[i].stats[4].win_rate)*100).toFixed(2);
        }

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

        if(selLane == "" && selChampion != "") { // Lane not specified, Champion IS specified
            var skinBox = document.getElementById("skins");

            var index = 5;
            for(i = 0; i < 126; i++) {
                if (selChampion == data.patches[0].queues[0].regions[5].items[selItem].stats[index].champion){
                    for(j = index; j < (index+4); j++){
                        champName = data.patches[0].queues[0].regions[5].items[selItem].stats[j].champion;
                        champLane = data.patches[0].queues[0].regions[5].items[selItem].stats[j].lane; 
                        rankedChampPick511 = ((data.patches[1].queues[0].regions[5].items[selItem].stats[j].pick_rate)*100).toFixed(2);
                        rankedChampPick514 = ((data.patches[0].queues[0].regions[5].items[selItem].stats[j].pick_rate)*100).toFixed(2);
                        rankedChampWin511 = ((data.patches[1].queues[0].regions[5].items[selItem].stats[j].win_rate)*100).toFixed(2);
                        rankedChampWin514 = ((data.patches[0].queues[0].regions[5].items[selItem].stats[j].win_rate)*100).toFixed(2);
                        normalChampPick511 = ((data.patches[1].queues[1].regions[5].items[selItem].stats[j].pick_rate)*100).toFixed(2);
                        normalChampPick514 = ((data.patches[0].queues[1].regions[5].items[selItem].stats[j].pick_rate)*100).toFixed(2);
                        normalChampWin511 = ((data.patches[1].queues[1].regions[5].items[selItem].stats[j].win_rate)*100).toFixed(2);
                        normalChampWin514 = ((data.patches[0].queues[1].regions[5].items[selItem].stats[j].win_rate)*100).toFixed(2);

                        var newRow   = table.insertRow(table.rows.length);

                        // Insert a cell in the row at index 0
                        var newCell  = newRow.insertCell(0);
                        // Append a text node to the cell
                        var tableData  = document.createElement('img');
                        tableData.src = 'http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/' + champName + '.png';
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(1);
                        tableData = document.createTextNode(champLane);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(2);
                        tableData = document.createTextNode(rankedChampPick511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(3);
                        tableData = document.createTextNode(rankedChampPick514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(4);
                        tableData = document.createTextNode(rankedChampWin511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(5);
                        tableData = document.createTextNode(rankedChampWin514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(6);
                        tableData = document.createTextNode(normalChampPick511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(7);
                        tableData = document.createTextNode(normalChampPick514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(8);
                        tableData = document.createTextNode(normalChampWin511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(9);
                        tableData = document.createTextNode(normalChampWin514);
                        newCell.appendChild(tableData);
                    }
                var skin1 = document.createElement('img');
                skin1.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champName + '_0.jpg';
                skinBox.appendChild(skin1);
                break;  
                } else {
                    index += 5;
                }
            }
        } else if (selLane != "" && selChampion == "") { // Lane IS specified, Champion not specified
            switch(selLane){
                case "Bottom":
                    var index = 8;
                    break;
                case "Jungle":
                    var index = 6;
                    break;
                case "Mid":
                    var index = 7;
                    break;
                default: 
                    var index = 5;
            }
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
                var tableData  = document.createElement('img');
                tableData.src = 'http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/' + champName + '.png';
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(1);
                tableData = document.createTextNode(champLane);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(2);
                tableData = document.createTextNode(rankedChampPick511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(3);
                tableData = document.createTextNode(rankedChampPick514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(4);
                tableData = document.createTextNode(rankedChampWin511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(5);
                tableData = document.createTextNode(rankedChampWin514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(6);
                tableData = document.createTextNode(normalChampPick511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(7);
                tableData = document.createTextNode(normalChampPick514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(8);
                tableData = document.createTextNode(normalChampWin511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(9);
                tableData = document.createTextNode(normalChampWin514);
                newCell.appendChild(tableData);

                index += 5;
            }
        } else if (selLane != "" && selChampion != "") { // Both Lane and Champion Specified
            var skinBox = document.getElementById("skins");
            if (isNaN(selItem)){ // On initial load it will go into this block so stop it from trying to generate a graph.
                
            } else {
                var index = 5;
                for(i = 0; i < 126; i++) {
                    if (selChampion == data.patches[0].queues[0].regions[5].items[selItem].stats[index].champion){
                        switch(selLane){
                            case "Bottom":
                                index += 3;
                                break;
                            case "Jungle":
                                index += 1;
                                break;
                            case "Mid":
                                index += 2;
                                break;
                            default: 
                                index += 0;
                        }
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
                        var tableData  = document.createElement('img');
                        tableData.src = 'http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/' + champName + '.png';
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(1);
                        tableData = document.createTextNode(champLane);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(2);
                        tableData = document.createTextNode(rankedChampPick511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(3);
                        tableData = document.createTextNode(rankedChampPick514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(4);
                        tableData = document.createTextNode(rankedChampWin511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(5);
                        tableData = document.createTextNode(rankedChampWin514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(6);
                        tableData = document.createTextNode(normalChampPick511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(7);
                        tableData = document.createTextNode(normalChampPick514);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(8);
                        tableData = document.createTextNode(normalChampWin511);
                        newCell.appendChild(tableData);

                        newCell = newRow.insertCell(9);
                        tableData = document.createTextNode(normalChampWin514);
                        newCell.appendChild(tableData);

                        var skin1 = document.createElement('img');
                        skin1.src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champName + '_0.jpg';
                        skinBox.appendChild(skin1);

                        break;
                    } else {
                        index += 5;
                    }
                }
            }
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
                var tableData  = document.createElement('img');
                tableData.src = 'http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/' + champName + '.png';
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(1);
                tableData = document.createTextNode(champLane);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(2);
                tableData = document.createTextNode(rankedChampPick511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(3);
                tableData = document.createTextNode(rankedChampPick514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(4);
                tableData = document.createTextNode(rankedChampWin511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(5);
                tableData = document.createTextNode(rankedChampWin514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(6);
                tableData = document.createTextNode(normalChampPick511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(7);
                tableData = document.createTextNode(normalChampPick514);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(8);
                tableData = document.createTextNode(normalChampWin511);
                newCell.appendChild(tableData);

                newCell = newRow.insertCell(9);
                tableData = document.createTextNode(normalChampWin514);
                newCell.appendChild(tableData);

                index += 5;
            }
        }

        var newTable = document.getElementById("table");
        sorttable.makeSortable(newTable);

        var rankedPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: rankedPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(57,177,247,0.5)",
                    strokeColor: "rgba(57,177,247,1)",
                    highlightFill: "rgba(57,177,247,0.75)",
                    highlightStroke: "rgba(57,177,247,1)",
                    data: rankedPickData514
                }
            ]
        };

        var rankedWin = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: rankedWinData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(57,177,247,0.5)",
                    strokeColor: "rgba(57,177,247,1)",
                    highlightFill: "rgba(57,177,247,0.75)",
                    highlightStroke: "rgba(57,177,247,1)",
                    data: rankedWinData514
                }
            ]
        };

        var normalPick = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: normalPickData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(57,177,247,0.5)",
                    strokeColor: "rgba(57,177,247,1)",
                    highlightFill: "rgba(57,177,247,0.75)",
                    highlightStroke: "rgba(57,177,247,1)",
                    data: normalPickData514
                }
            ]
        };

        var normalWin = {labels: items,
            datasets: [
                {
                    label: "5.11 Patch",
                    fillColor: "rgba(194,230,250,0.5)",
                    strokeColor: "rgba(194,230,250,0.8)",
                    highlightFill: "rgba(194,230,250,0.75)",
                    highlightStroke: "rgba(194,230,250,1)",
                    data: normalWinData511
                },
                {
                    label: "5.14 Patch",
                    fillColor: "rgba(57,177,247,0.5)",
                    strokeColor: "rgba(57,177,247,1)",
                    highlightFill: "rgba(57,177,247,0.75)",
                    highlightStroke: "rgba(57,177,247,1)",
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