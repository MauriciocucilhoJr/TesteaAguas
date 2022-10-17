import "./Header.css"

export function Header(){
    return(
        <header className="container">
            <div className="linha1">
                <div className="acessibilidade">
                    <button></button>
                    <button>A+</button>
                    <button>a-</button>
                    <button>Acessibilidade</button>
            
                </div>
                <div className="botaolinha1">
                    <button>Ir para o conteúdo</button>
                    <button>Ir para o menu</button>
                    <button>Ir para busca</button>
                    <button>Ir para o rodapé</button>
                </div>
            </div>
            <div className="linha2">
                <img src="brasao.jpg" className="brasaoimg"/>
                <h3>Prefeitura Municipal <h2>de Águas da Prata</h2></h3>
                <div>
                    <div className="barradebusca">
                        <input/>
                        <div></div>
                    </div>
                
                </div>
                
            </div>
            <navbar className="navbar">
                <h3>Sobre a cidade</h3>
                <h3>Secretarias</h3>
                <h3>Turismo</h3>
                <h3>Noticías</h3>
                <h3>Diário Oficial</h3>
                <h3>Plano Diretor</h3>
                <h3>Decretos e Portarias</h3>
                <h3>Editais</h3>
                <h3>Contato</h3>
            </navbar>
        </header>
    )
}