const voosDisponiveis = [
    {
        id: '123',
        title: 'Volta ter, 19 de julho',
        details:[
            {
                id: '123',
                title:'Espaço para as pernas'
            },
            {
                id: '124',
                title:'Saida USB no Assento'
            },
            {
                id: '125',
                title:'Video sob Demanda'
            },
            {
                id: '126',
                title:'Estimativa das emissões de carbono'
            },
        ]
    },
    {
        id: '132',
        title: '13:00 - 15:00',
        details:[
            {
                id: '123',
                title:'Espaço para as pernas'
            },
            {
                id: '124',
                title:'Saida USB no Assento'
            },
            {
                id: '125',
                title:'Video sob Demanda'
            },
            {
                id: '126',
                title:'Estimativa das emissões de carbono'
            },
        ]
    }
]

function ItemVooDetails({details}){
    return(
        <ul>
            {details.map(detail=>(
                <li key={detail.id}>{detail.title}</li>
                        
    ))}
        </ul>
    )
}

function ItemVoo(title, children){
    return(
        <div className="voo">
            <header>
                <h3>{title}</h3>
            </header>

            <div className="voo=details">
                {children}
            </div>
        </div>
    )
}

function Voos(){
    return(
        <div className="voos">
            {voosDisponiveis.map(voo=>(
                <ItemVoo key={voo.id} title={voo.title}>
                    <ItemVooDetails details={voo.details}/>
                </ItemVoo>
            ))}
        </div>
    )
}

export default Voos;