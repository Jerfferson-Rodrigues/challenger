import React from 'react';
import './Localizacao.css';
import {Link} from 'react-router-dom';

function Localizacao(){
    return (
        <div className="container">
            <header className="containerNavBar">

                <div className="topo">
                    <a className="title"><span>EXPLORAR</span></a> 
                    <a className="title"><span>INSCRIÇÕES</span></a> 
                </div>
                <div className="clear"></div>
                
                <div className="icon">
                    <a className="sino"><img src="icons/sino.png"></img></a>
                    <nav className="mobilemenu" >
                            <img src="icons/perfil.png"></img>
                        <ul>
                            <Link to="/Dados"><li><a>Dados básicos</a></li></Link>
                        </ul>
                    </nav>


                </div>
            </header>
        
            <div className="TitleContainer">
                <span>LOCALIZAÇÃO</span>
            </div>
            
            <section>
                <div className="introContainer">
                    <h4>Instruções</h4>
                    <p>Preencha seus dados de Localização. Sempre os mantenha atualizado.</p>
                </div> 

                <form className="contato">
                    <div className="formwraper">
                        <label>CEP<strong>*</strong></label>
                        <input placeholder="1234-5678" type="text" name="cep" required></input>
                    </div>

                    <div className="formwraper">
                        <label>Cidade<strong>*</strong></label>
                        <input placeholder="Insira o nome de sua cidade atual" type="text" name="cidade" required></input>
                    </div>

                    <div className="formwraper">
                        <label>Estado<strong>*</strong></label>
                        <input placeholder="Selecione um Estado" type="text" name="estado" required>
                        </input>
                    </div>

                    <div className="formwraper">
                        <label>Bairro<strong>*</strong></label>
                        <input placeholder="Insira o nome de seu bairro" type="text" name="bairro" required></input>
                    </div>
                            
                    <div className="formwraper">
                        <label>Endereço<strong>*</strong></label>
                        <input placeholder="Insira seu endereço" type="text" name="endereco" required></input>
                    </div>

                    <div className="formwraper">
                        <label>Número<strong>*</strong></label>
                        <input placeholder="Insira o número de sua residência" type="text" name="numero" required></input>
                    </div>

                    <div className="formwraper">
                        <label>Complemento</label>
                        <input placeholder="Insira um complemeto se achar necessário" type="text" name="complemento" required></input>
                    </div>
                </form>
            </section>

            <div className="buttonContainer">
                <button type="submit" className="Button">
                    Enviar
                </button>
            </div>
        </div>
    );
};


export default Localizacao;