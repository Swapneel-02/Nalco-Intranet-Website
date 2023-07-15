import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  const [counter,setcounter]=useState(2);
  function chg(){
    if(counter==1)
    setcounter(2);
    else
    setcounter(1);
  }
  useEffect(()=>{
    props.handle(counter);
  },[counter])
  return (
  
    <ul id="navbar">
      <li>
        <a>Applications</a>
        <ul>
          <li>
            <a href="/">Nalco Applications</a>
          </li>
          <li>
            <a href="/">GHRS</a>
          </li>
          <li>
            <a href="/">Find a Nalconian</a>
          </li>
          <li>
            <a href="/">My Data</a>
          </li>
          <li>
            <a href="/">Exec. Appraisal</a>
          </li>
          <li>
            <a href="/">System Maint. Call</a>
          </li>
          <li>
            <a href="/">Nalco Library</a>
          </li>
          <li>
            <a href="/">Lotus Notes</a>
          </li>
          <li>
            <a href="/">Nalco Live Tenders - Login</a>
          </li>
          <li>
            <a href="/">Property Returns</a>
          </li>
          <li>
            <a href="/">eGreetings</a>
          </li>
          <li>
            <a href="/">Contact Labour Mgmt</a>
          </li>
          <li>
            <a href="/">Compliance Management</a>
          </li>
          <li>
            <a href="/">Vigilance Complaint Lodging</a>
          </li>
          <li>
            <a>E Office »</a>
            <ul>
              <li>
                <a href="/">eOffice (Production)</a>
              </li>
              <li>
                <a href="/">eOffice Demo</a>
              </li>
              <li>
                <a href="/">eOffice Documents</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a>Policies</a>
        <ul>
          <li>
            <a href="/">corporate Vision, Mission & Core values</a>
          </li>
          <li>
            <a href="/">Quality Policy</a>
          </li>
          <li>
            <a href="/">Enviroment Policy</a>
          </li>
          <li>
            <a href="/">Energy Policy</a>
          </li>
          <li>
            <a href="/">Accounting Policy</a>
          </li>
          <li>
            <a href="/">OHS Policy</a>
          </li>
          <li>
            <a>HR »</a>
            <ul>
              <li>
                <a href="/">HR Vision & Mission</a>
              </li>
              <li>
                <a href="/">Company You Keep</a>
              </li>
            </ul>
          </li>
          <li>
            <a>IT Policies »</a>
            <ul>
              <li>
                <a>IT Security Policy »</a>
                <ul>
                  <li>
                    <a href="/">English</a>
                  </li>
                  <li>
                    <a href="/">Hindi</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">IT Resource Allocation Policy</a>
              </li>
              <li>
                <a href="/">IT Security Guidline</a>
              </li>
              <li>
                <a href="/">IT Acceptable Use Policy</a>
              </li>
              <li>
                <a href="/">E-mail ID Nomenclature</a>
              </li>
              <li>
                <a href="/">Nalco Cyber Security Guidlines</a>
              </li>
              <li>
                <a href="/">Dos and Don'ts for Computer Users</a>
              </li>
              <li>
                <a href="/">Password Policy(Lotus)</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Whistle Blower »</a>
            <ul>
              <li>
                <a href="/">Whistle Blower Policy(English)</a>
              </li>
              <li>
                <a href="/">Whistle Blower Policy(Odia)</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a>Manuals</a>
        <ul>
          <li>
            <a href="/">HR Manual</a>
          </li>
          <li>
            <a href="/">Purchase Manual</a>
          </li>
          <li>
            <a href="/">Contract Manual</a>
          </li>
          <li>
            <a href="/">Capital Budget</a>
          </li>
          <li>
            <a href="/">Stores Manual</a>
          </li>
          <li>
            <a href="/">Consultant Guidline</a>
          </li>
          <li>
            <a href="/">Annual Reports</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Forms</a>
        <ul>
          <li>
            <a href="/">PESB Appraisal</a>
          </li>
          <li>
            <a href="/">Peon Book</a>
          </li>
          <li>
            <a>Leave »</a>
            <ul>
              <li>
                <a href="/">Leave Encashment</a>
              </li>
              <li>
                <a href="/">Leave Application</a>
              </li>
              <li>
                <a href="/">Special Disabilty Leave</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Medical »</a>
            <ul>
              <li>
                <a href="/">Medical Claim(NT)</a>
              </li>
              <li>
                <a href="/">Medical Claim(Tx)</a>
              </li>
              <li>
                <a href="/">Accident Report</a>
              </li>
              <li>
                <a href="/">PME Requistion Report</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Telephone »</a>
            <ul>
              <li>
                <a href="/">Telephone Bill Claim</a>
              </li>
              <li>
                <a href="/">Phone(Non-Exe)</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Tour »</a>
            <ul>
              <li>
                <a href="/">Tour Prog-cum-adv</a>
              </li>
              <li>
                <a href="/">TA Bills</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">LTC Form</a>
          </li>
          <li>
            <a>Loan »</a>
            <ul>
              <li>
                <a href="/">Special Advance</a>
              </li>
              <li>
                <a href="/">Mortgage Deed From For Motor Vehicle</a>
              </li>
              <li>
                <a href="/">Surety Bond For MVA(Appendix-B)</a>
              </li>
              <li>
                <a href="/">Appendix-D(For Drawl of MVA)</a>
              </li>
              <li>
                <a href="/">Composite Personal Advance Surety Bond</a>
              </li>
            </ul>
          </li>
          <li>
            <a>PF »</a>
            <ul>
              <li>
                <a href="/">PF Nomination</a>
              </li>
              <li>
                <a href="/">PF Settlement-Emp</a>
              </li>
              <li>
                <a href="/">PF Settlment Nominee</a>
              </li>
              <li>
                <a href="/">PF NR Loan(Land-House)</a>
              </li>
              <li>
                <a href="/">EPFO's Declaration Form(Form 11)</a>
              </li>
              <li>
                <a href="/">Form 10D(Pension)</a>
              </li>
            </ul>
          </li>
          <li>
            <a>NPS »</a>
            <ul>
              <li>
                <a href="/">NPS(CSRF1) Registration</a>
              </li>
              <li>
                <a href="/">NPS Membership</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Application / NOC / Declaration »</a>
            <ul>
              <li>
                <a href="/">Prequisite Forms</a>
              </li>
              <li>
                <a href="/">Inclusion of Dependent family members</a>
              </li>
              <li>
                <a href="/">Passport NOC</a>
              </li>
              <li>
                <a href="/">Application for Gratuity</a>
              </li>
              <li>
                <a href="/">Marriage Declaration Form</a>
              </li>
              <li>
                <a href="/">Application of Paternity Leave</a>
              </li>
              <li>
                <a>HRA Reimbursment »</a>
                <ul>
                  <li>
                    <a href="/">Annexure-B</a>
                  </li>
                  <li>
                    <a href="/">Annexure-C</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Details of Foreign Visits</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Nomination »</a>
            <ul>
              <li>
                <a href="/">Membership For Executive Family Welfare Scheme And Nomination</a>
              </li>
              <li>
                <a href="/">Membership For NEFFARS and Nomination</a>
              </li>
              <li>
                <a href="/">Membership For Benevolent and Nomination</a>
              </li>
              <li>
                <a href="/">Nomination For Group Insurance Scheme</a>
              </li>
              <li>
                <a href="/">Nomination For Gratuity</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Income Tax »</a>
            <ul>
              <li>
                <a href="/">Itax Proposal</a>
              </li>
              <li>
                <a href="/">Income Tax HB Proposal</a>
              </li>
              <li>
                <a href="/">IT 80U Declaration</a>
              </li>
              <li>
                <a href="/">Declaration For Tution Fees</a>
              </li>
              <li>
                <a href="/">Declaration FOr IT Exemption on LTC</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Requistion / Booking »</a>
            <ul>
              <li>
                <a href="/">Request For Guest House Accomodation at S&P Complex</a>
              </li>
              <li>
                <a href="/">Request For Guest House Accomodation at Bhubaneswar</a>
              </li>
              <li>
                <a href="/">Vehicle Requisition</a>
              </li>
              <li>
                <a href="/">Air Ticket Booking</a>
              </li>
              <li>
                <a href="/">Software Requisition</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Contract Cell »</a>
            <ul>
              <li>
                <a href="/">CONTRACT INITIATION FORM</a>
              </li>
              <li>
                <a href="/">Justification Of The Estimate</a>
              </li>
              <li>
                <a href="/">Inpriciple approval of CMD</a>
              </li>
              <li>
                <a href="/">Work Completion Certificate</a>
              </li>
              <li>
                <a href="/">No Due Certifiate</a>
              </li>
              <li>
                <a href="/">No Claim Certificate</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Purchase »</a>
            <ul>
              <li>
                <a href="/">Inprinciple approval of CMD</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Training »</a>
            <ul>
              <li>
                <a href="/">External Trg Feedback</a>
              </li>
              <li>
                <a href="/">Internship Application</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Systems »</a>
            <ul>
              <li>
                <a href="/">ISO 27001 Forms</a>
              </li>
              <li>
                <a href="/">SAP USER CREATION,MODIFICATION REQUEST FORM</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Bilingual Templates »</a>
            <ul>
              <li>
                <a href="/">CO Letter Head</a>
              </li>
              <li>
                <a href="/">IOM of Corporate Office</a>
              </li>
            </ul>
          </li>
          <li>
            <a>NDA Format »</a>
            <ul>
              <li>
                <a href="/">PDF</a>
              </li>
              <li>
                <a href="/">Word Doc</a>
              </li>
            </ul>
          </li>
          <li>
            <a>DSC Application Form »</a>
            <ul>
              <li>
                <a href="/">DSC Application(Sify)</a>
              </li>
              <li>
                <a href="/">DSC Application(SOP)</a>
              </li>
            </ul>
          </li>
          <li>
                <a href="/">Application for C-Type Quarter</a>
          </li>
          <li>
                <a href="/">Application for D-Type Quarter</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Downloads</a>
        <ul>
          <li>
            <a href="/">Medical Empanelled List</a>
          </li>
          <li>
            <a href="/">Find a Nalconinan(Old ver.)</a>
          </li>
          <li>
            <a href="/">Parichaya</a>
          </li>
          <li>
            <a>Softwares »</a>
            <ul>
              <li>
                <a href="/">Acrobat Reader</a>
              </li>
              <li>
                <a href="/">Trend Micro Client</a>
              </li>
              <li>
                <a href="/">Cute PDF Writer</a>
              </li>
              <li>
                <a href="/">Citrix</a>
              </li>
              <li>
                <a href="/">Lotus Notes</a>
              </li>
              <li>
                <a href="/">SAP Client</a>
              </li>
              <li>
                <a href="/">Mozilla Firefox</a>
              </li>
              <li>
                <a href="/">Chrome Browser</a>
              </li>
              <li>
                <a href="/">Cleanup</a>
              </li>
              <li>
                <a href="/">dopdf</a>
              </li>
              <li>
                <a href="/">AnyDesk</a>
              </li>
              <li>
                <a href="/">Ammyy Admin</a>
              </li>
              <li>
                <a href="/">Java</a>
              </li>
              <li>
                <a href="/">Flashplayer</a>
              </li>
              <li>
                <a href="/">Polycom VS Desktop Client</a>
              </li>
              <li>
                <a href="/">Polycom VS Screen Share</a>
              </li>
              <li>
                <a href="/">Cisco VPN</a>
              </li>
              <li>
                <a href="/">Hindi Language</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Lokpal Assets & Liabilities</a>
          </li>
          <li>
            <a href="/">Information Security Awareness</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Department</a>
        <ul>
          <li>
            <a href="/">HRD</a>
          </li>
          <li>
            <a href="/">Finance</a>
          </li>
          <li>
            <a>Systems/ERP »</a>
            <ul>
              <li>
                <a href="/">Systems/IT</a>
              </li>
              <li>
            <a>SAP »</a>
            <ul>
              <li>
                <a href="/">SAP Password Reset</a>
              </li>
              <li>
                <a href="/">SAP Password Reset User Manual</a>
              </li>
              <li>
                <a href="/">ERP @ Nalco</a>
              </li>
              <li>
                <a href="/">ERP Portal</a>
              </li>
              <li>
                <a href="/">SRM7 Production</a>
              </li>
              <li>
                <a href="/">SRM7 Quality</a>
              </li>
              <li>
                <a href="/">SRM7 Development</a>
              </li>
            </ul>
          </li>
            </ul>
          </li>
          <li>
            <a href="/">Raj bhasa</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Useful Links</a>
        <ul>
        <li>
            <a href="/">Nalco's Portal Apps - Outside Access »</a>
            <ul>
              <li>
                <a href="/">Hamesha Nalconian</a>
              </li>
              <li>
                <a href="/">CLMS Portal</a>
              </li>
              <li>
                <a href="/">Nalco for MSE</a>
              </li>
              <li>
                <a href="/">CSR</a>
              </li>
            </ul>
          </li>
        <li>
            <a>GST »</a>
            <ul>
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">LAW and procedures</a>
              </li>
              <li>
                <a href="/">Benefits</a>
              </li>
              <li>
                <a href="/">IGST</a>
              </li>
              <li>
                <a href="/">Meaning and Scope of Supply</a>
              </li>
              <li>
                <a href="/">Imports</a>
              </li>
              <li>
                <a href="/">Jobwork</a>
              </li>
              <li>
                <a href="/">Input tax credit mechanism</a>
              </li>
              <li>
                <a href="/">Transition Provisions</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">Recovery of Tax</a>
              </li>
              <li>
                <a href="/">Refunds</a>
              </li>
              <li>
                <a href="/">Accounts and Records</a>
              </li>
              <li>
                <a href="/">TCS-Mechanism</a>
              </li>
              <li>
                <a href="/">TDS-Mechanism</a>
              </li>
              <li>
                <a href="/">Inspection Search Seizure Arrest</a>
              </li>
              <li>
                <a href="/">GST Practitioners</a>
              </li>
              <li>
                <a href="/">Provisional GST ID</a>
              </li>
              <li>
                <a href="/">FAQ(Second Edition)</a>
              </li>
              <li>
                <a href="/">FAQ on Migration</a>
              </li>
              <li>
                <a href="/">Notification 10</a>
              </li>
              <li>
                <a href="/">Notification 11</a>
              </li>
              <li>
                <a href="/">Notification 12</a>
              </li>
              <li>
                <a href="/">Registration</a>
              </li>
              <li>
                <a href="/">Goods Rates</a>
              </li>
              <li>
                <a href="/">Service Rates</a>
              </li>
              <li>
                <a href="/">Importers & Exporters</a>
              </li>
              <li>
                <a href="/">FAQ on exports</a>
              </li>
              <li>
                <a href="/">Sectoral Series</a>
              </li>
              <li>
                <a href="/">LD Treattment</a>
              </li>
              <li>
                <a href="/">Metal Transportation</a>
              </li>
              <li>
                <a href="/">Change in Buisness Process</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Nalco Learning Portal</a>
          </li>
          <li>
            <a href="/">Nalco News</a>
          </li>
          <li>
            <a href="/">Bureau of Indian Standards</a>
          </li>
          <li>
            <a href="/">Indian Government</a>
          </li>
          <li>
            <a href="/">Knowledge Management Portal For CPSEs</a>
          </li>
          <li>
            <a href="/">The Gazette of India</a>
          </li>
          <li>
            <a href="/">Nalco Learning Portal</a>
          </li>
          <li>
            <a href="/">DPE</a>
          </li>
          <li>
            <a href="/">Income Tax E-Filing</a>
          </li>
          <li>
            <a href="/">Login to NPS</a>
          </li>
          <li>
            <a href="/">Indian Rail Info</a>
          </li>
          <li>
            <a href="/">IRCTC</a>
          </li>
          <li>
            <a href="/">Flight Booking</a>
          </li>
          
        </ul>
      </li>
     <li style={{paddingTop:"5px"}}>
     <label class="switch1">
  <input onClick={()=>{chg()}} type="checkbox"/>
  <span class="slider1"></span>
</label>
     </li>
    </ul>
  );
};

export default Navbar;
