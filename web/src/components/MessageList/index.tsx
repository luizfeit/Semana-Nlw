import styles from './styles.module.scss'
import { io } from 'socket.io-client'

import logoImg from '../../assets/logo.svg'

import { api } from '../../services/api'

import { useEffect, useState } from 'react'

type Message = {
    id: string
    text: string
    user: {
        name: string
        avatar_url: string
    } //Somente as que vai ser utliziado
}

const messageQueue: Message[] = []

const socket = io('http://localhost:4000');

socket.on('new_message', newMessage =>{
    messageQueue.push(newMessage)
})

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([]) //Utilizando um segundo parametro para atualizar o estado da variavel

    const timer = setInterval(()=>{
        if(messageQueue.length > 0){
            setMessages(prevState =>[
                messageQueue[0],
                prevState[0],
                prevState[1]
            ].filter(Boolean))

            messageQueue.shift()
        }
    }, 3000)

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                {messages.map(messages => {
                    return (
                        <li key={messages.id} className={styles.message}>
                            <p className={styles.messageContent}>{messages.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={messages.user.avatar_url} alt={messages.user.name} />
                                </div>
                                <span>{messages.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}