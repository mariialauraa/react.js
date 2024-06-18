const RenderCondicional = ({ user }) => {
    return (
        <div>
            {/* usar expressão lógica */}
            {/* se houver usuário, exiba uma msg de boas vindas */}
            {user && <h1>Bem vindo de volta, {user}!</h1>}
        </div>
  )
}

export default RenderCondicional