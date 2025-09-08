export default function Privacy() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us through our contact forms and inquiries:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name and contact information (email, phone)</li>
              <li>Adult Family Home business information</li>
              <li>Website preferences and requirements</li>
              <li>Messages and communications with us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Create and maintain your website</li>
              <li>Communicate about your project and ongoing services</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">PHI and Healthcare Data</h2>
            <p className="text-muted-foreground">
              <strong>We do not collect, store, or process Protected Health Information (PHI).</strong> Our 
              contact forms and website services are designed to collect only business contact information 
              and general website requirements. We are not a healthcare provider and do not handle any 
              patient or resident information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in operating our business</li>
              <li>When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>Email: hello@afhwebstudio.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
