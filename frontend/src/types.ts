// ─── Match ───────────────────────────────────────────────
export interface Match {
  team: string
  opponent: string
  date: string
  category: string
  goals_for: number
  goals_against: number
  possession: number
  opponent_possession: number
  possession_contest: number
  total_attempts: number
  opponent_total_attempts: number
  attempts_on_target: number
  opponent_attempts_on_target: number
  attempts_off_target: number
  opponent_attempts_off_target: number
  assists: number
  opponent_assists: number
  left_channel: number
  opponent_left_channel: number
  left_inside_channel: number
  opponent_left_inside_channel: number
  central_channel: number
  opponent_central_channel: number
  right_inside_channel: number
  opponent_right_inside_channel: number
  right_channel: number
  opponent_right_channel: number
  yellow_cards: number
  opponent_yellow_cards: number
  red_cards: number
  opponent_red_cards: number
  fouls_committed: number
  opponent_fouls_committed: number
  offsides: number
  opponent_offsides: number
  total_passes: number
  opponent_total_passes: number
  completed_passes: number
  opponent_completed_passes: number
  crosses: number
  opponent_crosses: number
  corners: number
  opponent_corners: number
  own_goals: number
  opponent_own_goals: number
  win: boolean
  loss: boolean
  draw: boolean
}

// ─── Team ────────────────────────────────────────────────
export interface Team {
  team: string
  flag: string
  matches: number
  wins: number
  losses: number
  draws: number
  classification: string
  goal_difference: number
  total_goals_for: number
  total_goals_against: number
  goals_per_game: number
  goals_conceded_per_game: number
  assisted_goals: number
  total_attempts: number
  attempts_per_game: number
  total_attempts_conceded: number
  attempts_conceded_per_game: number
  total_attempts_on_target: number
  attempts_on_target_pct: number
  goal_conversion_rate: number
  total_corners: number
  corners_per_game: number
  total_opponent_corners: number
  opponent_corners_per_game: number
  total_fouls_suffered: number
  fouls_suffered_per_game: number
  total_fouls_committed: number
  fouls_committed_per_game: number
  total_offsides: number
  offsides_per_game: number
  offsides_forced: number
  offsides_forced_per_game: number
  total_yellow_cards: number
  total_red_cards: number
  total_cards: number
  clean_sheets: number
  possession_avg: number
  total_passes: number
  total_completed_passes: number
  passes_per_game: number
  completed_passes_per_game: number
  passes_accuracy_pct: number
}

// ─── Competition ─────────────────────────────────────────
export interface Competition {
  total_matches: number
  total_goals: number
  goals_avg: number
  best_goal_conversion_rate_team: string
  best_goal_conversion_rate: number
  most_cards_received_team: string
  most_cards_received: number
  best_attack_team: string
  best_attack_goals: number
  best_defense_team: string
  best_defense_goals_against: number
  assisted_goals_team: string
  assisted_goals_value: number
  most_possession_avg_team: string
  most_possession_avg_value: number
  best_passes_accuracy_pct_team: string
  best_passes_accuracy_pct_value: number
  most_fouls_committed_team: string
  most_fouls_committed_value: number
  clean_sheets_team: string
  clean_sheets_value: number
}

// ─── Componentes ─────────────────────────────────────────
export interface MatchCardProps {
  match: Match
  alternateColor?: boolean
}

export interface TeamCardProps {
  team: Team
  side: "home"|"away"
}

export interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
}