const tarotCards = [
  {
    title: "醉月湖",
    poem: "為愛殉情強說美，<br>醉倒月翁皺上眉。",
    omen: "吉凶｜平　宜好好愛自己",
    link: "detail-moonlake.html"
  },
  {
    title: "辛亥隧道",
    poem: "莫怪車窗生幻影，<br>陰陽交界在眉前。",
    omen: "吉凶｜凶　忌熬夜",
    link: "detail-xinhai.html"
  },
  {
    title: "馬場町",
    poem: "昔日灘頭染血沙，<br>冤魂幾許不歸家。",
    omen: "吉凶｜吉　宜互相傾聽",
    link: "detail-Machangting.html"
  },
  {
    title: "清水巖",
    poem: "清濁潮會關渡口功同聖母濟人清揚濁激<br>水山色映淡江頭地與定光接壤水秀山明",
    omen: "吉凶｜大吉　如有神助",
    link: "detail-ChingShui.html"
  },
  {
    title: "蟾蜍山",
    poem: "神蟾鎮坐古道邊，<br>農桑軍旅共長煙。",
    omen: "吉凶｜平　宜多喝水",
    link: "detail-ChanChu.html"
  },
  {
    title: "仙跡岩",
    poem: "三上仙跡留足印，<br>朗吟大敗毒蟾蜍。",
    omen: "吉凶｜吉　宜外出踏青",
    link: "detail-xianji.html"
  }
];


function drawCard() {
  const btn = document.getElementById("drawBtn");
  const card = document.getElementById("card");

  const titleEl = document.getElementById("cardTitle");
  const poemEl = document.getElementById("cardPoem");
  const omenEl = document.getElementById("cardOmen");
  const detailBtn = document.getElementById("detailBtn");

  const pick = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  titleEl.innerText = pick.title;
  poemEl.innerHTML = pick.poem;
  omenEl.innerText = pick.omen;   // ← 新增這行

  detailBtn.onclick = () => {
    window.location.href = pick.link;
  };

  btn.style.display = "none";
  card.classList.remove("hidden");
}




function goDetail() {
  window.location.href = "detail.html";
}
