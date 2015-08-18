__author__ = 'tipdaddy78'

import RiotConsts as Consts
import json


# This function will run analysis for pick and win rates of the item specified
# A patch, region and queue must also be specified
# Lane is optional. If lane is not specifed, it will look at every lane

def main(patch, region, queue, items=Consts.ITEMS, lanes=Consts.LANES, champions=Consts.CHAMPIONS):
    # Initialize variables
    file_path = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/'

    with open(file_path  + Consts.REGIONS[region] + '_results.json') as f:
        data = json.load(f)
    matches = data['matches']

    for item, item_code in items.iteritems():
        results_file = file_path + 'item_data/' + Consts.REGIONS[region] + '_' + item + '_analysis.txt'
        with open(results_file, 'a+') as f:
            f.write('{\n\t "stats": [\n\t\t')
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

                item_dictionary = {
                    'champion': champion,
                    'lane': lane,
                    'total_matches': total_matches,
                    'total_players': total_players,
                    'pick_rate': pick_rate,
                    'win_rate': win_rate
                }
                with open(results_file, 'a+') as f:
                    json.dump(item_dictionary, f)
                    f.write(',\n\t\t')
        with open(results_file, 'a+') as f:
            f.write(']}')
if __name__ == "__main__":
    main('5.14', 'Brazil', 'RANKED_SOLO')
    main('5.14', 'EU Nordic & East', 'RANKED_SOLO')
    main('5.14', 'EU West', 'RANKED_SOLO')
    main('5.14', 'Korea', 'RANKED_SOLO')
    main('5.14', 'Latin America North', 'RANKED_SOLO')
    main('5.14', 'Latin America South', 'RANKED_SOLO')
    main('5.14', 'North America', 'RANKED_SOLO')
    main('5.14', 'Oceania', 'RANKED_SOLO')
    main('5.14', 'Russia', 'RANKED_SOLO')
    main('5.14', 'Turkey', 'RANKED_SOLO')

    main('5.14', 'Brazil', 'NORMAL_5X5')
    main('5.14', 'EU Nordic & East', 'NORMAL_5X5')
    main('5.14', 'EU West', 'NORMAL_5X5')
    main('5.14', 'Korea', 'NORMAL_5X5')
    main('5.14', 'Latin America North', 'NORMAL_5X5')
    main('5.14', 'Latin America South', 'NORMAL_5X5')
    main('5.14', 'North America', 'NORMAL_5X5')
    main('5.14', 'Oceania', 'NORMAL_5X5')
    main('5.14', 'Russia', 'NORMAL_5X5')
    main('5.14', 'Turkey', 'NORMAL_5X5')

