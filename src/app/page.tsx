"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Camera, Sparkles, Package, Trophy, Users, MessageCircle, Mail, Users as UsersIcon, Camera as CameraIcon, Award, User, Instagram, Globe, Linkedin } from "lucide-react";

export default function PhotoGalleryPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="wide"
      sizing="comfortable"
      background="plain"
      cardStyle="glass-depth"
      primaryButtonStyle="modern"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="PhotoGallery"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Capture Life's Beautiful Moments"
          description="Professional photography services that tell your unique story through stunning visuals"
          tag="Premium Photography"
          tagIcon={Camera}
          buttons={[
            {
              text: "View Portfolio",
              href: "https://portfolio.example.com"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547269163-r5d3d8xe.jpg",
              imageAlt: "Professional landscape photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547270692-hibsaooz.jpg",
              imageAlt: "Wedding photography portrait"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547271927-igh34p4w.jpg",
              imageAlt: "Nature wildlife photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547275412-58zs88cy.jpg",
              imageAlt: "Urban architecture photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547276534-7h9zq4ei.jpg",
              imageAlt: "Family portrait photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547277663-crhii3lv.jpg",
              imageAlt: "Product photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547282681-fqjnc3n0.jpg",
              imageAlt: "Event photography"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At PhotoGallery, we believe every moment deserves to be captured with artistry and passion. Our team of professional photographers specializes in creating timeless images that preserve your most precious memories for generations to come."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Our Photography Services"
          description="Comprehensive photography solutions for every occasion"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: "1",
              title: "Creative Tools & Editing",
              description: "Professional photo editing and enhancement services using industry-leading software to bring your vision to life",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547284056-zvzuayq4.jpg",
              imageAlt: "Photo editing workspace"
            },
            {
              id: "2",
              title: "Portfolio Showcase",
              description: "Beautiful online galleries to display and share your photos with clients and loved ones",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547286651-7mniecaq.jpg",
              imageAlt: "Photography portfolio display"
            },
            {
              id: "3",
              title: "Client Management",
              description: "Personalized service with dedicated support throughout your photography journey",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547289025-oox8n7qu.jpg",
              imageAlt: "Photographer consulting with clients"
            },
            {
              id: "4",
              title: "Print Services",
              description: "High-quality printing services for your favorite photographs in various formats and sizes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547290232-vwjzkldb.jpg",
              imageAlt: "Professional photo printing"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Photography Packages"
          description="Choose the perfect package for your photography needs"
          tag="Packages"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "PhotoGallery",
              name: "Basic Package",
              price: "$299",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547293431-zc4g1hnp.jpg",
              imageAlt: "Basic photography package"
            },
            {
              id: "2",
              brand: "PhotoGallery",
              name: "Premium Package",
              price: "$599",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547294567-c9fdwp90.jpg",
              imageAlt: "Premium photography package"
            },
            {
              id: "3",
              brand: "PhotoGallery",
              name: "Deluxe Package",
              price: "$899",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547299576-jc2yifkr.jpg",
              imageAlt: "Deluxe photography package"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Achievements"
          description="Numbers that showcase our dedication to excellence"
          tag="Success Story"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: UsersIcon,
              title: "Happy Clients",
              value: "500+"
            },
            {
              id: "2",
              icon: CameraIcon,
              title: "Photos Captured",
              value: "50K+"
            },
            {
              id: "3",
              icon: Award,
              title: "Awards Won",
              value: "25+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Photographers"
          description="Talented professionals passionate about capturing your special moments"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Lead Photographer",
              description: "Award-winning photographer specializing in weddings and portraits with over 10 years of experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547304897-0ubr6xx5.jpg",
              imageAlt: "Sarah Martinez photographer",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sarahphoto"
                },
                {
                  icon: Globe,
                  url: "https://sarahmartinez.photo"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Commercial Photographer",
              description: "Expert in commercial and product photography, bringing brands to life through compelling visuals",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547306624-icfajmhc.jpg",
              imageAlt: "Michael Chen photographer",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/mikechenphoto"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/michaelchen"
                }
              ]
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Event Photographer",
              description: "Captures the energy and emotion of special events, from corporate gatherings to family celebrations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547307874-m306av8s.jpg",
              imageAlt: "Emma Rodriguez photographer",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/emmaphoto"
                },
                {
                  icon: Globe,
                  url: "https://emmarodriguez.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Real experiences from satisfied customers"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jessica Williams",
              handle: "@jessicaw",
              testimonial: "Absolutely stunning wedding photos! Sarah captured every precious moment perfectly. The attention to detail and artistic vision exceeded our expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547308997-wgpn4uxz.jpg",
              imageAlt: "Jessica Williams"
            },
            {
              id: "2",
              name: "David Brown",
              handle: "@davidbrown",
              testimonial: "Professional headshots that really made an impact on my business. Michael's expertise in commercial photography is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547311412-1l19uw89.jpg",
              imageAlt: "David Brown"
            },
            {
              id: "3",
              name: "Lisa Anderson",
              handle: "@lisaanderson",
              testimonial: "Emma made our family portrait session so comfortable and fun. The final photos are beautiful memories we'll treasure forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547314016-ttnd87wr.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "4",
              name: "Mark Thompson",
              handle: "@markthompson",
              testimonial: "Outstanding event photography for our corporate gathering. The team was professional and delivered high-quality images on time.",
              icon: User
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to capture your story?"
          description="Contact us today to discuss your photography needs and let us help you preserve your most precious memories."
          tagIcon={Mail}
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763547269163-r5d3d8xe.jpg"
          imageAlt="Photography contact"
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive updates about our photography services."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="PhotoGallery"
          copyrightText="© 2025 | PhotoGallery"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Wedding Photography",
                  href: "wedding"
                },
                {
                  label: "Portrait Sessions",
                  href: "portraits"
                },
                {
                  label: "Commercial Photos",
                  href: "commercial"
                },
                {
                  label: "Event Coverage",
                  href: "events"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Portfolio",
                  href: "https://portfolio.example.com"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}