import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: May 10, 2025</p>

              <Link href="/legal/privacy-policy" className="mt-6 inline-block">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
              <p>
                Welcome to Kidney Community. These Terms of Service ("Terms") govern your access to and use of the
                Kidney Community website and platform (the "Service"). Please read these Terms carefully before using
                our Service.
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part
                of the Terms, you may not access the Service.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <h2>Account Registration</h2>
              <p>
                To access certain features of the Service, you may be required to register for an account. You must
                provide accurate, current, and complete information during the registration process and keep your
                account information up-to-date.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password. You agree not to disclose your password to any third party.
                You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
                account.
              </p>

              <h2>User Content</h2>
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material ("User Content"). You are responsible for the User Content
                that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>By posting User Content on or through the Service, you represent and warrant that:</p>
              <ul>
                <li>
                  The User Content is yours (you own it) or you have the right to use it and grant us the rights and
                  license as provided in these Terms.
                </li>
                <li>
                  The posting of your User Content on or through the Service does not violate the privacy rights,
                  publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </li>
                <li>
                  The User Content does not contain any material that could be considered defamatory, harmful,
                  harassing, abusive, obscene, or otherwise objectionable.
                </li>
              </ul>
              <p>
                We reserve the right to remove any User Content from the Service at our discretion, without prior
                notice, for any reason, including if we believe that such content violates these Terms.
              </p>

              <h2>Medical Disclaimer</h2>
              <p>
                The content provided on our Service is for informational purposes only and is not intended to be a
                substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your
                physician or other qualified health provider with any questions you may have regarding a medical
                condition.
              </p>
              <p>
                Never disregard professional medical advice or delay in seeking it because of something you have read on
                our Service. We do not recommend or endorse any specific tests, physicians, products, procedures,
                opinions, or other information that may be mentioned on the Service.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content (excluding User Content), features, and functionality are and will
                remain the exclusive property of Kidney Community and its licensors. The Service is protected by
                copyright, trademark, and other laws of both India and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of Kidney Community.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by
                Kidney Community. We have no control over, and assume no responsibility for, the content, privacy
                policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that Kidney Community shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or
                reliance on any such content, goods, or services available on or through any such websites or services.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
                not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to
                request account deletion.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Kidney Community, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from:
              </p>
              <ul>
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>

              <h2>Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its
                conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
                considered a waiver of those rights.
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                Any disputes arising out of or relating to these Terms or the Service shall first be attempted to be
                resolved through amicable negotiations. If such dispute cannot be settled through negotiation, it shall
                be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India. The
                place of arbitration shall be Bangalore, India.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email: legal@kidneycommunity.in
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
