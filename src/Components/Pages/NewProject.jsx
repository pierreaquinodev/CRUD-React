import styles from './NewProject.module.css';
import ProjectForm from '../Project/ProjectForm';
import { useNavigate } from 'react-router-dom';


export default function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projects', { state: { message: 'Projeto criado com sucesso'}})
        })
        .catch((err) => console.log(err))
    }    

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}