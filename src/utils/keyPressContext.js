// import React, { createContext, useContext, useState, useEffect } from "react";

// const KeyPressContext = createContext({});

// export const KeyPressProvider = ({ children }) => {
//   const [keyStates, setKeyStates] = useState({});

//   useEffect(() => {
//     const downHandler = (event) => {
//       const { key, keyCode } = event;
//       if (keyCode >= 37 && keyCode <= 40) {
//         event.preventDefault();
//       }
      
//       setKeyStates((prevState) => ({
//         ...prevState,
//         [key]: true,
//         [keyCode]: true,
//       }));
//     };

//     const upHandler = (event) => {
//       const { key, keyCode } = event;
//       setKeyStates((prevState) => ({
//         ...prevState,
//         [key]: false,
//         [keyCode]: false,
//       }));
//     };

//     window.addEventListener("keydown", downHandler);
//     window.addEventListener("keyup", upHandler);

//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   }, []);

//   const resetKeyStates = () => {
//     console.log("2");
    
//     setKeyStates({});
//   };

//   return (
//     <KeyPressContext.Provider value={{keyStates, resetKeyStates}}>
//       {children}
//     </KeyPressContext.Provider>
//   );
// };

// export const useKeyPress = (targetKey) => {
//   const { keyStates } = useContext(KeyPressContext);
//   const pressed = targetKey.some((key) => keyStates[key]);
//   return pressed;
// };

// export const useResetKeyStates = () => {
//   const { resetKeyStates } = useContext(KeyPressContext);
//   return resetKeyStates;
// };