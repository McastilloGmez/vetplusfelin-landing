import CardGridSection from '../CardGridSection'
import { problems } from '../../data/sections'

export default function Problems() {
  return <CardGridSection id="problemas" tone="warm" content={problems} columns={4} />
}
