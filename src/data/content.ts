export const CONTENT = {
  navigation: {
    logo: {
      ariaLabel: 'Go to home page',
    },
    button: {
      text: 'Airbnb Setup',
      href: '/become-a-host?present_over_modals=true',
    },
  },
  hero: {
    title: {
      first: 'Your home could',
      second: 'make {{ price }}',
      third: 'on Airbnb',
    },
    subtitle: {
      valueNights: '{{ nights }} nights',
      night: '/night',
    },
    learnMore: {
      text: 'Learn how we',
      label: 'estimate earnings',
    },
  },
  propertySummary: {
    city: 'Amsterdam',
    room: 'Entire place',
    bedrooms: 2,
    ariaLabel:
      'Estimates for {{ city }}, {{ room }}, {{ bedrooms }} bedrooms, Tell us about your place to customize the estimate',
  },
  map: {
    ariaLabel:
      'Map of Amsterdam showing 12 listings and their average nightly price, Expand map to interact.',
  },
  labels: {
    bedrooms: 'bedrooms',
  },
  slider: {
    thumb: {
      ariaLabel: 'Adjust number of nights',
    },
    hiddenTitle:
      'How many nights? {{ nights }} nights. Hosting {{ nights }} nights. Adjustable. Slide forward to increase. Slide backward to decrease.',
    tooltipLabel: '{{ nights }} nights',
  },
} as const
