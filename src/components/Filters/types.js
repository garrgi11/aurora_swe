export const FILTER_OPTIONS = {
  useCase: [
    { id: 'text-generation', label: 'Text Generation & Writing', category: 'useCase' },
    { id: 'code-generation', label: 'Code Generation & Dev Tools', category: 'useCase' },
    { id: 'image-creation', label: 'Image Creation & Editing', category: 'useCase' },
    { id: 'video-animation', label: 'Video & Animation', category: 'useCase' },
    { id: 'audio-speech', label: 'Audio & Speech', category: 'useCase' },
    { id: 'data-analysis', label: 'Data Analysis & Visualization', category: 'useCase' },
    { id: 'automation', label: 'Automation & Workflows', category: 'useCase' },
  ],
  industry: [
    { id: 'finance', label: 'Finance & Trading', category: 'industry' },
    { id: 'marketing', label: 'Marketing & Social Media', category: 'industry' },
    { id: 'education', label: 'Education & Tutoring', category: 'industry' },
    { id: 'healthcare', label: 'Healthcare & Life Sciences', category: 'industry' },
    { id: 'legal', label: 'Legal & Compliance', category: 'industry' },
    { id: 'hr', label: 'Recruiting & HR', category: 'industry' },
  ],
  ioType: [
    { id: 'text-to-text', label: 'Text-to-Text', category: 'ioType' },
    { id: 'text-to-image', label: 'Text-to-Image', category: 'ioType' },
    { id: 'text-to-audio', label: 'Text-to-Audio', category: 'ioType' },
    { id: 'text-to-video', label: 'Text-to-Video', category: 'ioType' },
    { id: 'image-to-image', label: 'Image-to-Image', category: 'ioType' },
    { id: 'audio-to-text', label: 'Audio-to-Text', category: 'ioType' },
  ],
  customizationLevel: [
    { id: 'widgets', label: 'Plug-and-Play Widgets', category: 'customizationLevel' },
    { id: 'api', label: 'API-First Platforms', category: 'customizationLevel' },
    { id: 'no-code', label: 'No-Code Builders', category: 'customizationLevel' },
    { id: 'sdk', label: 'Enterprise SDKs', category: 'customizationLevel' },
  ],
  pricingModel: [
    { id: 'free', label: 'Free / Freemium', category: 'pricingModel' },
    { id: 'subscription', label: 'Subscription (SaaS)', category: 'pricingModel' },
    { id: 'pay-per-use', label: 'Pay-per-Use / Credits', category: 'pricingModel' },
    { id: 'open-source', label: 'Open-Source / Self-Hosted', category: 'pricingModel' },
  ],
}; 