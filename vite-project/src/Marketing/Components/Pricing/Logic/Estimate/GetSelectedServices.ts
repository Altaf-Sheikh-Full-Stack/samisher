import type Answers from "../../Types/Answers"

const GetSelectedServices = (answers: Answers): string[] => {
    return answers.services ?? [];
}

export default GetSelectedServices