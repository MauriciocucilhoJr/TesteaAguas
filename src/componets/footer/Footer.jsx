import "./Footer.css"

export function Footer() {
    return (
        <div className="teste" >
            <div className="footer">
                <img src="brasao.jpg" className="brasaofooter" />
                <h3>Prefeitura Municipal <h2>de Águas da Prata</h2></h3>
                <div className="botoesfooter">
                    <button>Secretarias</button>
                    <button>Administração</button>
                    <button>Fazenda e Orçamento</button>
                    <button>Desenvolvimento Social</button>
                    <button>Cidadania e Segurança</button>
                </div>
                <div>
                    <div className="botoesfooter">
                        <button>Desenvolvimento Econômico</button>
                        <button>Trabalho e Meio Ambiente</button>
                        <button>Desenvovimento Urbano</button>
                    </div>
                </div>
                <div >
                    <div className="Webnets">Desenvovido por<div />
                        <div className="web">Webnets</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
