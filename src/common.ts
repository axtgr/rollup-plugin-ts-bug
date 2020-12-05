import subdep from './subdep'

export default function common() {
  return `foo${subdep()}`
}
