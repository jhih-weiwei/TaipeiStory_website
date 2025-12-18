const tarotCards = [
  {
    title: "醉月湖",
    poem: "為愛殉情強說美，<br>醉倒月翁皺上眉。",
    link: "detail-moonlake.html"
  },
  {
    title: "辛亥隧道",
    poem: "莫怪車窗生幻影，<br>陰陽交界在眉前。",
    link: "detail-xinhai.html"
  },
  {
    title: "馬場町",
    poem: "昔日灘頭染血沙，<br>冤魂幾許不歸家。",
    link: "detail-Machangting.html"
  }
  // ……一直加到至少 12 張
];


function drawCard() {
  const btn = document.getElementById("drawBtn");
  const card = document.getElementById("card");

  const titleEl = document.getElementById("cardTitle");
  const poemEl = document.getElementById("cardPoem");
  const detailBtn = document.getElementById("detailBtn");

  btn.innerText = "抽牌中⋯⋯";
  btn.disabled = true;

  setTimeout(() => {
    // 隨機抽一張
    const pick = tarotCards[Math.floor(Math.random() * tarotCards.length)];

    // 填入內容
    titleEl.innerText = pick.title;
    poemEl.innerHTML = pick.poem;
    detailBtn.onclick = () => {
      window.location.href = pick.link;
    };

    btn.style.display = "none";
    card.classList.remove("hidden");
  }, 900);
}


function goDetail() {
  window.location.href = "detail.html";
}
