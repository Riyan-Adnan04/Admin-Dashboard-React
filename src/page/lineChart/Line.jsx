// import React from 'react';
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";


const data = [
  {
    id: "france",
    color: "hsl(270, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 210,
      },
      {
        x: "helicopter",
        y: 164,
      },
      {
        x: "boat",
        y: 71,
      },
      {
        x: "train",
        y: 110,
      },
      {
        x: "subway",
        y: 179,
      },
      {
        x: "bus",
        y: 71,
      },
      {
        x: "car",
        y: 4,
      },
      {
        x: "moto",
        y: 95,
      },
      {
        x: "bicycle",
        y: 31,
      },
      {
        x: "horse",
        y: 222,
      },
      {
        x: "skateboard",
        y: 60,
      },
      {
        x: "others",
        y: 45,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(15, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 178,
      },
      {
        x: "helicopter",
        y: 63,
      },
      {
        x: "boat",
        y: 136,
      },
      {
        x: "train",
        y: 130,
      },
      {
        x: "subway",
        y: 172,
      },
      {
        x: "bus",
        y: 279,
      },
      {
        x: "car",
        y: 249,
      },
      {
        x: "moto",
        y: 273,
      },
      {
        x: "bicycle",
        y: 231,
      },
      {
        x: "horse",
        y: 296,
      },
      {
        x: "skateboard",
        y: 49,
      },
      {
        x: "others",
        y: 32,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(239, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 92,
      },
      {
        x: "helicopter",
        y: 242,
      },
      {
        x: "boat",
        y: 252,
      },
      {
        x: "train",
        y: 286,
      },
      {
        x: "subway",
        y: 285,
      },
      {
        x: "bus",
        y: 106,
      },
      {
        x: "car",
        y: 190,
      },
      {
        x: "moto",
        y: 17,
      },
      {
        x: "bicycle",
        y: 247,
      },
      {
        x: "horse",
        y: 68,
      },
      {
        x: "skateboard",
        y: 187,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(359, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 78,
      },
      {
        x: "helicopter",
        y: 65,
      },
      {
        x: "boat",
        y: 22,
      },
      {
        x: "train",
        y: 202,
      },
      {
        x: "subway",
        y: 207,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 298,
      },
      {
        x: "moto",
        y: 219,
      },
      {
        x: "bicycle",
        y: 222,
      },
      {
        x: "horse",
        y: 43,
      },
      {
        x: "skateboard",
        y: 175,
      },
      {
        x: "others",
        y: 123,
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const Line = ({isDashboard = false}) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard? "280px" : "75vh" }}>
     
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
