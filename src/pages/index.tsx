import { Instructions } from '../components/Instructions'
import { Layout } from '../components/Layout'
import { Welcome } from '../components/Welcome'

export default function PaginaInicial() {
  return (
    <Layout location="index">
      <Instructions />
      <Welcome />
    </Layout>
  )
}
