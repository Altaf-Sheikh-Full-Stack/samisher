import type Answers from "../../Types/Answers";




const IsAnswerValid = (id: string, value: Answers[string]) => {
    if (id === "services") return Array.isArray(value) && value.length > 0;
    if (id === "selling_price") return Number(value) > 0;
    return Boolean(value);
}

export default IsAnswerValid