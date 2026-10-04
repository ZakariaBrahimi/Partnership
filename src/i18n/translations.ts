export type Language = "en" | "fr" | "ar";

export const LANGUAGES: Language[] = ["ar", "fr", "en"];
export const STORAGE_KEY = "preferred-language";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

type Item = { title: string; text: string };

const en = {
  meta: {
    title: "FlexDZ × MizaniyaPay | Digital Payments for Algerian E-commerce",
    description:
      "Discover the strategic collaboration between FlexDZ and MizaniyaPay designed to bring secure digital payments to Algerian e-commerce merchants.",
  },
  common: {
    price: "4,500 DZD",
    skipToContent: "Skip to content",
    futureOpportunity: "Future opportunity",
    illustrative: "Illustrative interface",
    flexRole: "Commerce",
    mizaRole: "Payments",
  },
  selector: {
    choose: "Choose your language",
    chooseAr: "اختر لغتك",
    chooseFr: "Choisissez votre langue",
    tagline: "E-commerce meets digital payments.",
    options: [
      { code: "ar", native: "العربية", name: "Arabic", tag: "AR" },
      { code: "fr", native: "Français", name: "Français", tag: "FR" },
      { code: "en", native: "English", name: "English", tag: "EN" },
    ],
  },
  nav: {
    collaboration: "Collaboration",
    benefits: "Benefits",
    how: "How it works",
    merchants: "For merchants",
    payments: "Payment methods",
    contact: "Contact",
    cta: "Become a partner",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    mainNav: "Main navigation",
  },
  hero: {
    badge: "Strategic collaboration",
    title: "E-commerce meets digital payments.",
    text: "A strategic collaboration to bring Algerian shoppers and merchants to online payments: on FlexDZ, every checkout offers Cash on Delivery or MizaniyaPay e-payment.",
    primary: "Discover the collaboration",
    secondary: "Talk to us",
    logosLabel: "FlexDZ and MizaniyaPay partnership",
  },
  checkout: {
    storeLabel: "Checkout",
    orderSummary: "Order Summary",
    products: "2 Products",
    total: "Order total",
    paymentMethod: "Payment method",
    selected: "Selected",
    paySecurely: "Pay securely",
    cod: "Cash on delivery",
    codHint: "Pay the courier when your order arrives",
    epay: "MizaniyaPay e-payment",
    epayHint: "Pay online now, securely",
    app: "MizaniyaPay app",
    payVia: "Pay with",
  },
  overview: {
    id: "collaboration",
    eyebrow: "The collaboration",
    title: "Two platforms. One seamless commerce experience.",
    together: "Together, they create a complete digital commerce experience.",
    flex: {
      title: "Commerce infrastructure",
      items: [
        "Online storefront",
        "Product catalog",
        "Checkout",
        "Customer orders",
        "Order management",
        "Merchant operations",
        "Delivery workflow",
      ],
    },
    mizaniya: {
      title: "Payment infrastructure",
      items: [
        "Digital payment processing",
        "MizaniyaPay balance payments",
        "CIB payments",
        "Edahabia payments",
        "Secure payment confirmation",
        "Merchant settlement",
        "Payment tracking",
      ],
    },
  },
  benefits: {
    id: "benefits",
    eyebrow: "Benefits",
    title: "Why this collaboration matters",
    items: [
      {
        title: "Reduce dependency on Cash on Delivery",
        text: "Give customers the possibility to pay before delivery.",
      },
      {
        title: "More payment choices",
        text: "Customers can choose the payment method that works best for them.",
      },
      {
        title: "Faster access to funds",
        text: "Digital payments reduce the delay associated with collecting cash after delivery.",
      },
      {
        title: "Better customer experience",
        text: "A simple, modern and secure payment experience directly connected to the merchant's online store.",
      },
      {
        title: "Automatic payment confirmation",
        text: "FlexDZ can receive the payment result and update the related order automatically.",
      },
      {
        title: "Built for Algerian commerce",
        text: "The collaboration combines a local e-commerce platform with a local digital payment ecosystem.",
      },
    ] as Item[],
  },
  payments: {
    id: "payment-methods",
    eyebrow: "Payment methods",
    title: "One e-payment option. Multiple ways to pay.",
    cards: [
      { name: "MizaniyaPay", text: "Pay in seconds with the MizaniyaPay app." },
      { name: "CIB", text: "Accept payments using Algerian CIB bank cards." },
      { name: "Edahabia", text: "Allow customers to pay using Edahabia cards." },
    ],
    selectorTitle: "Choose your payment method",
    total: "Order total",
    cta: "Continue to secure payment",
  },
  how: {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "From checkout to payment confirmation",
    stepLabel: "Step",
    steps: [
      {
        title: "Merchant enables e-payment",
        text: "On FlexDZ, the merchant offers Cash on Delivery or MizaniyaPay e-payment. Choosing e-payment starts with creating a MizaniyaPay account.",
      },
      {
        title: "Customer reaches checkout",
        text: "Every checkout shows two options: Cash on Delivery or MizaniyaPay e-payment.",
      },
      {
        title: "Customer picks e-payment",
        text: "The customer chooses to pay online instead of paying cash on delivery.",
      },
      {
        title: "Customer pays securely",
        text: "Payment can be completed using:",
      },
      {
        title: "Payment confirmed",
        text: "MizaniyaPay confirms the transaction and FlexDZ marks the order as paid.",
      },
      {
        title: "Merchant gets paid",
        text: "Funds arrive in the merchant's MizaniyaPay account, to a personal bank account or the MizaniyaPartner account balance, and can be withdrawn later in cash or by bank transfer.",
      },
    ] as Item[],
  },
  flow: {
    eyebrow: "The payment journey",
    title: "Follow the payment, step by step",
    text: "A simple view of what happens between a customer's click and the merchant's paid order.",
    nodes: {
      customer: "Customer",
      store: "FlexDZ Store",
      checkout: "Checkout",
      pay: "Pay with MizaniyaPay",
      options: "Payment options",
      confirmation: "Payment confirmation",
      orderUpdated: "FlexDZ order updated",
      merchant: "Merchant paid into MizaniyaPay account",
    },
  },
  merchants: {
    id: "merchants",
    eyebrow: "For merchants",
    title: "What FlexDZ merchants gain",
    label: "Designed for Algerian merchants",
    dashboardTitle: "Orders",
    paid: "Paid",
    awaiting: "Awaiting payment",
    items: [
      { title: "Accept digital payments", text: "Offer e-payment next to Cash on Delivery and move customers online." },
      {
        title: "Simple setup",
        text: "Enable MizaniyaPay e-payment on FlexDZ and create your MizaniyaPay account to start.",
      },
      {
        title: "Real-time confirmation",
        text: "Know when a customer has successfully completed a payment.",
      },
      {
        title: "Better order visibility",
        text: "Connect payment status with order status.",
      },
      {
        title: "Flexible payouts",
        text: "Receive your money on a personal bank account or in your MizaniyaPartner account, and withdraw it later in cash or by bank transfer.",
      },
      {
        title: "Future capabilities",
        text: "The partnership can later unlock additional services and payment experiences.",
      },
    ] as Item[],
  },
  customers: {
    eyebrow: "For customers",
    title: "Better payments for FlexDZ customers",
    items: [
      {
        title: "More payment options",
        text: "Cash on Delivery or MizaniyaPay e-payment, with the MizaniyaPay app, CIB or Edahabia.",
      },
      {
        title: "Secure checkout",
        text: "A controlled checkout flow connected to the merchant's store.",
      },
      {
        title: "Faster checkout",
        text: "Choose a method, pay, and move on.",
      },
      {
        title: "Immediate payment confirmation",
        text: "The customer sees the payment result right away.",
      },
    ] as Item[],
    phone: {
      pay: "Pay",
      success: "Payment confirmed",
      order: "Order",
    },
  },
  future: {
    id: "future",
    eyebrow: "Beyond online checkout",
    title: "Additional collaboration opportunities",
    text: "These capabilities are not part of the initial integration. They are future collaboration opportunities, not features available today.",
    scopeTitle: "Initial integration scope",
    scope: [
      "FlexDZ merchant checkout",
      "MizaniyaPay payment integration",
      "MizaniyaPay merchant account creation",
      "MizaniyaPay app payment",
      "CIB and Edahabia payment",
      "Payment confirmation",
      "Order payment-status synchronization",
      "Payout to a bank account or MizaniyaPartner account",
      "Withdrawal in cash or by bank transfer",
    ],
    items: [
      {
        title: "Payment Links",
        text: "Merchants can share payment links with customers outside the normal checkout flow.",
      },
      {
        title: "QR Payments",
        text: "Enable digital payment experiences through QR codes.",
      },
      {
        title: "Refunds",
        text: "Future integration could allow payment refunds to be initiated from the commerce workflow.",
      },
      {
        title: "Instant withdrawals",
        text: "Faster ways to move money from the MizaniyaPay account to cash or a bank account.",
      },
      {
        title: "Payment analytics",
        text: "Give merchants better visibility into successful, failed and pending payments.",
      },
      {
        title: "Promotional campaigns",
        text: "Launch cashback or joint promotional campaigns for FlexDZ merchants and MizaniyaPay users.",
      },
    ] as Item[],
  },
  value: {
    eyebrow: "Partnership value",
    title: "Value for both platforms",
    flexTitle: "For FlexDZ",
    flex: [
      "Stronger checkout offering",
      "More value for merchants",
      "Reduced dependency on COD",
      "Local digital payment capability",
      "Improved merchant ecosystem",
    ],
    mizaTitle: "For MizaniyaPay",
    miza: [
      "Access to online merchants",
      "Increased payment volume",
      "More digital-payment use cases",
      "Stronger presence in Algerian e-commerce",
      "Merchant acquisition opportunities",
    ],
    sharedLabel: "Shared value",
    shared: "Accelerating digital commerce adoption in Algeria.",
  },
  journey: {
    eyebrow: "Example merchant journey",
    title: "Imagine a FlexDZ merchant selling online",
    s1: "A customer discovers a product for",
    s2Title: "Instead of selecting",
    cod: "Cash on Delivery",
    s2Select: "the customer selects",
    online: "MizaniyaPay e-payment",
    s3: "Then pays with",
    or: "or",
    s4Title: "Payment succeeds.",
    s4Text: "FlexDZ receives the confirmation.",
    s5Title: "Order status changes to:",
    statusLabel: "Order status",
    awaiting: "Awaiting payment",
    paid: "Paid",
    s5Text:
      "The merchant prepares the order knowing that payment has already been completed.",
  },
  comparison: {
    eyebrow: "Before and after",
    title: "A different way to get paid",
    cod: {
      title: "Traditional COD experience",
      steps: [
        "Customer orders",
        "Merchant ships",
        "Courier delivers",
        "Courier collects cash",
        "Merchant waits for settlement",
      ],
      problemsTitle: "Potential problems",
      problems: [
        "Refused deliveries",
        "Delayed cash collection",
        "Reconciliation complexity",
        "Higher operational dependency",
      ],
    },
    digital: {
      title: "FlexDZ + MizaniyaPay",
      steps: [
        "Customer orders",
        "Customer pays online",
        "Payment confirmed",
        "Merchant ships a paid order",
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Payment confirmed earlier",
        "Better visibility",
        "Simpler payment tracking",
        "Less dependency on cash collection",
      ],
    },
    note: "Digital payments help reduce these challenges but do not eliminate every operational risk.",
  },
  partners: {
    id: "partners",
    eyebrow: "Our network",
    title: "Our current partnerships",
    text: "A growing network of partners working with us to bring Algerian e-commerce online.",
  },
  trust: {
    eyebrow: "Trust",
    title: "Designed around secure payment experiences",
    items: [
      "Secure payment processing",
      "Payment status confirmation",
      "Clear transaction tracking",
      "Merchant-focused payment infrastructure",
      "Controlled checkout flow",
    ],
  },
  cta: {
    id: "contact",
    title: "Let's build the next generation of Algerian e-commerce payments.",
    text: "FlexDZ and MizaniyaPay can combine commerce and payments into a smoother digital experience for Algerian merchants and customers.",
    primary: "Start the collaboration",
    secondary: "Contact MizaniyaPay",
  },
  footer: {
    tagline: "A collaboration for the future of digital commerce in Algeria.",
    links: {
      flexdz: "FlexDZ",
      mizaniyapay: "MizaniyaPay",
      collaboration: "Collaboration",
      contact: "Contact",
      privacy: "Privacy",
    },
    navLabel: "Footer",
  },
};

