import { obtenerUsuarios } from "./http-provider";


const body  = document.body;
let tBody;
let correlativo = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tBody = document.querySelector('tbody');

}

const crearFilaUsuario = ( usuario ) => {

    const html = `
        <td scope="col"> ${++correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild(tr);

}


export const init = async() => {

    correlativo = 0;

    crearHtml();

    const usuarios = await obtenerUsuarios();

    for (const usuario of usuarios) {
        console.log(usuario);
        crearFilaUsuario(usuario);
    }
    
}

