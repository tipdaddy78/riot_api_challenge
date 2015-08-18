__author__ = 'tipdaddy78'

import RiotConsts as Consts
import json


# This function will run analysis for pick and win rates of the item specified
# A patch, region and queue must also be specified
# Lane is optional. If lane is not specifed, it will look at every lane

def main(patch, region, queue, items=Consts.ITEMS, lanes=Consts.LANES, champions=Consts.CHAMPIONS):
    # Initialize variables
    file_path = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/' + Consts.REGIONS[region] + '_results.json'

    with open(file_path) as f:
        data = json.load(f)
    matches = data['matches']

    for item, item_code in items.iteritems():
        results_file = '../' + item + '_analysis.txt'
        for champion, champion_code in champions.iteritems():
            for lane in lanes:
                pick_count = 0.0
                win_count = 0.0
                total_matches = 0.0
                total_players = 0.0
                # Loop through matches
                for match in matches:
                    total_matches += 1
                    # Loop through each player
                    participants = match['participants']
                    # Check if they built the item we are looking for and update variables
                    for participant in participants:
                        if participant['championId'] == champion_code:
                            total_players += 1
                        if participant['item0'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item1'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item2'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item3'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item4'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item5'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                        if participant['item6'] == item_code and participant['lane'] == lane and participant['championId'] == champion_code:
                            pick_count += 1
                            if participant['winner'] == True:
                                win_count += 1
                                continue
                if pick_count == 0.0:
                    pick_rate = 0.0
                    win_rate = 0.0
                else:
                    pick_rate = pick_count / total_players
                    win_rate = win_count / pick_count

                with open(results_file, 'a+') as f:
                    f.write('##### Patch: ' + patch + ' Region: ' + region + ' Queue: ' + queue + ' #####\n')
                    f.write('##### Champion: ' + champion + ' Lane: ' + lane + ' #####\n')
                    f.write('## In ' + str(int(total_matches)) + ' Games Across ' + str(
                        int(total_players)) + ' Players...\n')
                    f.write('## Pick Rate: ' + str(pick_rate) + '\n')
                    f.write('## Win Rate: ' + str(win_rate) + '\n\n')


if __name__ == "__main__":
    main('5.11', 'North America', 'RANKED_SOLO')
