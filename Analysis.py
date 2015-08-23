__author__ = 'tipdaddy78'

import RiotConsts as Consts
import json


# This function will run analysis of all the data gathered from Main.py
# It leaves trailing commas at the end of a section (eg: one extra comma at the end of the first items block)

def main(patches=Consts.PATCHES, regions=Consts.REGIONS, queues=Consts.QUEUES, items=Consts.ITEMS, lanes=Consts.LANES, champions=Consts.CHAMPIONS):
    # Initialize variables
    results_file = '../item_data/item_analysis.json'
    with open(results_file, 'a+') as f:
        f.write('{"patches": [\n\t')
    for patch, patch_code in patches.iteritems():
        with open(results_file, 'a+') as f:
            f.write('{"patch": "' + patch_code + '",\n\t')
            f.write('"queues": [\n\t\t')

        for queue, queue_code in queues.iteritems():
            with open(results_file, 'a+') as f:
                f.write('{"queue": "' + queue_code + '",\n\t\t')
                f.write('"regions": [\n\t\t\t')

            for region, region_code in regions.iteritems():
                file_path = '../AP_ITEM_DATASET/' + patch_code + '/' + queue_code + '/'
                with open(file_path  + region_code + '_results.json') as f:
                    data = json.load(f)
                matches = data['matches']
                with open(results_file, 'a+') as f:
                    f.write('{"region": "' + region + '",\n\t\t\t')
                    f.write('"items": [\n\t\t\t\t')

                for item, item_code in items.iteritems():
                    with open(results_file, 'a+') as f:
                        f.write('{"item": "' + item + '",\n\t\t\t\t')
                        f.write('"stats": [\n\t\t\t\t\t')
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
                                    # Not champion or lane specific
                                    if champion == '' and lane == u'':
                                        total_players += 1
                                        if participant['item0'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item1'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item2'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item3'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item4'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item5'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item6'] == item_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                    # Not Lane specific
                                    elif champion == '':
                                        if participant['lane'] == lane:
                                            total_players += 1
                                        if participant['item0'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item1'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item2'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item3'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item4'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item5'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item6'] == item_code and participant['lane'] == lane:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                    # Not Champion Specific
                                    elif lane == u'':
                                        if participant['championId'] == champion_code:
                                            total_players += 1
                                        if participant['item0'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item1'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item2'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item3'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item4'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item5'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                        if participant['item6'] == item_code and participant['championId'] == champion_code:
                                            pick_count += 1
                                            if participant['winner'] == True:
                                                win_count += 1
                                                continue
                                    # Has to match Champion, Lane and Item
                                    else:
                                        if participant['championId'] == champion_code and participant['lane'] == lane:
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
                                f.write(',\n\t\t\t\t\t')
                    with open(results_file, 'a+') as f:
                        f.write(']},\n\t\t\t\t')
                with open(results_file, 'a+') as f:
                    f.write(']},\n\t\t\t')
            with open(results_file, 'a+') as f:
                f.write(']},\n\t\t')
        with open(results_file, 'a+') as f:
            f.write(']}, \n\t')
    with open(results_file, 'a+') as f:
        f.write(']}')
if __name__ == "__main__":
    main()

