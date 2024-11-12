export const registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
      },
]

export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
]

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    path: "/shop/listing",
  },
  {
    id: "indoor",
    label: "Indoor",
    path: "/shop/listing",
  },
  {
    id: "esports",
    label: "E-sports",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
]

export const addProductFromElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "outdoor", label: "Outdoor" },
      { id: "indoor", label: "Indoor" },
      { id: "esports", label: "E-sports" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "under_armour", label: "Under Armour" },
        { id: "reebok", label: "Reebok" },
        { id: "asics", label: "ASICS" },
        { id: "wilson", label: "Wilson" },
        { id: "babolat", label: "Babolat" },
        { id: "head", label: "Head" },
        { id: "yonex", label: "Yonex" }
    ]
  },
  {
    label: "Availability",
    name: "availability",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
  {
    label: "Rent-per-hour",
    name: "rentperhour",
    componentType: "input",
    type: "number",
    placeholder: "Enter rent price",
  },
];