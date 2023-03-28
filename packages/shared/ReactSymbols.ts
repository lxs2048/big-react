const supportSymbol = typeof Symbol === 'function' && Symbol.for;
// 为了防止别人滥用reactElement，需要将其定义为一个独一无二的值，所以使用Symbol，在使用前需要判断宿主环境是否支持Symbol
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;

export const REACT_FRAGMENT_TYPE = supportSymbol
	? Symbol.for('react.fragment')
	: 0xeacb;
