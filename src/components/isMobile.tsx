import React from 'react'
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

export const isMobile = useMediaQuery({    
    maxDeviceWidth: 600,
    // alternatively...
    query: "(max-device-width: 600px)"  
  });