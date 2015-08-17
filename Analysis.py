__author__ = 'tipdaddy78'

import RiotConsts as Consts
import json


# This function will run analysis for pick and win rates of the item specified
# A patch, region and queue must also be specified
# Lane is optional. If lane is not specifed, it will look at every lane

def main(item, patch, region, queue, lane=''):
    # Initialize variables
    file_path = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/' + Consts.REGIONS[region] + '_results_test.json'
    item_code = Consts.ITEMS[item]  # Add this to RiotConsts
    results_file = '../' + item + '_analysis.txt'
    pick_count = 0
    win_count = 0
    total_matches = 0

    with open(file_path) as f:
        data = json.load(f)
    matches = data['matches']

    # Loop through matches
    for match in matches:
        total_matches += 1
        # Loop through each player
        participants = match['participants']
        # Check if they built the item we are looking for and update variables
        for participant in participants:
            # Considers all lanes
            if lane != '':
                if participant['item0'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item1'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item2'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item3'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item4'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item5'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item6'] == item_code:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
            # Lane specific
            else:
                if participant['item0'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item1'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item2'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item3'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item4'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item5'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue
                if participant['item6'] == item_code and participant['lane'] == lane:
                    pick_count += 1
                    if participant['winner'] == 'true':
                        win_count += 1
                        continue

    pick_rate = pick_count / total_matches
    win_rate = win_count / total_matches

    with open(results_file, 'a+') as f:
        if lane != '':
            f.write('##### Patch: ' + patch + ' Region: ' + region + 'Queue: ' + queue + 'Lane: ' + lane + ' #####\n')
            f.write('## In ' + str(total_matches) + ' Games\n')
            f.write('## Pick Rate: ' + str(pick_rate) + '\n')
            f.write('## Win Rate: ' + str(win_rate) + '\n\n')
        else:
            f.write('##### Patch: ' + patch + ' Region: ' + region + 'Queue: ' + queue + ' #####\n')
            f.write('## In ' + str(total_matches) + ' Games\n')
            f.write('## Pick Rate: ' + str(pick_rate) + '\n')
            f.write('## Win Rate: ' + str(win_rate) + '\n\n')


if __name__ == "__main__":
    main('Ludens Echo', '5.11', 'North America', 'RANKED_SOLO')
