import { useState } from 'react';
import { isNumber } from '../../helpers/helpers';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import TextField from '../TextField/TextField';
import './calculator.scss';

const Calculator = () => {
  const [values, setValues] = useState({
    avgIncome: '',
    days: '',
    tubercolosis: false,
  });

  const handleChange = (field, value) => {
    if (value === '') {
      setValues({ ...values, [field]: '' });
    } else if (isNumber(value)) {
      setValues({ ...values, [field]: Number(value) });
    }
  };
  return (
    <div className="calculator">
      <h1 className="calculator__title">Compensation Calculator</h1>
      <TextField
        label="Average income"
        value={values.avgIncome}
        adornment="€"
        handleChange={(val) => handleChange('avgIncome', val)}
      />
      <TextField
        label="Days on sick-leave"
        value={values.days}
        adornment="days"
        handleChange={(val) => handleChange('days', val)}
      />
      <Checkbox
        label={'I have tubercolosis'}
        value={values.tubercolosis}
        handleChange={(val) => setValues({ ...values, tubercolosis: val })}
      />
      <Button handleClick={() => console.log('ae')}>Calculate</Button>
      <div className="calculator__details">
        <div className="calculator__details-wrapper">
          <p className="calculator__details-title">The employer compensates</p>
          <b>4 days</b>
          <p className="calculator__details-value">112,00€</p>
          <p className="calculator__details-desc">Daily allowance 28,00 €</p>
        </div>
        <div className="calculator__details-wrapper">
          <p className="calculator__details-title">Health Insurance compensates</p>
          <b>0 days</b>
          <p className="calculator__details-value">112,00€</p>
          <p className="calculator__details-desc">Daily allowance 28,00 €</p>
        </div>
      </div>
      <div className="calculator__total">
        <p className="calculator__total-title">Compensation total for 7 days (net)</p>
        <p className="calculator__total-value">112,00€</p>
      </div>
    </div>
  );
};

export default Calculator;
