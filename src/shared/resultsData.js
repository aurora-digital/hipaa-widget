const resultsData = [
  {
    title: "Unique user identification",
    description:
      "Having unique user identification for each user is a required rule and users must not share credentials between them. With that, you can assign access rights depending on which data users need to access and you also be able to monitoring who did what on activity logs."
  },
  {
    title: "Automatic log-off",
    description:
      "An automatic log-off will end the user session after a predefined time of inactivity, this way you will prevent unauthorized access when devices are left unattended. This is an addressable rule, not mandatory but it's a reasonable practice to keep the security of your system."
  },
  {
    title: "Encryption",
    description:
      "Messages with ePHI should be encrypted before sending them and decrypted by the authorized device who receives the message. This is an addressable rule mainly because systems that only communicate inside a system protected by the firewall, the firewall is a safeguard to prevent unauthorized accesses. Otherwise, you must implement an encryption method."
  },
  {
    title: "Activity logs",
    description:
      "This a required rule and you need to maintain logs for at least six years. Activity logs allow monitoring all the accesses and procedures that are being made to PHI."
  },
  {
    title: "Notifications",
    description: "..."
  },
  {
    title: "Risk assessment",
    description: "..."
  },
  {
    title: "Business associate agreement",
    description: "..."
  },
  {
    title: "Contingent plan",
    description: "..."
  }
];

export default resultsData;
