"use client"
import React, { useState, ChangeEvent, useEffect } from 'react';

interface KeyValuePair {
  key: string;
  value: string;
}

interface Passenger{
    name: string;
    passengerId: number;
    survived: number;
    pclass: number;
    sex: string;
}

const PasteDataComponent: React.FC = () => {
    const [data, setData] = useState<Passenger>({
    name:'',
    passengerId: 0,
    survived: 0,
    pclass: 0,
    sex: '',
    });
    

    const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
        const paste = event.clipboardData.getData('text');
        const row = paste.split('\t') // Split rows and then cells by comma
        const newPassenger = {
            passengerId: Number(row[0]),
            survived: Number(row[1]),
            pclass: Number(row[2]),
            name:row[3],
            sex: row[4],
        }
        setData(newPassenger)
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };



    useEffect(()=>{
        console.log("new data",data)
    },[data])
    return (
        <div className="text-black">
            <div className="flex justify-center p-10">

            <label className="pr-3">Paste Here:</label>
            <br></br>
            <textarea className="h-[100px] w-[200px]" onPaste={handlePaste} placeholder="Paste from Excel"></textarea>

            </div>

            <div>
                <div className="flex space-x-5 pb-10">
                    <label className="pr-3">Passenger Id:</label>
                    <input type="text" name="passengerId" value={data.passengerId} onChange={handleChange} />

                    <label className="pr-3">Survived:</label>
                    <input type="text" name="survived" value={data.survived} onChange={handleChange} />
                </div>
                
                <div className="flex space-x-5 pb-10">
                    <label className="pr-3">Passenger Class:</label>
                    <input type="text" name="pclass" value={data.pclass} onChange={handleChange} />

                    <label className="pr-3">Passenger Name:</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} />
                </div>
                

                <label className="pr-3">Passenger Gender</label>
                <input type="text" name="sex" value={data.sex} onChange={handleChange} />
            </div>
            

            <label></label>

        </div>
  );
};

export default PasteDataComponent;
