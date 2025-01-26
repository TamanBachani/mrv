import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  ChartLabel,
  RadialChart,
} from "react-vis";
import Source from "./Source";
import UserInsight from "./UserInsight";

const Insight = ({ userValue }) => {
  const [vis, setVis] = useState({
    bloodSugarValue: 0,
    rangeUserValue: "",
    beforeHighStatement: "",
    afterHighStatement: "",
    def: "",
    defSource: "",
    beforeHighRisk: "",
    highRisk: "",
    afterHighRisk: "",
    riskSource: "",
    color: "",
    tip1: "",
    tip1Source: "",
    beforeHighStat: "",
    highStat: "",
    afterHighStat: "",
    statSource: "",
    tip2: "",
    tip2Source: "",
  });

  useEffect(() => {
    if (userValue > 0 && userValue <= 70) {
      setVis({
        ...vis,
        bloodSugarValue: userValue,
        rangeUserValue: "low",
        color: "red",
        beforeHighStatement: `Your blood sugar (${userValue} mg/dL) is in the `,
        afterHighStatement: " range.",
        def: "Low blood sugar is a condition that occurs when your blood sugar (glucose) is lower than normal. Low blood sugar may occur in people with diabetes who are taking insulin or certain other medicines to control their diabetes.",
        beforeHighRisk:
          "If you use insulin and your blood sugar is frequently low, ask your doctor if you are injecting your insulin the right way.",
        highRisk: " Do not ",
        afterHighRisk:
          "make any changes without talking to your doctor or nurse first.",
        tip1: "Sometimes hypoglycemia can be due to taking the wrong medicines. Check your medicines with your pharmacist.",
        beforeHighStat: "In India, prevalence of hypoglycemia is at",
        highStat: " 57.44%. ",
        afterHighStat:
          "The most common factor which leads to hypoglycemia is- missing a meal (89.3% of patients).",
        tip2: "A blood sugar level below 70 mg/dL is low and can harm you. A blood sugar level below 54 mg/dL is a cause for immediate action.",
        defSource:
          "https://medlineplus.gov/ency/patientinstructions/000085.htm",
        riskSource:
          "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-treatment/art-20044084",
        statSource: "https://pubmed.ncbi.nlm.nih.gov/31631765/",
        tip1Source:
          "https://www.stlukes-stl.com/health-content/health-ency-multimedia/60/000085.htm",
        tip2Source:
          "https://www.mayoclinic.org/diseases-conditions/hypoglycemia/symptoms-causes/syc-20373685#:~:text=Hypoglycemia%20needs%20immediate%20treatment%20when,as%20an%20alert%20for%20hypoglycemia.",
      });
    } else if (userValue > 70 && userValue < 140) {
      setVis({
        ...vis,
        bloodSugarValue: userValue,
        rangeUserValue: "normal",
        color: "green",
        beforeHighStatement: `Your blood sugar (${userValue} mg/dL) is in the `,
        afterHighStatement: " range.",
        def: "The blood glucose level is the amount of glucose in the blood. Glucose is a sugar that comes from the foods we eat. It's the main source of energy for the cells of our body, and it's carried to each cell through the bloodstream.",
        beforeHighRisk: "Having healthy levels prevents",
        highRisk: " weight gain. ",
        afterHighRisk:
          "Reduces the risk of insulin resistance. Reduces stress hormones and inflammation too.",
        tip1: "You cannot manage levels unless you know the numbers, so a crucial step in achieving optimal glucose target levels is careful monitoring.",
        beforeHighStat: "Even a",
        highStat: " 7 percent reduction ",
        afterHighStat:
          "in body weight can decrease your risk of developing type 2 diabetes by up to 58 percent.",
        tip2: "Research has found that some foods and spices can possibly lower your blood sugar. These include Aloe Vera, Apple Cider Vinegar, and Cinnamon.",
        defSource: "https://www.webmd.com/diabetes/glucose-diabetes",
        riskSource:
          "https://www.healthline.com/health/diabetes/how-to-reverse-prediabetes-naturally",
        statSource:
          "https://www.healthcentral.com/slideshow/benefits-of-careful-blood-sugar-management",
        tip1Source:
          "https://www.healthcentral.com/slideshow/benefits-of-careful-blood-sugar-management",
        tip2Source:
          "https://www.healthcentral.com/slideshow/benefits-of-careful-blood-sugar-management",
      });
    } else if (userValue >= 140 && userValue <= 199) {
      setVis({
        ...vis,
        bloodSugarValue: userValue,
        rangeUserValue: "prediabetic",
        color: "orange",
        beforeHighStatement: `Your blood sugar (${userValue} mg/dL) is in the `,
        afterHighStatement: " range.",
        def: "Prediabetes means you have a higher than normal blood sugar level. It's not high enough to be considered type 2 diabetes yet. But without lifestyle changes, adults and children with prediabetes are at high risk to develop type 2 diabetes.",
        beforeHighRisk: "People with prediabetes have a higher risk of",
        highRisk: " heart disease and stroke. ",
        afterHighRisk:
          "The risk of serious health problems increases even more for people with diabetes.",
        tip1: "Recipe for prevention of Diabetes: healthy eating and physical activity.",
        beforeHighStat: "One recent review suggests that the",
        highStat: " lifetime risk ",
        afterHighStat:
          "of males developing diabetes from the age of 20 years is 55.5%. In females, the figure is 64.6%",
        tip2: "Drinking water is another excellent way to help reverse prediabetes and prevent type 2 diabetes. Water helps control blood glucose levels, and it’s also a healthy substitute for sodas and fruit juices. Those beverages are typically high in sugar.",
        defSource:
          "https://www.mayoclinic.org/diseases-conditions/prediabetes/symptoms-causes/syc-20355278#:~:text=It's%20not%20high%20enough%20to,kidneys%20%E2%80%94%20may%20already%20be%20starting.",
        riskSource:
          "https://www.cdc.gov/diabetes/library/features/truth-about-prediabetes.html#:~:text=Diabetes%20Is%20Harder%20to%20Live%20With%20Than%20Prediabetes&text=The%20risk%20of%20serious%20health,%2C%20blindness%2C%20and%20nerve%20damage.",
        statSource: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7864818/",
        tip1Source:
          "https://www.hsph.harvard.edu/nutritionsource/disease-prevention/diabetes-prevention/preventing-diabetes-full-story/",
        tip2Source:
          "https://questionstoknow.com/does-drinking-water-help-diabetes",
      });
    } else if (userValue > 199 && userValue <= 240) {
      setVis({
        ...vis,
        bloodSugarValue: userValue,
        rangeUserValue: "diabetic",
        color: "red",
        beforeHighStatement: `Your blood sugar (${userValue} mg/dL) is in the `,
        afterHighStatement: " range.",
        def: "The underlying cause of diabetes varies by type. But, no matter what type of diabetes you have, it can lead to excess sugar in your blood. Too much sugar in your blood can lead to serious health problems.",
        beforeHighRisk:
          " Diabetes may leave you more susceptible to skin problems, including",
        highRisk: " bacterial and fungal ",
        afterHighRisk: "infections.",
        tip1: "Aim for about 30 minutes of moderate aerobic activity on most days of the week, or at least 150 minutes of moderate aerobic activity a week.",
        beforeHighStat: "",
        highStat: "11.2% ",
        afterHighStat:
          "of the population of India (1.33 billion) and China (1.39 billion) is diabetic.",
        tip2: "Oral diabetes drugs such as metformin (Glumetza, Fortamet, others) may reduce the risk of type 2 diabetes — but healthy lifestyle choices remain essential. Always consult your doctor before making these choices.",
        defSource:
          "https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444",
        riskSource:
          "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193#:~:text=Diabetes%20may%20leave%20you%20more,infections%2C%20which%20may%20heal%20poorly.",
        statSource:
          "https://www.healthline.com/health/diabetes/diabetes-in-india",
        tip1Source:
          "https://ebaptisthealthcare.org/Health/Disease/CON-20371420",
        tip2Source: "https://www.healthline.com/health/type-2-diabetes",
      });
    } else {
      setVis({
        ...vis,
        bloodSugarValue: userValue,
        rangeUserValue: "high",
        color: "red",
        beforeHighStatement: `Your blood sugar (${userValue} mg/dL) is in the `,
        afterHighStatement: " range.",
        def: "Hyperglycemia (high blood glucose) means there is too much sugar in the blood because the body lacks enough insulin. Associated with diabetes, hyperglycemia can cause vomiting, excessive hunger and thirst, rapid heartbeat, vision problems and other symptoms.",
        beforeHighRisk:
          "Untreated hyperglycemia for long periods of time, can damage your nerves, blood vessels, tissues and organs. which can increase your risk of",
        highRisk: " heart attack and stroke. ",
        afterHighRisk: "",
        tip1: "Adjustments to your insulin program or a supplement of short-acting insulin can help control hyperglycemia. A supplement is an extra dose of insulin used to help temporarily correct a high blood sugar level.",
        beforeHighStat: "The prevalence was",
        highStat: " 8.4 and 7.9%, respectively, ",
        afterHighStat:
          "in urban men and women, and 2.6 and 1.6% in rural men and women.",
        tip2: "Regular exercise is often an effective way to control your blood sugar. However, exercising if ketones are present in your urine can be harmful, check with your doctor first.",
        defSource:
          "https://my.clevelandclinic.org/health/diseases/9815-hyperglycemia-high-blood-sugar#:~:text=Hyperglycemia%20(high%20blood%20glucose)%20means,lead%20to%20serious%20health%20problems.",
        riskSource:
          "https://www.mayoclinic.org/diseases-conditions/hyperglycemia/symptoms-causes/syc-20373631",
        statSource:
          "https://hero.epa.gov/hero/index.cfm/reference/details/reference_id/6429435",
        tip1Source:
          "https://www.mayoclinic.org/diseases-conditions/hyperglycemia/diagnosis-treatment/drc-20373635",
        tip2Source:
          "https://www.cdc.gov/diabetes/managing/manage-blood-sugar.html#:~:text=Regular%20exercise%20can%20help%20keep,Take%20medicine%20as%20instructed.",
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      
      <UserInsight
        data={{
          beforeHigh: vis.beforeHighStatement,
          color: vis.color,
          high: vis.rangeUserValue,
          afterHigh: vis.afterHighStatement,
          shine: "EXPLAINED",
          fact: vis.def,
          source: vis.defSource,
        }}
      />
      <hr />
      <div className="projection inside-insight">
        <h2 className="sans-text proj-text">
          By the year 2045, Diabetes is projected to increase by{" "}
          <span className={`${vis.color}`}>46%.</span>
        </h2>
        <div className="proj-chart">
          <XYPlot
            width={450}
            height={300}
            yType="ordinal"
            margin={{ right: 70, left: 70 }}
          >
            <XAxis tickTotal={4} />
            <YAxis />
            <ChartLabel
              text="YEAR"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.46}
              yPercent={1.0}
            />

            <ChartLabel
              text="DIABETIC PATIENTS (MILLIONS)"
              className="alt-y-label"
              includeMargin={false}
              xPercent={0.06}
              yPercent={0.0}
              style={{
                transform: "rotate(-90)",
                textAnchor: "end",
              }}
            />
            <LineMarkSeries
              color={"darkred"}
              className="linemark-series-example"
              style={{
                strokeWidth: "3px",
              }}
              lineStyle={{ stroke: `${vis.color}` }}
              markStyle={{ stroke: "darkred" }}
              data={[
                { x: 2020, y: 537 },
                { x: 2030, y: 643 },
                { x: 2045, y: 783 },
              ]}
            />
          </XYPlot>
        </div>
      </div>
      <Source
        link={
          "https://www.idf.org/news/240:diabetes-now-affects-one-in-10-adults-worldwide.html#:~:text=IDF%20projections%20show%20that%20by,%25)%20over%20the%20same%20period."
        }
      />
      <hr />
      <UserInsight
        data={{
          beforeHigh: vis.beforeHighRisk,
          color: vis.color,
          high: vis.highRisk,
          afterHigh: vis.afterHighRisk,
          shine: "TIP",
          fact: vis.tip1,
          source: vis.tip1Source,
        }}
      />
      <hr />
      <section className="projection inside-insight">
        <h2 className="sans-text proj-text">
          1 in 12 adults in India (or 74 million people) are{" "}
          <span className={`${vis.color}`}>diabetic.</span>
        </h2>
        <div className="proj-chart">
          <RadialChart
            data={[
              { angle: 1,  color: "darkred" },
              { angle: 11, color: `${vis.color}` },
            ]}
            width={300}
            height={300}
            showLabels={true}
            colorType="literal"
          />
          <span className="diabetic-pie">DIABETIC</span>
        </div>
      </section>
      <Source
        link={
          "https://www.idf.org/index.php?option=com_attachments&task=download&id=2647:WDD2021_INDIA-_PR_Final#:~:text=These%20findings%20from%20the%2010th,after%20China%20(141%20million)."
        }
      />
      <hr />
      <UserInsight
        data={{
          beforeHigh: vis.beforeHighStat,
          color: vis.color,
          high: vis.highStat,
          afterHigh: vis.afterHighStat,
          shine: "TIP",
          fact: vis.tip2,
          source: vis.tip2Source,
        }}
      />
    </div>
  );
};

export default Insight;
