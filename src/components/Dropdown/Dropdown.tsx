import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import styles from './Dropdown.module.scss';

export interface DropdownOption<T> {
  value: T;
  label: ReactElement;
}

interface DropdownProps<T> {
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  disabled?: boolean;
}

export function Dropdown<T>({ value, options, onChange, disabled = false }: DropdownProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isExpanded, handleClickOutside]);

  const onOptionClick = (option: DropdownOption<T>) => {
    onChange(option.value);
    setIsExpanded(false);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type='button'
        className={`${styles.dropdownButton} ${disabled ? styles.disabled : ''}`}
        aria-haspopup='listbox'
        aria-expanded={isExpanded}
        disabled={disabled}
        onClick={() => !disabled && setIsExpanded((prev) => !prev)}
      >
        {selectedOption?.label}
        <span className={`${styles.dropdownIcon} ${isExpanded ? styles.expanded : ''}`}>
          <FaChevronUp size='1.125rem' />
        </span>
      </button>

      {isExpanded && (
        <ul className={styles.dropdownList} role='listbox'>
          {options
            .filter((o) => o.value !== value)
            .map((option) => (
              <li
                key={String(option.value)}
                className={styles.dropdownItem}
                aria-selected={option.value === value}
                onClick={() => onOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
