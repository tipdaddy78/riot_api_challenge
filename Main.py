from RiotAPI import RiotAPI
import json
import RiotConsts as Consts


def main(region, patch, queue):
    filepath = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/' + Consts.REGIONS[region]
    with open(filepath + '.json') as data:
        matches = json.load(data)
    api = RiotAPI(Consts.api_key, Consts.REGIONS[region])
    with open(filepath + "_results.json", 'a') as f:
            f.write("{\n'matches' :[{\n\t")
    for match in matches:
        response = api.get_match_by_matchID (match)
        participants = response["participants"]
        with open(filepath + "_results.json", 'a') as f:
            f.write("'matchId' : '" + str(match) + "' \n\t"
                +   "participants : [\n\t\t")
        for participant in participants:
            data = {"item0" : participant["stats"]["item0"],
                    "item1" : participant["stats"]["item1"],
                    "item2" : participant["stats"]["item2"],
                    "item3" : participant["stats"]["item3"],
                    "item4" : participant["stats"]["item4"],
                    "item5" : participant["stats"]["item5"],
                    "item6" : participant["stats"]["item6"],
                    "championId" : participant["championId"],
                    "winner" : participant["stats"]["winner"],
                    "lane" : participant["timeline"]["lane"],
                    "role" : participant['timeline']['role']}

            with open(filepath + "_results.json", 'a') as f:
                json.dump(data, f)
                f.write(",\n\t\t")

            participant = 0
        with open(filepath + "_results.json", 'a') as f:
                f.write("]}")
        

    
if __name__ == "__main__":
    main('Korea', '5.11', 'NORMAL_5X5')
