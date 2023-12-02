import React from 'react';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const ToggleSwitch = ({ handleToggle, isToggleOn }) => {
  const toggleIcon = isToggleOn ? <ToggleOnIcon /> : <ToggleOffIcon />;

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {toggleIcon}
    </div>
  );
};

export default ToggleSwitch;
