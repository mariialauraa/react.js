const LoginButton = ({ loggedIn }) => {
    // exibir btn de Entrar -> deslogado
    // exibir btn de Sair -> logado
  return (
    <div>
        {loggedIn ? <button>Sair</button> : <button>Entrar</button>}
    </div>
  )
}

export default LoginButton