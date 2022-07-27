import requests
import json

adsData = []
with open("../src/assets/data/adsData.json","r") as f:
  adsData = json.load(f)

print(adsData)