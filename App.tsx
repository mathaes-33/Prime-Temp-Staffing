
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobListPage from './pages/JobListPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import EmployerContactPage from './pages/EmployerContactPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import ApplicationTipsPage from './pages/ApplicationTipsPage';
import FaqPage from './pages/FaqPage';
import EmployerResourcesPage from './pages/EmployerResourcesPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import JobDetailsPage from './pages/JobDetailsPage';
import { JobProvider } from './context/JobContext';

const Layout: React.FC = () => {
    const location = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <JobProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<JobListPage />} />
            <Route path="jobs/:id" element={<JobDetailsPage />} />
            <Route path="apply" element={<EmployeeFormPage />} />
            <Route path="employers" element={<EmployerContactPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="application-tips" element={<ApplicationTipsPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="employer-resources" element={<EmployerResourcesPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </JobProvider>
  );
};

export default App;