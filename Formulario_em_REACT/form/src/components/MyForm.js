import './MyForm.css'
import {useState} from 'react'
const MyForm = (user) => {
    // 6 - controlled inputs
    // 3- gerenciamento de dados
    const [name , setName] = useState(user ? user.name : "");
    const [email , setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    console.log(name)
    console.log(email)
    

    const [bio, setBio] = useState ("")




    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando formulario")
        console.log(name)
        console.log(email)
        console.log(bio)

    // limpando o form apos o submit
    setName("")
    setEmail("")
    setBio ("")
    };


  return (
    <div>
    {/* 5 - envio de form */}
    {/*  1 - criacao de form */}
    <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="name"> Nome: </label>
            <input type="text" name="name" placeholder="Digite seu nome"
            onChange={handleName} value={name}
             />
        </div>

        {/* 2 - label envolvendo input */}

        <label > 
            <span>E-mail</span>
            <input type="email" name="e-mail" placeholder="Digite seu e-mail" 
            onChange={handleEmail} value={email}
            />
        </label>

        {/* 8- textarea */}
        
        <label >
            <span>Bio: </span>
        <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)}  value={bio}>

        </textarea>
        </label>

        <input type="submit" value="Enviar" />
    </form>


    </div>
  )
}

export default MyForm