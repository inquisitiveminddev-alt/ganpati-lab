export const heroData = {
  badge: "Trusted Diagnostic Laboratory • Home Collection Available",

  title: (
    <>
      Accurate Diagnostics.
      <br />
      Trusted Healthcare.
      <br />
      Better Lives.
    </>
  ),

  subtitle:
    "Book blood tests, preventive health packages, and home sample collection with fast, accurate reports from experienced laboratory professionals.",

  primaryButton: {
    label: "Book a Test",
    href: "/book-test",
  },

  secondaryButton: {
    label: "Explore Packages",
    href: "/health-packages",
  },

  image: "/images/hero/laboratory.jpg",

  stats: [
    {
      value: "50K+",
      label: "Patients Served",
    },
    {
      value: "250+",
      label: "Diagnostic Tests",
    },
    {
      value: "99.8%",
      label: "Report Accuracy",
    },
    {
      value: "24 Hrs",
      label: "Digital Reports",
    },
  ],

  tests: [
    {
      id: 1,
      name: "Complete Blood Count",
      shortName: "CBC Test",
      price: "₹399",
      category: "Blood Test",
    },

    {
      id: 2,
      name: "HbA1c",
      shortName: "HbA1c",
      price: "₹599",
      category: "Diabetes",
    },

    {
      id: 3,
      name: "Thyroid Profile",
      shortName: "Thyroid",
      price: "₹699",
      category: "Hormone",
    },

    {
      id: 4,
      name: "Vitamin D",
      shortName: "Vitamin D",
      price: "₹999",
      category: "Vitamin",
    },

    {
      id: 5,
      name: "Liver Function Test",
      shortName: "LFT",
      price: "₹899",
      category: "Liver",
    },

    {
      id: 6,
      name: "Kidney Function Test",
      shortName: "KFT",
      price: "₹899",
      category: "Kidney",
    },
  ],

  packages: [
    {
      id: 1,
      name: "Complete Body Checkup",
      tests: "70+ Tests",
      price: "₹2,499",
      badge: "Most Popular",
    },

    {
      id: 2,
      name: "Basic Health Package",
      tests: "25 Tests",
      price: "₹999",
      badge: "Recommended",
    },

    {
      id: 3,
      name: "Women's Wellness",
      tests: "40 Tests",
      price: "₹1,999",
      badge: "New",
    },
  ],
};