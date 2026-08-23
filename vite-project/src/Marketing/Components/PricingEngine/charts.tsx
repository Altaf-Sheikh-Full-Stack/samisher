import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import type {
  ChartData,
  ChartOptions,
  ScriptableContext,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Bar, Line } from "react-chartjs-2";
import type { Estimate } from "./types";
import { money, moneyCompact } from "./format";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
);

ChartJS.defaults.font.family =
  "'Inter', 'Manrope', system-ui, -apple-system, sans-serif";
ChartJS.defaults.color = "#64748b";

const tooltipStyle = {
  backgroundColor: "#17171a",
  titleColor: "#ffffff",
  bodyColor: "#e2e8f0",
  borderColor: "#17171a",
  borderWidth: 0,
  padding: 10,
  cornerRadius: 10,
  displayColors: true,
  boxPadding: 4,
} as const;

/* ────────────────────────────────────────────────────────────────
 * 1) Cumulative — "what you invest vs what it returns"
 *    Purple value line, slate cost line, break-even marker.
 * ──────────────────────────────────────────────────────────────── */

interface CumulativeProps {
  estimate: Estimate;
}

export function CumulativeChart({ estimate }: CumulativeProps) {
  const { points, breakEvenMonth } = estimate;
  const labels = points.map((point) => `M${point.month}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Value returned",
        data: points.map((point) => point.cumulativeValue),
        borderColor: "#7c3aed",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return "rgba(124, 58, 237, 0.08)";
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "rgba(124, 58, 237, 0.22)");
          gradient.addColorStop(1, "rgba(124, 58, 237, 0.01)");
          return gradient;
        },
        fill: true,
        tension: 0.35,
        borderWidth: 2.5,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 4,
        pointBackgroundColor: "#7c3aed",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
      },
      {
        label: "Your investment",
        data: points.map((point) => point.cumulativeCost),
        borderColor: "#94a3b8",
        backgroundColor: "transparent",
        borderDash: [5, 5],
        fill: false,
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    animation: { duration: 500, easing: "easeOutQuart" },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 16,
          font: { size: 12, weight: 600 },
        },
      },
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: (context) => {
            const title =
              context.dataset.label === "Value returned"
                ? "Value returned"
                : "Investment";
            return ` ${title}: ${money(context.parsed?.y ?? 0)}`;
          },
        },
      },
      annotation: {
        annotations: {
          breakEven:
            breakEvenMonth !== null && breakEvenMonth <= 12
              ? {
                  type: "line" as const,
                  scaleID: "x",
                  value: breakEvenMonth - 1,
                  borderColor: "#16a34a",
                  borderWidth: 2,
                  borderDash: [6, 4],
                  label: {
                    display: true,
                    content: "BREAK-EVEN",
                    position: "start",
                    backgroundColor: "#16a34a",
                    color: "#ffffff",
                    font: { size: 10, weight: 700 },
                    padding: 5,
                  },
                }
              : {},
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(100, 116, 139, 0.14)" },
        ticks: {
          font: { size: 11 },
          callback: (value) => moneyCompact(Number(value)),
        },
        border: { display: false },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}

/* ────────────────────────────────────────────────────────────────
 * 2) Monthly flow — value produced each month vs what you pay.
 * ──────────────────────────────────────────────────────────────── */

interface MonthlyFlowProps {
  estimate: Estimate;
}

export function MonthlyFlowChart({ estimate }: MonthlyFlowProps) {
  const { points } = estimate;
  const labels = points.map((point) => `M${point.month}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Value that month",
        data: points.map((point) => point.monthlyValue),
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const value = points[context.dataIndex]?.monthlyValue ?? 0;
          const rgb = value >= 0 ? "34, 197, 94" : "239, 68, 68";
          return `rgba(${rgb}, 0.72)`;
        },
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Monthly cost",
        data: points.map((point) => point.monthlyCost),
        type: "line" as const,
        borderColor: "#475569",
        backgroundColor: "#475569",
        borderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 8,
        tension: 0.2,
        fill: false,
        order: 0,
      },
    ],
  } as unknown as ChartData<"bar", number[], string>;

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    animation: { duration: 500, easing: "easeOutQuart" },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 16,
          font: { size: 12, weight: 600 },
        },
      },
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          title: (items) => `Month ${items[0].label.replace("M", "")}`,
          label: (context) => {
            const value = context.parsed?.y ?? 0;
            return ` ${context.dataset.label ?? ""}: ${money(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, maxTicksLimit: 12 },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(100, 116, 139, 0.14)" },
        ticks: {
          font: { size: 11 },
          callback: (value) => moneyCompact(Number(value)),
        },
        border: { display: false },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

// Convenience alias used by the UI.
export function moneyAxis(value: number) {
  return moneyCompact(value);
}

/* __PART2__ */