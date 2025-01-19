import AboutSection from "@/components/ui/aboutSection"
import BlogSection from "@/components/ui/blog-section/blogSection"
import DownloadApp from "@/components/ui/bottom-sections/downloadApp"
import ExperienceSection from "@/components/ui/bottom-sections/experienceSection"
import LogoSection from "@/components/ui/bottom-sections/logoSection"
import ChooseUs from "@/components/ui/choose-us-section/chooseUs"
import ClientLogoSection from "@/components/ui/clientLogoSection"
import ContactSection from "@/components/ui/contact-section/contactSection"
import FaqSection from "@/components/ui/faq-section/faqSection"
import HappyClients from "@/components/ui/happy-clients/happyClinets"
import HeroSection from "@/components/ui/hero/heroSection"
import NavBar from "@/components/ui/nav/navBar"
import TopNav from "@/components/ui/nav/topNav"
import ServiceSection from "@/components/ui/service-section/serviceSection"
import TestimonialSection from "@/components/ui/testimonial-section/testimonialSection"

export default function Home() {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      <HeroSection/>
      <ClientLogoSection/>
      <ServiceSection/>
      <AboutSection/>
      <ChooseUs/>
      <HappyClients/>
      <BlogSection/>
      <TestimonialSection/>
      <FaqSection/>
      <DownloadApp/>
      <ExperienceSection/>
      <ContactSection/>
      <LogoSection/>
    </div>
  )
}
