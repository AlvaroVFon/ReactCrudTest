export const EditForm = ({ user }) => {
  return (
    <form action="">
      <label htmlFor="name">Nombre:</label>
      <input type="text" name='name' value={user.name} />
      <label htmlFor="lastName">Apellido: </label>
      <input type="text" name='lastName' value={user.lastName} />
      <label htmlFor="">Edad</label>
      <input type="text" name='age' value={user.age} />
      <div className="flex w-full justify-evenly mt-4">
        <button type='submit' className={`btn px-2 py-2 bg-green-400 hover:bg-green-500 text-white rounded-md font-semibold`}>Guardar</button>
        <button type="reset" className={`btn px-2 py-2 bg-red-300 hover:bg-red-400 rounded-md font-semibold text-white`}>Cancelar</button>
      </div>
    </form>
  )

}