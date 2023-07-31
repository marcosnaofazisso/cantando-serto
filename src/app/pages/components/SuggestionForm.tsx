"use client"

import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledFormBox, inputLabelPropsStyles, inputPropsStyles } from '../styles';


export default function SuggestionForm() {

    const [suggestionTime, setSuggestionTime] = useState<string>("00:00")

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLInputElement>(null)
    const suggestionNameRef = useRef<HTMLInputElement>(null)

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

        const messageValue = messageRef.current?.value
        const emailValue = emailRef.current?.value
        const suggestionNameValue = suggestionNameRef.current?.value

        if (messageValue == "" || emailValue == "" || suggestionNameValue == "") {
            toast.error("Preencha os campos obrigatórios!")
        } else {

            const templateParams = {
                from_name: nameRef.current?.value,
                message: messageValue,
                song_name: suggestionNameValue,
                song_time: suggestionTime,
                email: emailValue,
            }

            toast.promise(
                emailjs.send(
                    process.env.NEXT_PUBLIC_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                    templateParams,
                    process.env.NEXT_PUBLIC_KEY
                ),
                {
                    pending: 'Enviando sugestão...',
                    success: 'Sugestão enviada com sucesso!',
                    error: 'Ocorreu um erro ao enviar sugestão. Tente novamente mais tarde',
                }).then((response: any) => {
                    console.log(response)

                }).catch((error: any) =>
                    console.error(error)

                ).finally(() => {
                    window.location.reload()

                })


        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StyledFormBox>
                    <TextField
                        label="Digite seu nome"
                        id="outlined-basic"
                        className='formInput'
                        variant="outlined"
                        InputProps={{ style: inputPropsStyles }}
                        placeholder="Nome"
                        InputLabelProps={{ style: inputLabelPropsStyles }}
                        inputRef={nameRef}
                    />

                    <TextField
                        label="Digite seu email *"
                        id="outlined-basic"
                        className='formInput'
                        variant="outlined"
                        InputLabelProps={{ style: inputLabelPropsStyles }}
                        placeholder="Email"
                        InputProps={{ style: inputPropsStyles }}
                        inputRef={emailRef}
                    />

                    <TextField
                        label="Digite a mensagem da música *"
                        id="outlined-basic"
                        className='formInput'
                        variant="outlined"
                        inputRef={messageRef}
                        InputProps={{ style: inputPropsStyles }}
                        InputLabelProps={{ style: inputLabelPropsStyles }}
                        placeholder="Tem pirão"
                    />

                    <TextField
                        label="Digite o nome música sugerida *"
                        id="outlined-basic"
                        className='formInput'
                        variant="outlined"
                        InputProps={{ style: inputPropsStyles }}
                        placeholder="A-ha - Take on Me"
                        InputLabelProps={{ style: inputLabelPropsStyles }}
                        inputRef={suggestionNameRef}
                    />

                    <TextField
                        label="Tempo da música (opcional)"
                        variant="outlined"
                        value={suggestionTime}
                        className='formInput'
                        onChange={(e) => handleTimeChange(e)}
                        inputProps={{ maxLength: 5, pattern: '^\\d{0,2}:\\d{0,2}$', style: inputPropsStyles }}
                        InputLabelProps={{ shrink: true, style: inputLabelPropsStyles }}
                    />
                    <Button variant="outlined" className="formSubmit" type="submit">Enviar Sugestão</Button>
                </StyledFormBox>
            </form>

        </div>
    )
}
