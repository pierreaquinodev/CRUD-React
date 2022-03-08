import { useState } from 'react'

import Input from '../form/Input'
import Submit from '../form/Submit'

import styles from '../Project/ProjectForm.module.css'

export default function ServiceForm({ handleSubmit, btnText, projectData }){
    
    const [service, setService] = useState({})
    
    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name]: e.target.value})
    }
    
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholde='Insira o nome do serviço'
                handleOnChange={handleChange}        
            />
            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholde='Insira o valor total'
                handleOnChange={handleChange}        
            />
            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholde='Descreva o serviço'
                handleOnChange={handleChange}        
            />
            <Submit text={btnText}/>
        </form>
    )
}