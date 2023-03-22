import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon  from "@material-ui/icons/School";
import "../styles/Experience.css";

function Education() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="Jan-Apr 2022" iconStyle={{background: "#3e497a", color:"#fff"}} icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    S G Shintri English Medium School Saundatti
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Saundatti - Karnataka
                </h4>
                <p>Marks - 84.64%</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="July-2022 Feb-2023" iconStyle={{background: "#3e497a", color:"#fff"}} icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                 JSS SMI UG AND PG Studies Dharwad - BCA
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Dharwad - Karnataka
                </h4>
                <p>Marks - 68.32%</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="July-2022 Feb-2023" iconStyle={{background: "#3e497a", color:"#fff"}} icon={<SchoolIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                 KLE Technological University Hubli - MCA
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Hubli - Karnataka
                </h4>
                <p>Marks - 8.1 cgpa</p>
            </VerticalTimelineElement>
        </VerticalTimeline>   
    </div>
  )
}

export default Education