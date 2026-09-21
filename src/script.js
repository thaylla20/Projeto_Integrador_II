function entrar() {
    document.querySelector("main").innerHTML = `
        <h2>🔐 Entrar</h2>

        <p>Entre na sua conta do ConectaMente.</p>

        <input type="email" id="email" placeholder="Seu e-mail">

        <input type="password" id="senha" placeholder="Sua senha">

        <button onclick="fazerLogin()">Entrar</button>

        <button onclick="voltarInicio()">Voltar</button>
    `;
}

function criarConta() {
    alert("A tela de cadastro será criada em breve!");
}

function fazerLogin() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha seu e-mail e sua senha.");
    } else {
        alert("Login realizado! 🧠");
    }
}

function voltarInicio() {
    location.reload();
}
