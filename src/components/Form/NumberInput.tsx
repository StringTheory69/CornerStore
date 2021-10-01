import React, { FC } from 'react';
import CurrencyInput from 'react-currency-input-field';
import FormItemWrapper, { Props as FormItemWrapperPops } from './FormItemWrapper';

type Props = {
  title: string;
  placeholder?: string;
  type: 'currency' | 'percent' | 'quantity';
  options?: any; // TODO update to validation rules
  currencies?: string[];
  allowDecimals?: boolean;
} & FormItemWrapperPops<any>;

const NumberInput: FC<Props> = ({
  name,
  type,
  placeholder,
  form,
  title,
  currencies,
  options,
  allowDecimals,
  helperText,
}) => (
  <FormItemWrapper form={form} name={name} label={title} helperText={helperText}>
    <div className="mt-1">
      <CurrencyInput
        allowDecimals={type !== 'quantity' && allowDecimals}
        placeholder={placeholder}
        {...form.register(name, options)}
        type="text"
        name={name}
        className="shadow-sm bg-secondary text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md"
      />
      {type === 'percent' && (
        <div className="absolute inset-y-0 top-2 right-0 pr-3 pointer-events-none">
          <div
            className="inline-flex items-center rounded px-2 text-sm font-sans font-medium text-gray-400"
            aria-hidden="true"
          >
            %
          </div>
        </div>
      )}
      {type === 'currency' && currencies && (
        <div className="absolute inset-y-0 top-px right-2 items-center">
          <select className="inline-flex bg-secondary border-0 items-center rounded text-sm font-sans font-medium text-gray-400 border-none">
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  </FormItemWrapper>
);

export default NumberInput;