export default function Terms() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
            <p className="text-muted-foreground mb-4">
              AFH Web Studio provides website design, development, hosting, and maintenance services
              specifically for Adult Family Homes. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Custom website design and development</li>
              <li>Content creation and copywriting</li>
              <li>Website hosting and maintenance</li>
              <li>SEO optimization and analytics setup</li>
              <li>Ongoing support and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong>Starter Plan:</strong> Full payment due upon project completion and approval.</p>
              <p><strong>Monthly Plans:</strong> Billed monthly in advance. First payment due upon project start.</p>
              <p>Late payments may result in service suspension after 30 days.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4">Monthly plans may be cancelled with 30 days written notice. Upon cancellation:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Your website will remain live for 30 days after final payment</li>
              <li>You will receive a backup of your website files</li>
              <li>No refunds for partial months or setup fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">Clients are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Providing accurate business information and content</li>
              <li>Supplying high-quality photos and materials</li>
              <li>Reviewing and approving work in a timely manner</li>
              <li>Ensuring all content complies with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, clients own the rights to their website content and custom design elements.
              AFH Web Studio retains rights to our proprietary tools, templates, and development methods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              AFH Web Studio's liability is limited to the amount paid for services. We are not responsible
              for indirect, incidental, or consequential damages. Websites are provided "as is" without
              warranties beyond those expressly stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">For questions about these Terms of Service, contact us at:</p>
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
