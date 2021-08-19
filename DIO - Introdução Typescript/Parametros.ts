interface IUsuario{
    id: string,
    email: string
    cargo?: 'Admin' | 'Coordenador' | 'surpervisor'
}


function redirecionar(usuario: IUsuario){
    if(usuario.cargo){
        console.log('Tem cargo!')
    }
}