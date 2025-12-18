const places = [
  {
    name: "大稻埕",
    desc: "河岸、老街與茶香交織的地方。"
  },
  {
    name: "九份",
    desc: "山城、霧氣與燈火，像一場未醒的夢。"
  },
  {
    name: "淡水",
    desc: "海風、夕陽，還有走得很慢的時間。"
  }
];

function draw() {
  const pick = places[Math.floor(Math.random() * places.length)];
  document.getElementById("result").innerHTML = `
    <h2>${pick.name}</h2>
    <p>${pick.desc}</p>
  `;
}
