__author__ = 'tipdaddy78'
import json

# This script is used to simply check if the json file in the argument is valid.  
# It was used to ensure our json was correct.

def main(file):
    with open(file) as f:
        json.load(f)


if __name__ == "__main__":
    main("WebContent/item_analysis.json")