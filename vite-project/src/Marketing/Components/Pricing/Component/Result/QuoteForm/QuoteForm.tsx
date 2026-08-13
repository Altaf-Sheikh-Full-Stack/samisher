



const QuoteForm = () => {
    return <div className="result-form">
        <h2>Want a more precise quote?</h2>
        <p>Share your details and we can review the assumptions behind the estimate.</p>
        <input placeholder="Your name" />
        <input type="email" placeholder="Work email" />
        <input placeholder="Company name" />
        <input placeholder="Company website" />
        <button className="primary-button">Request My Quote <span>→</span></button>
    </div>;
}


export default QuoteForm