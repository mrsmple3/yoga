const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = (firstDay.getDay() + 6) % 7; // Сдвиг на понедельник
  const totalDays = lastDay.getDate();

  daysContainer.innerHTML = "";

  monthYear.textContent = `${firstDay.toLocaleString("ru", { month: "long" })} ${year}`;

  for (let i = 0; i < startDay; i++) {
    daysContainer.innerHTML += `<div></div>`;
  }

  for (let d = 1; d <= totalDays; d++) {
    const today = new Date();
    const isToday =
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    daysContainer.innerHTML += `<div class="${isToday ? "today" : ""}">${d}</div>`;
  }
}

prevBtn.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

nextBtn.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();