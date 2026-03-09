import './App.css';
import m_map, {Text_Morse} from './MorseMappingSheet';
import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  
  const handleEncode = () =>{
    setOutput(encode(input));
  }

  const handleDecode = () =>{
    try {
    setOutput(decode(input));
    setError('')
    } catch (err){
      setError(err.message);
      setOutput('');
    }
  }

  const handleClear = () =>{
    setInput('');
    setOutput('');
    setError('');
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    setError('');
  }

  const decode = (input) => {
    const adjustedinput = input.replace(/\n/g, '   ');
    
    const invalidchar = adjustedinput.replace(/[.\-\s]/g, '');
    if (invalidchar){
      throw new Error(`You have entered invalid characters: "${invalidchar}"\nPlease only type ".", "-", spaces, and/or new lines!`);
    }
    return adjustedinput
    .trim()
    .split('   ')
    .map(word => word
      .split(' ')
      .map(symbol => m_map[symbol] || '')
      .join('')
    )
    .join(' ')
  }

  const encode = (input) => {
    return input
    .toUpperCase()
    .trim()
    .split('\n')
    .map(line =>
      line
      .split(' ')
    
      .map(word => word
      .split('')
      .map(symbol => Text_Morse[symbol] || '')
      .join(' ')
    )
    .join('   ')
  )
  .join('\n')
  }

  return (
    <div className="box">
    <h1>Morse Decoder/Encoder</h1>
    <div className="Main">

    <div className="input">
      <label>
        Morse Input
        <textarea value = {input} onChange = {handleChange}/>
      </label>

    <div className="buttons">
    <button onClick={handleDecode}>
      Decode
    </button>

    <button onClick={handleEncode}>
      Encode
    </button>

    <button onClick={handleClear}>
      Clear
    </button>

    <CopyToClipboard text = {output}>
    <button>Copy</button>
    </CopyToClipboard>
    </div>
    
    {error && <div className="error">{error} </div>
    }
    </div>

    <div className="output">
    <label>
        Decoded Output
        <textarea value = {output} readOnly/>
      </label>
    </div>
    </div>
    </div>
  );
}

export default App;
