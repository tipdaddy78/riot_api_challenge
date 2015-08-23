__author__ = 'tipdaddy78'
import json

def main(file):
    with open(file) as f:
        json.load(f)


if __name__ == "__main__":
    main("../item_data/item_analysis.json")