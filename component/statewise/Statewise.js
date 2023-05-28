import React, { useEffect } from 'react'
import { useState } from 'react'

const Statewise = () => {

    const[acutalData , setActualData] = useState([]);

    const getCovidData = async () =>{
        try{
            const response = await fetch("https://data.covid19india.org/data.json")
            const data = await response.json();
            console.log(data.statewise)
            setActualData(data.statewise);
        }
        catch(error)
        {
            console.log(error);

        }
    }

    useEffect( ()=>{

        getCovidData();

    }, []);

    

  return (
    <div className='statewise '>
        <div className='main-heading'>
            <h1> <span>INDIA</span> Covid-19 TRACKER</h1>
        </div>
        <div className='table-responsive'>
            <table className='table table-hover' border="0"  width="100%" align="center"
>
              
              <thead className='thead-dark'>
                <tr>
                    <th colSpan="">STATE</th>
                    <th colSpan="">CONFIRMED</th>
                    <th colSpan="">RECOVERED</th>
                    <th colSpan="">DEATHS</th>
                    <th colSpan="" >ACTIVE</th>
                    <th colSpan="">UPDATED</th>
                </tr>
                </thead>

                <tbody>

                    {
                        acutalData.map( (currElem , ind )=>{

                            return(

                                <tr key={ind} >
                                   <td colSpan="">{currElem.state}</td>
                                   <td colSpan="">{currElem.confirmed}</td>
                                   <td colSpan="">{currElem.recovered}</td>
                                   <td colSpan="">{currElem.deaths}</td>
                                   <td colSpan="">{currElem.active}</td>
                                   <td colSpan="">{currElem.lastupdatedtime}</td>
                                </tr>

                            )

                        })
                    }
                     
                        
                </tbody>

            </table>

        </div>

    </div>
  )
}

export default Statewise
