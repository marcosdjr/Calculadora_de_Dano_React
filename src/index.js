import React from 'react';
import ReactDOM from 'react-dom';
import arco from './images/arco.png';
import espada from './images/espada.png';
import feiticeira from './images/feiticeira.png';
import goblin from './images/goblin.png';
import orc from './images/orc.png';
import soco from './images/soco.png';
import "./index.css"


class Personagem extends React.Component {
    render() {

        let classeCss = 'personagem_selecionado';

        if (this.props.Selecionado) {
            classeCss = 'personagem_selecionado selecao_perso';
        }
        return (
            <div className={classeCss} id={this.props.nome} onClick={() => this.props.clicar(this.props.nome)}>
                <img src={this.props.image} width="150px" />
                <p>{this.props.nome}</p>
            </div>
        )
    }
}

class Arma extends React.Component {
    render() {
        let classeCss2 = 'arma_selecionado';
        if (this.props.Selecionado) {
            classeCss2 = 'arma_selecionado selecao_arma2';
        }
        return (
            <div className={classeCss2} id={this.props.nome} onClick={() => this.props.clicar(this.props.nome)}>
                <img src={this.props.image} width="100px" />
                <p>{this.props.nome}</p>
            </div>
        )
    }
}



class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    clicarPersonagem(personagem) {
        this.setState({
            personagemSelecionado: personagem,
            resposta: ''
        })
    }
    clicarArma(arma) {
        this.setState({
            armaSelecionada: arma,
            resposta: ''
        })
    }

    calcularDano() {
        let personagem = this.state.personagemSelecionado;
        let arma = this.state.armaSelecionada;
        let resposta = '';
        if (personagem && arma) {
            let vida = 0;
            let dano = 0;
            if (personagem === 'Goblin') {
                vida = 30;
            }
            else if (personagem === 'Orc') {
                vida = 20;
            }
            else {
                vida = 10;
            }
            if (arma === 'Soco') {
                
                dano = 10;
            }
            else if (arma === 'Arco') {
                if (vida === 10){
                    vida = 30
                }
                dano = 20;
            }
            else {
                
                dano = 30;
            }
            let resultado = vida - dano;

            
            if (resultado > 0) {
                resposta = 'Você não derrotou o personagem.'
            }
            else {
                resposta = 'Você derrotou o personagem, parabéns!'
            }
            
        } else {
            resposta = "Selecione um personagem e uma arma."
        }
        this.setState({
            resposta: resposta
        })

    }



    render() {
        console.log(this.state);
        return (
            
            <div className="borda_tela">

                <div className="calc_inicio">
                    <h1 id="calc_dano"> Calculadora de Dano</h1>
                </div>

                <div id="div_sel_pers" className="selecao">
                    <h2 id="sel_pers"> Selecione um personagem</h2>
                </div>


                <div id="div_personagem" className="selecao_pers">

                    <Personagem nome="Orc" image={orc} clicar={(personagem) => this.clicarPersonagem(personagem)}
                        Selecionado={this.state.personagemSelecionado === "Orc"} />

                    <Personagem nome="Goblin" image={goblin} clicar={(personagem) => this.clicarPersonagem(personagem)}
                        Selecionado={this.state.personagemSelecionado === "Goblin"} />

                    <Personagem nome="Feiticeira" image={feiticeira} clicar={(personagem) => this.clicarPersonagem(personagem)}
                        Selecionado={this.state.personagemSelecionado === "Feiticeira"} />

                </div>

                <div id="div_sel_arma" className="selecao">
                    <h2 id="sel_pers"> Selecione uma arma</h2>

                </div>

                <div id="div_arma" className="selecao_arma">

                    <Arma nome="Soco" image={soco} clicar={(arma) => this.clicarArma(arma)}
                        Selecionado={this.state.armaSelecionada === "Soco"} />
                    <Arma nome="Arco" image={arco} clicar={(arma) => this.clicarArma(arma)}
                        Selecionado={this.state.armaSelecionada === "Arco"} />
                    <Arma nome="Espada" image={espada} clicar={(arma) => this.clicarArma(arma)}
                        Selecionado={this.state.armaSelecionada === "Espada"} />

                </div>

                <div id="div_botao" className="selecao">
                    <h2> {this.state.resposta}</h2>
                    <button id="botao_dano" className="button_dano" onClick={() => this.calcularDano()}> Calcular Dano </button>

                </div>



            </div>

        )
    }





}


ReactDOM.render(
    
    <Calculadora />,

    document.getElementById('root')
);


