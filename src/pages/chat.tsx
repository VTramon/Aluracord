import { Layout } from '../components/Layout'
import { ChatComponent } from '../components/ChatComponent'

export default function ChatPage() {
  return (
    <Layout location={'chat'}>
      <ChatComponent />
    </Layout>
  )
}
