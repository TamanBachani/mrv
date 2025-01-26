import React, { useContext, useEffect } from 'react'
import "../../node_modules/react-vis/dist/style.css"
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  AreaSeries,
  GradientDefs,
  LineMarkSeries
} from "react-vis";
import '../stylesheets/result.css'
import ResultNav from './ResultNav';
import Insight from './Insight';
import DetailsContext from '../contexts/details/DetailsContext';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from 'react-router-dom';

const Result = () => {
  let navigate = useNavigate()

  let userValue = 0;
  const {  extractedValues } = useContext(DetailsContext);
  useEffect(() => {
    if (!extractedValues.sugarValue) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  
  const { name } = extractedValues;
  const printDocument = () => {
            const divToPrint = document.querySelector("#to-print");
            html2canvas(divToPrint).then((canvas) => {
              const imgData = canvas.toDataURL("image/png");
              const imgWidth = 190;
              const pageHeight = 290;
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
              let heightLeft = imgHeight;
              const doc = new jsPDF("pt", "mm");
              let position = 0;
              doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
              heightLeft -= pageHeight;
              while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(
                  imgData,
                  "PNG",
                  10,
                  position,
                  imgWidth,
                  imgHeight + 25
                );
                heightLeft -= pageHeight;
              }
              doc.save(`Visualised Report ${name} .pdf`);
            });
  };

  
    const gradient = (
      <GradientDefs>
        <linearGradient
          id="myGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="440"
          x2="400"
          y2="400"
        >
          <stop offset="5%" stopColor="#00ff66" />
          <stop offset="50%" stopColor="#9cb800" />
          <stop offset="75%" stopColor="#b56c00" />
          <stop offset="100%" stopColor="#a60000" />
        </linearGradient>
      </GradientDefs>
  );
  userValue = Math.round(parseFloat(extractedValues.sugarValue));
  const userRange = (value) => {
    if (value > 0 && value <= 70) {
      return 'LOW'
    }
    else if (value > 70 && value < 140) {
      return "NORMAL"
    }
    else if (value >= 140 && value <= 199) {
      return "PREDIABETIC"
    }
    else if (value > 199 && value <= 240) {
      return "DIABETIC"
    }
    else {
      return "HIGH"
    }
  }
  const userRangeValue = userRange(userValue)

  return (
    <>
      <ResultNav print={printDocument} />
      <div id="to-print">
        <h1 className="heading serif-text">
          Hey {name.split(/(\s+)/)[0]} - your report has been visualised
        </h1>
        <div className="patient-info">
          <span className="info-elements">Name: {name}</span>
          <span className="info-elements">
            Age: {extractedValues.age} Years
          </span>
          <span className="info-elements">Sex: {extractedValues.sex}</span>
        </div>
        <div className="viz">
          <div className="main-chart">
            <XYPlot width={550} height={450} xType="ordinal">
              {gradient}
              <XAxis />
              <YAxis />
              <ChartLabel
                text="DIABETIC RANGE"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.3}
                yPercent={0.04}
              />

              <ChartLabel
                text="BLOOD SUGAR LEVEL"
                className="alt-y-label"
                includeMargin={false}
                xPercent={0.06}
                yPercent={0.25}
                style={{
                  transform: "rotate(-90)",
                  textAnchor: "end",
                }}
              />
              <AreaSeries
                className="area-series-example"
                curve="curveNatural"
                data={[
                  { x: "LOW", y: 70 },
                  { x: "NORMAL", y: 140 },
                  { x: "PREDIABETIC", y: 199 },
                  { x: "DIABETIC", y: 240 },
                  { x: "HIGH", y: 300 },
                ]}
                color={"url(#myGradient)"}
              />
              <LineMarkSeries
                style={{
                  strokeWidth: "3px",
                }}
                lineStyle={{ stroke: "red" }}
                className="linemark-series-example-2"
                curve={"curveMonotoneX"}
                xType="ordinal"
                color="black"
                size="12"
                data={[{ x: userRangeValue, y: userValue }]}
              />
            </XYPlot>
          </div>
          <div className="main-text">
            <i className="fas fa-circle"></i>This is where <span>you</span>{" "}
            stand
          </div>
        </div>
        <h1 className="heading serif-text">Insights</h1>
        <section className="insights-box">
          <Insight userRangeValue={userRangeValue} userValue={userValue} />
        </section>
      </div>
    </>
  );
}

export default Result