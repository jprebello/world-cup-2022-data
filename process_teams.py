import pandas as pd

def process_teams(df_matches):
    df_teams = (
        df_matches.groupby("team")
        .agg(
    
            # registros gerais 
            matches=("team", "count"),
            wins=("win", "sum"),
            losses=("loss", "sum"),
            draws=("draw", "sum"),
    
            # gols
            total_goals_for=("goals_for", "sum"),
            total_goals_against=("goals_against", "sum"),
            goals_per_game=("goals_for", "mean"),
            goals_conceded_per_game=("goals_against", "mean"),
    
            # assistências
            assisted_goals=("assists", "sum"),
    
            # finalizações
            total_attempts=("total_attempts", "sum"),
            attempts_per_game=("total_attempts", "mean"),
            total_attempts_conceded=("opponent_total_attempts", "sum"),
            attempts_conceded_per_game=("opponent_total_attempts", "mean"),
            total_attempts_on_target=("attempts_on_target", "sum"),
    
            # escanteios
            total_corners=("corners", "sum"),
            corners_per_game=("corners", "mean"),
            total_opponent_corners=("opponent_corners", "sum"),
            opponent_corners_per_game=("opponent_corners", "mean"),
    
            # faltas
            total_fouls_suffered=("opponent_fouls_committed", "sum"),
            fouls_suffered_per_game=("opponent_fouls_committed", "mean"),
            total_fouls_committed=("fouls_committed", "sum"),
            fouls_committed_per_game=("fouls_committed", "mean"),
    
            # impedimentos
            total_offsides=("offsides", "sum"),
            offsides_per_game=("offsides", "mean"),
            offsides_forced=("opponent_offsides", "sum"),
            offsides_forced_per_game=("opponent_offsides", "mean"),
    
            # cartões
            total_yellow_cards=("yellow_cards", "sum"),
            total_red_cards=("red_cards", "sum"),
    
            # jogos sem sofrer gols
            clean_sheets=("goals_against", lambda x: (x == 0).sum()),
            
            # posse de bola
            possession_avg=("possession", "mean"),
            total_passes=("total_passes", "sum"),
            total_completed_passes=("completed_passes", "sum"),
            passes_per_game=("total_passes", "mean"),
            completed_passes_per_game=("completed_passes", "mean")
        )
        .reset_index()
    )
    
    # classificação
    df_teams.loc[df_teams["matches"] == 3, "classification"] = "17-32nd"
    df_teams.loc[df_teams["matches"] == 4, "classification"] = "9-16th"
    df_teams.loc[df_teams["matches"] == 5, "classification"] = "5-8th"
    df_teams.loc[df_teams["team"] == "MOROCCO", "classification"] = "4th place"
    df_teams.loc[df_teams["team"] == "CROATIA", "classification"] = "3rd place"
    df_teams.loc[df_teams["team"] == "FRANCE", "classification"] = "2nd place"
    df_teams.loc[df_teams["team"] == "ARGENTINA", "classification"] = "Champion"
    
    # outras métricas
    df_teams["goal_difference"] = (
        df_teams["total_goals_for"] - df_teams["total_goals_against"]
    )
    
    df_teams["attempts_on_target_pct"] = (
        df_teams["total_attempts_on_target"] / df_teams["total_attempts"]
    ).round(2) * 100
    
    df_teams["goal_conversion_rate"] = (
        df_teams["total_goals_for"] / df_teams["total_attempts"]
    ).round(2) * 100
    
    df_teams["passes_accuracy_pct"] = (df_teams["total_completed_passes"] / df_teams["total_passes"]).round(2) * 100
    
    df_teams["possession_avg"] = df_teams["possession_avg"] * 100
    
    df_teams["total_cards"] = df_teams["total_yellow_cards"] + df_teams["total_red_cards"]

    # arredondar médias
    cols_to_round = [
        "goals_per_game",
        "goals_conceded_per_game",
        "attempts_per_game",
        "attempts_conceded_per_game",
        "corners_per_game",
        "fouls_suffered_per_game",
        "fouls_committed_per_game",
        "offsides_per_game",
        "offsides_forced_per_game",
        "opponent_corners_per_game",
        "possession_avg",
        "passes_per_game",
        "completed_passes_per_game"
    ]
    
    df_teams[cols_to_round] = df_teams[cols_to_round].round(2)
    
    return df_teams
