
import React, { useState } from 'react';
import ToggleButton from './ToggleButton.jsx'
import Input1 from './Input1.jsx';
import Input2 from './Input2.jsx';

function InputForm() {
  const [isDisplay1Visible, setIsDisplay1Visible] = useState(false);
  const [isDisplay2Visible, setIsDisplay2Visible] = useState(false);
 

  const toggleDisplay1 = () => {
    setIsDisplay1Visible(!isDisplay1Visible);
  };

  const toggleDisplay2 = () => {
    setIsDisplay2Visible(!isDisplay2Visible);
  };

  const [additionalParties, setAdditionalParties] = useState([]);

  const togglePartyDiv = (index) => {
    const updatedParties = [...additionalParties];
    updatedParties[index] = { ...updatedParties[index], show: !updatedParties[index]?.show };
    setAdditionalParties(updatedParties);
  };

  const addNewParty = () => {
    setAdditionalParties([...additionalParties, { show: true }]);
  };

  const handleButtonAction = () => {
    // Perform the common functionality for the buttons
    console.log('Button clicked!');
  };
  
  return (
    <>
      <div className='m-3 p-5'>
        <div className='flex space-around w-full'>
          <div>
            <h1 className='text-2xl font-thin'>
              <button onClick={toggleDisplay1}>{isDisplay1Visible ? '>' : '^'}</button> Booking Party Information
            </h1>
          </div>
          <div><p className='text-lg font-thin p-2 '> (Enter as much as possible)</p></div>
        </div>
        {isDisplay1Visible && (
          <div className='display1'>
            <div className='flex'> <h2 className='p-1 m-2'> Use Information on Account ? </h2> <ToggleButton /></div>
            <div className='flex flex-wrap w-full m-3 p-10'>
              <Input1 type="select" label="Firm Name" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input1 type="text" label="Booking Contact Name" placeholder="Type Here" />
           <Input1 type="text" label="Phone Number" placeholder="Type Here" />
           <Input1 type="text" label="Billing Address" placeholder="Type Here" />
           <Input1 type="text" label="Zip/Postal Code" placeholder="Type Here" />
           <Input1 type="text" label="Country/ City" placeholder="Type Here" />
            </div>
            <div className='flex flex-wrap w-full justify-center p-10'>
              <Input2 type="select" label="Role" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input2 type="text" label="Name Of Represented Client" placeholder="Type Here" />
            <Input2 type="text" label="Lead Counsels Information" placeholder="Type Here" />
            <Input2 type="text" label="Email" placeholder="Email" /> 
            </div>
          </div>
        )}
      </div>

      <div className='m-3 p-5'>
        <div className='flex space-around w-full'>
          <div>
            <h1 className='text-2xl font-thin'>
              <button onClick={toggleDisplay2}>{isDisplay2Visible ? '>' : '^'}</button> Opposing Party Information
            </h1>
          </div>
          <div><p className='text-lg font-thin p-2 '> (Enter as much as possible)</p></div>
        </div>
        {isDisplay2Visible && (
          <div className='display2'>
            <div className='flex flex-wrap w-full m-3 p-10'>
              <Input1 type="select" label="Firm Name" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input1 type="text" label="Booking Contact Name" placeholder="Type Here" />
           <Input1 type="text" label="Phone Number" placeholder="Type Here" />
           <Input1 type="text" label="Billing Address" placeholder="Type Here" />
           <Input1 type="text" label="Zip/Postal Code" placeholder="Type Here" />
           <Input1 type="text" label="Country/ City" placeholder="Type Here" />
            </div>
            <div className='flex flex-wrap w-full justify-center p-10'>
              <Input2 type="select" label="Role" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input2 type="text" label="Name Of Represented Client" placeholder="Type Here" />
              <Input2 type="text" label="Lead Counsels Information" placeholder="Type Here" />
              <Input2 type="text" label="Email" placeholder="Email" /> 
            </div>
          </div>
        )}
      </div>
      {additionalParties.map((party, index) => (
        
        <div key={index} className={party.show ? 'display2' : 'hidden'}>
           <button className='p-5 bg-black text-white font-semibold m-10' onClick={() => togglePartyDiv(index)}>
            {party.show ? ' X Additional Party' : '+ Additional Party'}
          </button>
          <div className='flex flex-wrap max-w-full m-3 p-10'>
              <Input1 type="select" label="Firm Name" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input1 type="text" label="Booking Contact Name" placeholder="Type Here" />
           <Input1 type="text" label="Phone Number" placeholder="Type Here" />
           <Input1 type="text" label="Billing Address" placeholder="Type Here" />
           <Input1 type="text" label="Zip/Postal Code" placeholder="Type Here" />
           <Input1 type="text" label="Country/ City" placeholder="Type Here" />
            </div>
            <div className='flex flex-wrap w-full justify-center p-10'>
              <Input2 type="select" label="Role" placeholder="Type Here" selectOptions={['Option 1', 'Option 2', 'Option 3']} />
              <Input2 type="text" label="Name Of Represented Client" placeholder="Type Here" />
              <Input2 type="text" label="Lead Counsels Information" placeholder="Type Here" />
              <Input2 type="text" label="Email" placeholder="Email" /> 
            </div>
         
        </div>
      ))}

      <button className='p-5 bg-black text-white font-semibold m-10' onClick={addNewParty}>
        + Additional Parties
      </button>
    </>
  );
}

export default InputForm;

