import './text-field.scss';

const TextField = ({ label, adornment, value, handleChange }) => {
  return (
    <div className="text-field">
      <p className="text-field__label">{label}</p>
      <div className="text-field__wrapper">
        <input className="text-field__input" value={value} onChange={(e) => handleChange(e.target.value)} />
        <div className="text-field__adornment">{adornment}</div>
      </div>
    </div>
  );
};

export default TextField;
