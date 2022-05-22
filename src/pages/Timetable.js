import React from 'react'
import Back from '../components/Back'
import '../css/tt.css'

export default function Timetable() {
  return (
    <div>
      <Back />
    <marquee style={{textAlign: 'center'}} scrollamount={5} direction="down"><h2 style={{textAlign: 'center', color: 'navy'}}>CSE III TIME TABLE</h2></marquee>
    <div className="container">
      <div className="timetable-img text-center">
        <img src="img/content/timetable.png" alt="" />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr className="bg-light-gray">
              <th className="text-uppercase">days / hours
              </th>
              <th className="text-uppercase">I</th>
              <th className="text-uppercase">II</th>
              <th className="text-uppercase"> </th>
              <th className="text-uppercase">III</th>
              <th className="text-uppercase">IV</th>
              <th className="text-uppercase"> </th>
              <th className="text-uppercase">V</th>
              <th className="text-uppercase">VI</th>
              <th className="text-uppercase"> </th>
              <th className="text-uppercase">VII</th> 
            </tr>
            <tr className="bg-light-gray">
              <th className="text-uppercase">Timings
              </th>
              <th className="text-uppercase">09.00</th>
              <th className="text-uppercase">09.50</th>
              <th className="text-uppercase">10.30</th>
              <th className="text-uppercase">10.45</th>
              <th className="text-uppercase">11.30</th>
              <th className="text-uppercase">12.15</th>
              <th className="text-uppercase">01.00</th>
              <th className="text-uppercase">01.45</th> 
              <th className="text-uppercase">02.30</th>
              <th className="text-uppercase">2.45-4.30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-uppercase">Monday</th>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">IP</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">CD</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MC</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">DS</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">IP</span>
                <div className="margin-10px-top font-size14">01:00-01:45</div>
              </td>
              <td>
                <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">AI</span>
                <div className="margin-10px-top font-size14">01:45-02:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase">tuesday</th>
              <td>
                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MC</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">DS</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-dark padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">IPLAB</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-dark padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">IPLAB</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">ST</span>
                <div className="margin-10px-top font-size14">1:00-01:45</div>
              </td>
              <td>
                <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">CD</span>
                <div className="margin-10px-top font-size14">01:45-02:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase">wednesday</th>
              <td>
                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MC</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">CD</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-dark padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MADLAB</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-dark  padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MADLAB</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">AI</span>
                <div className="margin-10px-top font-size14">01:00-01:45</div>
              </td>
              <td>
                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">DS</span>
                <div className="margin-10px-top font-size14">1:45-02:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase">thursday</th>
              <td>
                <span className="bg-secondary  padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">CD</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">IP</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">ST</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">AI</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">DS</span>
                <div className="margin-10px-top font-size14">9:00-10:00</div>
              </td>
              <td>
                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MC</span>
                <div className="margin-10px-top font-size14">9:00-10:00</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase">firday</th>
              <td>
                <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">AI</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">DS</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-danger padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">PC</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">IP</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">ST</span>
                <div className="margin-10px-top font-size14">01:00-01:45</div>
              </td>
              <td>
                <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">IP</span>
                <div className="margin-10px-top font-size14">1:45-02:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
            <tr>
              <th className="text-uppercase">saturday</th>
              <td>
                <span className="bg-secondary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">CD</span>
                <div className="margin-10px-top font-size14">9:00-9:45</div>
              </td>
              <td>
                <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">AI</span>
                <div className="margin-10px-top font-size14">9:45-10:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">10:30-10:45</div>
              </td>
              <td>
                <span className="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MC</span>
                <div className="margin-10px-top font-size14">10:45-11:30</div>
              </td>
              <td>
                <span className="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">ST</span>
                <div className="margin-10px-top font-size14">11:30-12:15</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">12:15-01:00</div>
              </td>
              <td>
                <span className="bg-orange padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MP</span>
                <div className="margin-10px-top font-size14">01:00-01:45</div>
              </td>
              <td>
                <span className="bg-orange  padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MP</span>
                <div className="margin-10px-top font-size14">01:45-02:30</div>
              </td>
              <td>
                <span className="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Break</span>
                <div className="margin-10px-top font-size14">02:30-02:45</div>
              </td>
              <td>
                <span className="bg-primary padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Training</span>
                <div className="margin-10px-top font-size14">02:45-04:30</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
