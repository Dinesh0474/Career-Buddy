import React from "react";
import { MarkerType } from "reactflow";
import CharteredAccountancyLink1 from './direct/CharteredAccountancyLink1';
import CptLink from "./direct/CptLink";
import CaInter from "./direct/CaInter";
import ArticleLink from "./direct/ArticleLink";
import CaFinal from "./direct/CaFinal";
import Hyref from "./Hyref";
export const nodes = [[
  {
    id: "1",
    type: "input",
    data: {
      label: "Passionate in Math and Finance",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",

    data: {
      label: <CharteredAccountancyLink1/>
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label:  <CptLink/>
    },
    position: { x: 400, y: 100 },
    // style: {
    //   background: "#D6D5E6",
    //   color: "#333",
    //   border: "1px solid #222138",
    //   width: 180,
    // },
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: {
      label: <Hyref link="https://youtu.be/XkBWJQdAnKY?si=UhNnql-oun0zlYhQ" label="CA Intermediate Exam"/>
    },
  },
  {
    id: "5",
    data: {
      label: <ArticleLink/>
    },
    position: { x: 250, y: 325 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label: <CaFinal/>
    },
    position: { x: 250, y: 425 },
  },
 
],[
  {
    id: "1",
    type: "input",
    data: {
      label: "Passionate in Maths and Finance",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",

    data: {
      label: <Hyref label="UnderGraduate Student"/>
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label:  <Hyref link="https://youtu.be/0hWtmLgHN9Y?si=yeHPQvhbzluQVjWE" label="Eligibility"/>
    },
    position: { x: 400, y: 100 },
   
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: {
      label: <Hyref link="https://youtu.be/KwbkphPz_h4?si=Q_IL1oF3myQAdvq7" label="Foundation Course"/>
    },
  },
  {
    id: "5",
    data: {
      label: <Hyref link="https://youtu.be/f0fIwKmieGQ?si=4j5qEnMryZBXJuK0" label=" Intermediate Course"/>
    },
    position: { x: 250, y: 325 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label: <Hyref link ="https://youtu.be/_JjoCQiFHgc?si=PVDq7XzBZ1SjuXAc" label="Final Course"/>
    },
    position: { x: 250, y: 425 },
  },
 
],[
  {
  id: "1",
  type: "input",
  data: {
    label: "Bachelor's Degree in Any Field from Recognised University",
  },
  position: { x: 250, y: 0 },
},
{
  id: "2",

  data: {
    label: "Income Tax (Branch 1)"
  },
  position: { x: 100, y: 100 },
},
{
  id: "3",
  data: {
    label:  "Custom and Indirect Taxes (Branch 2)"
  },
  position: { x: 400, y: 100 },
  // style: {
  //   background: "#D6D5E6",
  //   color: "#333",
  //   border: "1px solid #222138",
  //   width: 180,
  // },
},
{
  id: "4",
  position: { x: 250, y: 200 },
  data: {
    label: "Age limit from 21 to 32 (Varies Based On Category)"
  },
},
{
  id: "5",
  data: {
    label:  <Hyref link="https://vajiramandravi.com/upsc-ias-exam/irs-exam/" label="UPSC Prelims and Mains"/>
  },
  position: { x: 250, y: 325 },
},
{
  id: "6",
  type: "output",
  data: {
    label: <Hyref link="https://youtu.be/Yp3aUdDIaFg?si=7qGy_jnMoVSQ21nq" label="Interview And Selection"/>
  },
  position: { x: 250, y: 425 },
}],
[
  {
    id: "1",
    type: "input",
    data: {
      label: "Passionate in Biology and Maths",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
  
    data: {
      label: "Deep Knowlege in 12TH Biology,Physics and Chemistry"
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label:  <Hyref link="https://unacademy.com/content/neet-ug/notification/eligibility/" label="Eligibility"/>
    },
    position: { x: 400, y: 100 },
    // style: {
    //   background: "#D6D5E6",
    //   color: "#333",
    //   border: "1px solid #222138",
    //   width: 180,
    // },
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: {
      label: <Hyref link="https://www.youtube.com/live/2v-GK-xVtVI?si=QgYBwKm9wC3OE0EM" label ="720 to 137 for the general category and 136 to 107 for OBC/SC/ST."/>
    },
  },
  {
    id: "5",
    data: {
      label:  <Hyref link="https://unacademy.com/content/neet-ug/study-material/" label="Study Materials"/>
    },
    position: { x: 250, y: 325 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label:"Cracking NEET AND 5 years of MBBS"
    },
    position: { x: 250, y: 425 },
  }


],
[
  {
    id: "1",
    type: "input",
    data: {
      label: "Bachelor's Degree in Economics",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",

    data: {
      label: "Master's Degree in Business Administration"
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label:  <Hyref link="https://www.simplilearn.com/project-management" label="Project Management Professional (NOT NECESSARY)"/>
    },
    position: { x: 400, y: 100 },
    // style: {
    //   background: "#D6D5E6",
    //   color: "#333",
    //   border: "1px solid #222138",
    //   width: 180,
    // },
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: {
      label: <Hyref link="https://youtu.be/NBhMEHn0VF8?si=p_--bHZNeoX9wkR0" label="Skill Development"/>
    },
  },
  {
    id: "5",
    data: {
      label: "Networking and Building Relationships"
    },
    position: { x: 250, y: 325 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label: "Job Application and Interview Process"
    },
    position: { x: 250, y: 425 },
  },
 
]
];



export const edges = [[
  { id: "e1-2", source: "1", target: "2", label: "Eligibility",  style: {
    strokeWidth: 2,
    stroke: '#000000',
  }, },
  { id: "e1-3", source: "2", target: "3" ,  style: {
    strokeWidth: 2,
    stroke: '#000000',
  },},
  {id: "e1-4", source: "3", target: "4",label:"Process"},
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label: "Process",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    label: "3 Years",
  },

],[
  { id: "e1-2", source: "1", target: "2",   style: {
    strokeWidth: 2,
    stroke: '#000000',
  }, },
  { id: "e1-3", source: "2", target: "3" },
  {id: "e1-4", source: "3", target: "4"},
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label: "Process",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    label:"Process",
    
  },

],[
  { id: "e1-2", source: "1", target: "2", label: "Eligibility" },
  { id: "e1-3", source: "2", target: "3" ,label:"Eligibility"},
  {id: "e1-4", source: "3", target: "4"},
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label: "Process",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    
  },

],[
  { id: "e1-2", source: "1", target: "2", label: "Branch 1" },
  { id: "e1-3", source: "1", target: "3" ,label:"Branch 2"},
  {id:"el-4",source:"2",target:"4"},
  {id: "e1-5", source: "3", target: "4"},
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label:"Max Attempts (6)",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    
  },

],[
  { id: "e1-2", source: "1", target: "2", label: "Branch 1" },
  { id: "e1-3", source: "2", target: "3" ,label:"Branch 2"},
  {id: "e1-5", source: "3", target: "4", label:"Minimum CuTT OFF"},
  {
    id: "e4-5",
    source: "4",
    target: "5",
    label:"Max Attempts (6)",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    
  },

]
].map(edgeArray => edgeArray.map(edge => ({ ...edge, style: { strokeWidth: 2, stroke: '#000000' } })));;
