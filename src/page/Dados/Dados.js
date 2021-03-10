import React from 'react';
import './Dados.css';
import {Link} from 'react-router-dom';

function Dados(){
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
                            <Link to="/"><li><a>Localização</a></li></Link>
                        </ul>
                    </nav>


                </div>
            </header>
         
            <section>
                <div className="Perfil">
                    <h4>Foto de perfil</h4>
                    <p>Adicione uma foto em seu perfil</p>
                </div> 

                <form className="contato">
                    <div className="fotoperfil">
                        <img src="icons/perfil.png"></img>
                        <div className="clear"></div>
                    </div>
                    <div className="button2Container">
                        <button type="submit" className="Button2">
                            Carregar foto
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <div className="Perfil">
                    <h4>Email</h4>
                    <p>Você pode alterar seu email</p>
                </div> 

                <form className="contato">
                    <div className="fotoperfil">
                        <div className="formwraper2">
                        <label>Email<strong>*</strong></label>
                        <input placeholder="email@exemplo.com" type="text" name="email" required>
                        </input>
                    </div>
                    </div>
                    <div className="button2Container2">
                        <button type="submit" className="Button3">
                            Atualizar email
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <div className="introducao">
                    <h4>Instruções</h4>
                    <p>Preencha seus dados de perfil. Sempre mantenha seu telefone atualizado.</p>
                </div> 

                <form className="contato">
                    <div className="fotoperfil">
                        <div className="intro">
                            <label>Nome<strong>*</strong></label>
                            <input placeholder="Digite seu nome" type="text" name="nome" required>
                            </input>
                        </div>

                        <div className="intro">
                            <label>Sobrenome<strong>*</strong></label>
                            <input placeholder="Digite seu sobrenome" type="text" name="sobrenome" required>
                            </input>
                        </div>

                        <div className="intro">
                            <label>Telefone<strong>*</strong></label>
                            <input placeholder="(00) 00000-0000" type="text" name="telefone" required>
                            </input>
                        </div>
                    </div>
                </form>
            </section>

            <section>
                <div className="introducao">
                    <h4>Links Pessoais</h4>
                    <p>Compartilhe seu perfil de outras plataformas aqui.</p>
                </div> 

                <form className="contato">
                    <div className="fotoperfil">
                        <div className="intro">
                            <label>Github<strong>*</strong></label>
                            <input placeholder="https://github.com/asdsdfgh" type="text" name="github" required>
                            </input>
                        </div>

                        <div className="intro">
                            <label>Behance<strong>*</strong></label>
                            <input placeholder="https://www.behance.net/asdsdfgh" type="text" name="behance" required>
                            </input>
                        </div>

                        <div className="intro">
                            <label>Linkedin<strong>*</strong></label>
                            <input placeholder="https:www.linkedin.com/in/asdsdfgh" type="text" name="linkedin" required>
                            </input>
                        </div>
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


export default Dados;