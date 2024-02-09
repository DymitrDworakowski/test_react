import css from "./Filter.module.css";

const Filter = ({ handleFilter }) => {
  return (
    <div className={css.div_filter}>
      <p className={css.p_filter}>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
    </div>
  );
};

export default Filter;
