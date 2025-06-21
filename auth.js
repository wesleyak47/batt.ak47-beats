    // Cadastro
document.getElementById("cadastroForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const usuario = document.getElementById("novoUsuario").value;
  const senha = document.getElementById("novaSenha").value;

  if (usuario && senha) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  }
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const userSalvo = localStorage.getItem("usuario");
  const senhaSalva = localStorage.getItem("senha");

  if (usuario === userSalvo && senha === senhaSalva) {
    localStorage.setItem("logado", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha inválidos,tenta novamente.");
  }
}); 