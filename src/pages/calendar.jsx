
// Add your real dates here. Key = "YYYY-MM-DD", value = short label shown on that day.
const events = {
  '2026-08-03': ''
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function pad(n) {
  return n.toString().padStart(2, '0');
}

function buildMonthGrid(year, monthIndex) {
  const firstDay = new Date(year, monthIndex, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

function MonthGrid({ year, monthIndex }) {
  const cells = buildMonthGrid(year, monthIndex);

  return (
    <div className="cal-month">
      <h3 className="cal-month-title">{monthNames[monthIndex]} {year}</h3>
      <div className="cal-weekdays">
        {dayNames.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="cal-grid">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} className="cal-cell empty" />;
          const dateKey = `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
          const label = events[dateKey];
          return (
            <div key={i} className={`cal-cell ${label ? 'has-event' : ''}`}>
              <span className="cal-daynum">{day}</span>
              {label && <span className="cal-event-label">{label}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Calendar({ startYear, startMonth, monthsToShow = 3 }) {
  const now = new Date();
  const year = startYear ?? now.getFullYear();
  const month = startMonth ?? now.getMonth();

  const months = [];
  for (let i = 0; i < monthsToShow; i++) {
    const total = month + i;
    months.push({ year: year + Math.floor(total / 12), monthIndex: total % 12 });
  }

  return (
    <div className="cal-wrap">
      {months.map(({ year, monthIndex }) => (
        <MonthGrid key={`${year}-${monthIndex}`} year={year} monthIndex={monthIndex} />
      ))}
    </div>
  );
}

