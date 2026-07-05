import { ModernPricingPage, type PricingCardProps } from '@/components/ui/animated-glassy-pricing'

// NOTE: Demo data only — plans & prices are illustrative.
const plans: PricingCardProps[] = [
  {
    planName: 'Starter',
    description: 'For individuals getting started with AI automation.',
    price: '0',
    features: [
      '1 automation workflow',
      'Community support',
      'Weekly AI tips newsletter',
      'Basic templates library',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
  },
  {
    planName: 'Pro',
    description: 'For small teams scaling their processes.',
    price: '79',
    features: [
      'Up to 25 workflows',
      'Priority email support',
      'CRM & Airtable integrations',
      'Custom AI agents',
      'Monthly strategy call',
    ],
    buttonText: 'Choose Pro',
    isPopular: true,
    buttonVariant: 'primary',
  },
  {
    planName: 'Business',
    description: 'For companies running mission-critical automation.',
    price: '249',
    features: [
      'Unlimited workflows',
      'Dedicated consultant',
      'SLA & 24/7 support',
      'On-site team training',
      'Custom integrations',
    ],
    buttonText: 'Contact Us',
    buttonVariant: 'primary',
  },
]

function Pricing() {
  return (
    <ModernPricingPage
      title={
        <>
          Find the <span className="text-cyan-400">Perfect Plan</span> for Your Business
        </>
      }
      subtitle="Start for free, then grow with us. Flexible plans for projects of all sizes."
      plans={plans}
      showAnimatedBackground={true}
    />
  )
}

export default Pricing
