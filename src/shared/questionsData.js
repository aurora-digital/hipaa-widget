const questionsData = [
  {
    title: "Do you have a unique user identification?",
    description:
      "Unique identification means that each user has a unique username and password to access the protected health information (PHI).",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Do you have an automatic log-off system on your software?",
    description:
      "Each time you open the software you write your unique username and password. Ideally, after some time without using it, it'll automatically log-off.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Are you using any encryption system to send PHI through devices?",
    description:
      "Encryption should be implemented when PHI needs to be sent between devices and services.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Do you have an activity log for all that is happening with PHI?",
    description:
      "Activity logs record what is done with the data when it was accessed and by which user.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title:
      "Do you have a system that notifies your users when there is a breach of their ePHI?",
    description:
      "If a breach occurs compromising the privacy and the security of PHI, affected individuals and entities must be notified.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Are you regularly conducting Risk Assessments?",
    description:
      "Risk assessments are accurate analysis of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronically protected health information (ePHI).",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title:
      "Have you signed a Business Associate Agreement (BAA) with your partner entities?",
    description:
      "A Business Associate Agreement is an agreement that you sign with your business associates, which includes what type of PHI it'll access for.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Have you prepared a Contingency Plan?",
    description:
      "A contingency plan is a set of plans, procedures or technical measures to enable the recovery of the system when an emergency happened.",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  }
];

export default questionsData;
