import { useState } from 'react'

const modules = [
  {
    number: 1,
    level: 'Fundamentos',
    title: 'Base da Web',
    description: 'HTML semântico, acessibilidade, CSS moderno, responsividade e Git.',
    technologies: ['HTML5', 'CSS3', 'Git'],
  },
  {
    number: 2,
    level: 'Fundamentos',
    title: 'JavaScript Essencial',
    description: 'Lógica, funções, arrays, DOM, eventos e consumo de APIs.',
    technologies: ['JavaScript', 'DOM', 'APIs'],
  },
  {
    number: 3,
    level: 'Fundamentos',
    title: 'Frontend Moderno',
    description: 'Componentes, estado, hooks, rotas e interfaces com React.',
    technologies: ['React', 'Hooks', 'Vite'],
  },
  {
    number: 4,
    level: 'Avançado',
    title: 'Backend & APIs',
    description: 'Node.js, APIs REST, autenticação, validação e boas práticas.',
    technologies: ['Node.js', 'REST', 'JWT'],
  },
  {
    number: 5,
    level: 'Avançado',
    title: 'Dados & Arquitetura',
    description: 'SQL, modelagem de dados, ORMs, testes e design de sistemas.',
    technologies: ['PostgreSQL', 'Prisma', 'Testes'],
  },
  {
    number: 6,
    level: 'Avançado',
    title: 'Deploy Profissional',
    description: 'Docker, CI/CD, cloud, observabilidade e performance.',
    technologies: ['Docker', 'CI/CD', 'Cloud'],
  },
]

