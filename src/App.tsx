import React, { useState, useEffect } from 'react';
import { ActivePage, ServiceVertical } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ServicesHubView } from './components/ServicesHubView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedService, setSelectedService] = useState<ServiceVertical>(SERVICES_DATA[0]);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialServiceId, setConsultationInitialServiceId] = useState<string | undefined>();
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; tab: 'terms' | 'privacy' }>({
    isOpen: false,
    tab: 'terms'
  });

  // Scroll to top whenever active page or service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedService]);

  const handleSelectService = (service: ServiceVertical) => {
    setSelectedService(service);
    setActivePage('service-detail');
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setConsultationInitialServiceId(serviceId);
    setIsConsultationOpen(true);
  };

  const handleOpenLegal = (tab: 'terms' | 'privacy') => {
    setLegalModalState({ isOpen: true, tab });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#f2f2f2] selection:bg-[#E5FE40] selection:text-[#0D0D0D] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header with Unified Navigation */}
      <Header
        activePage={activePage}
        onNavigate={(page) => setActivePage(page)}
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenConsultation()}
        services={SERVICES_DATA}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            services={SERVICES_DATA}
            onSelectService={handleSelectService}
            onNavigateToServicesHub={() => setActivePage('services-hub')}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'services-hub' && (
          <ServicesHubView
            services={SERVICES_DATA}
            onSelectService={handleSelectService}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailView
            service={selectedService}
            allServices={SERVICES_DATA}
            onSelectAnotherService={handleSelectService}
            onBackToHub={() => setActivePage('services-hub')}
            onOpenConsultation={(serviceId) => handleOpenConsultation(serviceId)}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            onNavigateToServices={() => setActivePage('services-hub')}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'contact' && (
          <ContactView services={SERVICES_DATA} />
        )}
      </main>

      {/* Corporate Footer with All 7 Services, Terms & Conditions and Privacy Policy */}
      <Footer
        services={SERVICES_DATA}
        onSelectService={handleSelectService}
        onNavigate={(page) => setActivePage(page)}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenLegal={handleOpenLegal}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        services={SERVICES_DATA}
        initialServiceId={consultationInitialServiceId}
      />

      {/* Legal Modal (Terms & Conditions / Privacy Policy) */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
      />
    </div>
  );
}
