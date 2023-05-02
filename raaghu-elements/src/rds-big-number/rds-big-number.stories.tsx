import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBigNumber from "./rds-big-number";
import RdsLineChart from "../rds-chart-line";
import RdsIcon from "../rds-icon";
import RdsBarChart from "../rds-chart-bar";

export default {
	title: "Elements/BigNumber",
	component: RdsBigNumber,
	argTypes: {
		subTitleColorVariant: {
			options: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"info",
				"dark",
				"light",
			],
			control: { type: "select" },
		},
		textAlign: {
			options: ["text-start", "text-center", "text-end"],
			control: { type: "select" },
		},
	},
} as ComponentMeta<typeof RdsBigNumber>;

const Template: ComponentStory<typeof RdsBigNumber> = (args) => (
	<RdsBigNumber {...args}>{args.children}</RdsBigNumber>
);

export const Default = Template.bind({});
Default.args = {
	bigNumber: "$13,20,21",
	subTitle: "+$1,203",
	subTitleColorVariant: "primary",
	icon: "triangle_up",
	iconFill: true,
	iconStroke: true,
	iconWidth: "15px",
	iconHeight: "15px",
};

export const standard = Template.bind({});
standard.args = {
	subTitleColorVariant: "primary",
	subTitle: "Visitors",
	bigNumber: "2,236",
  children : <></>
};

export const delta = Template.bind({});
delta.args = {
	subTitleColorVariant: "primary",
	subTitle: "Visitors",
	bigNumber: "2,236",
	children: (
		<>
			<RdsIcon
				name="triangle_up"
				fill={true}
				stroke={true}
				width="15px"
				height="15px"
				colorVariant="primary"
			/>

			<label className="ps-2 text-primary fs-5">75%</label>
		</>
	),
};


export const histogram = Template.bind({});
histogram.args = {
	subTitleColorVariant: "primary",
	subTitle: "Average Numbers Of Visitors",
	bigNumber: "2,236",
	children: (
		<RdsBarChart
			id="histogram"
			height={50}
			width={50}
			dataSets={[
				{
					label: "Sales Growth",
					data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
					backgroundColor: "rgba(54, 162, 235, 1)",
					borderColor: "rgba(54, 162, 245, 1)",
					borderWidth: 1,
					borderRadius: 10,
					barThickness: 4,
					borderSkipped: false,
				},
			]}
			labels={["10k", "20k", "25k", "30k", "40k", "50k", "60k"]}
			options={{
				indexAxis: "x",
				elements: {
					bar: {
						borderWidth: 0,
						width: 1,
					},
				},
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},

					tooltip: {
						enabled: false, // <-- this option disables tooltips
					},
				},
				scales: {
					y: {
						display: false,
					},
					x: {
						display: false,
					},
				},
			}}
		/>
	),
};

export const sparkLine = Template.bind({});
sparkLine.args = {
	subTitleColorVariant: "primary",
	subTitle: "Visitors",
	bigNumber: "2,236",
	children: (
		<RdsLineChart
			id="linechart"
			height={50}
			width={50}
			labels={["Jan", "Feb", "Mar", "Apr"]}
			options={{
				radius: 0,
				pointStyle: "circle",
				responsive: true,
				borderWidth: 1,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: false,
					},
					legend: {
						display: false,
					},
					tooltip: { enabled: false },
				},
				scales: {
					y: {
						display: false,
					},
					x: {
						display: false,
					},
				},
				tooltip: {
					display: false,
					usePointStyle: true,
				},
			}}
			dataSets={[
				{
					label: "",
					data: [0, 3, -3, 3],
					borderColor: "#4DCFFF",
					fill: false,
					pointRadius: 2,
					cubicInterpolationMode: "monotone",
					tension: 0.4,
				},
			]}
		/>
	),
};

export const icon = Template.bind({});
icon.args = {
	subTitleColorVariant: "primary",
	subTitle: "Visitors",
	bigNumber: "2,236",
	children: (
		<RdsIcon
			name="users"
			fill={false}
			stroke={true}
			width="50px"
			height="50px"
			colorVariant="primary"
		/>
	),
};
