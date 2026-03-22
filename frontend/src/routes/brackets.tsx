import { createFileRoute } from '@tanstack/react-router'
import BracketsPage from '../pages/BracketsPage'

export const Route = createFileRoute('/brackets')({
  component: BracketsPage,
})
