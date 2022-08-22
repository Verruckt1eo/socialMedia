import {useState} from "react"
let chat = {
    interlocutor:"Иван",
    messages:[
        {
            senderName:"Иван",
            messageText:"Го в кс",
            messageTime:new Date().toLocaleDateString(),
        },
        {
            senderName:"lev",
            messageText:"Го",
            messageTime:new Date().toLocaleDateString(),
        }
    ] 
}
let chat2 = {
    interlocutor:"Артём",
    messages:[
        {
            senderName:"Lev",
            messageText:"Помоги с дз",
            messageTime:new Date().toLocaleDateString(),
        },
        {
            senderName:"Артём",
            messageText:"Сор я на дискаче",
            messageTime:new Date().toLocaleDateString(),
        }
    ] 
}
function Messages(props){
    let [chats,setChats] = useState([chat,chat2])
    return(
        <div>
            <h1>Чаты</h1>
            <ul>
                {
                    chats.map((chat)=>{
                        return(
                            <li>
                                <p>{chat.interlocutor}</p>
                                <p>{chat.messages[1].messageText}</p>
                                <p>{chat.messages[1].messageTime}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Messages