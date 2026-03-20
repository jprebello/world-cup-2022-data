import pandas as pd

def process_competition(df_matches, df_teams):

    df_competition = pd.DataFrame([{}])

    # partidas
    df_competition["total_matches"] = len(df_matches) // 2

    # gols
    df_competition["total_goals"] = df_matches["goals_for"].sum()
    df_competition["goals_avg"] = (df_competition["total_goals"] / df_competition["total_matches"]).round(2)
    df_competition["best_goal_conversion_rate_team"] = df_teams.loc[df_teams["goal_conversion_rate"].idxmax(), "team"]
    df_competition["best_goal_conversion_rate"] = df_teams.loc[df_teams["goal_conversion_rate"].idxmax(), "goal_conversion_rate"]

    # cartões
    df_competition["most_cards_received_team"] = df_teams.loc[df_teams["total_cards"].idxmax(), "team"]
    df_competition["most_cards_received"] = df_teams.loc[df_teams["total_cards"].idxmax(), "total_cards"]

    # ataque
    df_competition["best_attack_team"] = df_teams.loc[df_teams["total_goals_for"].idxmax(), "team"]
    df_competition["best_attack_goals"] = df_teams.loc[df_teams["total_goals_for"].idxmax(), "total_goals_for"]

    # defesa
    df_competition["best_defense_team"] = df_teams.loc[df_teams["total_goals_against"].idxmin(), "team"]
    df_competition["best_defense_goals_against"] = df_teams.loc[df_teams["total_goals_against"].idxmin(), "total_goals_against"]
    
    # assistências
    df_competition["assisted_goals_team"] = df_teams.loc[df_teams["assisted_goals"].idxmax(), "team"]
    df_competition["assisted_goals_value"] = df_teams.loc[df_teams["assisted_goals"].idxmax(), "assisted_goals"]

    # posse de bola
    df_competition["most_possession_avg_team"] = df_teams.loc[df_teams["possession_avg"].idxmax(), "team"]
    df_competition["most_possession_avg_value"] = df_teams.loc[df_teams["possession_avg"].idxmax(), "possession_avg"]

    df_competition["best_passes_accuracy_pct_team"] = df_teams.loc[df_teams["passes_accuracy_pct"].idxmax(), "team"]
    df_competition["best_passes_accuracy_pct_value"] = df_teams.loc[df_teams["passes_accuracy_pct"].idxmax(), "passes_accuracy_pct"]

    # faltas
    df_competition["most_fouls_committed_team"] = df_teams.loc[df_teams["total_fouls_committed"].idxmax(), "team"]
    df_competition["most_fouls_committed_value"] = df_teams.loc[df_teams["total_fouls_committed"].idxmax(), "total_fouls_committed"]

    # jogos sem sofrer gols
    df_competition["clean_sheets_team"] = df_teams.loc[df_teams["clean_sheets"].idxmax(), "team"]
    df_competition["clean_sheets_value"] = df_teams.loc[df_teams["clean_sheets"].idxmax(), "clean_sheets"]

    return df_competition
