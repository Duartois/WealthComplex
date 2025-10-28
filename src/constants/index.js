import { CodeXml, FileCog, LayoutPanelLeftIcon } from "lucide-react";
import {
    project01,
    project02,
    project03,
    project04,
    project05,
    project06,
    testimonial01,
    testimonial02,
    testimonial03,
} from "./assets";

export const navbarLinks = [
  { id: "about" },
  { id: "services" },
  { id: "projects" },
];

export const projects = [
  {
    id: 1,
    link: "https://www.wealthcomplex.com/en-ca/invest",
    title: "WealthComplex Invest",
    tags: ["Automated investing", "Expert-built portfolios"],
    image: project01,
  },
  {
    id: 2,
    link: "https://www.wealthcomplex.com/en-ca/cash",
    title: "WealthComplex Cash",
    tags: ["Earn 5%", "Spend and save"],
    image: project02,
  },
  {
    id: 3,
    link: "https://www.wealthcomplex.com/en-ca/tax",
    title: "WealthComplex Tax",
    tags: ["File for free", "Guided support"],
    image: project03,
  },
  {
    id: 4,
    link: "https://www.wealthcomplex.com/en-ca/crypto",
    title: "WealthComplex Crypto",
    tags: ["Regulated trading", "Transparent fees"],
    image: project04,
  },
  {
    id: 5,
    link: "https://www.wealthcomplex.com/en-ca/private-credit",
    title: "Private Credit",
    tags: ["Exclusive access", "Income potential"],
    image: project05,
  },
  {
    id: 6,
    link: "https://www.wealthcomplex.com/en-ca/magazine",
    title: "Stories & Magazine",
    tags: ["Money Diaries", "Expert insights"],
    image: project06,
  },
];

export const testimonials = [
  {
    id: 1,
    clientName: "3+ million",
    clientJob: "Canadians",
    clientImage: testimonial01,
    comment:
      "Join millions of Canadians who trust WealthComplex to invest, save, spend, and grow their money the simple way.",
  },
  {
    id: 2,
    clientName: "$20B+",
    clientJob: "Assets managed",
    clientImage: testimonial02,
    comment:
      "WealthComplex portfolios are designed by experts and backed by the strength of a company managing over $20 billion in assets.",
  },
  {
    id: 3,
    clientName: "Award-winning",
    clientJob: "digital experience",
    clientImage: testimonial03,
    comment:
      "Recognized as one of Canada’s leading digital financial platforms with bank-level security and CIPF protection.",
  },
];