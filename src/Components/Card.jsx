import '../Styles/Card.css'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { TbBrandReact } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";



function Card() {
  

    return (
      <>
      
<div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>REST</li>
                </ul>
                <div>
                  <DiHtml5 size={40}/>
                  <DiCss3  size={40} />
                  <DiJavascript size={40} />
                  <TbBrandReact size={40} />
                  <FaBootstrap size={40} />
                </div>
  </div>
</div>
        
      </>
    )
  }
  
  export default Card