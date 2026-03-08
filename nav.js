// nav.js — navbar compartilhada para GitHub Pages
// Coloca <div id="navbar"></div> + <script src="nav.js"></script> em cada página

(function () {
  const pages = [
    { href: "index.html",        label: "Hábitos",   icon: "✅" },
    { href: "meus_treinos.html", label: "Treinos",   icon: "💪" },
    { href: "calculadora.html",  label: "IMC",       icon: "⚖️" },
  ];

  // descobre qual página está ativa
  const current = window.location.pathname.split("/").pop() || "index.html";

  const links = pages.map(p => {
    const active = current === p.href ? 'class="active"' : '';
    return `<a href="${p.href}" ${active}><span class="nav-icon">${p.icon}</span><span class="nav-label">${p.label}</span></a>`;
  }).join("");

  const html = `
<nav id="main-nav">
  <div class="nav-brand">
    <span>⚡</span> CORPO GREGO
  </div>
  <div class="nav-links">${links}</div>
</nav>
<style>
  #main-nav {
    position: sticky;
    top: 0;
    z-index: 999;
    background: #10101c;
    border-bottom: 1px solid #22223a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    height: 56px;
    font-family: 'Plus Jakarta Sans', 'Syne', sans-serif;
  }

  .nav-brand {
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    letter-spacing: 3px;
    color: #e8ff47;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    white-space: nowrap;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .nav-links a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #5a5a7a;
    text-decoration: none;
    transition: all 0.18s;
    white-space: nowrap;
    letter-spacing: 0.3px;
  }

  .nav-links a:hover {
    color: #f0f0f8;
    background: #1a1a2e;
  }

  .nav-links a.active {
    color: #e8ff47;
    background: rgba(232, 255, 71, 0.08);
  }

  .nav-icon { font-size: 16px; }

  @media (max-width: 480px) {
    #main-nav { padding: 0 16px; }
    .nav-brand span:last-child { display: none; }
    .nav-label { display: none; }
    .nav-links a { padding: 8px 10px; }
    .nav-icon { font-size: 20px; }
  }
</style>`;

  // injeta no div#navbar se existir, senão no topo do body
  const target = document.getElementById("navbar");
  if (target) {
    target.innerHTML = html;
  } else {
    document.body.insertAdjacentHTML("afterbegin", html);
  }
})();