export type Translation = Widen<typeof en>;

const fr: Translation = {
  meta: {
    title: "FlexDZ × MizaniyaPay | Paiements digitaux pour le e-commerce algérien",
    description:
      "Découvrez la collaboration stratégique entre FlexDZ et MizaniyaPay, conçue pour offrir des paiements digitaux sécurisés aux marchands e-commerce algériens.",
  },
  common: {
    price: "4 500 DZD",
    skipToContent: "Aller au contenu",
    futureOpportunity: "Opportunité future",
    illustrative: "Interface illustrative",
    flexRole: "Commerce",
    mizaRole: "Paiements",
  },
  selector: {
    choose: "Choisissez votre langue",
    chooseAr: "اختر لغتك",
    chooseFr: "Choisissez votre langue",
    tagline: "Le e-commerce rencontre le paiement digital.",
    options: [
      { code: "ar", native: "العربية", name: "Arabe", tag: "AR" },
      { code: "fr", native: "Français", name: "Français", tag: "FR" },
      { code: "en", native: "English", name: "Anglais", tag: "EN" },
    ],
  },
  nav: {
    collaboration: "Collaboration",
    benefits: "Avantages",
    how: "Fonctionnement",
    merchants: "Pour les marchands",
    payments: "Moyens de paiement",
    contact: "Contact",
    cta: "Devenir partenaire",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    mainNav: "Navigation principale",
  },
  hero: {
    badge: "Collaboration stratégique",
    title: "Le e-commerce rencontre le paiement digital.",
    text: "Une collaboration stratégique pour amener les acheteurs et les marchands algériens vers le paiement en ligne : sur FlexDZ, chaque commande propose le paiement à la livraison ou le paiement électronique MizaniyaPay.",
    primary: "Découvrir la collaboration",
    secondary: "Parlons-en",
    logosLabel: "Partenariat FlexDZ et MizaniyaPay",
  },
  checkout: {
    storeLabel: "Paiement",
    orderSummary: "Récapitulatif de la commande",
    products: "2 produits",
    total: "Total de la commande",
    paymentMethod: "Moyen de paiement",
    selected: "Sélectionné",
    paySecurely: "Payer en toute sécurité",
    cod: "Paiement à la livraison",
    codHint: "Payez le livreur à la réception de votre commande",
    epay: "Paiement électronique MizaniyaPay",
    epayHint: "Payez en ligne dès maintenant, en toute sécurité",
    app: "Application MizaniyaPay",
    payVia: "Payer avec",
  },
  overview: {
    id: "collaboration",
    eyebrow: "La collaboration",
    title: "Deux plateformes. Une expérience commerciale fluide.",
    together:
      "Ensemble, elles offrent une expérience de commerce digital complète.",
    flex: {
      title: "Infrastructure de commerce",
      items: [
        "Boutique en ligne",
        "Catalogue produits",
        "Finalisation de commande",
        "Commandes clients",
        "Gestion des commandes",
        "Opérations marchand",
        "Processus de livraison",
      ],
    },
    mizaniya: {
      title: "Infrastructure de paiement",
      items: [
        "Traitement des paiements digitaux",
        "Paiements par solde MizaniyaPay",
        "Paiements CIB",
        "Paiements Edahabia",
        "Confirmation sécurisée du paiement",
        "Règlement marchand",
        "Suivi des paiements",
      ],
    },
  },
  benefits: {
    id: "benefits",
    eyebrow: "Avantages",
    title: "Pourquoi cette collaboration compte",
    items: [
      {
        title: "Moins de dépendance au paiement à la livraison",
        text: "Offrez à vos clients la possibilité de payer avant la livraison.",
      },
      {
        title: "Plus de choix de paiement",
        text: "Chaque client choisit le moyen de paiement qui lui convient le mieux.",
      },
      {
        title: "Accès plus rapide aux fonds",
        text: "Les paiements digitaux réduisent le délai lié à l'encaissement en espèces après la livraison.",
      },
      {
        title: "Une meilleure expérience client",
        text: "Une expérience de paiement simple, moderne et sécurisée, directement connectée à la boutique en ligne du marchand.",
      },
      {
        title: "Confirmation automatique du paiement",
        text: "FlexDZ peut recevoir le résultat du paiement et mettre à jour la commande concernée automatiquement.",
      },
      {
        title: "Pensé pour le commerce algérien",
        text: "La collaboration associe une plateforme e-commerce locale à un écosystème de paiement digital local.",
      },
    ],
  },
  payments: {
    id: "payment-methods",
    eyebrow: "Moyens de paiement",
    title: "Un seul paiement électronique. Plusieurs façons de payer.",
    cards: [
      {
        name: "MizaniyaPay",
        text: "Payez en quelques secondes avec l'application MizaniyaPay.",
      },
      {
        name: "CIB",
        text: "Acceptez les paiements par carte bancaire CIB algérienne.",
      },
      {
        name: "Edahabia",
        text: "Permettez à vos clients de payer avec leur carte Edahabia.",
      },
    ],
    selectorTitle: "Choisissez votre moyen de paiement",
    total: "Total de la commande",
    cta: "Continuer vers le paiement sécurisé",
  },
  how: {
    id: "how-it-works",
    eyebrow: "Fonctionnement",
    title: "Du paiement à la confirmation",
    stepLabel: "Étape",
    steps: [
      {
        title: "Le marchand active le paiement électronique",
        text: "Sur FlexDZ, le marchand propose le paiement à la livraison ou le paiement électronique MizaniyaPay. Choisir ce dernier commence par la création d'un compte MizaniyaPay.",
      },
      {
        title: "Le client arrive à la caisse",
        text: "Chaque commande affiche deux options : paiement à la livraison ou paiement électronique MizaniyaPay.",
      },
      {
        title: "Le client choisit le paiement électronique",
        text: "Le client choisit de payer en ligne plutôt qu'à la livraison.",
      },
      {
        title: "Le client paie en toute sécurité",
        text: "Le paiement peut être effectué avec :",
      },
      {
        title: "Paiement confirmé",
        text: "MizaniyaPay confirme la transaction et FlexDZ marque la commande comme payée.",
      },
      {
        title: "Le marchand est payé",
        text: "Les fonds arrivent sur le compte MizaniyaPay du marchand, vers un compte bancaire personnel ou le solde du compte MizaniyaPartner, et peuvent être retirés plus tard en espèces ou par virement bancaire.",
      },
    ],
  },
  flow: {
    eyebrow: "Le parcours du paiement",
    title: "Suivez le paiement, étape par étape",
    text: "Une vue simple de ce qui se passe entre le clic du client et la commande payée du marchand.",
    nodes: {
      customer: "Client",
      store: "Boutique FlexDZ",
      checkout: "Paiement de la commande",
      pay: "Payer avec MizaniyaPay",
      options: "Moyens de paiement",
      confirmation: "Confirmation du paiement",
      orderUpdated: "Commande FlexDZ mise à jour",
      merchant: "Le marchand est payé sur son compte MizaniyaPay",
    },
  },
  merchants: {
    id: "merchants",
    eyebrow: "Pour les marchands",
    title: "Ce que gagnent les marchands FlexDZ",
    label: "Conçu pour les marchands algériens",
    dashboardTitle: "Commandes",
    paid: "Payée",
    awaiting: "En attente de paiement",
    items: [
      {
        title: "Accepter les paiements digitaux",
        text: "Proposez le paiement électronique en plus du paiement à la livraison et amenez vos clients vers le paiement en ligne.",
      },
      {
        title: "Mise en place simple",
        text: "Activez le paiement électronique MizaniyaPay sur FlexDZ et créez votre compte MizaniyaPay pour commencer.",
      },
      {
        title: "Confirmation en temps réel",
        text: "Sachez quand un client a finalisé son paiement avec succès.",
      },
      {
        title: "Meilleure visibilité sur les commandes",
        text: "Reliez le statut du paiement au statut de la commande.",
      },
      {
        title: "Versements flexibles",
        text: "Recevez votre argent sur un compte bancaire personnel ou sur votre compte MizaniyaPartner, puis retirez-le plus tard en espèces ou par virement bancaire.",
      },
      {
        title: "Capacités futures",
        text: "Le partenariat pourra ensuite ouvrir la voie à de nouveaux services et expériences de paiement.",
      },
    ],
  },
  customers: {
    eyebrow: "Pour les clients",
    title: "Des paiements plus simples pour les clients FlexDZ",
    items: [
      {
        title: "Plus de moyens de paiement",
        text: "Paiement à la livraison ou paiement électronique MizaniyaPay, avec l'application MizaniyaPay, CIB ou Edahabia.",
      },
      {
        title: "Paiement sécurisé",
        text: "Un parcours de paiement maîtrisé, relié à la boutique du marchand.",
      },
      {
        title: "Paiement plus rapide",
        text: "On choisit un moyen de paiement, on paie, et c'est terminé.",
      },
      {
        title: "Confirmation immédiate du paiement",
        text: "Le client voit le résultat du paiement immédiatement.",
      },
    ],
    phone: { pay: "Payer", success: "Paiement confirmé", order: "Commande" },
  },
  future: {
    id: "future",
    eyebrow: "Au-delà du paiement en ligne",
    title: "Autres opportunités de collaboration",
    text: "Ces capacités ne font pas partie de l'intégration initiale. Ce sont des opportunités de collaboration futures, et non des fonctionnalités disponibles aujourd'hui.",
    scopeTitle: "Périmètre de l'intégration initiale",
    scope: [
      "Paiement des marchands FlexDZ",
      "Intégration du paiement MizaniyaPay",
      "Création du compte marchand MizaniyaPay",
      "Paiement via l'application MizaniyaPay",
      "Paiement CIB et Edahabia",
      "Confirmation du paiement",
      "Synchronisation du statut de paiement des commandes",
      "Versement sur compte bancaire ou compte MizaniyaPartner",
      "Retrait en espèces ou par virement bancaire",
    ],
    items: [
      {
        title: "Liens de paiement",
        text: "Les marchands pourraient partager des liens de paiement avec leurs clients, en dehors du parcours de commande habituel.",
      },
      {
        title: "Paiements par QR code",
        text: "Proposer des expériences de paiement digital via des QR codes.",
      },
      {
        title: "Remboursements",
        text: "Une intégration future pourrait permettre de lancer des remboursements depuis le flux de commerce.",
      },
      {
        title: "Retraits instantanés",
        text: "Des moyens plus rapides de transférer l'argent du compte MizaniyaPay vers des espèces ou un compte bancaire.",
      },
      {
        title: "Analytique des paiements",
        text: "Offrir aux marchands une meilleure visibilité sur les paiements réussis, échoués et en attente.",
      },
      {
        title: "Campagnes promotionnelles",
        text: "Lancer des campagnes de cashback ou des promotions conjointes pour les marchands FlexDZ et les utilisateurs MizaniyaPay.",
      },
    ],
  },
  value: {
    eyebrow: "Valeur du partenariat",
    title: "De la valeur pour les deux plateformes",
    flexTitle: "Pour FlexDZ",
    flex: [
      "Une offre de paiement renforcée",
      "Plus de valeur pour les marchands",
      "Moins de dépendance au paiement à la livraison",
      "Une capacité de paiement digital locale",
      "Un écosystème marchand amélioré",
    ],
    mizaTitle: "Pour MizaniyaPay",
    miza: [
      "Accès aux marchands en ligne",
      "Hausse du volume de paiements",
      "Davantage de cas d'usage du paiement digital",
      "Une présence renforcée dans le e-commerce algérien",
      "Opportunités d'acquisition de marchands",
    ],
    sharedLabel: "Valeur partagée",
    shared: "Accélérer l'adoption du commerce digital en Algérie.",
  },
  journey: {
    eyebrow: "Exemple de parcours marchand",
    title: "Imaginez un marchand FlexDZ qui vend en ligne",
    s1: "Un client découvre un produit à",
    s2Title: "Au lieu de choisir",
    cod: "Paiement à la livraison",
    s2Select: "le client choisit",
    online: "Paiement électronique MizaniyaPay",
    s3: "Puis il paie avec",
    or: "ou",
    s4Title: "Le paiement réussit.",
    s4Text: "FlexDZ reçoit la confirmation.",
    s5Title: "Le statut de la commande passe à :",
    statusLabel: "Statut de la commande",
    awaiting: "En attente de paiement",
    paid: "Payée",
    s5Text:
      "Le marchand prépare la commande en sachant que le paiement a déjà été effectué.",
  },
  comparison: {
    eyebrow: "Avant et après",
    title: "Une autre façon d'être payé",
    cod: {
      title: "Paiement à la livraison classique",
      steps: [
        "Le client commande",
        "Le marchand expédie",
        "Le livreur livre",
        "Le livreur encaisse les espèces",
        "Le marchand attend le règlement",
      ],
      problemsTitle: "Problèmes possibles",
      problems: [
        "Livraisons refusées",
        "Encaissement tardif des espèces",
        "Réconciliation complexe",
        "Forte dépendance opérationnelle",
      ],
    },
    digital: {
      title: "FlexDZ + MizaniyaPay",
      steps: [
        "Le client commande",
        "Le client paie en ligne",
        "Paiement confirmé",
        "Le marchand expédie une commande déjà payée",
      ],
      benefitsTitle: "Avantages",
      benefits: [
        "Paiement confirmé plus tôt",
        "Meilleure visibilité",
        "Suivi des paiements simplifié",
        "Moins de dépendance à l'encaissement en espèces",
      ],
    },
    note: "Le paiement digital aide à réduire ces difficultés, sans éliminer tous les risques opérationnels.",
  },
  partners: {
    id: "partners",
    eyebrow: "Notre réseau",
    title: "Nos partenariats actuels",
    text: "Un réseau de partenaires en croissance, mobilisés pour amener le e-commerce algérien en ligne.",
  },
  trust: {
    eyebrow: "Confiance",
    title: "Pensé autour d'expériences de paiement sécurisées",
    items: [
      "Traitement sécurisé des paiements",
      "Confirmation du statut du paiement",
      "Suivi clair des transactions",
      "Infrastructure de paiement orientée marchands",
      "Parcours de paiement maîtrisé",
    ],
  },
  cta: {
    id: "contact",
    title:
      "Construisons ensemble la prochaine génération du paiement e-commerce en Algérie.",
    text: "FlexDZ et MizaniyaPay peuvent réunir commerce et paiement dans une expérience digitale plus fluide pour les marchands et les clients algériens.",
    primary: "Lancer la collaboration",
    secondary: "Contacter MizaniyaPay",
  },
  footer: {
    tagline:
      "Une collaboration pour l'avenir du commerce digital en Algérie.",
    links: {
      flexdz: "FlexDZ",
      mizaniyapay: "MizaniyaPay",
      collaboration: "Collaboration",
      contact: "Contact",
      privacy: "Confidentialité",
    },
    navLabel: "Pied de page",
  },
};

