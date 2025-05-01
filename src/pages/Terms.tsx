
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <p className="mb-4">Last Updated: May 1, 2025</p>
          
          <p className="mb-4">Welcome to ClearHold. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing or using ClearHold's services, you agree to be bound by these Terms. If you do not agree to all of these Terms, you may not access or use our services.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. Description of Services</h2>
          <p className="mb-4">ClearHold provides tools and services to help financial professionals check content for regulatory compliance. Our services are for educational and informational purposes only and do not constitute legal or compliance advice.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
          <p className="mb-4">You are responsible for your use of the services and for any content you submit, publish, or display through the services. You are solely responsible for ensuring your content complies with applicable laws, rules, and regulations.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. Disclaimer of Warranties</h2>
          <p className="mb-4">ClearHold's services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any results, and you acknowledge that regulatory standards and interpretations may change over time.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
          <p className="mb-4">In no event shall ClearHold be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">6. Changes to Terms</h2>
          <p className="mb-4">We may modify these Terms at any time. If we make changes, we will provide you with notice by updating the date at the top of these Terms. Your continued use of our services after any changes indicates your acceptance of the modified Terms.</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">7. Contact Information</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us at support@clearhold.co.</p>
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

export default Terms;
