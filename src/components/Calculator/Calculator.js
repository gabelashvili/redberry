import { useState } from 'react';
import { isNumber } from '../../helpers/helpers';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import TextField from '../TextField/TextField';
import './calculator.scss';

const EMPLOYER_START_COMPENSATION_FROM = 4;
const EMPLOYER_END_COMPENSATION_TO = 8;
const INSURANCE_START_COMPENSATION_FROM = 9;
const INSURANCE_END_COMPENSATION_TO = 182;
const INSURANCE_TUBERCULOSIS_ADDED_DAY = 58;

const calculateEmployerCompensatesDays = (days) => {
  if (days > EMPLOYER_END_COMPENSATION_TO) {
    return 5;
  } else if (days >= EMPLOYER_START_COMPENSATION_FROM && days <= EMPLOYER_END_COMPENSATION_TO) {
    return days - 3;
  }
  return 0;
};

const calculateInsuranceCompensatesDays = (days, tubercolosis) => {
  const maxInsuranceEvent = INSURANCE_END_COMPENSATION_TO + (tubercolosis && INSURANCE_TUBERCULOSIS_ADDED_DAY);
  let val = 0;
  if (days >= INSURANCE_START_COMPENSATION_FROM) {
    val = days - (INSURANCE_START_COMPENSATION_FROM - 1);
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
  const [total, setTotal] = useState({
    amount: 0,
    days: 0,
  });
  const compensation = (values.avgIncome * 70) / 100 || 0;
  const employerCompensation = parseInt(calculateEmployerCompensatesDays(values.days) * compensation, 10).toFixed(2);
  const insuranceCompensation = (calculateInsuranceCompensatesDays(values.days, values.tubercolosis) * compensation).toFixed(2);

  const handleCalculate = () => {
    const totalCompensation = (Number(employerCompensation) + Number(insuranceCompensation)).toFixed(2);
    setTotal({
      amount: totalCompensation,
      days: calculateEmployerCompensatesDays(values.days) + calculateInsuranceCompensatesDays(values.days, values.tubercolosis),
    });
  };

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
      <Button handleClick={handleCalculate}>Calculate</Button>
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
        <p className="calculator__total-title">Compensation total for {total.days} days (net)</p>
        <p className="calculator__total-value">{total.amount}€</p>
      </div>
    </div>
  );
};

export default Calculator;
