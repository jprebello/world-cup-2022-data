import pandas as pd

def process_matches(df):
     
    # duplicando a base: duas linhas por jogos por time
    df_inv = df.copy()
    
    df_inv["team"] = df["opponent"]
    df_inv["possession"] = df["opponent_possession"]
    df_inv["goals_for"] = df["goals_against"]
    df_inv["total_attempts"] = df["opponent_total_attempts"]
    df_inv["attempts_on_target"] = df["opponent_attempts_on_target"]
    df_inv["attempts_off_target"] = df["opponent_attempts_off_target"]
    df_inv["assists"] = df["opponent_assists"]
    df_inv["left_channel"] = df["opponent_left_channel"]
    df_inv["left_inside_channel"] = df["opponent_left_inside_channel"]
    df_inv["central_channel"] = df["opponent_central_channel"]
    df_inv["right_inside_channel"] = df["opponent_right_inside_channel"]
    df_inv["right_channel"] = df["opponent_right_channel"]
    df_inv["yellow_cards"] = df["opponent_yellow_cards"]
    df_inv["red_cards"] = df["opponent_red_cards"]
    df_inv["fouls_committed"] = df["opponent_fouls_committed"]
    df_inv["offsides"] = df["opponent_offsides"]
    df_inv["total_passes"] = df["opponent_total_passes"]
    df_inv["completed_passes"] = df["opponent_completed_passes"]
    df_inv["crosses"] = df["opponent_crosses"]
    df_inv["corners"] = df["opponent_corners"]
    df_inv["own_goals"] = df["opponent_own_goals"]
    
    df_inv["opponent"] = df["team"] 
    df_inv["opponent_possession"] = df["possession"] 
    df_inv["goals_against"] = df["goals_for"] 
    df_inv["opponent_total_attempts"] = df["total_attempts"] 
    df_inv["opponent_attempts_on_target"] = df["attempts_on_target"] 
    df_inv["opponent_attempts_off_target"] = df["attempts_off_target"] 
    df_inv["opponent_assists"] = df["assists"] 
    df_inv["opponent_left_channel"] = df["left_channel"] 
    df_inv["opponent_left_inside_channel"] = df["left_inside_channel"] 
    df_inv["opponent_central_channel"] = df["central_channel"] 
    df_inv["opponent_right_inside_channel"] = df["right_inside_channel"] 
    df_inv["opponent_right_channel"] = df["right_channel"] 
    df_inv["opponent_yellow_cards"] = df["yellow_cards"] 
    df_inv["opponent_red_cards"] = df["red_cards"] 
    df_inv["opponent_fouls_committed"] = df["fouls_committed"] 
    df_inv["opponent_offsides"] = df["offsides"] 
    df_inv["opponent_total_passes"] = df["total_passes"] 
    df_inv["opponent_completed_passes"] = df["completed_passes"] 
    df_inv["opponent_crosses"] = df["crosses"] 
    df_inv["opponent_corners"] = df["corners"] 
    df_inv["opponent_own_goals"] = df["own_goals"]
    
    df_matches = pd.concat([df, df_inv], ignore_index=True)
    
    # resultados
    df_matches["win"] = df_matches["goals_for"] > df_matches["goals_against"]
    df_matches["loss"] = df_matches["goals_for"] < df_matches["goals_against"]
    df_matches["draw"] = df_matches["goals_for"] == df_matches["goals_against"]
    
    # conversões de tipo
    def str_float(x:str):
        x = x.replace("%", "")
        return float(x) / 100
    
    df_matches["possession"] = df_matches["possession"].apply(str_float) 
    df_matches["opponent_possession"] = df_matches["opponent_possession"].apply(str_float)
    df_matches["possession_contest"] = df_matches["possession_contest"].apply(str_float)
    df_matches["date"] = pd.to_datetime(df_matches["date"], format="%d %b %Y")

    # flags
    flags = {
        "QATAR" : "https://flagcdn.com/qa.svg",
        "ENGLAND" : "https://flagcdn.com/gb-eng.svg",
        "SENEGAL" : "https://flagcdn.com/sn.svg",
        "UNITED STATES" : "https://flagcdn.com/us.svg",
        "ARGENTINA" : "https://flagcdn.com/ar.svg",
        "DENMARK" : "https://flagcdn.com/dk.svg",
        "MEXICO" : "https://flagcdn.com/mx.svg",
        "FRANCE" : "https://flagcdn.com/fr.svg",
        "MOROCCO" : "https://flagcdn.com/ma.svg",
        "GERMANY" : "https://flagcdn.com/de.svg",
        "SPAIN" : "https://flagcdn.com/es.svg",
        "BELGIUM" : "https://flagcdn.com/be.svg",
        "SWITZERLAND" : "https://flagcdn.com/ch.svg",
        "URUGUAY" : "https://flagcdn.com/uy.svg",
        "PORTUGAL" : "https://flagcdn.com/pt.svg",
        "BRAZIL" : "https://flagcdn.com/br.svg",
        "WALES" : "https://flagcdn.com/gb-wls.svg",
        "NETHERLANDS" : "https://flagcdn.com/nl.svg",
        "TUNISIA" : "https://flagcdn.com/tn.svg",
        "POLAND" : "https://flagcdn.com/pl.svg",
        "JAPAN" : "https://flagcdn.com/jp.svg",
        "CROATIA" : "https://flagcdn.com/hr.svg",
        "CAMEROON" : "https://flagcdn.com/cm.svg",
        "KOREA REPUBLIC" : "https://flagcdn.com/kr.svg",
        "ECUADOR" : "https://flagcdn.com/ec.svg",
        "IRAN" : "https://flagcdn.com/ir.svg",
        "AUSTRALIA" : "https://flagcdn.com/au.svg",
        "SAUDI ARABIA" : "https://flagcdn.com/sa.svg",
        "CANADA" : "https://flagcdn.com/ca.svg",
        "COSTA RICA" : "https://flagcdn.com/cr.svg",
        "GHANA" : "https://flagcdn.com/gh.svg",
        "SERBIA" : "https://flagcdn.com/rs.svg",
    }
    
    df_matches["flag"] = df_matches["team"].map(flags)
    df_matches["opponent_flag"] = df_matches["opponent"].map(flags)
    
    return df_matches
