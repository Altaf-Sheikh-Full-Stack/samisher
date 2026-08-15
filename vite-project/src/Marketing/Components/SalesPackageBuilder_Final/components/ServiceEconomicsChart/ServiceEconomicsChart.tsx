import {
  Area,
  CartesianGrid,
  ComposedChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ServiceEstimate } from "../../types";
import "./ServiceEconomicsChart.css";

interface Props {
  estimate: ServiceEstimate;
}

function formatAxis(value: number) {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}k`;
  }

  return `$${Math.round(value)}`;
}

export function ServiceEconomicsChart({ estimate }: Props) {
  const breakEvenMonth =
    estimate.paybackMonths === null
      ? null
      : Math.max(1, Math.min(6, estimate.paybackMonths));

  const breakEvenRevenue =
    breakEvenMonth === null
      ? null
      : estimate.customerRevenuePerMonth * breakEvenMonth;

  return (
    <div className="spbEconomics">
      <ResponsiveContainer width="100%" height={230}>
        <ComposedChart
          data={estimate.chart}
          margin={{ top: 8, right: 10, left: -12, bottom: 4 }}
        >
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c5ce7" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#6c5ce7" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#eeeeef" vertical={false} />

          <XAxis
            dataKey="month"
            tickFormatter={(month) => `${month}m`}
            tickLine={false}
            axisLine={{ stroke: "#dedee1" }}
            tick={{ fontSize: 10, fill: "#8a8a91" }}
          />

          <YAxis
            tickFormatter={formatAxis}
            tickLine={false}
            axisLine={false}
            width={38}
            tick={{ fontSize: 10, fill: "#8a8a91" }}
          />

          <Tooltip
            cursor={{ stroke: "#d8d8dc", strokeDasharray: "4 4" }}
            contentStyle={{
              borderRadius: 10,
              border: "1px solid #e4e4e7",
              boxShadow: "0 12px 30px rgba(0,0,0,.08)",
              fontSize: 12,
            }}
            formatter={(value, key) => [
              formatAxis(Number(value)),
              key === "revenue" ? "Revenue" : "Acquisition cost",
            ]}
            labelFormatter={(month) => `Month ${month}`}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6c5ce7"
            fill="url(#revenueFill)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Area
            type="monotone"
            dataKey="cost"
            stroke="#9a9aa0"
            fill="none"
            strokeWidth={2.5}
            dot={false}
          />

          {breakEvenMonth !== null && breakEvenRevenue !== null && (
            <>
              <ReferenceLine
                x={Math.ceil(breakEvenMonth)}
                stroke="#6c5ce7"
                strokeDasharray="4 4"
              />

              <ReferenceDot
                x={Math.ceil(breakEvenMonth)}
                y={breakEvenRevenue}
                r={5}
                fill="#6c5ce7"
                stroke="#fff"
                strokeWidth={2}
              />
            </>
          )}
        </ComposedChart>
      </ResponsiveContainer>

      <div className="spbEconomics__caption">
        <span>Months</span>
        <span>
          {breakEvenMonth === null
            ? "No payback in this scenario"
            : breakEvenMonth <= 1
              ? `Estimated payback: ~${Math.max(1, Math.ceil(breakEvenMonth * 30))} days`
              : `Estimated payback: ~${breakEvenMonth.toFixed(1)} months`}
        </span>
      </div>
    </div>
  );
}
