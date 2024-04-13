# myapp/convert_csv_to_json.py
import csv
import json


def convert_csv_to_json(csv_file, json_file):
    data = []
    with open(csv_file, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)

    with open(json_file, 'w') as jsonfile:
        json.dump(data, jsonfile)


if __name__ == "__main__":
    csv_file_path = 'Mental_Health_FAQ.csv'
    json_file_path = 'data.json'
    convert_csv_to_json(csv_file_path, json_file_path)
