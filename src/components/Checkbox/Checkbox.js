import './checkbox.scss';

const Checkbox = ({ label, value, handleChange }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" value={value} onChange={(e) => handleChange(e.target.value)} />
      <p className="checkbox__label">{label}</p>
    </div>
  );
};

export default Checkbox;
