
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <p className="mb-4">Last Updated: May 1, 2025</p>
          
          <p className="mb-4">This Privacy Policy explains how ClearHold collects, uses, and discloses information about you when you use our website and services.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us when you use our services, including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Content you submit for compliance checking</li>
            <li>Professional type and state selections</li>
            <li>Documents you upload</li>
            <li>Feedback you provide</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and analyze your content for compliance issues</li>
            <li>Develop new products and services</li>
            <li>Respond to your questions and feedback</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Data Retention</h2>
          <p className="mb-4">We retain the information we collect for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
          <p className="mb-4">We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of your information.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">5. Children's Privacy</h2>
          <p className="mb-4">Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Changes to This Policy</h2>
          <p className="mb-4">We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy. Your continued use of our services after any changes indicates your acceptance of the modified Privacy Policy.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at privacy@clearhold.co.</p>
        </div>
        
        <div className="mt-8">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