const ar: Translation = {
  meta: {
    title: "FlexDZ × MizaniyaPay | المدفوعات الرقمية للتجارة الإلكترونية في الجزائر",
    description:
      "اكتشف الشراكة الاستراتيجية بين FlexDZ وMizaniyaPay، الهادفة إلى توفير مدفوعات رقمية آمنة لتجار التجارة الإلكترونية في الجزائر.",
  },
  common: {
    price: "4,500 دج",
    skipToContent: "انتقل إلى المحتوى",
    futureOpportunity: "فرصة مستقبلية",
    illustrative: "واجهة توضيحية",
    flexRole: "التجارة",
    mizaRole: "المدفوعات",
  },
  selector: {
    choose: "Choose your language",
    chooseAr: "اختر لغتك",
    chooseFr: "Choisissez votre langue",
    tagline: "التجارة الإلكترونية تلتقي بالدفع الرقمي",
    options: [
      { code: "ar", native: "العربية", name: "العربية", tag: "AR" },
      { code: "fr", native: "Français", name: "الفرنسية", tag: "FR" },
      { code: "en", native: "English", name: "الإنجليزية", tag: "EN" },
    ],
  },
  nav: {
    collaboration: "الشراكة",
    benefits: "المزايا",
    how: "كيف تعمل",
    merchants: "للتجار",
    payments: "وسائل الدفع",
    contact: "تواصل معنا",
    cta: "كن شريكاً",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اللغة",
    mainNav: "التنقل الرئيسي",
  },
  hero: {
    badge: "شراكة استراتيجية",
    title: "التجارة الإلكترونية تلتقي بالدفع الرقمي",
    text: "شراكة استراتيجية لتشجيع المجتمع الجزائري، مشترين وتجاراً، على الدفع عبر الإنترنت: في FlexDZ يقدّم كل طلب خيارين، الدفع عند الاستلام أو الدفع الإلكتروني عبر MizaniyaPay.",
    primary: "اكتشف الشراكة",
    secondary: "تحدّث إلينا",
    logosLabel: "شراكة FlexDZ وMizaniyaPay",
  },
  checkout: {
    storeLabel: "إتمام الطلب",
    orderSummary: "ملخص الطلب",
    products: "منتجان",
    total: "إجمالي الطلب",
    paymentMethod: "وسيلة الدفع",
    selected: "محدَّدة",
    paySecurely: "ادفع بأمان",
    cod: "الدفع عند الاستلام",
    codHint: "ادفع للموزّع عند وصول طلبك",
    epay: "الدفع الإلكتروني عبر MizaniyaPay",
    epayHint: "ادفع عبر الإنترنت الآن وبأمان",
    app: "تطبيق MizaniyaPay",
    payVia: "ادفع عبر",
  },
  overview: {
    id: "collaboration",
    eyebrow: "الشراكة",
    title: "منصتان. تجربة تجارية واحدة متكاملة.",
    together: "معاً، تصنعان تجربة تجارة رقمية متكاملة.",
    flex: {
      title: "البنية التحتية للتجارة",
      items: [
        "المتجر الإلكتروني",
        "كتالوج المنتجات",
        "إتمام الطلب",
        "طلبات العملاء",
        "إدارة الطلبات",
        "عمليات التاجر",
        "مسار التوصيل",
      ],
    },
    mizaniya: {
      title: "البنية التحتية للدفع",
      items: [
        "معالجة المدفوعات الرقمية",
        "الدفع برصيد MizaniyaPay",
        "الدفع ببطاقة CIB",
        "الدفع ببطاقة Edahabia",
        "تأكيد آمن للدفع",
        "تسوية مستحقات التاجر",
        "تتبّع المدفوعات",
      ],
    },
  },
  benefits: {
    id: "benefits",
    eyebrow: "المزايا",
    title: "لماذا تهمّ هذه الشراكة",
    items: [
      {
        title: "تقليل الاعتماد على الدفع عند الاستلام",
        text: "امنح عملاءك إمكانية الدفع قبل التوصيل.",
      },
      {
        title: "خيارات دفع أكثر",
        text: "يختار العميل وسيلة الدفع الأنسب له.",
      },
      {
        title: "وصول أسرع إلى الأموال",
        text: "تقلّل المدفوعات الرقمية التأخير المرتبط بتحصيل النقد بعد التوصيل.",
      },
      {
        title: "تجربة عميل أفضل",
        text: "تجربة دفع بسيطة وعصرية وآمنة، مرتبطة مباشرة بالمتجر الإلكتروني للتاجر.",
      },
      {
        title: "تأكيد تلقائي للدفع",
        text: "يمكن لـ FlexDZ استلام نتيجة الدفع وتحديث الطلب المعني تلقائياً.",
      },
      {
        title: "مصمَّمة للتجارة الجزائرية",
        text: "تجمع الشراكة بين منصة تجارة إلكترونية محلية ومنظومة دفع رقمي محلية.",
      },
    ],
  },
  payments: {
    id: "payment-methods",
    eyebrow: "وسائل الدفع",
    title: "خيار دفع إلكتروني واحد. وسائل دفع متعددة.",
    cards: [
      {
        name: "MizaniyaPay",
        text: "ادفع في ثوانٍ عبر تطبيق MizaniyaPay.",
      },
      { name: "CIB", text: "اقبل المدفوعات ببطاقات CIB البنكية الجزائرية." },
      {
        name: "Edahabia",
        text: "أتح لعملائك الدفع ببطاقة Edahabia.",
      },
    ],
    selectorTitle: "اختر وسيلة الدفع",
    total: "إجمالي الطلب",
    cta: "المتابعة إلى الدفع الآمن",
  },
  how: {
    id: "how-it-works",
    eyebrow: "كيف تعمل",
    title: "من إتمام الطلب إلى تأكيد الدفع",
    stepLabel: "الخطوة",
    steps: [
      {
        title: "التاجر يفعّل الدفع الإلكتروني",
        text: "في FlexDZ يقدّم التاجر خيارين: الدفع عند الاستلام أو الدفع الإلكتروني عبر MizaniyaPay. واختيار الدفع الإلكتروني يبدأ بإنشاء حساب MizaniyaPay.",
      },
      {
        title: "العميل يصل إلى إتمام الطلب",
        text: "تعرض كل صفحة إتمام طلب خيارين: الدفع عند الاستلام أو الدفع الإلكتروني عبر MizaniyaPay.",
      },
      {
        title: "العميل يختار الدفع الإلكتروني",
        text: "يختار العميل الدفع عبر الإنترنت بدلاً من الدفع عند الاستلام.",
      },
      {
        title: "العميل يدفع بأمان",
        text: "يمكن إتمام الدفع عبر:",
      },
      {
        title: "تأكيد الدفع",
        text: "تؤكّد MizaniyaPay العملية وتحوّل FlexDZ حالة الطلب إلى مدفوع.",
      },
      {
        title: "التاجر يستلم أمواله",
        text: "تصل الأموال إلى حساب التاجر في MizaniyaPay، إلى حساب بنكي شخصي أو إلى رصيد حساب MizaniyaPartner، ويمكن سحبها لاحقاً نقداً أو عبر تحويل بنكي.",
      },
    ],
  },
  flow: {
    eyebrow: "مسار الدفع",
    title: "تتبّع الدفع خطوة بخطوة",
    text: "نظرة مبسّطة على ما يحدث بين نقرة العميل والطلب المدفوع لدى التاجر.",
    nodes: {
      customer: "العميل",
      store: "متجر FlexDZ",
      checkout: "إتمام الطلب",
      pay: "الدفع عبر MizaniyaPay",
      options: "وسائل الدفع",
      confirmation: "تأكيد الدفع",
      orderUpdated: "تحديث الطلب في FlexDZ",
      merchant: "التاجر يستلم المبلغ في حساب MizaniyaPay",
    },
  },
  merchants: {
    id: "merchants",
    eyebrow: "للتجار",
    title: "ما يكسبه تجار FlexDZ",
    label: "مصمَّم للتجار الجزائريين",
    dashboardTitle: "الطلبات",
    paid: "مدفوع",
    awaiting: "في انتظار الدفع",
    items: [
      {
        title: "قبول المدفوعات الرقمية",
        text: "قدّم الدفع الإلكتروني إلى جانب الدفع عند الاستلام وانقل عملاءك إلى الإنترنت.",
      },
      {
        title: "إعداد بسيط",
        text: "فعّل الدفع الإلكتروني عبر MizaniyaPay في FlexDZ وأنشئ حساب MizaniyaPay للبدء.",
      },
      {
        title: "تأكيد فوري",
        text: "اعرف لحظة إتمام العميل للدفع بنجاح.",
      },
      {
        title: "رؤية أوضح للطلبات",
        text: "اربط حالة الدفع بحالة الطلب.",
      },
      {
        title: "تحويلات مرنة",
        text: "استلم أموالك في حساب بنكي شخصي أو في حساب MizaniyaPartner، واسحبها لاحقاً نقداً أو عبر تحويل بنكي.",
      },
      {
        title: "إمكانات مستقبلية",
        text: "يمكن للشراكة أن تتيح لاحقاً خدمات وتجارب دفع إضافية.",
      },
    ],
  },
  customers: {
    eyebrow: "للعملاء",
    title: "تجربة دفع أفضل لعملاء FlexDZ",
    items: [
      {
        title: "خيارات دفع أكثر",
        text: "الدفع عند الاستلام أو الدفع الإلكتروني عبر MizaniyaPay، بتطبيق MizaniyaPay أو CIB أو Edahabia.",
      },
      {
        title: "إتمام طلب آمن",
        text: "مسار دفع منظَّم ومرتبط بمتجر التاجر.",
      },
      {
        title: "إتمام طلب أسرع",
        text: "اختر وسيلة الدفع، وادفع، وانتهى الأمر.",
      },
      {
        title: "تأكيد فوري للدفع",
        text: "يرى العميل نتيجة الدفع على الفور.",
      },
    ],
    phone: { pay: "ادفع", success: "تم تأكيد الدفع", order: "الطلب" },
  },
  future: {
    id: "future",
    eyebrow: "ما بعد الدفع عبر المتجر",
    title: "فرص تعاون إضافية",
    text: "هذه الإمكانات ليست جزءاً من التكامل الأولي. إنها فرص تعاون مستقبلية، وليست خدمات متاحة اليوم.",
    scopeTitle: "نطاق التكامل الأولي",
    scope: [
      "إتمام الطلب لدى تجار FlexDZ",
      "تكامل الدفع مع MizaniyaPay",
      "إنشاء حساب التاجر في MizaniyaPay",
      "الدفع عبر تطبيق MizaniyaPay",
      "الدفع ببطاقتي CIB وEdahabia",
      "تأكيد الدفع",
      "مزامنة حالة دفع الطلبات",
      "التحويل إلى حساب بنكي أو حساب MizaniyaPartner",
      "السحب نقداً أو عبر تحويل بنكي",
    ],
    items: [
      {
        title: "روابط الدفع",
        text: "يمكن للتجار مشاركة روابط دفع مع العملاء خارج مسار إتمام الطلب المعتاد.",
      },
      {
        title: "الدفع عبر رمز QR",
        text: "إتاحة تجارب دفع رقمي عبر رموز QR.",
      },
      {
        title: "استرجاع المبالغ",
        text: "قد يتيح تكامل مستقبلي بدء عمليات استرجاع المبالغ من مسار إدارة الطلبات.",
      },
      {
        title: "سحب فوري",
        text: "طرق أسرع لتحويل الأموال من حساب MizaniyaPay إلى نقد أو حساب بنكي.",
      },
      {
        title: "تحليلات المدفوعات",
        text: "منح التجار رؤية أوضح للمدفوعات الناجحة والفاشلة والمعلّقة.",
      },
      {
        title: "الحملات الترويجية",
        text: "إطلاق حملات استرداد نقدي (كاش باك) أو حملات ترويجية مشتركة لتجار FlexDZ ومستخدمي MizaniyaPay.",
      },
    ],
  },
  value: {
    eyebrow: "قيمة الشراكة",
    title: "قيمة مضافة للمنصتين",
    flexTitle: "بالنسبة لـ FlexDZ",
    flex: [
      "عرض أقوى لإتمام الطلب",
      "قيمة أكبر للتجار",
      "تقليل الاعتماد على الدفع عند الاستلام",
      "قدرة دفع رقمي محلية",
      "منظومة تجار أكثر تطوراً",
    ],
    mizaTitle: "بالنسبة لـ MizaniyaPay",
    miza: [
      "الوصول إلى التجار عبر الإنترنت",
      "زيادة حجم المدفوعات",
      "المزيد من حالات استخدام الدفع الرقمي",
      "حضور أقوى في التجارة الإلكترونية الجزائرية",
      "فرص لاستقطاب التجار",
    ],
    sharedLabel: "قيمة مشتركة",
    shared: "تسريع اعتماد التجارة الرقمية في الجزائر.",
  },
  journey: {
    eyebrow: "مثال على رحلة التاجر",
    title: "تخيّل تاجراً على FlexDZ يبيع عبر الإنترنت",
    s1: "يكتشف عميل منتجاً بسعر",
    s2Title: "بدلاً من اختيار",
    cod: "الدفع عند الاستلام",
    s2Select: "يختار العميل",
    online: "الدفع الإلكتروني عبر MizaniyaPay",
    s3: "ثم يدفع عبر",
    or: "أو",
    s4Title: "ينجح الدفع.",
    s4Text: "تستلم FlexDZ التأكيد.",
    s5Title: "تتغيّر حالة الطلب إلى:",
    statusLabel: "حالة الطلب",
    awaiting: "في انتظار الدفع",
    paid: "مدفوع",
    s5Text: "يجهّز التاجر الطلب وهو مطمئن إلى أن الدفع قد تمّ بالفعل.",
  },
  comparison: {
    eyebrow: "قبل وبعد",
    title: "طريقة مختلفة لاستلام المستحقات",
    cod: {
      title: "تجربة الدفع عند الاستلام التقليدية",
      steps: [
        "العميل يطلب",
        "التاجر يشحن",
        "المندوب يوصّل",
        "المندوب يحصّل النقد",
        "التاجر ينتظر التسوية",
      ],
      problemsTitle: "مشكلات محتملة",
      problems: [
        "رفض الاستلام",
        "تأخّر تحصيل النقد",
        "تعقيد مطابقة الحسابات",
        "ارتفاع الاعتماد التشغيلي",
      ],
    },
    digital: {
      title: "FlexDZ + MizaniyaPay",
      steps: [
        "العميل يطلب",
        "العميل يدفع عبر الإنترنت",
        "تأكيد الدفع",
        "التاجر يشحن طلباً مدفوعاً",
      ],
      benefitsTitle: "المزايا",
      benefits: [
        "تأكيد الدفع في وقت أبكر",
        "رؤية أوضح",
        "تتبّع أبسط للمدفوعات",
        "اعتماد أقل على تحصيل النقد",
      ],
    },
    note: "تساعد المدفوعات الرقمية على الحدّ من هذه التحديات، لكنها لا تلغي جميع المخاطر التشغيلية.",
  },
  partners: {
    id: "partners",
    eyebrow: "شبكتنا",
    title: "شراكاتنا الحالية",
    text: "شبكة شركاء متنامية تعمل معنا لنقل التجارة الإلكترونية الجزائرية إلى الإنترنت.",
  },
  trust: {
    eyebrow: "الثقة",
    title: "مصمَّمة حول تجارب دفع آمنة",
    items: [
      "معالجة آمنة للمدفوعات",
      "تأكيد حالة الدفع",
      "تتبّع واضح للمعاملات",
      "بنية دفع موجَّهة للتجار",
      "مسار إتمام طلب منظَّم",
    ],
  },
  cta: {
    id: "contact",
    title: "لنبنِ معاً الجيل القادم من مدفوعات التجارة الإلكترونية في الجزائر",
    text: "يمكن لـ FlexDZ وMizaniyaPay الجمع بين التجارة والدفع في تجربة رقمية أكثر سلاسة للتجار والعملاء في الجزائر.",
    primary: "ابدأ الشراكة",
    secondary: "تواصل مع MizaniyaPay",
  },
  footer: {
    tagline: "شراكة من أجل مستقبل التجارة الرقمية في الجزائر.",
    links: {
      flexdz: "FlexDZ",
      mizaniyapay: "MizaniyaPay",
      collaboration: "الشراكة",
      contact: "تواصل معنا",
      privacy: "الخصوصية",
    },
    navLabel: "تذييل الصفحة",
  },
};

export const translations: Record<Language, Translation> = { en, fr, ar };

export const isLanguage = (v: unknown): v is Language =>
  v === "en" || v === "fr" || v === "ar";

export const directionOf = (l: Language): "rtl" | "ltr" =>
  l === "ar" ? "rtl" : "ltr";
