import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.legalName}.`,
};

const heroGrad = "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)";
const darkGrad = "linear-gradient(160deg, #0a0818 0%, #110e28 100%)";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: heroGrad }}>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="muted" className="mb-6">Legal</Badge>
            <h1 className="font-serif font-bold text-white mb-5 text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-lg">Last Updated: April 2026</p>
          </div>
        </Container>
      </section>

      <section className="relative py-16 lg:py-24" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl space-y-12">

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">1. Introduction</h2>
              <p className="text-white/50 leading-relaxed">
                Welcome to <strong>{COMPANY.legalName}</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
              </p>
              <p className="text-white/50 leading-relaxed">
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website ({COMPANY.domain}) and interact with our services. As a B2B technology consulting and engineering firm, we practice data minimization and only collect what is strictly necessary to conduct our business.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">2. Information We Collect</h2>
              <p className="text-white/50 leading-relaxed">
                We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. Currently, the only point of data collection on our website is our <strong>Contact Form</strong>.
              </p>
              <p className="text-white/50 leading-relaxed">When you contact us, we collect:</p>
              <ul className="list-disc pl-5 space-y-2 text-white/50 leading-relaxed marker:text-accent">
                <li><strong>Personal Identification Information:</strong> Your Name and Email Address.</li>
                <li><strong>Professional Information:</strong> Your Company Name (if provided).</li>
                <li><strong>Message Data:</strong> The contents of the message you send us regarding your engineering or business challenges.</li>
              </ul>
              <p className="text-white/50 leading-relaxed italic mt-4">
                We do not passively collect sensitive data, use invasive tracking scripts, or employ third-party advertising cookies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">3. How We Use Your Information</h2>
              <p className="text-white/50 leading-relaxed">
                We use the personal information collected via our website solely for the following business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/50 leading-relaxed marker:text-accent">
                <li><strong>Communication:</strong> To directly respond to your inquiries, answer your questions, and engage in potential business discussions.</li>
                <li><strong>Service Delivery:</strong> To assess if we are the right fit for your situation and follow up regarding our consulting, engineering, or coaching capabilities.</li>
                <li><strong>Administrative Purposes:</strong> To maintain internal records of business correspondence.</li>
              </ul>
              <p className="text-white/50 leading-relaxed font-semibold mt-4">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">4. How We Share Your Information</h2>
              <p className="text-white/50 leading-relaxed">
                We only share information with third parties in the following specific situations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/50 leading-relaxed marker:text-accent">
                <li><strong>Service Providers:</strong> We use trusted third-party infrastructure to operate our website. For example, our contact form relies on secure email routing services and hosting providers. These providers process data strictly to facilitate technical operations and are bound by their own rigorous privacy standards.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so to comply with applicable laws, governmental requests, or judicial proceedings.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">5. Data Security</h2>
              <p className="text-white/50 leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet can be guaranteed to be 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">6. Your Privacy Rights</h2>
              <p className="text-white/50 leading-relaxed">
                Depending on your geographic location, you may have rights regarding your personal information, including the right to request a copy of the information we hold about you, request corrections, or request that we delete your personal information from our active records.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">7. Contact Us</h2>
              <p className="text-white/50 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="glass-card p-6 mt-6 inline-block">
                <p className="text-white font-semibold mb-1">{COMPANY.legalName}</p>
                <p className="text-white/50 text-sm mb-4 leading-relaxed max-w-sm">{COMPANY.address}</p>
                <p className="text-white/50 text-sm"><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">{COMPANY.email}</a></p>
                <p className="text-white/50 text-sm"><strong>Phone:</strong> {COMPANY.phone}</p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