const faqs = [
  {
    question: 'Preciso saber programar para começar?',
    answer:
      'Não. A trilha começa pelos fundamentos e evolui passo a passo. Basta ter familiaridade com computadores e vontade de praticar.',
  },
  {
    question: 'Quanto tempo tenho acesso ao curso?',
    answer:
      'O acesso é por 12 meses, incluindo todas as atualizações publicadas durante esse período.',
  },
  {
    question: 'O curso tem certificado?',
    answer:
      'Sim. Ao concluir os módulos e o projeto final, você recebe um certificado digital de conclusão.',
  },
  {
    question: 'Vou construir projetos reais?',
    answer:
      'Sim. Cada etapa inclui desafios práticos e você encerra a formação com uma aplicação full-stack completa para o portfólio.',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function App() {
  const [activeLevel, setActiveLevel] = useState<'Fundamentos' | 'Avançado'>('Fundamentos')
  const [activeModule, setActiveModule] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const levelModules = modules.filter((module) => module.level === activeLevel)
  const selectedModule = modules[activeModule]

  function selectLevel(level: 'Fundamentos' | 'Avançado') {
    setActiveLevel(level)
    setActiveModule(level === 'Fundamentos' ? 0 : 3)
  }

  function moveModule(direction: -1 | 1) {
    const next = Math.min(modules.length - 1, Math.max(0, activeModule + direction))
    setActiveModule(next)
    setActiveLevel(next < 3 ? 'Fundamentos' : 'Avançado')
  }

  return (
    <>
      <header className="site-header">
        <a aria-label="StackUp início" className="brand" href="#inicio">
          <span className="brand-symbol">⌘</span>
          <span>StackUp</span>
        </a>
        <nav aria-label="Navegação principal" className="main-nav">
          <a href="#curso">O curso</a>
          <a href="#trilha">Trilha</a>
          <a href="#projeto">Projeto final</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a className="header-cta" href="#inscricao">Quero começar <Arrow /></a>
      </header>

      <main>
        <section className="hero hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="hero-badge"><span /> Turma 2025 • Inscrições abertas</p>
            <h1>Do primeiro<br /><em>código</em> ao deploy.</h1>
            <p className="hero-description">
              Uma formação full-stack prática e direta ao ponto. Domine frontend, backend e banco de dados construindo projetos que resolvem problemas reais.
            </p>
            <div className="hero-actions">
              <a className="button button-green" href="#trilha">Explorar a trilha <Arrow /></a>
              <a className="button button-quiet" href="#projeto"><span className="play-icon">▶</span> Conhecer o projeto</a>
            </div>
            <div className="hero-benefits">
              <span><i>✓</i> Projetos reais</span>
              <span><i>◷</i> Acesso por 12 meses</span>
              <span><i>✳</i> Certificado incluso</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-grid-pattern" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>projeto-final.tsx</small></div>
              <div className="code-lines" aria-label="Exemplo de código">
                <p><b>const</b> developer = {'{'}</p>
                <p className="code-indent">nome: <i>'Você'</i>,</p>
                <p className="code-indent">stack: [</p>
                <p className="code-indent code-more"><i>'React'</i>, <i>'Node.js'</i>,</p>
                <p className="code-indent code-more"><i>'PostgreSQL'</i></p>
                <p className="code-indent">],</p>
                <p className="code-indent">prontoParaOMercado: <b>true</b></p>
                <p>{'}'}</p>
                <p className="code-comment">// sua jornada começa aqui_</p>
              </div>
            </div>
            <div className="module-bubble"><span>✦</span><strong>6 módulos</strong><small>do zero ao avançado</small></div>
            <span className="hero-orbit orbit-one" /><span className="hero-orbit orbit-two" />
          </div>
        </section>

        <section aria-label="O que está incluso" className="stats-strip" id="curso">
          <div className="stat-item"><span className="stat-icon">▤</span><p><strong>160+</strong><span>aulas objetivas</span></p></div>
          <div className="stat-item"><span className="stat-icon">◈</span><p><strong>06</strong><span>projetos para portfólio</span></p></div>
          <div className="stat-item"><span className="stat-icon">◷</span><p><strong>12 meses</strong><span>de acesso e suporte</span></p></div>
        </section>

        <section className="curriculum-section" id="trilha">
          <div className="section-intro">
            <div><p className="section-kicker">SUA JORNADA</p><h2>Uma trilha que evolui<br />com você.</h2></div>
            <p>Fundamentos sólidos primeiro. Ferramentas e arquiteturas profissionais na sequência.</p>
          </div>
          <div className="level-tabs" role="tablist" aria-label="Níveis da trilha">
            {(['Fundamentos', 'Avançado'] as const).map((level) => (
              <button
                aria-selected={activeLevel === level}
                className={activeLevel === level ? 'level-tab active' : 'level-tab'}
                key={level}
                onClick={() => selectLevel(level)}
                role="tab"
                type="button"
              >
                {level === 'Avançado' ? 'Nível avançado' : level}
              </button>
            ))}
          </div>
          <div className="curriculum-layout">
            <div className="learning-map">
              <div className="map-heading"><div><strong>Mapa de aprendizagem</strong><p>Clique em um módulo para explorar</p></div><span className="active-tag"><i /> Trilha ativa</span></div>
              <div className="diagram-grid">
                <div className="map-start">
                  <span className="start-orbit">
                    <svg aria-hidden="true" className="start-symbol" fill="none" viewBox="0 0 32 32">
                      <path d="M11 5H6a1 1 0 0 0-1 1v5m16-6h5a1 1 0 0 1 1 1v5M5 21v5a1 1 0 0 0 1 1h5m16-6v5a1 1 0 0 1-1 1h-5M13 11l-4 5 4 5m6-10 4 5-4 5" />
                    </svg>
                    <i className="orbit-dot" />
                  </span>
                  <div><strong>Full-Stack</strong><small>ponto de partida</small></div>
                </div>
                <svg aria-hidden="true" className="map-paths" preserveAspectRatio="none" viewBox="0 0 1000 360">
                  {levelModules.map((module, index) => {
                    const paths = [
                      'M 180 180 C 300 180 320 84 500 84',
                      'M 180 180 H 500',
                      'M 180 180 C 300 180 320 276 500 276',
                    ]
                    return (
                      <path
                        className={activeModule === module.number - 1 ? 'connector-path active' : 'connector-path'}
                        d={paths[index]}
                        key={module.number}
                      />
                    )
                  })}
                </svg>
                <div className="module-nodes">
                  {levelModules.map((module) => {
                    const index = module.number - 1
                    return (
                      <button
                        aria-pressed={activeModule === index}
                        className={activeModule === index ? 'module-node selected' : 'module-node'}
                        key={module.number}
                        onClick={() => setActiveModule(index)}
                        type="button"
                      >
                        <span className="node-symbol">{module.number === activeModule + 1 ? '✳' : '◈'}</span>
                        <span className="node-copy"><small>Módulo {String(module.number).padStart(2, '0')}</small><strong>{module.title}</strong></span>
                        <Arrow diagonal />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
            <aside aria-live="polite" className="module-details">
              <div className="detail-topline"><span>{String(selectedModule.number).padStart(2, '0')} / 06</span><span>{selectedModule.level}</span></div>
              <div className="detail-content">
                <span className="detail-icon">✳</span>
                <h3>{selectedModule.title}</h3>
                <p>{selectedModule.description}</p>
                <strong className="tech-label">Tecnologias</strong>
                <div className="tech-list">{selectedModule.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
              <div className="detail-controls">
                <span>{activeModule % 3 + 1} de 3 nesta etapa</span>
                <div>
                  <button aria-label="Módulo anterior" disabled={activeModule === 0} onClick={() => moveModule(-1)} type="button">←</button>
                  <button aria-label="Próximo módulo" disabled={activeModule === modules.length - 1} onClick={() => moveModule(1)} type="button">→</button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="project-section" id="projeto">
          <div className="project-layout section-wrap">
            <div className="project-copy">
              <p className="section-kicker">PROJETO FINAL</p>
              <h2>Construa um produto completo, de ponta a ponta.</h2>
              <p>Você vai planejar, desenvolver e publicar uma plataforma SaaS completa, com autenticação, pagamentos, dashboard e API própria.</p>
              <ul className="project-features">
                <li><span>✓</span> Interface responsiva</li>
                <li><span>✓</span> API documentada</li>
                <li><span>✓</span> Banco de dados real</li>
                <li><span>✓</span> Deploy em produção</li>
              </ul>
            </div>
            <div className="flowboard">
              <div className="flowboard-top"><span className="flowboard-logo">◈</span><strong>Flowboard</strong><button aria-label="Mais opções" type="button">···</button></div>
              <div className="flowboard-summary">
                <div><span>Projetos</span><strong>8</strong><i className="summary-icon summary-purple">◈</i></div>
                <div><span>Tarefas</span><strong>24</strong><i className="summary-icon summary-orange">▤</i></div>
                <div><span>Progresso</span><strong>78%</strong><i className="progress-ring">78</i></div>
              </div>
              <div className="activity-heading"><strong>Atividade</strong><span>Últimos 7 dias <b>⌄</b></span></div>
              <div className="activity-chart" aria-label="Atividade nos últimos sete dias">
                {[34, 52, 40, 73, 56, 90, 66, 48, 80, 57, 96, 68, 42, 75, 58, 88, 52, 70, 43, 82, 62, 94, 58, 76, 48, 68, 86, 54].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="chart-labels"><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span><span>DOM</span></div>
              <div className="portfolio-note"><span>✓</span><div><strong>Pronto para o portfólio</strong><small>Código publicado no GitHub</small></div><Arrow diagonal /></div>
            </div>
          </div>
        </section>

        <section className="how-section">
          <div className="how-heading"><p className="section-kicker">COMO FUNCIONA</p><h2>Aprenda fazendo.<br /><span>Evolua com método.</span></h2></div>
          <div className="how-grid section-wrap">
            <article className="how-card"><span className="how-number">01</span><span className="how-icon">◉</span><h3>Assista</h3><p>Aulas curtas, objetivas e focadas no que você realmente precisa saber.</p></article>
            <article className="how-card"><span className="how-number">02</span><span className="how-icon">⌘</span><h3>Pratique</h3><p>Exercícios guiados para transformar cada conceito em habilidade.</p></article>
            <article className="how-card"><span className="how-number">03</span><span className="how-icon">↗</span><h3>Construa</h3><p>Projetos completos para consolidar o aprendizado e mostrar seu trabalho.</p></article>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-layout section-wrap">
            <div className="faq-intro"><p className="section-kicker">FAQ</p><h2>Ficou com alguma dúvida?</h2><p>Tudo o que você precisa saber antes de começar sua jornada.</p></div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <article className={`faq-item${openFaq === index ? ' open' : ''}`} key={faq.question}>
                  <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} type="button">
                    <span>{faq.question}</span><b>{openFaq === index ? '−' : '+'}</b>
                  </button>
                  {openFaq === index && <p>{faq.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section cta-pattern" id="inscricao">
          <p className="section-kicker">SEU PRÓXIMO CAPÍTULO COMEÇA AGORA</p>
          <h2>Pronto para se tornar<br />full-stack?</h2>
          <p>Entre para a próxima turma e comece hoje a construir o seu futuro em tecnologia.</p>
          <a className="button button-lime" href="mailto:contato@stackup.dev?subject=Quero entrar na próxima turma">Garantir minha vaga <Arrow /></a>
          <small>7 dias de garantia <i /> Pagamento seguro <i /> Certificado incluso</small>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a aria-label="StackUp" className="brand" href="#inicio"><span className="brand-symbol">⌘</span><span>StackUp</span></a>
          <p>© 2025 StackUp. Feito para quem quer ir além.</p>
          <nav aria-label="Links legais"><a href="#curso">Termos</a><a href="#curso">Privacidade</a></nav>
        </div>
      </footer>
    </>
  )
}

export default App
