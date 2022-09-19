import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './App.css';

function calculateValue(value) {
  return value;
}

function valueLabelFormat(value) {
  let m = 100 / (2 * value + 3);
  let o = value * m;

  return [`m: ${m.toFixed(2)}%, o: ${o.toFixed(2)}%`, `3m: ${(m * 3).toFixed(2)}%, 2o: ${(2*o).toFixed(2)}%`];
}


function App() {
  const [value, setValue] = React.useState(1.886);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App" style={{paddingTop: 250, paddingBottom: 250, paddingRight: 20, paddingLeft: 20}}>
      <Typography id="non-linear-slider" gutterBottom>
        Coef: {value} <br/> {valueLabelFormat(calculateValue(value))[0]} <br/> {valueLabelFormat(calculateValue(value))[1]}
      </Typography>
      <br/>
      <br/>
      <Slider
        value={value}
        min={1}
        step={0.01}
        max={15}
        scale={calculateValue}
        // getAriaValueText={valueLabelFormat}
        // valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        // valueLabelDisplay="no"
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
}

export default App;
