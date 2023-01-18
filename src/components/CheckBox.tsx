import { Check } from 'phosphor-react'

import styles from './CheckBox.module.css'

interface CheckBoxProps {
  checked?: boolean;
  onPress: () => void;
}

export function CheckBox({ checked, onPress }: CheckBoxProps) {
  
  return (
    <div onClick={onPress} className={checked ? styles.wrapperChecked : styles.wrapper}>
      <div className={checked ? styles.fillChecked : styles.fill}>
        {checked && <Check size={14} />}
      </div>
    </div>
  )
}