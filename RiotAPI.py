import requests
import RiotConsts as Consts


class RiotAPI(object):

    def __init__(self, api_key, region=Consts.REGIONS['Turkey']):
        self.api_key = api_key
        self.region = region

    def _request(self, api_url, params={}):
        args = {'api_key': self.api_key}
        for key, value in params.items():
            if key not in args:
                args[key] = value
        response = requests.get(
            Consts.URL['base'].format(
                #notice proxy here as well, might need to change
                proxy=self.region,
                region=self.region,
                url=api_url
                ),
            params=args
            )
        print response.url
        return response.json()

    def get_match_by_matchID(self, matchId):
        api_url = Consts.URL['match_by_matchID'].format(
            version=Consts.API_VERSIONS['match'],
            matchId=matchId
            )
        return self._request(api_url)
