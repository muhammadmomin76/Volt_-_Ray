import React from 'react';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness', // or 'Organization' based on specific needs
    name: 'Volt & Ray Solar Solutions',
    description:
      'Empowering homes and businesses with clean, renewable energy solutions. Custom solar installations, commercial grids, and advanced energy storage.',
    url: 'https://voltandray.com',
    telephone: '+1-555-012-3456', // Replace with actual number
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Solar Way', // Replace
      addressLocality: 'San Francisco', // Replace
      addressRegion: 'CA',
      postalCode: '94105', // Replace
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749, // Replace
      longitude: -122.4194, // Replace
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/voltandray',
      'https://twitter.com/voltandray',
      'https://www.instagram.com/voltandray',
      'https://www.linkedin.com/company/voltandray',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
