
import GetSolutionOptions from "../../Logic/Estimate/GetSolutionOptions";
import type Answers from "../../Types/Answers";
import type Question from "../../Types/Question";
import OptionList from "../OptionList/OptionList";


type Props = {
    question: Question;
    answers: Answers
    onChange: (value: string | string[]) => void;
}

const QuestionStep = ({ question, answers, onChange }: Props) => {
    const value = answers[question.id];

    if (question.type === "number") {
        return (
            <div className="number-wrap">
                <span>$</span>
                <input
                    className="number-input"
                    type="number"
                    min="0"
                    placeholder={question.placeholder}
                    value={String(value ?? "")}
                    onChange={(event) => onChange(event.target.value)}
                />
            </div>
        );
    }

    const options = question.id === "solution"
        ? GetSolutionOptions(answers.services)
        : question.options ?? [];

    return (
        <OptionList
            options={options}
            value={typeof value === "string" ? value : undefined}
            selected={Array.isArray(value) ? value : []}
            multiple={question.type === "multi"}
            onChange={onChange}
        />
    );
}
export default QuestionStep


