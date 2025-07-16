import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Link href="/legal/terms-of-service">
                <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Terms of Service
                </Button>
              </Link>

              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: May 10, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
              <p>
                At Kidney Community, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website and use our platform.
              </p>

              <h2>Information We Collect</h2>

              <h3>Personal Data</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you register on our
                platform, express interest in obtaining information about us or our products and services, participate
                in activities on the platform, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul>
                <li>Name, email address, and contact details</li>
                <li>User credentials (username and password)</li>
                <li>Profile information (such as profile pictures, location, and role)</li>
                <li>Content you post or share on our platform</li>
                <li>Communications between you and other community members</li>
              </ul>

              <h3>Health Information</h3>
              <p>
                As a kidney care community platform, we may collect health-related information that you choose to share,
                such as:
              </p>
              <ul>
                <li>General information about your kidney health journey</li>
                <li>Treatment experiences you choose to share</li>
                <li>Questions about kidney health management</li>
              </ul>
              <p>
                <strong>Important:</strong> We do not collect detailed medical records or serve as a medical record
                system. Any health information you share is voluntary and at your discretion.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our platform, we may automatically collect certain information about your device,
                including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Create and manage your account</li>
                <li>Provide and maintain our platform services</li>
                <li>Personalize your experience on our platform</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Send administrative information and updates</li>
                <li>With your consent, send marketing and promotional communications</li>
                <li>Improve our platform and develop new features</li>
                <li>Monitor platform usage and ensure compliance with our terms</li>
                <li>Protect against unauthorized access and legal liability</li>
              </ul>

              <h2>Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li>
                  <strong>With Your Consent:</strong> We may disclose your information when you have given us permission
                  to do so.
                </li>
                <li>
                  <strong>With Other Users:</strong> Information you post publicly on our platform will be visible to
                  other users.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We may share your information with third-party vendors who
                  provide services on our behalf (such as hosting, data analysis, payment processing).
                </li>
                <li>
                  <strong>For Business Transfers:</strong> We may share or transfer your information in connection with
                  a merger, acquisition, or sale of all or a portion of our assets.
                </li>
                <li>
                  <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we
                  will require those affiliates to honor this Privacy Policy.
                </li>
                <li>
                  <strong>With Business Partners:</strong> With your consent, we may share your information with our
                  business partners to offer you certain products or services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information where required by law or to
                  protect our rights or the rights of others.
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no electronic transmission or storage system is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h2>Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access the personal information we have about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to withdraw consent where we rely on consent to process your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our platform is not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>

              <h2>Third-Party Websites</h2>
              <p>
                Our platform may contain links to third-party websites. We have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>

              <h2>Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                Email: privacy@kidneycommunity.in
                <br />
                Phone: +91 98765 43210
                <br />
                Address: 123 Kidney Care Street, Koramangala, Bangalore 560034, Karnataka, India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
