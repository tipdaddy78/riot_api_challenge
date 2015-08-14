from RiotAPI import RiotAPI
import json
import RiotConsts as Consts


def main(region, patch, queue):
    filepath = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/' + Consts.REGIONS[region]
    with open(filepath + '.json') as data:
        matches = json.load(data)
    api = RiotAPI('7abd16db-0076-4373-8cba-eac76f0de522', Consts.REGIONS[region])
    results=[]
    response = api.get_match_by_matchID (matches[0])
    participants = response["participants"]
    data = {}
    
    for participant in participants:
        item0 = participant["stats"]["item0"]
        item1 = participant["stats"]["item1"]
        item2 = participant["stats"]["item2"]
        item3 = participant["stats"]["item3"]
        item4 = participant["stats"]["item4"]
        item5 = participant["stats"]["item5"]
        item6 = participant["stats"]["item6"]
        championId = participant["championId"]
        winner = participant["stats"]["winner"]
        lane = participant["timeline"]["lane"]
        role = participant['timeline']['role']

        data.update({"item0" : item0 , "item1" : item1})

        with open(filepath + "_results.json", 'w') as f:
            json.dump(data, f)
        
##
##        current.update({"item0" : item0 , "item1" : item1})
##
##        with open (filepath + "_results.json", "w") as f:
##            json.dump(current, f)

    
if __name__ == "__main__":
    main('Turkey', '5.11', 'NORMAL_5X5')
