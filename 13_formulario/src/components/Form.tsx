import { useForms } from "../hooks/userForms"
import { FormSchema } from "../schemas/formSchema"

const Form = () => {
  const { register, handleSubmit, errors } = useForms()

  const onSubmit = (data: FormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border-slate-300">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome: </label>
        <input 
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="text" 
          id="name" 
          placeholder="Digite seu nome" 
          {...register("name")} 
        />
        {errors.name && (<small className="text-red-500 italic">{errors.name.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">Sobrenome: </label>
        <input 
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="text" 
          id="lastname" 
          placeholder="Digite seu sobrenome" 
          {...register("lastname")} 
        />
        {errors.lastname && (<small className="text-red-500 italic">{errors.lastname.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="gender">Gênero: </label>
        <select 
          id="gender" 
          {...register("gender")} 
          className="h-10 pl-1 rounded-md border border-slate-300"
          >
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        {errors.gender && (<small className="text-red-500 italic">{errors.gender.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">E-mail: </label>
        <input 
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="email" 
          id="email" 
          placeholder="Digite seu email" 
          {...register("email")} 
        />
        {errors.email && (<small className="text-red-500 italic">{errors.email.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password">Senha: </label>
        <input 
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="password" 
          id="password" 
          placeholder="Digite sua senha" 
          {...register("password")} 
        />
        {errors.password && (<small className="text-red-500 italic">{errors.password.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmpassword">Confirmação de senha: </label>
        <input 
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="password" 
          id="confirmpassword" 
          placeholder="Confirme a sua senha" 
          {...register("confirmpassword")} 
        />
        {errors.confirmpassword && (<small className="text-red-500 italic">{errors.confirmpassword.message}</small>)}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex gap-2">
        <input 
          type="checkbox" 
          id="agree" 
          placeholder="Confirme a sua senha" 
          {...register("agree")} 
        />
        <label htmlFor="agree">Confirmação de senha</label>
        </div>
        {errors.agree && (<small className="text-red-500 italic">{errors.agree.message}</small>)}
      </div>
      <button type="submit" className="w-full h-11 bg-cyan-400 font-bold text-white rounded-md my-2 hover:bg-cyan-500 transition-all">
        Cadastrar
      </button>
    </form>
  )
}

export default Form