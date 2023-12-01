import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';



const IntakeForm = () => {
   
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    maritalStatus: "",
    occupation: "",
    age: "",
    dob: "",
    dateOfIntake: "",
    dateOfAdmission: "",
    bpl: "",
    accompaniedBy: "",
    yearOfDrinkingAbuse: "",
    yearOfExcessiveAbuse: "",
    presentPatternAbuse: "",
    presenceOf: "",
    useOfOtherDrugs: "",
    psychiatricProblem: "",
    denial: "Mild",
    physicalProblems: "",
    priorTreatment: "",
    willingnessForTreatment: "Unwilling",
    motivatingFactor: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateForm = () => {
    // Your form validation logic here
    return (
      formData.name &&
      formData.maritalStatus &&
      formData.occupation &&
      formData.age &&
      formData.dob &&
      formData.dateOfIntake &&
      formData.dateOfAdmission &&
      formData.bpl &&
      formData.accompaniedBy &&
      formData.yearOfDrinkingAbuse &&
      formData.yearOfExcessiveAbuse &&
      formData.presentPatternAbuse &&
      formData.presenceOf &&
      formData.physicalProblems &&
      formData.priorTreatment &&
      formData.motivatingFactor
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Perform form submission logic here
      navigate("/form2"); // Redirects to Form2 upon successful submission
    } else {
      alert("Please fill in all fields before proceeding.");
    }
  };
  

 
  return (
    <div className="intake-form">
      <div className="form-page ">
        <div className="top">
          <h2>INTAKE FORM</h2>

          <label htmlFor="photo">Select Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
        </div>
        <div className="fix">
          <div className="left-section">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label>Marital Status:</label>
            <input
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            />
            <label>Occupation:</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
            />
          </div>
          <div className="right-section">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
            <label>Date of Intake:</label>
            <input
              type="date"
              name="dateOfIntake"
              value={formData.dateOfIntake}
              onChange={handleInputChange}
            />
            <ul className="radio-list1">
              <li>
                <label>BPL:</label>
                <input
                  type="radio"
                  id="bplYes"
                  name="bpl"
                  value="Yes"
                  checked={formData.bpl === "Yes"}
                  onChange={handleInputChange}
                />
                <label htmlFor="bplYes">Yes</label>
                <input
                  type="radio"
                  id="bplNo"
                  name="bpl"
                  value="No"
                  checked={formData.bpl === "No"}
                  onChange={handleInputChange}
                />
                <label htmlFor="bplNo">No</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="mid">
          <label>Accompanied by:</label>
          <input
            type="text"
            name="accompaniedBy"
            value={formData.accompaniedBy}
            onChange={handleInputChange}
          />
          <label>Year of Drinking Abuse:</label>
          <input
            type="text"
            name="yearOfDrinkingAbuse"
            value={formData.yearOfDrinkingAbuse}
            onChange={handleInputChange}
          />
          <label>Year of Excessive Abuse:</label>
          <input
            type="text"
            name="yearOfExcessiveAbuse"
            value={formData.yearOfExcessiveAbuse}
            onChange={handleInputChange}
          />
          <label>Present Pattern Abuse:</label>
          <input
            type="text"
            name="presentPatternAbuse"
            value={formData.presentPatternAbuse}
            onChange={handleInputChange}
          />
          <label>Presence of:</label>
          <input
            type="text"
            name="presenceOf"
            value={formData.presenceOf}
            onChange={handleInputChange}
          />
        </div>
        <ul className="radio-list">
          <li>
            <label>Use of other Drugs:</label>
            <input
              type="radio"
              id="useOfOtherDrugsNil"
              name="useOfOtherDrugs"
              value="Nil"
              checked={formData.useOfOtherDrugs === "Nil"}
              onChange={handleInputChange}
            />
            <label htmlFor="useOfOtherDrugsNil">Nil</label>
            <input
              type="radio"
              id="useOfOtherDrugsPastuseonly"
              name="useOfOtherDrugs"
              value="Pastuseonly"
              checked={formData.useOfOtherDrugs === "Pastuseonly"}
              onChange={handleInputChange}
            />
            <label htmlFor="useOfOtherDrugsPastuseonly">Past use only</label>
            <input
              type="radio"
              id="useOfOtherDrugspresentlyusing"
              name="useOfOtherDrugs"
              value="presentlyusing"
              checked={formData.useOfOtherDrugs === "presentlyusing"}
              onChange={handleInputChange}
            />
            <label htmlFor="useOfOtherDrugspresentlyusing">
              Presently using
            </label>
          </li>
        </ul>
        <ul className="radio-list">
          <li>
            <label>Psychiatric Problem:</label>
            <input
              type="radio"
              id="psychiatricProblemNil"
              name="psychiatricProblem"
              value="Nil"
              checked={formData.psychiatricProblem === "Nil"}
              onChange={handleInputChange}
            />
            <label htmlFor="psychiatricProblemNil">Nil</label>
            <input
              type="radio"
              id="psychiatricProblemMild"
              name="psychiatricProblem"
              value="Mild"
              checked={formData.psychiatricProblem === "Mild"}
              onChange={handleInputChange}
            />
            <label htmlFor="psychiatricProblemPastuseonly">Mild</label>
            <input
              type="radio"
              id="psychiatricProblemModerate"
              name="psychiatricProblem"
              value="presentlyusing"
              checked={formData.psychiatricProblem === "presentlyusing"}
              onChange={handleInputChange}
            />
            <label htmlFor="psychiatricProblempresentlyusing">Moderate</label>
          </li>
        </ul>
        <ul className="radio-list">
          <li>
            <label>Denial:</label>
            <input
              type="radio"
              id="denialMild"
              name="denial"
              value="Mild"
              checked={formData.denial === "Mild"}
              onChange={handleInputChange}
            />
            <label htmlFor="denialMild">Mild</label>
            <input
              type="radio"
              id="denialModerate"
              name="denial"
              value="Moderate"
              checked={formData.denial === "Moderate"}
              onChange={handleInputChange}
            />
            <label htmlFor="denialModerate">Moderate</label>
            <input
              type="radio"
              id="denialSevere"
              name="denial"
              value="Severe"
              checked={formData.denial === "Severe"}
              onChange={handleInputChange}
            />
            <label htmlFor="denialSevere">Severe</label>
          </li>
        </ul>
        <div className="mid1">
          <label>Physical Problems(Record Specifically):</label>
          <input
            type="text"
            name="physicalProblems"
            value={formData.physicalProblems}
            onChange={handleInputChange}
          />
          <label>Prior Treatment for Aditicion:</label>
          <input
            type="text"
            name="priorTreatment"
            value={formData.priorTreatment}
            onChange={handleInputChange}
          />
        </div>

        <ul className="radio-list">
          <li>
            <label>Willingness for Treatment:</label>
            <input
              type="radio"
              id="willingnessForTreatmentUnwilling"
              name="willingnessForTreatment"
              value="Unwilling"
              checked={formData.willingnessForTreatment === "Unwilling"}
              onChange={handleInputChange}
            />
            <label htmlFor="willingnessForTreatmentUnwilling">Unwilling</label>
            <input
              type="radio"
              id="willingnessForTreatmentHalfhearted"
              name="willingnessForTreatment"
              value="Halfhearted"
              checked={formData.willingnessForTreatment === "Halfhearted"}
              onChange={handleInputChange}
            />
            <label htmlFor="willingnessForTreatmentHalfhearted">
              Half-hearted
            </label>
            <input
              type="radio"
              id="willingnessForTreatmentWilling"
              name="willingnessForTreatment"
              value="Willing"
              checked={formData.willingnessForTreatment === "Willing"}
              onChange={handleInputChange}
            />
            <label htmlFor="willingnessForTreatmentWilling">Willing</label>
          </li>
        </ul>

        <div className="mid1">
          <label>Motivating factor for present treatment effort:</label>
          <input
            type="text"
            name="motivatingFactor"
            value={formData.motivatingFactor}
            onChange={handleInputChange}
          />
        </div>
        <center>
        <div className="pagination-section">
          <button onClick={handleSubmit}>Submit & Continue</button>
        </div>
      </center>
      </div>
      
    </div>
  );
};

export default IntakeForm;