import type Answers from "../../Types/Answers"
import GetSelectedServices from "./GetSelectedServices"


const GetPrimaryService = (answers:Answers) => {
    const services = GetSelectedServices(answers);
    return services.find((service) => service !== "collection") ?? services[0] ?? "lead_generation";
}

export default GetPrimaryService