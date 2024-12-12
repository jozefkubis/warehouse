import {
  PieChart,
  Pie,
  // Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import styled from "styled-components"
import Heading from "../../ui/Heading"

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`

function DurationChart({
  confirmedOrders,
  unconfirmedOrders,
  shipping,
  numDays,
  orders,
}) {
  const checkedInOrders = orders?.filter(
    (order) => order.status === "checked-in"
  )

  const shippedOrders = orders?.filter((order) => order.status === "shipped")

  const processingOrders = orders?.filter(
    (order) => order.status === "processing"
  )

  const data = [
    { name: "Processing", value: processingOrders.length },
    { name: "Checked-in", value: checkedInOrders.length },
    { name: "Shipped", value: shippedOrders.length },
  ]
  const COLORS = ["#FF8042", "#FFBB28", "#00C49F"]

  return (
    <ChartBox>
      <Heading as="h2">Orders status summary</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  )
}

export default DurationChart
