const questionsData = [
  {
    title: "Do you have a unique user identification?",
    description:
      "Unique identification means that each user has a unique username and password to access the PHI.",
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
      "Encryption should be implemented when PHI needs to be sent between devices used by authorized users.",
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
      "Do you have a system that notifies your users when there was a breach on their data?",
    description: "....",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Are you regularly conducting risk assessments?",
    description: "...",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title:
      "Have you signed a business associate agreement (BAA) with your partner entity?",
    description: "...",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  },
  {
    title: "Have you prepared a contingency plan?",
    description: "...",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "notapplied", label: "Doesn't apply" }
    ]
  }
];

export default questionsData;
