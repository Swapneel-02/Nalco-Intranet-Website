import React, { useEffect, useRef } from "react";
// import slideimg from "../../images/carousel.jpg";
// import person from "../images/person.jpeg";
import { useState } from "react";
import { Tweet } from "react-twitter-widgets";
import Calendar from "react-calendar";
import "../../components/calender.css";
import library from "../../images/library.png";
import download from "../../images/download.png";
import mining from "../../images/mining.png";
import axios from "axios";
import bday from "../../images/bday.jpg";
import retire from "../../images/retire.jpg";
const Body = () => {
  // const navigate=useNavigate();
  // const [activeTab, setActiveTab] = useState(2);
  const [activeTab1, setActiveTab1] = useState(4);
  const [activeTab2, setActiveTab2] = useState(6);
  const [activeTab3, setActiveTab3] = useState(10);
  const [date, setdate] = useState(new Date());
  const cdate = [[1,'08-05-2023','def jayanti'],[2,'15-05-2023','abc jayanti'],[3,'08-06-2023','xyj jayanti']];
  const c1date = [[1,'09-05-2023','def jayanti'],[2,'16-05-2023','abc jayanti'],[3,'09-06-2023','xyj jayanti']];
  const [images,setimages]=useState([]);
  // const [det,setdet]=useState('');
  const[data1,setdata1]=useState([]);
  // const [i,seti]=useState(0);

  const eleref=useRef(null);
  useEffect(()=>{
    if(eleref.current){
      for(let i=2;i<document.getElementsByClassName("wrapper")[0].children[0].childElementCount;i=i+2){
        document.getElementsByClassName("wrapper")[0].children[0].children[i].style.backgroundColor="#e3f2fd";
      }
    }
  })
  const content=()=>{
    axios.get("https://newsdata.io/api/1/news?apikey=pub_103768b7e3375a6b6778cce86a9b1348bbc37&q=india")
    .then((res)=>{
      setdata1(res.data.results);
    })

    const headers = {
      'app-id': '6479bd6ac1c6923dc7ac0bd4',
    };
    
    const url = 'https://dummyapi.io/data/v1/user?limit=10';
    
    axios.get(url, { headers })
      .then(response => {
        // Handle the response
        // console.log(response.data.data);
        setimages(response.data.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });

  }
  useEffect(()=>{
    content();
  },[])

useEffect(()=>{
// console.log(images.length)
images.map((val,index)=>{
  // console.log(index)
})
},[images])
  // const handleClick = (tabNumber) => {
  //   setActiveTab(tabNumber);
  // };
  const handleClicks = (tabNumber) => {
    setActiveTab1(tabNumber);
  };
  const handleClicks1 = (tabNumber) => {
    setActiveTab2(tabNumber);
  };
  const handleClicks2 =(tabNumber)=>{
    setActiveTab3(tabNumber);
  }
  const direct =(link)=>{
    window.open(link);
  }
  useEffect(()=>{
    if(activeTab2===6){
      document.getElementsByClassName('col1div2')[0].style.backgroundImage="url('"+bday+"')";
      document.getElementsByClassName('col1div2')[0].style.backgroundRepeat="no-repeat";
      document.getElementsByClassName('col1div2')[0].style.backgroundSize="100% 100%";
    }
    else if(activeTab2===7){
      document.getElementsByClassName('col1div2')[0].style.backgroundImage="url('"+retire+"')";
      document.getElementsByClassName('col1div2')[0].style.backgroundRepeat="no-repeat";
      document.getElementsByClassName('col1div2')[0].style.backgroundSize="100% 100%";
    }
  });

  return (
    <>
      <div id="body">
        <div className="col1">
          <div className="col1div2">
            <div className="info" style={{ textAlign: "center" }}>
              <div>
                <span
                  className={
                    activeTab2 === 6 ? "active1 hover" : "nonactive hover"
                  }
                  onClick={() => handleClicks1(6)}
                >
                  Birthday
                </span>
                &nbsp;&nbsp;
                <span
                  className={
                    activeTab2 === 7 ? "active1 hover" : "nonactive hover"
                  }
                  onClick={() => handleClicks1(7)}
                >
                  Retirement
                </span>
              </div>
              <div style={{ marginTop: "2%" }}>
                {activeTab2 === 6 && (
                  
                  <div
                  id="carouselExampleIndicators1"
                  className="carousel slide carousel-fade person"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    {
                      images.map((val,index)=>{
                        if(index===0){
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 11"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                        else{
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to={index}
                      aria-label="Slide 21"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                      })
                    }
                  </div>
                  <div className="carousel-inner">
                    {
                      images.map((val,index)=>{
                      
                        if(index===0)
                        return(<>
                        <div  className="slideimg carousel-item active">
                      <img src={val.picture} className="d-block" alt="..." />
                      <div>
                        Happy Birthday <br />
                        {val.title+" "+val.firstName+" "+val.lastName}<br />
                        GM
                      </div>
                    </div>
                        </>)
                        else
                        return(<>
                          <div  className="slideimg carousel-item">
                        <img src={val.picture} className="d-block" alt="..." />
                        <div>
                          Happy Birthday <br />
                          {val.title+" "+val.firstName+" "+val.lastName}<br />
                          GM
                        </div>
                      </div>
                          </>)
                      })
                    }

                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="prev"
                  >
                    <span
                    style={{backgroundColor:"black"}}
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span  className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                      style={{backgroundColor:"black"}}
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                )}
                {activeTab2 === 7 && (
                  
                  <div
                  id="carouselExampleIndicators1"
                  className="carousel carousel-fade slide person"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    
                    {
                      images.map((val,index)=>{
                        if(index==0){
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 11"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                        else{
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to={index}
                      aria-label="Slide 21"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                      })
                    }
                  </div>
                  <div className="carousel-inner">
              
                    {
                      images.map((val,index)=>{
                      
                        if(index==0)
                        return(<>
                        <div  className="slideimg carousel-item active">
                      <img src={val.picture} className="d-block" alt="..." />
                      <div>
                        Happy Retirement <br />
                        {val.title+" "+val.firstName+" "+val.lastName}<br />
                        GM
                      </div>
                    </div>
                        </>)
                        else
                        return(<>
                          <div  className="slideimg carousel-item">
                        <img src={val.picture} className="d-block" alt="..." />
                        <div>
                          Happy Retirement <br />
                          {val.title+" "+val.firstName+" "+val.lastName}<br />
                          GM
                        </div>
                      </div>
                          </>)
                      })
                    }
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="prev"
                  >
                    <span
                    style={{backgroundColor:"black"}}
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span  className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                      style={{backgroundColor:"black"}}
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                )}
              </div>
            </div>
          </div>
          <div>
          <Calendar onChange={setdate} value={date} 
            tileClassName={({date})=>{
              let day=date.getDate();
              let month=date.getMonth()+1;
              if(day<10)
              day='0'+day;
              if(month<10)
              month='0'+month;
              let year=date.getFullYear();
              let rdate=day+"-"+month+"-"+year;
              if(cdate.find((val)=>{
                if(val[1]===rdate){
                  return true;
                }
                else{
                  return false;
                }
              })){
                return 'highlight';
              }
              else if(c1date.find((val)=>{
                if(val[1]===rdate){
                  return true;
                }
                else{
                  return false;
                }
              })){
                return 'highlight1';
              }
              else{
                return '';
              }
            }}
            tileContent={({date})=>{
              let day=date.getDate();
              let cday=day;
              let month=date.getMonth()+1;
              if(day<10)
              day='0'+day;
              if(month<10)
              month='0'+month;
              let year=date.getFullYear();
              let rdate=day+"-"+month+"-"+year;
              if(cdate.find(val=>{
                if(val[1]===rdate){
                  for(let i=0;i<document.getElementsByClassName('highlight').length;i++){
                    if(document.getElementsByClassName('highlight')[i].children[0].innerHTML==cday){
                      document.getElementsByClassName('highlight')[i].children[0].classList.add('hover');
                      document.getElementsByClassName('highlight')[i].children[0].title=val[2];

                    }
                  }
                  return true;
                }
                else{
                  return false;
                }
              })){
                //
              }
              else if(c1date.find(val=>{
                if(val[1]===rdate){
                  for(let i=0;i<document.getElementsByClassName('highlight1').length;i++){
                    if(document.getElementsByClassName('highlight1')[i].children[0].innerHTML==cday){
                      document.getElementsByClassName('highlight1')[i].children[0].classList.add('hover');
                      document.getElementsByClassName('highlight1')[i].children[0].title=val[2];

                    }
                  }
                  return true;
                }
                else{
                  return false;
                }
              })){
                //
              }
              return '';
            }}
            />
            {/* <Tweet tweetId="1658008488927191040" /> */}
          </div>
        </div>

        {/* col2 jsx */}
        <div className="col2">
          <div id="col2box1">
            <div
              id="carouselExampleIndicators"
              className="carousel carousel-fade slide wide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
              {
                      images.map((val,index)=>{
                        if(index==0){
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 11"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                        else{
                          return(<>
                          <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      aria-label="Slide 21"
                      style={{display:"none"}}
                    ></button>
                          </>)
                        }
                      })
                    }
                {/* <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button> */}
              </div>
              <div className="carousel-inner">
              {
                      images.map((val,index)=>{
                      
                        if(index==0)
                        return(<>
                        <div  className="slideimg carousel-item active">
                      <img src={val.picture} className="d-block" alt="..." />
                    </div>
                        </>)
                        else
                        return(<>
                          <div  className="slideimg carousel-item">
                        <img src={val.picture} className="d-block" alt="..." />
                      </div>
                          </>)
                      })
                    }
                {/* <div className="slideimg carousel-item active">
                  <img src={slideimg} className="d-block" alt="..." />
                </div>
                <div className="slideimg carousel-item">
                  <img src={slideimg} className="d-block" alt="..." />
                </div>
                <div className="slideimg carousel-item">
                  <img src={slideimg} className="d-block" alt="..." />
                </div> */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{backgroundColor:"black"}}
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{backgroundColor:"black"}}
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div id="box4_2">
            <div>
              <span
                className={activeTab1 === 4 ? "active0" : "nonactive"}
                onClick={() => handleClicks(4)}
              >
                Circulars
              </span>
              <span
                className={activeTab1 === 5 ? "active0" : "nonactive"}
                onClick={() => handleClicks(5)}
              >
                Notices
              </span>
              <span
                className={activeTab1 === 6 ? "active0" : "nonactive"}
                onClick={() => handleClicks(6)}
              >
                Support
              </span>
              <span
                className={activeTab1 === 7 ? "active0" : "nonactive"}
                onClick={() => handleClicks(7)}
              >
                Important Links
              </span>
              <span
                className={activeTab1 === 8 ? "active0" : "nonactive"}
                onClick={() => handleClicks(8)}
              >
                Miscellaneous
              </span>
              <span
                className={activeTab1 === 9 ? "active0" : "nonactive"}
                onClick={() => handleClicks(9)}
              >
                HRD
              </span>
              <span
                className={activeTab1 === 12 ? "active0" : "nonactive"}
                onClick={() => handleClicks(12)}
              >
                Blacklisted/Banned Vendors
              </span>
              <span
                className={activeTab1 === 13 ? "active0" : "nonactive"}
                onClick={() => handleClicks(13)}
              >
                CC & CSR
              </span>
              <span
                className={activeTab1 === 14 ? "active0" : "nonactive"}
                onClick={() => handleClicks(14)}
              >
                SA 8000
              </span>
              <div>
                {activeTab1 === 4 && (
                  <p ref={eleref} className="wrapper">
                      <table>
                        <tr>
                        <th style={{width:'20%',padding:'5px'}}>Upload Date</th>
                        <th style={{width:'70%',padding:'5px'}}>Circular</th>
                        <th style={{width:'5%',padding:'5px'}}>View</th>
                        </tr>
                        {
                          data1.map((value)=>{
                            return(
                              <>
                        <tr>
                          <td style={{width:'20%'}}>{value.pubDate.split(" ")[0]}</td>
                          <td style={{width:'70%'}}>{value.title}</td>
                          <td style={{width:'5%'}}>
                            <a href="/" download={"../a.pdf"}>
                              <img src={download} width={18} alt="" srcset="" />
                            </a>
                          </td>
                        </tr>

                              </>
                            );
                          })
                        }
   </table>
                  </p>
                )
                }
                {activeTab1 === 5 && (
                  <p>
                    <ul>
                      <li>
                        <a href="/">Checklists for Bills Submission to Finance Deptt</a>
                      </li>
                      <li>
                        <a href="/">Minimum Wages Rate Chart</a>
                      </li>
                      <li>
                        <a href="/">Email ID nomenclature policy</a>
                      </li>
                      <li>
                        <a href="/">SOP for NALCO's Website Maintainance</a>
                      </li>
                      <li>
                        <a href="/">Economy Measures: Dt.28-Oct-2013</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive Dt.28-Jul-2012</a>
                      </li>
                      <li>
                        <a href="/">Austerity Measures Dt.18-May-2013</a>
                      </li>
                      <li>
                        <a href="/">Corporate Measures, Vision & Core values</a>
                      </li>
                      <li>
                        <a href="/">Compendium on Guidlines on Works,Goods and Services - A Ready Reckner</a>
                      </li>
                    </ul>
                  </p>
                )}
                {activeTab1 === 6 && (
                  <p>
                    <ul>
                      <li>
                        <a href="/">Call Registration</a>
                      </li>
                      <li>
                        <a href="/">Call Maintainance (Hardware Team)</a>
                      </li>
                      <li>
                      Downloads: <span><a href="/">Smelter</a>|<a href="/">Refinery</a>|<a href="/">CPP</a></span>
                      </li>
                      <li>
                        <a href="/">Software Change Request Form</a>
                      </li>
                      <li>
                        <a href="/">Software Requisition Form</a>
                      </li>
                      <li>
                        <a href="/">Feedback</a>
                      </li>
                      <li>
                        <a href="/">Restore Citrix APPIN</a>
                      </li>
                      <li>
                        <a href="/">Password Tips</a>
                      </li>
                      <li>
                        <a href="/">Printer Tips</a>
                      </li>
                      <li>
                        <a href="/">PC Performance Booster</a>
                      </li>
                    </ul>
                  </p>
                )}
                {activeTab1 === 7 && (
                  <p>
                    <ul>
                      <li>
                        <a href="/">Nalco Applications</a>
                      </li>
                      <li>
                        <a href="/">Nalco Live Tenders - Login</a>
                      </li>
                      <li>
                        <a href="/">Find A Nalconian</a>
                      </li>
                      <li>
                        <a href="/">Holiday List</a>
                      </li>
                      <li>
                        <a href="/">Birthday List@NALCO</a>
                      </li>
                      <li>
                        <a href="/">Superannuating List(Nalco)</a>
                      </li>
                      <li>
                        <a href="/">NALCO LEARNING PORTAL</a>
                      </li>
                      <li>
                        <a href="/">eOffice@NALCO</a>
                      </li>
                      <li>
                        <a href="/">SAMPARK</a>
                      </li>
                      <li>
                        <a href="/">High Performers Of NALCO-2020</a>
                      </li>
                      <li>
                        <a href="/">SANGINEE(Apr-Jun)</a>
                      </li>
                      <li>
                        <a href="/">Akshar Magazine</a>
                      </li>
                      <li>
                        <a href="/">ANWESAHN e-Patrika</a>
                      </li>
                      <li>
                        <a href="/">Signed MOU FY=2002-2023</a>
                      </li>

              
                    </ul>
                  </p>
                )}
                {activeTab1 === 8 && (
                  <p>
                    <ul>
                      <li>
                       CPPP : <span><a href="/">USER Guide</a>|<a href="/">Step By Step Guide</a>|<a href="/">User Datasheet Nalco</a></span>
                      </li>
                      <li>
                        <a href="/">ISO 27001 Forms</a>
                      </li>
                      <li>
                       NonDisclosure Agreement &nbsp;<span><a href="/">[PDF Format]</a>|<a href="/">[Word Format]</a></span>
                      </li>
                      <li>
                        <a href="/">All Naclo Old to SAP PNo(Excel)</a>
                      </li>
                      <li>
                      MIS : <span><a href="/">Smelter</a>|<a href="/">Mines</a>|<a href="/">Refinery</a></span>
                      </li>
                      <li><a href="/">Procedure Of Making OCR based PDF files</a></li>
                      <li><a href="/">How to digitally sign a document</a></li>
                      <li><a href="/">Guidlines For Indian Government Websites(GIGW)</a></li>
                    </ul>
                  </p>
                )}
                {activeTab1 === 9 && (
                  <p>
                    <ul>
                      <li>
                        <a href="/">DOP 2011</a>
                      </li>
                      <li>
                        <a href="/">HR Department page</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                      <li>
                        <a href="/">Online execeutive appraisal</a>
                      </li>
                    </ul>
                  </p>
                )}
                {activeTab1 === 12 && 
                <p>
                <ul>
                  <li>
                    <a href="/">DOP 2011</a>
                  </li>
                  <li>
                    <a href="/">HR Department page</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                  <li>
                    <a href="/">Online execeutive appraisal</a>
                  </li>
                </ul>
              </p>}
                {activeTab1 === 13 && <p>Content for Button 3</p>}
                {activeTab1 === 14 && <p>Content for Button 4</p>}
              </div>
            </div>
          </div>
        </div>

        {/* col3 jsx */}

        <div className="col3">
          <div>
            <p className="col3p" onClick={()=>direct('https://www.google.com')}>
              <p>
                National Digital <br /> Library Of India <br />
              </p>
              <img src={library} alt="" />
            </p>
            <p className="col3p">
              <p>
                National Digital <br /> Library Of India <br />
              </p>
              <img src={library} alt="" />
            </p>
            <p className="col3p">
              <p>
                National Digital <br /> Library Of India <br />
              </p>
              <img src={library} alt="" />
            </p>
          </div>

          <div>
            <div style={{display:"block"}}>
              <input type="radio" name="radio1" id="nalcotweet" onClick={()=>handleClicks2(10)} defaultChecked={true}/> Ministry of Mines Tweets &nbsp;&nbsp;
              <input type="radio" name="radio1" id="minestweet" onClick={()=>handleClicks2(11)}/>  Nalco Tweets
            </div>
            <div>
            <div>
              {
                activeTab3===10?
                <Tweet tweetId="1658008488927191040" />
                :<></>
              }
              {
                activeTab3===11?
                <Tweet tweetId="1665704315342798848"/>
                :<></>
              }
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <img src={mining} width={"100%"} style={{aspectRatio:"14/1"}} alt="" srcset="" />
      </div>
    </>
  );
};

export default Body;
