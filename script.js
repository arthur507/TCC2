// emails permitidos — apenas esses dois serão aceitos (igual ao seu original)
const ALLOWED_EMAILS = [
  'rosana@admin.com',
  'robertson@aluno.com',
  'arthur@aluno.com'
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
const userCpf = document.getElementById('userCpf');
const userMat = document.getElementById('userMat');

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
             (email === 'arthur@aluno.com' && password === 'aluno123') ||
             (email === 'robertson@aluno.com' && password === 'aluno123');

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
    userClassEl.textContent = 'Sala 07';
    userCpf.textContent = '022.876.543-21';
    userMat.textContent = '';
  } else {
    userRoleEl.textContent = 'Aluno';
    userClassEl.textContent = 'A1';
    userCpf.textContent = '123.456.789.-10';
    userMat.textContent = '022.876.543-21';
  }

  // vai para perfil
  const perfilBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='meuPerfil');
  if(perfilBtn) perfilBtn.click();
});



// Seleção dos elementos
const atividadesPendentes = document.querySelectorAll(".activity-card");
const listaConcluidas = document.getElementById("atividadesConcluidas");

// Função de concluir atividade
atividadesPendentes.forEach(card => {
  const botao = card.querySelector(".concluir-btn");
  if(!botao) return;

  botao.addEventListener("click", () => {
    // Adiciona classe de concluído
    card.classList.add("completed");

    // Remove o botão
    botao.remove();

    // Move para lista de concluídas
    listaConcluidas.appendChild(card);
  });
});

// --- MATERIAIS (dados e render) ---
const materials = [
  {
    id: 'historia',
    title: 'História',
    teacher: 'Prof. Manoel',
    description: 'A disciplina aborda os principais acontecimentos que moldaram o mundo moderno — Idade Média, Era Moderna, Revoluções e história do Brasil. O material de apoio inclui linhas do tempo, mapas históricos e resumos de temas essenciais.',
    resources: [
      {type: 'PDF', label: 'Linha do tempo: Revoluções', url: '#'},
      {type: 'Resumo', label: 'Revolução Francesa - 1 página', url: '#'}
    ]
  },
  {
    id: 'geografia',
    title: 'Geografia',
    teacher: 'Prof. Juliano',
    description: 'Estudo dos elementos físicos e humanos do espaço: clima, relevo, vegetação e dinâmica populacional. Materiais: mapas, estudos de caso regionais e exercícios práticos.',
    resources: [
      {type: 'Mapa', label: 'Mapas das Regiões do Brasil', url: '#'},
      {type: 'Exercício', label: 'Questões sobre clima e vegetação', url: '#'}
    ]
  },
  {
    id: 'matematica',
    title: 'Matemática',
    teacher: 'Profa. Franciele',
    description: 'Foco em álgebra e geometria analítica. O material contém coleções de exercícios resolvidos, dicas de resolução e leituras rápidas sobre estratégias de prova.',
    resources: [
      {type: 'Exercícios', label: 'Equações e Inequações - resolvidas', url: '#'},
      {type: 'Guia', label: 'Técnicas de resolução rápida', url: '#'}
    ]
  },
  {
    id: 'biologia',
    title: 'Biologia',
    teacher: 'Prof. Massao',
    description: 'Conteúdos sobre ecologia, citologia e genética. Material de revisão com esquemas, questões comentadas e atividades laboratoriais simples.',
    resources: [
      {type: 'Slides', label: 'Citologia - esquema prático', url: '#'},
      {type: 'Atividade', label: 'Experimento: observando células', url: '#'}
    ]
  },
  {
    id: 'quimica',
    title: 'Química',
    teacher: 'Prof. Robert',
    description: 'Introdução à química geral, ligações químicas e estequiometria. O material inclui tabelas, exercícios com gabarito e vídeos explicativos simples.',
    resources: [
      {type: 'Tabela', label: 'Tabela periódica comentada', url: '#'},
      {type: 'Exercícios', label: 'Estequiometria - gabarito', url: '#'}
    ]
  },
  {
    id: 'fisica',
    title: 'Física',
    teacher: 'Prof. Israel',
    description: 'Mecânica básica e fundamentais de termodinâmica. Resumos com fórmulas essenciais, problemas resolvidos passo a passo e simuladores recomendados.',
    resources: [
      {type: 'Resumo', label: 'Leis de Newton - resumo', url: '#'},
      {type: 'Problemas', label: 'Exercícios de cinemática', url: '#'}
    ]
  },
  {
    id: 'ingles',
    title: 'Inglês',
    teacher: 'Prof. Thiago',
    description: 'Foco em conversação e compreensão de texto. Material com listas de vocabulário, exercícios de listening e pequenas leituras comentadas.',
    resources: [
      {type: 'Áudio', label: 'Listening: rotina diária', url: '#'},
      {type: 'Lista', label: 'Phrasal verbs essenciais', url: '#'}
    ]
  },
  {
    id: 'educacao-fisica',
    title: 'Educação Física',
    teacher: 'Prof. Sérgio',
    description: 'Orientações para treinos, saúde e jogos coletivos. Materiais práticos para atividades em aula e recomendações de segurança.',
    resources: [
      {type: 'Ficha', label: 'Treino: resistência aeróbica', url: '#'},
      {type: 'Guia', label: 'Aquecimento e alongamento', url: '#'}
    ]
  },
  {
    id: 'portugues',
    title: 'Português',
    teacher: 'Prof. Tarik',
    description: 'Ortografia, morfologia e redação dissertativa-argumentativa. Textos de apoio, modelos de redação e exercícios comentados.',
    resources: [
      {type: 'Modelo', label: 'Modelo de redação - estrutura', url: '#'},
      {type: 'Exercícios', label: 'Interpretação de texto', url: '#'}
    ]
  }
];

function renderMaterials(){
  const grid = document.getElementById('materialsGrid');
  grid.innerHTML = '';
  materials.forEach(m => {
    const card = document.createElement('div');
    card.className = 'material-card';

    const title = document.createElement('h4');
    title.textContent = m.title + ' • ' + m.teacher;

    const desc = document.createElement('p');
    desc.className = 'material-meta';
    desc.textContent = m.description;

    const resList = document.createElement('div');
    resList.className = 'material-resources';
    m.resources.forEach(r => {
      const a = document.createElement('a');
      a.href = r.url;
      a.textContent = `\u2022 [${r.type}] ${r.label}`;
      a.style.display = 'block';
      a.style.marginTop = '6px';
      a.className = 'link-res';
      resList.appendChild(a);
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(resList);

    grid.appendChild(card);
  });
}

// Botões de ir/ver matérias
const btnVerMaterias = document.getElementById('btnVerMaterias');
if(btnVerMaterias){
  btnVerMaterias.addEventListener('click', ()=>{
    const btn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='materiasTodos');
    if(btn) btn.click();
    renderMaterials();
  });
}

const btnVoltar = document.getElementById('btnVoltarMaterias');
if(btnVoltar){
  btnVoltar.addEventListener('click', ()=>{
    const btn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='materias');
    if(btn) btn.click();
  });
}

// Ao abrir a aba Coordenação (exemplo de carregamento dinâmico se necessário)
const coordBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b=>b.dataset.panel==='coordenacao');
if(coordBtn){
  coordBtn.addEventListener('click', ()=>{
    // poderia buscar avisos de um servidor — aqui apenas placeholder já presente no HTML
  });
}


