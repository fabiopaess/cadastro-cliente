import './styles.css'

function App() {
  return (
   <div className="container">
    <div className="container-login">
      <div className="wrap-login">

        <form className="login-form">
          <span className="login-form-title">Cadastro de Cliente</span>

          <div className="wrap-input">
          <input className='input' type="tel" id="fone" name="fone" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="11 99999-9999"></input>
          <span className="focus-input" data-placeholder="Telefone"></span>
          </div>

          <div className="wrap-input">
          <input className='input' type="email"></input>
          <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
          <input className='input' type="text"></input>
          <span className="focus-input" data-placeholder="Empresa"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Cancelar</button>
            <button className="login-form-btn2">Salvar</button>
          </div>

           <span className="login-form-title">Cadastro de Usuário</span>

          <div className="wrap-input">
          <input className='input' type="tel" id="fone" name="fone" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="11 99999-9999"></input>
          <span className="focus-input" data-placeholder="Telefone"></span>
          </div>

          <div className="wrap-input">
          <input className='input' type="email"></input>
          <span className="focus-input"
           data-placeholder="Email">
           </span>
          </div>

          <div className="wrap-input">
          <input className='input' type="text"></input>
          <span className="focus-input"
           data-placeholder="Empresa">
          </span>
          </div>

          <div className="wrap-input-2">
          <input className='input-2' type=""></input>
          <span className="focus-input"
           data-placeholder="Cargo">
          </span>
          <input className='input-2' type=""></input>
          <span className="focus-input">
          </span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Cancelar</button>
            <button className="login-form-btn2">Salvar</button>
          </div>
          
          
          
        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
