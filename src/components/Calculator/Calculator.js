import { useState } from 'react';
import { isNumber } from '../../helpers/helpers';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import TextField from '../TextField/TextField';
import './calculator.scss';

const calculateEmployerCompensatesDays = (days) => {
  if (days > 8) {
    return 5;
  } else if (days >= 4 && days <= 8) {
    return days - 3;
  }
  return 0;
};

const calculateInsuranceCompensatesDays = (days, tubercolosis) => {
  const maxInsuranceEvent = tubercolosis ? 240 : 182;
  let val = 0;
  if (days > 8) {
    val = days - 8;
  }
  if (val > maxInsuranceEvent) {
    val = maxInsuranceEvent;
  }
  return val;
};

const Calculator = () => {
  const [values, setValues] = useState({
    avgIncome: '',
    days: '',
    tubercolosis: false,
  });
  const compensation = (values.avgIncome * 70) / 100 || 0;

  const employerCompensation = parseInt(calculateEmployerCompensatesDays(values.days) * compensation, 10).toFixed(2);
  const insuranceCompensation = (calculateInsuranceCompensatesDays(values.days, values.tubercolosis) * compensation).toFixed(2);
  const totalCompensation = (Number(employerCompensation) + Number(insuranceCompensation)).toFixed(2);

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
        handleChange={() => setValues({ ...values, tubercolosis: !values.tubercolosis })}
      />
      <Button handleClick={() => console.log('ae')}>Calculate</Button>
      <div className="calculator__details">
        <div className="calculator__details-wrapper">
          <p className="calculator__details-title">The employer compensates</p>
          <b>{calculateEmployerCompensatesDays(values.days)} days</b>
          <p className="calculator__details-value">{employerCompensation}€</p>
          <p className="calculator__details-desc">Daily allowance 28,00 €</p>
        </div>
        <div className="calculator__details-wrapper">
          <p className="calculator__details-title">Health Insurance compensates</p>
          <b>{calculateInsuranceCompensatesDays(values.days, values.tubercolosis)}days</b>
          <p className="calculator__details-value">{insuranceCompensation}€</p>
          <p className="calculator__details-desc">Daily allowance 28,00 €</p>
        </div>
      </div>
      <div className="calculator__total">
        <p className="calculator__total-title">Compensation total for 7 days (net)</p>
        <p className="calculator__total-value">{totalCompensation}€</p>
      </div>
    </div>
  );
};

export default Calculator;
