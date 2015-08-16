from RiotAPI import RiotAPI
import json
import RiotConsts as Consts


def main(region, patch, queue):
    filepath = '../AP_ITEM_DATASET/' + patch + '/' + queue + '/' + Consts.REGIONS[region]
    with open(filepath + '.json') as data:
        matches = json.load(data)
    api = RiotAPI(Consts.api_key, Consts.REGIONS[region])
    with open(filepath + "_results.json", 'a') as f:
        f.write('{\n"matches" :[{\n\t')
    for match in matches:
        response = api.get_match_by_matchID(match)
        if response != "Bad JSON":
            participants = response["participants"]
            with open(filepath + "_results.json", 'a') as f:
                f.write('"matchId" : "' + str(match) + '", \n\t'
                        + '"participants" : [\n\t\t')
            for x in range(0, 10):
                data = {"item0": participants[x]["stats"]["item0"],
                        "item1": participants[x]["stats"]["item1"],
                        "item2": participants[x]["stats"]["item2"],
                        "item3": participants[x]["stats"]["item3"],
                        "item4": participants[x]["stats"]["item4"],
                        "item5": participants[x]["stats"]["item5"],
                        "item6": participants[x]["stats"]["item6"],
                        "championId": participants[x]["championId"],
                        "winner": participants[x]["stats"]["winner"],
                        "lane": participants[x]["timeline"]["lane"],
                        "role": participants[x]['timeline']['role']}
                if x != 9:
                    with open(filepath + "_results.json", 'a') as f:
                        json.dump(data, f)
                        f.write(',')
                else:
                    with open(filepath + "_results.json", 'a') as f:
                        json.dump(data, f)

        with open(filepath + "_results.json", 'a') as f:
            f.write("]},{")
    with open(filepath + "_results.json", 'a') as f:
        f.write("]}")


if __name__ == "__main__":
    # Pulls for Ranked data on patch 5.11
    main('North America', '5.11', 'RANKED_SOLO')
    main('Brazil', '5.11', 'RANKED_SOLO')
    main('EU Nordic & East', '5.11', 'RANKED_SOLO')
    main('EU West', '5.11', 'RANKED_SOLO')
    main('Korea', '5.11', 'RANKED_SOLO')
    main('Latin America North', '5.11', 'RANKED_SOLO')
    main('Latin America South', '5.11', 'RANKED_SOLO')
    main('Oceania', '5.11', 'RANKED_SOLO')
    main('Russia', '5.11', 'RANKED_SOLO')
    main('Turkey', '5.11', 'RANKED_SOLO')
    # Pulls for Ranked data on patch 5.14
    main('North America', '5.14', 'RANKED_SOLO')
    main('Brazil', '5.14', 'RANKED_SOLO')
    main('EU Nordic & East', '5.14', 'RANKED_SOLO')
    main('EU West', '5.14', 'RANKED_SOLO')
    main('Korea', '5.14', 'RANKED_SOLO')
    main('Latin America North', '5.14', 'RANKED_SOLO')
    main('Latin America South', '5.14', 'RANKED_SOLO')
    main('Oceania', '5.14', 'RANKED_SOLO')
    main('Russia', '5.14', 'RANKED_SOLO')
    main('Turkey', '5.14', 'RANKED_SOLO')
    # Pulls for normal data on patch 5.11
    main('North America', '5.11', 'NORMAL_5X5')
    main('Brazil', '5.11', 'NORMAL_5X5')
    main('EU Nordic & East', '5.11', 'NORMAL_5X5')
    main('EU West', '5.11', 'NORMAL_5X5')
    main('Korea', '5.11', 'NORMAL_5X5')
    main('Latin America North', '5.11', 'NORMAL_5X5')
    main('Latin America South', '5.11', 'NORMAL_5X5')
    main('Oceania', '5.11', 'NORMAL_5X5')
    main('Russia', '5.11', 'NORMAL_5X5')
    main('Turkey', '5.11', 'NORMAL_5X5')
    # Pulls for normal data on patch 5.14
    main('North America', '5.14', 'NORMAL_5X5')
    main('Brazil', '5.14', 'NORMAL_5X5')
    main('EU Nordic & East', '5.14', 'NORMAL_5X5')
    main('EU West', '5.14', 'NORMAL_5X5')
    main('Korea', '5.14', 'NORMAL_5X5')
    main('Latin America North', '5.14', 'NORMAL_5X5')
    main('Latin America South', '5.14', 'NORMAL_5X5')
    main('Oceania', '5.14', 'NORMAL_5X5')
    main('Russia', '5.14', 'NORMAL_5X5')
    main('Turkey', '5.14', 'NORMAL_5X5')
