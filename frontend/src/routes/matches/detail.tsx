import { createFileRoute } from '@tanstack/react-router'
import MatchDetailPage from '../../pages/MatchDetailPage'

type MatchSearch = { date: string; team: string; opponent: string }

export const Route = createFileRoute('/matches/detail')({
  validateSearch: (search): MatchSearch => search as MatchSearch,
  component: MatchDetailPage,
})
