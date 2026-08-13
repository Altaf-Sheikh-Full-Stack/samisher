import type QuestionOption from "../../Types/QuestionOption";




type Props = {
    options: QuestionOption[];
    value?: string;
    multiple?: boolean;
    selected?: string[];
    onChange: (value: string | string[]) => void;
}

const OptionList = ({ options, value, multiple, selected = [], onChange }: Props) => {
    return (
        <div className="options">
            {options.map(([optionValue, label], index) => {
                const active = multiple ? selected.includes(optionValue) : value === optionValue;
                return (
                    <button
                        key={optionValue}
                        className={`option ${active ? "selected" : ""}`}
                        onClick={() => {
                            if (multiple) {
                                onChange(active
                                    ? selected.filter((item) => item !== optionValue)
                                    : [...selected, optionValue]);
                            } else {
                                onChange(optionValue);
                            }
                        }}
                    >
                        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                        <span className="option-label">{label}</span>
                        {multiple ? (
                            <span className={`checkbox ${active ? "checked" : ""}`}>{active ? "✓" : ""}</span>
                        ) : (
                            <span className={`radio ${active ? "checked" : ""}`}>{active && <span />}</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}


export default OptionList