export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

{/*------------------------ hotelColumns --------------------------*/}

export const hotelColumns = [
  { 
    field: "_id", 
    headerName: "ID", 
    width: 250 
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

{/*------------------------ inventoryColumns --------------------------*/}

export const inventoryColumns = [
  { 
    field: "_id", 
    headerName: "ID", 
    width: 270 
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
    
    
  },
  {
    field: "description",
    headerName: "Description",
    width: 220,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "prices",
    headerName: "Price",
    width: 150,
  },
  // {
  //   field: "quantity",
  //   headerName: "Quantity",
  //   width: 100,
  // },
];

{/*------------------------ MenuListColumns --------------------------*/}


export const MenuListColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "categoryTitle",
    headerName: "Category Title",
    width: 250,
  },
  {
    field: "offerTag",
    headerName: "Offer Percentage",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  }
]

{/*------------------------ PaymentColumns --------------------------*/}


export const PaymentColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "cardNo",
    headerName: "Card Number",
    width: 250,
  },
  {
    field: "cardholderName",
    headerName: "Card Holder Name",
    width: 200,
  },
  {
    field: "expMonth",
    headerName: "Expired Month",
    width: 100,
  },
  {
    field: "expYear",
    headerName: "Expired Year",
    width: 100,
  },
  {
    field: "cvv",
    headerName: "CVV",
    width: 100,
  }
]

{/*------------------------ PayrollColumns --------------------------*/}


export const PayrollColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "basicSalary",
    headerName: "Basic Salary",
    width: 250,
  },
  {
    field: "mealAllowance",
    headerName: "Meal Allowance",
    width: 200,
  },
  {
    field: "transportationAllowance",
    headerName: "Transportation Allowance",
    width: 100,
  },
  {
    field: "medicalAllowance",
    headerName: "Medical Allowance",
    width: 100,
  },
  {
    field: "retirementInsurance",
    headerName: "Retirement Insurance",
    width: 100,
  },
  {
    field: "tax",
    headerName: "TAX",
    width: 100,
  },
  {
    field: "EPF",
    headerName: "EPF",
    width: 100,
  },
  {
    field: "ETF",
    headerName: "ETF",
    width: 100,
  }
]


{/*------------------------ BlogColumns --------------------------*/}


export const BlogColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "TextH",
    headerName: "Blog Header",
    width: 250,
  },
  {
    field: "TextP",
    headerName: "Blog Paragraph",
    width: 200,
  },
  {
    field: "img",
    headerName: "Image",
    width: 100,
  },
  {
    field: "Btn",
    headerName: "Button",
    width: 100,
  },
  {
    field: "textFull",
    headerName: "description",
    width: 100,
  },
]

{/*------------------------ EventColumns --------------------------*/}


export const EventColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "title",
    headerName: "Event Title",
    width: 250,
  },
  {
    field: "offer",
    headerName: "Offer",
    width: 80,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 100,
  },
  {
    field: "prices",
    headerName: "Prices",
    width: 100,
  },
]


{/*------------------------ delievryColumns --------------------------*/}
export const delievryColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
  {
    field: "phoneNo",
    headerName: "Phone No",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
]