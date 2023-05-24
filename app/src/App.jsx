import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import { MainContainer,ChatContainer,MessageList, Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react"

function App() {
  const [messages , setMessages] = useState([
   {
     message: "HELLO! I AM NUTRIFITNESS ... How could a Assist you in youre today workout plan !!"
   }
  ])

  return (
   <div className="App">
    <div style={{position: "relative",height :"800px", width: "700px"}}>
     <MainContainer>
      <ChatContainer>
        <MessageList>

        </MessageList>
      </ChatContainer>
     </MainContainer>
    </div>
   </div>
  )
  }

export default App
