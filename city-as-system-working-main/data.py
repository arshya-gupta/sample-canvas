
import pandas as pd
import requests
import json

# URL for the CSV data
url = "https://data.cityofnewyork.us/resource/p5f6-bkga.csv"

# Fetch CSV data
response = requests.get(url)

if response.status_code == 200:
    # Read CSV data into a DataFrame
    df = pd.read_csv(url)
    
    # Convert DataFrame to JSON format
    json_data = df.to_json(orient='records')
    
    # Save JSON data to a file
    with open("nyc-data.json", "w") as json_file:
        json.dump(json.loads(json_data), json_file, indent=4)
    
    print("Data has been successfully fetched and saved as 'nyc_data.json'")
else:
    print("Failed to fetch data. Status code:", response.status_code)

