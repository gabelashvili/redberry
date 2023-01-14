import { useState } from 'react';
import { isNumber } from '../../helpers/helpers';
import TextField from '../TextField/TextField';
import './calculator.scss';

const Calculator = () => {
  const [values, setValues] = useState({
    avgIncome: '',
    days: '',
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
    </div>
  );
};

export default Calculator;
