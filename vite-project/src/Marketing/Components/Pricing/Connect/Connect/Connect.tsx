import { useMemo, useState } from "react";
import CalculateEstimate from "../../Logic/Estimate/CalculateEstimate";
import type Answers from "../../Types/Answers";
import ResultPage from "../../Component/Result/ResultPage/ResultPage";
import Questions from "../../Data/Question";
import QuestionStep from "../../Component/QuestionStep/QuestionStep";
import IsAnswerValid from "../IsAnswerValid/IsAnswerValid";
import Intro from "../Intro/Intro";
import Progress from "../../Component/Progress/Progress";
import './Connect.css'
import Section from "../../../../../System/Layouts/Section/Section";
import Box from "../../../../../System/Layouts/Box/Box";

const INITIAL_ANSWERS: Answers = { services: [] };

const Connect = () => {
   
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);
    const [showResult, setShowResult] = useState(false);
    const estimate = useMemo(() => CalculateEstimate(answers), [answers]);

    if (showResult) {
        return <ResultPage estimate={estimate} onRestart={restart} />;
    }

    const question = Questions[step];
    const value = answers[question.id];
    const valid = IsAnswerValid(question.id, value);

    function update(value: string | string[]) {
        setAnswers((current) => ({ ...current, [question.id]: value }));
    }

    function next() {
        if (!valid) return;
        if (step === Questions.length - 1) setShowResult(true);
        else setStep((current) => current + 1);
    }

    function back() {
        if (step > 0) setStep((current) => current - 1);
    }

    function restart() {
        setStep(0);
        setAnswers(INITIAL_ANSWERS);
        setShowResult(false);
    }

    return <Section  size="Fluid" className="app">
        <Box className="assessment-card">
            <Intro />
            <Progress current={step} total={Questions.length} />
            <main className="question-area">
                <div className="question-number">0{step + 1}</div>
                <h2>{question.title}</h2>
                <p className="question-subtitle">{question.subtitle}</p>
                <QuestionStep question={question} answers={answers} onChange={update} />
                {question.id === "services" && <div className="selection-hint">You can select multiple services.</div>}
            </main>
            <footer className="footer">
                <button className="back-button" onClick={back} disabled={step === 0}>← Back</button>
                <button className="primary-button next-button" disabled={!valid} onClick={next}>
                    {step === Questions.length - 1 ? "See My Estimate" : "Continue"} <span>→</span>
                </button>
            </footer>
            <div className="privacy">Estimates are scenario-based and do not guarantee a specific result.</div>
        </Box>
    </Section>;
    
}

export default Connect