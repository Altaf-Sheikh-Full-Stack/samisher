const Money = (value:number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(Math.max(0, Math.round(value)));
}


export default Money