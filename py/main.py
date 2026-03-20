from rename_columns import load_and_rename_data
from process_matches import process_matches
from process_teams import process_teams
from process_competition import process_competition

import json

# pipeline
df = load_and_rename_data()
df_matches = process_matches(df)
df_teams = process_teams(df_matches)
df_competition = process_competition(df_matches, df_teams)

# salvar JSONs
df_matches.to_json("../json/matches.json", orient="records", indent=4, date_format="iso")
df_teams.to_json("../json/teams.json", orient="records", indent=4)
df_competition.to_json("../json/competition.json", orient="records", indent=4)
