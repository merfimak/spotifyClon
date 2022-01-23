import react, { useEffect, useRef } from 'react';
import TheSidebar from './components/TheSidebar.js'
import Header from './components/Header.js'
import TheMain from './components/TheMain.js'
import TheRegistration from './components/TheRegistration.js'
import TheSidebarOverlay from './components/TheSidebarOverlay.js'
function App() {
 
 

  return (
   <>
  <div class="flex flex-grow overflow-auto">
  <TheSidebar />
  <TheSidebarOverlay/>
    <div class="flex-1 overflow-auto">
    <Header/>
     <TheMain /> 
      
    </div>
  </div>
  <TheRegistration />
 
   </>
  );
}

export default App;
