let allFlats =[
    {
        "flatNumber": 1,
        "tenantName": "Ravish",
        "totalRent": 20000,
        "rentPaid": 18000
    },
    {
        "flatNumber": 2,
        "tenantName": "Suraj",
        "totalRent": 15000,
        "rentPaid": 15000
    },
    {
        "flatNumber": 3,
        "tenantName": "Akash",
        "totalRent": 25000,
        "rentPaid": 25000
    },
    {
        "flatNumber": 4,
        "tenantName": "Sanjay",
        "totalRent": 18000,
        "rentPaid": 15000
    },
    {
        "flatNumber": 5,
        "tenantName": "Akshay",
        "totalRent": 24000,
        "rentPaid": 24000
    },
];

let total=0, pending=0;

for(let flat of allFlats){
    //Calculate Total Rent.
    total = flat.rentPaid+total;

     //Calculate Rent Left or add a new entry for each tenant.
    flat.rentLeft = flat.totalRent-flat.rentPaid;

     //Calculatng rent pending.
    pending = flat.rentLeft+pending;

    console.log(flat);

    //Calculate rent due.
    flat.rentDue = flat.rentLeft >0 ? `Flat Number:${flat.flatNumber}, Tenant Name:${flat.tenantName}, Rent Due:${flat.rentLeft}`:"";

};
    console.log("1- Rent due of tenants:")
    for(let flat of allFlats){
    console.log(flat.rentDue);
}

    console.log("3- Add new entry of rent left on each tenants.");
    console.log("2- Total rent he has earned from all tenants : Rs."+total);
    console.log("4- Total rent pending  : Rs."+pending);
