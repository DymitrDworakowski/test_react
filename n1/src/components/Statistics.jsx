
const Statistics = ({ stats }) => {
  return (
    <section className="statistics"> {/* Замість class використовуйте className */}
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map((e, index) => (
          <li className="item" key={index}> {/* Додайте атрибут key для уникнення помилок */}
            <span className="label">{e.label}</span>
            <span className="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
