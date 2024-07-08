import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css"
import Moment from 'react-moment'
import "./calculate.css"

function Calculate() {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");
 
  const date = value;
  console.log(cycle);
  const cycleLength = parseInt(cycle);

  return (
    <>
    <div className=" mt-4 text-center">
        <h4>Calculate Next period, Ovulation Day</h4>
 
        <label for="cycle">Select your Cycle Length : </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-2"
        >
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>
 
      <p className="text-center">
        Select Your Last Period Start Date from the Calendar
      </p>
 
      <div className="d-flex justify-content-center ">
        <Calendar onChange={onChange} value={value} 
          className="calendar mt-0" />
      </div>
 
      <div className="text-center main-i">
        <div className="row">
          <div class="d-flex flex-wrap justify-content-center ">

            <div className="col-md-3 mt-3 mx-3 box">
              <p> Approximate Ovulation Day</p>
 
              <Moment
                format="Do MMMM YYYY"
                add={{ days: cycleLength - 1 - 14 }}
              >
                {date}
              </Moment>
            </div>

            <div className="col-md-3 mt-3 mx-3  box">
              <p>Next Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: cycleLength - 1 }}>
                {date}
              </Moment>
            </div>
            
            <div className="col-md-3 mt-3 mx-3  box">
              <p>2nd Month Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: (cycleLength+ cycleLength) - 1 }}>
                {date}
              </Moment>
            </div>

            <div className="col-md-3 mt-3 mx-3  box">
              <p>3rd Month Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: (cycleLength + cycleLength + cycleLength) - 1 }}>
                {date}
              </Moment>
            </div>

            <div className="col-md-3 mt-3 mx-3  box">
              <p>4th Month Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: (cycleLength + cycleLength + cycleLength + cycleLength) - 1 }}>
                {date}
              </Moment>
            </div>

            <div className="col-md-3 mt-3 mx-3  box">
              <p>5th Month Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: (cycleLength + cycleLength + cycleLength + cycleLength + cycleLength) - 1 }}>
                {date}
              </Moment>
            </div>

            <div className="col-md-3 mt-3 mx-3  box">
              <p>6th Month Period</p>
 
              <Moment format="Do MMMM YYYY"
                add={{ days: (cycleLength + cycleLength + cycleLength + cycleLength + cycleLength + cycleLength) - 1 }}>
                {date}
              </Moment>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Calculate