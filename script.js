// emails permitidos — apenas esses dois serão aceitos (igual ao seu original)
const ALLOWED_EMAILS = [
  'rosana@admin.com',
  'robertson@aluno.com'
];

// Navegação entre painéis
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const panel = btn.dataset.panel;
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    const target = document.getElementById(panel);
    if(target) target.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

// Elements
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const userNameEl = document.getElementById('userName');
const userEmailEl = document.getElementById('userEmail');
const userRoleEl = document.getElementById('userRole');
const userClassEl = document.getElementById('userClass');

// Login
loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  // validação: apenas emails permitidos
  if(!ALLOWED_EMAILS.includes(email)){
    loginMessage.style.color = '#7a1e1e';
    loginMessage.textContent = 'Email não autorizado.';
    return;
  }

  if(!password){
    loginMessage.style.color = '#7a1e1e';
    loginMessage.textContent = 'Informe a senha.';
    return;
  }

  // simulação de senha (apenas para demo)
  const ok = (email === 'rosana@admin.com' && password === 'admin123') ||
             (email === 'arthur@aluno.com' && password === 'aluno123');

  if(!ok){
    loginMessage.style.color = '#7a1e1e';
    loginMessage.textContent = 'Senha incorreta.';
    return;
  }

  // login bem-sucedido
  loginMessage.style.color = '#1a5f1a';
  loginMessage.textContent = 'Login realizado com sucesso!';

  // preencher perfil
  const displayName = email.split('@')[0].replace('.', ' ');
  const nameCapitalized = displayName.charAt(0).toUpperCase() + displayName.slice(1);
  userNameEl.textContent = nameCapitalized;
  userEmailEl.textContent = email;

  // atribuições de função/curso simples
  if(email.includes('admin')) {
    userRoleEl.textContent = 'Administrador';
    userClassEl.textContent = 'A1';
  } else {
    userRoleEl.textContent = 'Aluno';
    userClassEl.textContent = 'A1';
  }

  // vai para perfil
  const perfilBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='meuPerfil');
  if(perfilBtn) perfilBtn.click();
});

// Logout button
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
  logoutBtn.addEventListener('click', ()=>{
    // limpa campos
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    loginMessage.textContent = '';
    const loginBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='login');
    if(loginBtn) loginBtn.click();
  });
}

// Seleção dos elementos
const atividadesPendentes = document.querySelectorAll(".activity-card");
const listaConcluidas = document.getElementById("atividadesConcluidas");

// Função de concluir atividade
atividadesPendentes.forEach(card => {
  const botao = card.querySelector(".concluir-btn");

  botao.addEventListener("click", () => {
    // Adiciona classe de concluído
    card.classList.add("completed");

    // Remove o botão
    botao.remove();

    // Move para lista de concluídas
    listaConcluidas.appendChild(card);
  });
});
