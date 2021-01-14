import { useLayoutEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem('theme') === 'light'
  );

  useLayoutEffect(() => {
    if (checked) {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });

  return (
    <label className={styles['Label']}>
      <input
        className={styles['Input']}
        id="themeSwitch"
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <span className={styles['Span']}></span>
    </label>
  );
};

export default ThemeSwitcher;
