import React, {useState, useEffect} from 'react';
import styles from './numberInputGroup.module.scss';
import Sign from './Sign';

interface INumberInputGroup {
	numberValue: number; // значение "сверху"
	multiplicity?: number; // кратность, может сделать обязательной?
	minusClickHandler: () => void;
	plusClickHandler: () => void;
	saveInputHandler?: (val: number) => void; // действия "значение вверх"
	max?: number;
	onCartInputToggle?: (active: boolean) => void;
}

const NumberInputGroup = ({
	numberValue,
	multiplicity,
	minusClickHandler,
	plusClickHandler,
	max,
	saveInputHandler,
	onCartInputToggle,
}: INumberInputGroup) => {
	const [isActive, setIsActive] = useState(false);
	// поменял условный оператор на \\
	const [inputValue, setInputValue] = useState(numberValue || 0);

	useEffect(() => {
		setInputValue(numberValue);
	}, [numberValue]);

	// разбираем ошибки
	const maxError = max && inputValue > max;
	const minError = inputValue < 0;
	//const multError = inputValue % (multiplicity || 1) !== 0;
	//const valueError = maxError || minError || multError;

	const maxErrorMessage = 'Введенное значение больше допустимого';
	const minErrorMessage = 'Введенное значение меньше допустимого';
	const errorMessage = maxError ? maxErrorMessage : minErrorMessage;

	const saveInputHandler2 = () => {
		if (maxError || minError) {
			console.log('error:', errorMessage);
		} else {
			if (onCartInputToggle) onCartInputToggle(false);
			setIsActive(false);
			// есть ли изменения?
			if (inputValue !== numberValue) {
				let newValue = inputValue;
				// если надо, округляем кратность, выводим сообщение
				if (inputValue % (multiplicity || 1) !== 0) {
					newValue = (Math.trunc(inputValue / (multiplicity || 1)) + 1) * (multiplicity || 1);
					setInputValue(newValue);
					const message = `Исправлено на ${newValue}`;
					console.log('warning:', message);
				}
				if (saveInputHandler) saveInputHandler(newValue);
			}
		}
	};

	const keyDownHandler = (e: any) => {
		if (isActive && e.key === 'Enter') saveInputHandler2();
		if (isActive && '-'.includes(e.key)) e.preventDefault(); // в строку для блокировки можно добавлять значения
	};

	return (
		<div className={styles.numberInputGroup}>
			<span>
				<button
					className={styles.button}
					onClick={minusClickHandler}
					disabled={numberValue <= 0}
					title={`- ${multiplicity}`}
				>
					<Sign sign="minus" />
				</button>
			</span>
			{isActive
				? (
					<input
						type="number"
						className={styles.input}
						value={(inputValue === 0 ? '' : inputValue)}
						title={isActive && multiplicity !== 1 ? `Кратность: ${multiplicity}` : ''}
						onChange={(e) => {
							if (setInputValue) {
								setInputValue(e.target.value === '' ? 0 : parseInt(e.target.value, 10));
							}
						}}
						onBlur={saveInputHandler2}
						onKeyDown={keyDownHandler}
						// eslint-disable-next-line jsx-a11y/no-autofocus
						autoFocus
						step={multiplicity}
						min={0}
						max={max || 0}
					/>
				) : (
					<button
						className={`${styles.button} ${styles.pickEditButton}`}
						onClick={() => {
							setIsActive(true);
							if (onCartInputToggle) onCartInputToggle(true);
						}}
					>
						{inputValue || 0}
					</button>
				)
			}
			<span>
				<button
					className={styles.button}
					onClick={plusClickHandler}
					disabled={!!max && max <= numberValue}
					title={`+ ${multiplicity}`}
				>
					<Sign sign="plus" />
				</button>
			</span>
		</div>
	);
};

export default NumberInputGroup;
