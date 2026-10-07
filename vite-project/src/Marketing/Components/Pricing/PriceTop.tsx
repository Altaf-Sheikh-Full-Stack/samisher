import "./PriceTop.css";
import Container from "../../../Design/Container/Container";
import Text from "../../../Design/Texts/Text";

interface PriceTopProps {
    revenueTarget: number;
    avgSellingPrice: number;

    setRevenueTarget: (value: number) => void;
    setAvgSellingPrice: (value: number) => void;
}

const PriceTop = ({
    revenueTarget,
    avgSellingPrice,
    setRevenueTarget,
    setAvgSellingPrice
}: PriceTopProps) => {

    return (
        <Container className="PriceTop">

            <Container className="PriceTop-Top">
                <Text textType="H4" font="Geist">
                    Your revenue target form the campaign?
                </Text>

                <select
                    value={revenueTarget}
                    onChange={(e) =>
                        setRevenueTarget(Number(e.target.value))
                    }
                >
                    <option value={1000}>$1000</option>
                    <option value={5000}>$5000</option>
                    <option value={10000}>$10k</option>
                    <option value={100000}>$100k</option>
                </select>
            </Container>


            <Container className="PriceTop-Bottom">
                <Text textType="H4" font="Geist">
                    Avg product/service selling price
                </Text>

                <select
                    value={avgSellingPrice}
                    onChange={(e) =>
                        setAvgSellingPrice(Number(e.target.value))
                    }
                >
                    <option value={1000}>$1000</option>
                    <option value={5000}>$5000</option>
                    <option value={10000}>$10k</option>
                    <option value={100000}>$100k</option>
                </select>
            </Container>

        </Container>
    );
};

export default PriceTop;