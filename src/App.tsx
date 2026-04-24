// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import CryoConnectBreakoutBoxPage from "./pages/CryoConnectBreakoutBox";
// import CryoCleanFiltersPage from "./pages/CryoCleanFiltersPage";
// import CryogenicNanoStagePage from "./pages/CryogenicNanoStagePage";
// import TwoDTransferSystemPage from "./pages/TwoDTransferSystemPage";
// import ProbeStationPage from "./pages/ProbeStationPage";
// import MicroscopeMotorisedController from "./pages/MicroscopeMotorisedController";

// const queryClient = new QueryClient();

// const AnimatedRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Index />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
        
//         {/* CRITICAL FIX: The path MUST match the id ("breakout-box") in your Products.tsx catalog! */}
//         <Route path="/products/breakout-box" element={<CryoConnectBreakoutBoxPage />} />
        
//         {/* Dynamic fallback route (Must be placed AFTER specific routes) */}
//         <Route path="/products/:slug" element={<ProductDetail />} />

//         <Route path="/products/cryo-clean" element={<CryoCleanFiltersPage />} />

//         <Route path="/products/nano-stage" element={<CryogenicNanoStagePage />} />

//         <Route path="/products/2d-transfer-system" element={<TwoDTransferSystemPage />} />

//         <Route path="/products/psm-100" element={<ProbeStationPage />} />

//         <Route path="/products/cryoscope-controller" element={<MicroscopeMotorisedController />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       {/* ADDED FUTURE FLAGS: This silences those yellow React Router warnings in your console! */}
//       <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
//         <AnimatedRoutes />
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;











import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CryoConnectBreakoutBoxPage from "./pages/CryoConnectBreakoutBox";
import CryoCleanFiltersPage from "./pages/CryoCleanFiltersPage";
import CryogenicNanoStagePage from "./pages/CryogenicNanoStagePage";
import TwoDTransferSystemPage from "./pages/TwoDTransferSystemPage";
import ProbeStationPage from "./pages/ProbeStationPage";
import MicroscopeMotorisedController from "./pages/MicroscopeMotorisedController";
import CryogenicDipstickPage from "./pages/CryogenicDipstickPage";
import UltraClear4KPage from "./pages/UltraClear4KPage";
import TransferSystemPage from "./pages/TransferSystemPage";
import SpectroscopyElectromagnetPage from "./pages/SpectroscopyElectromagnetPage";
import BitterElectromagnetPage from "./pages/BitterElectromagnetPage";
import EMC2TMagnetPage from "./pages/EMC2TMagnetPage";
import AcDcSystemPageLow from "./pages/AcDcSystemPageLow";
import AcDcSystemPageHigh from "./pages/AcDcSystemPageHigh";
import DcDcSystemPageLow from "./pages/DcDcSystemPageLow";
import DcDcSystemPageHigh from "./pages/DcDcSystemPageHigh";
import DcAcInvertersPage from "./pages/DcAcInvertersPage";
import Inverter400HzPage from "./pages/Inverter400HzPage";
import ContactPage from "./pages/ContactPage";
import ServiceSupportPage from "./pages/ServiceSupportPage";
import RequestQuotePage from "./pages/RequestQuotePage";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        
        {/* === SPECIFIC PRODUCT ROUTES === */}
        <Route path="/products/breakout-box" element={<CryoConnectBreakoutBoxPage />} />
        <Route path="/products/cryo-clean" element={<CryoCleanFiltersPage />} />
        <Route path="/products/nano-stage" element={<CryogenicNanoStagePage />} />
        <Route path="/products/2d-transfer-system" element={<TwoDTransferSystemPage />} />
        <Route path="/products/psm-100" element={<ProbeStationPage />} />
        <Route path="/products/cryoscope-controller" element={<MicroscopeMotorisedController />} />
        <Route path="/products/dipstick" element={<CryogenicDipstickPage />} />
        <Route path="/products/ultraclear-4k" element={<UltraClear4KPage />} />
        <Route path="/products/2d-transfer-motorised" element={<TransferSystemPage />} />
        <Route path="/products/spectroscopy-magnet" element={<SpectroscopyElectromagnetPage />} />
        <Route path="/products/bitter-magnet" element={<BitterElectromagnetPage />} />
        <Route path="/products/emc2t-2-magnet" element={<EMC2TMagnetPage />} />
        <Route path="/products/ac-dc-system-low" element={<AcDcSystemPageLow />} />
        <Route path="/products/ac-dc-system-high" element={<AcDcSystemPageHigh />} />
        <Route path="/products/dc-dc-system-low" element={<DcDcSystemPageLow />} />
        <Route path="/products/dc-dc-system-high" element={<DcDcSystemPageHigh />} />
        <Route path="/products/dc-ac-inverters" element={<DcAcInvertersPage />} />
        <Route path="/products/inverter-400hz-rugged" element={<Inverter400HzPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support" element={<ServiceSupportPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
        

        {/* === DYNAMIC FALLBACK ROUTE === */}
        {/* CRITICAL FIX: Moved to the very bottom so it doesn't intercept the specific routes above! */}
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;