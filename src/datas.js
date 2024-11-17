let xAxisData = [
    {
        "name" : "Jan",
        "sale" : 112000
    }, 
    {
        "name" : "Feb",
        "sale" : 99000
    }, 
    {
        "name" : "Mar",
        "sale" : 12000
    }, 
    {
        "name" : "Apr",
        "sale" : 133000
    }, 
    {
        "name" : "May",
        "sale" : 57000
    }, 
    {
        "name" : "Jun",
        "sale" : 112000
    }, 
    {
        "name" : "Jul",
        "sale" : 79000
    }, 
    {
        "name" : "Agu",
        "sale" : 83000
    }, 
    {
        "name" : "Sep",
        "sale" : 19000
    }, 
    {
        "name" : "Oct",
        "sale" : 46000
    }, 
    {
        "name" : "Nov",
        "sale" : 77000
    }, 
    {
        "name" : "Dec",
        "sale" : 98000
    } 
];
 
let newUser = [
    {id : 2 , userName : 'Alireza Ebrahimi' , title : 'SEO Eng ',img : 'images/newuser.jpg' },
    {id : 1 , userName : 'Hoseon Moradi' , title : 'Frontend developer ',img : 'images/newuser2.jpg' },
    {id : 3 , userName : 'Arash Rezavand' , title : 'backend developer ',img : 'images/newuser3.jpg' },
    {id : 4 , userName : 'Mohsen Bahmani' , title : 'Hacker',img : 'images/newuser4.jpg' }
];
let Transactions = [
    {
    id : 1 ,
    customer : 'Shayan Mohamadi',
    date : '23 Feb 2024',
    amount : 145,
    status : 'Approved',
    img : 'images/customer.jpg'},
    {
    id : 2 ,
    customer : 'Maryam Asadi',
    date : '11 Sep 2024',
    amount : 78,
    status : 'Pending',
    img : 'images/customer3.jpg'},
    {
    id : 3 ,
    customer : 'Amir Frahani',
    date : '5 Jun 2024',
    amount : 118,
    status : 'Decline',
    img : 'images/customer2.jpg'},
    {
    id : 4 ,
    customer : 'Zahra Amini',
    date : '15 May 2024',
    amount : 90,
    status : 'Approved',
    img : 'images/customer4.jpg'},
]

let userRows = [
    {
    id : 1 ,
    username : 'Sahar Azizi',
    avatar:'images/users4.jpg',
    status : 'active',
    transaction : "$140",
    email : 'Sahar@gmail.com'
 },
    {
    id : 2 ,
    username : 'Aref Aghasi',
    avatar:'images/users.jpg',
    status : 'non-active',
    transaction : "$120",
    email : 'Aref@gmail.com'
 },
    {
    id : 3 ,
    username : 'Mehdi hoseinzadeh',
    avatar:'images/users2.jpg',
    status : 'active',
    transaction : "$79.5",
    email : 'Mehdi@gmail.com'
 },
    {
    id : 4 ,
    username : 'Negar Alipour',
    avatar:'images/users5.jpg',
    status : 'active',
    transaction : "$108",
    email : 'Negar@gmail.com'
 },
    {
    id : 5 ,
    username : 'Radin Falah',
    avatar:'images/users3.jpg',
    status : 'active',
    transaction : "$55.78",
    email : 'Radin@gmail.com'
 },
    {
    id : 6 ,
    username : 'Armin Ghafouri',
    avatar:'images/user6.jpg',
    status : 'non-active',
    transaction : "$122.19",
    email : 'Armin@gmail.com'
 },
    {
    id : 7 ,
    username : 'Mobina Nezamdoost',
    avatar:'images/user7.jpg',
    status : 'active',
    transaction : "$64.5",
    email : 'Mobina@gmail.com'
 },
    {
    id : 8 ,
    username : 'Zahra Lotfi',
    avatar:'images/user8.jpg',
    status : 'active',
    transaction : "$53",
    email : 'Zahra@gmail.com'
 },
    {
    id : 9 ,
    username : 'Farhad jamali',
    avatar:'images/user9.jpg',
    status : 'active',
    transaction : "$77",
    email : 'farhad@gmail.com'
 },
    
]

let Products = [
    {
        id : 1,
        title : 'Asus',
        avatar : 'images/asus.jpg',
        price : 829
    },
    {
        id : 2,
        title : 'Acer',
        avatar : 'images/acer.jpg',
        price : 700
    },
    {
        id : 3,
        title : 'HP',
        avatar : 'images/hp.jpg',
        price : 644
    },
    {
        id : 4,
        title : 'Dell',
        avatar : 'images/dell.jpg',
        price : 580
    },
]

let ProductsData = [
    {name : "Jan",sales :4300},
    {name : "Feb",sales :2850},
    {name : "Mar",sales :5130}
]

const userData = [
    { name: 'تهران ', latitude: 35.6892, longitude: 51.3890, views: 2500 },
    { name: 'مشهد ', latitude: 36.2605, longitude: 59.6168, views: 1800 },
    { name: 'اصفهان ', latitude: 32.6581, longitude: 51.6680, views: 1200 },
    { name: 'شیراز ', latitude: 29.5912, longitude: 52.5837, views: 900 },
    { name: 'تبریز ', latitude: 38.0962, longitude: 46.2920, views: 1300 },
    { name: 'اهواز ', latitude: 31.3202, longitude: 48.6771, views: 1500 },
    { name: 'رشت ', latitude: 37.2830, longitude: 49.5911, views: 800 },
    { name: 'کرج ', latitude: 35.8324, longitude: 50.9915, views: 700 },
    { name: 'قم ', latitude: 34.6399, longitude: 50.8756, views: 600 },
    { name: 'زاهدان ', latitude: 29.4965, longitude: 60.8650, views: 500 },
    { name: 'کاشان ', latitude: 33.9910, longitude: 51.4380, views: 400 },
    { name: 'یاسوج ', latitude: 30.1810, longitude: 51.5920, views: 550 },
    { name: 'بندر عباس ', latitude: 27.1900, longitude: 56.2840, views: 450 },
    { name: 'ارومیه ', latitude: 37.5500, longitude: 45.0700, views: 350 },
    { name: 'گرگان ', latitude: 37.3785, longitude: 57.0779, views: 300 },
    { name: 'بیرجند ', latitude: 32.8597, longitude: 59.2196, views: 650 },
    { name: 'یزد ', latitude: 31.8974, longitude: 54.3583, views: 750 },
    { name: 'کرمان ', latitude: 30.2832, longitude: 57.0780, views: 850 },
  ];

export {xAxisData , newUser ,Transactions,userRows,Products,ProductsData,userData,} ;