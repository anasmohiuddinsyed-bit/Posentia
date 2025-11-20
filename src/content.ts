export type Country = "US" | "UAE";

export const cognivatorsContent = {
  badge: "COGNIVATORS • The Intelligence Infrastructure Company",
  headline: "Stop losing money you don't know you're losing.",
  subheadline:
    "Every transaction, every shift, every outlet hides patterns that cost you money. Cognivators finds them instantly so you can fix them before they drain your profits.",
  services: [
    {
      title: "AI Auditor",
      description: "Automatically audits every transaction to find hidden fees, duplicate charges, and revenue leaks.",
    },
    {
      title: "AI Cashflow Leak Detector",
      description: "Spots where money disappears: fees, fraud, inefficiencies, and missed opportunities in real-time.",
    },
    {
      title: "AI Receptionist",
      description: "Handles customer inquiries 24/7 in any language. Never miss a customer, never lose a sale.",
    },
    {
      title: "AI Competitor Intelligence",
      description: "Tracks competitor pricing and market trends so you stay competitive and maximize margins.",
    },
  ],
  valueLine: "Your data knows where the money goes. We make it visible so you can stop the leaks.",
  primaryCta: "Find Your Leaks Now",
  secondaryCta: "See How It Works",
};

export const posentiaContent: Record<
  Country,
  {
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
    };
    features: {
      title: string;
      description: string;
    }[];
    pricing: {
      plans: {
        name: string;
        subtitle: string;
        price: string;
        features: string[];
      }[];
    };
    contactEmail: string;
    footerNote: string;
  }
> = {
  US: {
    hero: {
      badge: "POSENTIA US • Your Retail Companion",
      headline: "Your POS data is hiding thousands in lost revenue. Find it now.",
      subheadline:
        "Upload your CSV or connect your systems. See exactly where fees eat your profits, where transactions don't match, and where outlets bleed money. Get your first leak report in 24 hours.",
      primaryCta: "Run Free Audit Now",
      secondaryCta: "See Live Demo",
    },
    features: [
      {
        title: "Missed Call Catcher",
        description: "POSENTIA answers when staff can't and sends automatic SMS follow-ups so you never lose a customer again.",
      },
      {
        title: "Smart Text Assistant",
        description: "Instant replies on SMS/iMessage with menus, hours, directions, and booking info.",
      },
      {
        title: "Cashflow Leak Finder",
        description: "Finds overcharges, duplicate fees, settlement drift, wrong rates, and margin leaks hidden inside your POS/payments.",
      },
      {
        title: "Staff Activity Alerts",
        description: "Flags unusual discounts, voids, refunds, and shift patterns that cost money.",
      },
      {
        title: "Daily Owner Summary",
        description: "A simple daily report: calls saved, questions answered, money protected, risks found.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "Starter",
          subtitle: "Find your leaks. Stop the bleeding. Start today.",
          price: "$199",
          features: [
            "Up to 30K transactions / month",
            "1 data source (Stripe, Square, or CSV)",
            "AI leak & fee audit, monthly",
            "Email report + CSV export",
          ],
        },
        {
          name: "Growth",
          subtitle: "Full visibility across all outlets. Stop leaks everywhere.",
          price: "$499",
          features: [
            "Up to 150K transactions / month",
            "3 data sources (POS, payments, accounting)",
            "Weekly AI audit + anomaly watchlist",
            "Slack / Teams alerts + PDF brief",
            "Priority support + onboarding",
          ],
        },
        {
          name: "Enterprise",
          subtitle: "Custom intelligence for complex operations.",
          price: "Custom",
          features: [
            "Unlimited locations & transaction volume",
            "Custom connectors (ERP, data warehouse)",
            "Dedicated analyst + compliance review",
            "SOC / ISO-ready data flows",
          ],
        },
      ],
    },
    contactEmail: "posentia@cognivators.com",
    footerNote: "POSENTIA US is operated by Cognivators.",
  },
  UAE: {
    hero: {
      badge: "POSENTIA UAE • Your Retail Companion",
      headline: "Stop losing money to aggregators, fees, and inefficiencies. See it all now.",
      subheadline:
        "Connect POS, payments, aggregators, and WhatsApp. See exactly where commissions eat margins, where settlements drift, and where outlets underperform. Get your first intelligence report in 24 hours.",
      primaryCta: "Talk to Dubai Team",
      secondaryCta: "See WhatsApp Demo",
    },
    features: [
      {
        title: "WhatsApp Front Desk (Arabic + English)",
        description: "Instant replies with menu, pin location, bookings, offers, all on WhatsApp.",
      },
      {
        title: "Missed Call Rescue",
        description: "If the business misses a call, POSENTIA follows up on WhatsApp instantly.",
      },
      {
        title: "Aggregator Payout Checker",
        description: "Checks Talabat, Deliveroo, Noon, and Careem payouts against your POS to find wrong fees, missing payouts, and mismatched commissions.",
      },
      {
        title: "Branch Margin Protector",
        description: "Shows which branches or cloud kitchens are leaking AED from discounts, voids, fees, or staff patterns.",
      },
      {
        title: "Daily AED Summary",
        description: "A simple end-of-day recap in AED: calls saved, chats handled, payouts, leaks, branch issues.",
      },
    ],
    pricing: {
      plans: [
        {
          name: "Boutique",
          subtitle: "Protect your flagship location. Stop leaks now.",
          price: "AED 750",
          features: [
            "Up to 100K AED volume / month",
            "1 data source (bank, POS, or CSV)",
            "Monthly AI fee & leak audit",
            "WhatsApp + email report",
          ],
        },
        {
          name: "Flagship",
          subtitle: "Full intelligence for high-demand venues.",
          price: "AED 1,850",
          features: [
            "Up to 600K AED volume / month",
            "3+ data sources (bank, POS, accounting)",
            "Weekly AI audit + anomaly alerts",
            "WhatsApp + Slack delivery",
            "Local UAE support window",
          ],
        },
        {
          name: "Group",
          subtitle: "Enterprise intelligence for multi-outlet operations.",
          price: "Custom",
          features: [
            "Unlimited volume & locations",
            "On-prem / VPC deployment available",
            "Custom dashboards & CFO pack",
            "Dedicated success engineer",
          ],
        },
      ],
    },
    contactEmail: "posentiauae@cognivators.com",
    footerNote: "POSENTIA UAE is operated by Cognivators.",
  },
};
