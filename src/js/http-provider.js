const urlUsers = 'https://reqres.in/api/users?page=2';

export const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsers);

    const {data:usuarios} = await resp.json();

    return usuarios
    
}