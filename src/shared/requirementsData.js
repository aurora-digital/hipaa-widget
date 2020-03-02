const requirementsData = [
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
    title: "Activity log",
    description:
      "This a required rule and you need to maintain logs for at least six years. Activity logs allow monitoring all the accesses and procedures that are being made to PHI."
  },
  {
    title: "Notifications",
    description:
      "If more than 500 individuals were affected by the breach notification must be reported to media no later than 60 days following the discovery. For smaller breaches, notification should be made until the end of the year of the discovery. Notification should include the nature and extent of the PHI, who used it (if known), whether the ePHI was acquired or viewed (if known) and the extent to which the risk has been mitigated."
  },
  {
    title: "Risk assessments",
    description:
      "The risk assessments are required and must be repeated at regular intervals to ensure continued compliance. After each risk assessment, measures should be taken to reduce the risks."
  },
  {
    title: "Business Associate Agreement",
    description:
      "A Business Associate can be a person or a business that provides a service that has access to the PHI (lawyers, billing companies, cloud storage services, email encryption services, etc). Before sharing PHI with these services it is required that you and these services sign a Business Associate specifying which PHI it'll access and how can it'll use it."
  },
  {
    title: "Contingency Plan",
    description:
      "A contingency plan is required and should include what steps must be taken and in what order, for different types of emergencies (cyberattacks, natural disasters, fires, vandalism or system failures). This way the integrity of ePHI is safeguarded and the normal operations can return as quickly as possible."
  }
];

export default requirementsData;
