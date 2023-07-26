"use client"

import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';

export default function SuggestionForm() {

    const [suggestionTime, setSuggestionTime] = useState<string>("00:00")

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLInputElement>(null)
    const suggestionNameRef = useRef<HTMLInputElement>(null)
    const suggestionTimeRef = useRef<HTMLInputElement>(null)

    const formatTime = (value: any) => {
        const onlyNumbers = value.replace(/[^\d]/g, '')
        if (onlyNumbers.length <= 2) {
            return onlyNumbers
        }
        return `${onlyNumbers.slice(0, 2)}:${onlyNumbers.slice(2, 4)}`
    }

    const handleTimeChange = (event: any) => {
        const formattedTime = formatTime(event.target.value);
        setSuggestionTime(formattedTime)
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        const templateParams = {
            from_name: nameRef.current?.value,
            message: messageRef.current?.value,
            song_name: suggestionNameRef.current?.value,
            song_time: suggestionTime,
            email: emailRef.current?.value,
        }

        console.log("templateParams ==>>", templateParams)

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_KEY)
            .then((response) =>
                console.log(response)
            ).catch((error) =>
                console.log(error))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <TextField
                        label="Digite seu nome"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Nome"
                        inputRef={nameRef}
                        style={{ backgroundColor: 'white', borderRadius: '10px' }} />

                    <TextField
                        label="Digite seu email*"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Email"
                        inputRef={emailRef}
                        style={{ backgroundColor: 'white', borderRadius: '10px' }} />

                    <TextField
                        label="Digite a mensagem da música*"
                        id="outlined-basic"
                        variant="outlined"
                        inputRef={messageRef}
                        placeholder="A-ha - Take on Me"
                        style={{ backgroundColor: 'white', borderRadius: '10px' }} />

                    <TextField
                        label="Digite o nome música sugerida*"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="A-ha - Take on Me"
                        inputRef={suggestionNameRef}
                        style={{ backgroundColor: 'white', borderRadius: '10px' }} />

                    <TextField
                        label="Tempo da música (opcional)"
                        variant="outlined"
                        value={suggestionTime}
                        onChange={(e) => handleTimeChange(e)}
                        style={{ backgroundColor: 'white' }}
                        inputProps={{ maxLength: 5, pattern: '^\\d{0,2}:\\d{0,2}$' }}
                    />
                    <Button variant="outlined" type="submit" style={{ color: 'orange', backgroundColor: 'white' }}>Enviar Sugestão</Button>
                </div>
            </form>
        </div>
    )
}
