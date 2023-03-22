import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon  from "@material-ui/icons/Work";

import "../styles/Experience.css";


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="Jan-Apr 2022" iconStyle={{background: "#3e497a", color:"#fff"}} icon={<WorkIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    Hansoft Umans
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Bengaluru-Karnataka
                </h4>
                <p>Intern - Worked as an Asoociate Software Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" date="July-2022 Feb-2023" iconStyle={{background: "#3e497a", color:"#fff"}} icon={<WorkIcon/>}>
                <h3 className='vertical-timeline-element-title'>
                    Suvarna Tech Solutions
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Hubli-Karnataka
                </h4>
                <p>FullTime - Worked as an Full Stack Developer</p>
            </VerticalTimelineElement>
        </VerticalTimeline>   
    </div>
  )
}

export default Experience
