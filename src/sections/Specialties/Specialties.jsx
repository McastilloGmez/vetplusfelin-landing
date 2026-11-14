import CardGridSection from '../CardGridSection'
import { specialties } from '../../data/sections'

export default function Specialties() {
  return <CardGridSection id="especialidades" tone="mint" content={specialties} columns={3} />
}
