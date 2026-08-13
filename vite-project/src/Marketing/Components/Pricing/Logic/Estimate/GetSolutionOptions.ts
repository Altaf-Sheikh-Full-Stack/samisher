



const GetSolutionOptions = (services: string[]) => {
    const options: [string, string][] = [];

    if (services.includes("lead_generation")) {
        options.push(
            ["mql", "Marketing Qualified Leads (MQL)"],
            ["sql", "Sales Qualified Leads (SQL)"],
            ["highly_qualified", "Highly Qualified Leads"],
            ["appointment_ready", "Appointment-Ready Leads"],
            ["lead_custom", "Custom / Other"],
        );
    }

    if (services.includes("closing")) {
        options.push(
            ["inbound_closing", "Inbound Closing"],
            ["outbound_closing", "Outbound Closing"],
            ["mixed_closing", "Inbound + Outbound"],
            ["full_cycle", "Full-Cycle Sales"],
            ["closing_custom", "Custom / Other"],
        );
    }

    if (services.includes("meeting_booking")) {
        options.push(
            ["qualified_sales", "Qualified Sales Meetings"],
            ["decision_maker", "Decision-Maker Meetings"],
            ["demo", "Demo Meetings"],
            ["discovery", "Discovery Meetings"],
            ["appointment_setting", "Appointment Setting"],
            ["meeting_custom", "Custom / Other"],
        );
    }

    if (services.includes("collection")) {
        options.push(
            ["payment_followup", "Payment Follow-Up"],
            ["invoice_collection", "Invoice Collection"],
            ["overdue_recovery", "Overdue Payment Recovery"],
            ["recurring_collection", "Recurring Payment Collection"],
            ["full_collection", "Full Collection Management"],
            ["collection_custom", "Custom / Other"],
        );
    }

    return options;
}



export default GetSolutionOptions