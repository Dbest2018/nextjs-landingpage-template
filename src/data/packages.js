import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

export const packages = {
  monthly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$15",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$24",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$25",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trial",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$39",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trial",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
  ],
};
