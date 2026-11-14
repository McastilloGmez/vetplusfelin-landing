import CardGridSection from '../CardGridSection'
import { benefits } from '../../data/sections'

export default function Benefits() {
  return <CardGridSection id="beneficios" tone="mint" content={benefits} columns={3} />
}
