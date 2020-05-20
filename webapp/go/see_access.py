import json
import pandas as pd
import re

j = pd.read_json("access.log", lines=True)
j = j[j["msg"] == "Finish Access"]

# j["url"] = j["url"].map(lambda x: re.sub(r'([a-z]|\d)+\.([a-z]|\d)+', "X", x))

g = j.groupby(["method", "url"])
print(g.count().sort_values("level", ascending=False)[:20])

print(g.mean().sort_values("elapsed", ascending=False)[:20])

print(g.sum().sort_values("elapsed", ascending=False)[:20])