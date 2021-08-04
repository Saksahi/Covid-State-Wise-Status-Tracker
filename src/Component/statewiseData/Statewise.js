import React, { useState,useEffect } from "react";
import  "D://reactproject//covid-statewise-report//node_modules//bootstrap//dist//css//bootstrap.min.css";

const Statewise=()=>{

    const [data,setData] = useState([]); 

    const getCovidData= async()=>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    };   

    useEffect(()=>{
        getCovidData();
    },[]);

return(
    <>
        
        <div className="container-fluid mt-5">
            <div className="main-heading">
            <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span> COVID 19 DASHBOARD </h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>STATE</th>
                            <th>STATE-CODE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                            <th>ACTIVE</th>
                            <th>UPDATED</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((currEle,indx)=>{
                            return (
                            <tr key={indx}>
                                <th>{currEle.state}</th>
                                <td>{currEle.statecode}</td>
                                <td>{currEle.confirmed}</td>
                                <td>{currEle.recovered}</td>
                                <td>{currEle.deaths}</td>
                                <td>{currEle.active}</td>
                                <td>{currEle.lastupdatedtime}</td>
                            </tr>);
                        })
                    }
                    
                    </tbody>
                </table>
            </div>

        </div>
    </>
);

};
export default Statewise;