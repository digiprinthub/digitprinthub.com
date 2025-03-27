import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    let newTotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(newTotal);
  }, [state]);

  const handleQuantity = (item, change) => {
    if (item.qty + change > 0) {
      if (change > 0) {
        dispatch(addCart(item));
      } else {
        dispatch(delCart(item));
      }
    }
  };

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "India",
    "China",
    "Mexico",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "New Zealand",
    "Ireland",
    "Singapore",
    "South Korea",
    "Russia",
    "South Africa",
    "Argentina",
    "Chile",
    "Colombia",
    "Peru",
    "Egypt",
    "Turkey",
    "Israel",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
    "Thailand",
    "Malaysia",
    "Indonesia",
    "Philippines",
    "Vietnam",
    "Poland",
    "Czech Republic",
    "Hungary",
    "Greece",
    "Portugal",
    "Romania",
  ];

  const states = {
    "United States": [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    Canada: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
    "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
    Australia: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "South Australia",
      "Western Australia",
      "Tasmania",
      "Australian Capital Territory",
      "Northern Territory",
    ],
    Germany: [
      "Baden-Württemberg",
      "Bavaria",
      "Berlin",
      "Brandenburg",
      "Bremen",
      "Hamburg",
      "Hesse",
      "Lower Saxony",
      "Mecklenburg-Vorpommern",
      "North Rhine-Westphalia",
      "Rhineland-Palatinate",
      "Saarland",
      "Saxony",
      "Saxony-Anhalt",
      "Schleswig-Holstein",
      "Thuringia",
    ],
    France: [
      "Île-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Auvergne-Rhône-Alpes",
      "Nouvelle-Aquitaine",
      "Occitanie",
      "Bretagne",
      "Normandie",
      "Hauts-de-France",
      "Grand Est",
      "Pays de la Loire",
      "Centre-Val de Loire",
      "Bourgogne-Franche-Comté",
    ],
    Japan: [
      "Hokkaido",
      "Aomori",
      "Iwate",
      "Miyagi",
      "Akita",
      "Yamagata",
      "Fukushima",
      "Ibaraki",
      "Tochigi",
      "Gunma",
      "Saitama",
      "Chiba",
      "Tokyo",
      "Kanagawa",
      "Niigata",
      "Toyama",
      "Ishikawa",
      "Fukui",
      "Yamanashi",
      "Nagano",
      "Gifu",
      "Shizuoka",
      "Aichi",
      "Mie",
      "Shiga",
      "Kyoto",
      "Osaka",
      "Hyōgo",
      "Nara",
      "Wakayama",
      "Okayama",
      "Hiroshima",
      "Yamaguchi",
      "Tokushima",
      "Kagawa",
      "Ehime",
      "Kochi",
      "Fukuoka",
      "Saga",
      "Nagasaki",
      "Kumamoto",
      "Oita",
      "Miyazaki",
      "Kagoshima",
      "Okinawa",
    ],
    Brazil: [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ],
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Delhi",
    ],
    China: [
      "Anhui",
      "Beijing",
      "Chongqing",
      "Fujian",
      "Gansu",
      "Guangdong",
      "Guangxi",
      "Guizhou",
      "Hainan",
      "Hebei",
      "Heilongjiang",
      "Henan",
      "Hong Kong",
      "Hubei",
      "Hunan",
      "Inner Mongolia",
      "Jiangsu",
      "Jiangxi",
      "Liaoning",
      "Ningxia",
      "Qinghai",
      "Shaanxi",
      "Shandong",
      "Shanxi",
      "Shanghai",
      "Sichuan",
      "Tianjin",
      "Tibet",
      "Xinjiang",
      "Yunnan",
      "Zhejiang",
      "Macau",
    ],
    Mexico: [
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Chiapas",
      "Chihuahua",
      "Coahuila",
      "Colima",
      "Durango",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "Mexico State",
      "Michoacán",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla",
      "Querétaro",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz",
      "Yucatán",
      "Zacatecas",
    ],
    Italy: [
      "Abruzzo",
      "Basilicata",
      "Calabria",
      "Campania",
      "Emilia-Romagna",
      "Friuli Venezia Giulia",
      "Lazio",
      "Liguria",
      "Lombardy",
      "Marche",
      "Molise",
      "Piedmont",
      "Apulia",
      "Sardinia",
      "Sicily",
      "Tuscany",
      "Umbria",
      "Aosta Valley",
      "Trentino-Alto Adige",
    ],
    Spain: [
      "Andalusia",
      "Aragon",
      "Asturias",
      "Balearic Islands",
      "Basque Country",
      "Canary Islands",
      "Cantabria",
      "Castile and León",
      "Castile-La Mancha",
      "Catalonia",
      "Extremadura",
      "Galicia",
      "La Rioja",
      "Madrid",
      "Murcia",
      "Navarre",
      "Valencia",
    ],
    Netherlands: [
      "Drenthe",
      "Flevoland",
      "Friesland",
      "Gelderland",
      "Groningen",
      "Limburg",
      "North Brabant",
      "North Holland",
      "Overijssel",
      "South Holland",
      "Utrecht",
      "Zeeland",
    ],
    Sweden: [
      "Blekinge",
      "Dalarna",
      "Gävleborg",
      "Gotland",
      "Halland",
      "Jämtland",
      "Jönköping",
      "Kalmar",
      "Kronoberg",
      "Norrbotten",
      "Örebro",
      "Östergötland",
      "Skåne",
      "Stockholm",
      "Södermanland",
      "Uppsala",
      "Värmland",
      "Västerbotten",
      "Västernorrland",
      "Västmanland",
      "Gävleborg",
      "Västra Götaland",
    ],
    Switzerland: [
      "Aargau",
      "Appenzell Innerrhoden",
      "Appenzell Ausserrhoden",
      "Basel-Country",
      "Basel-City",
      "Bern",
      "Fribourg",
      "Geneva",
      "Glarus",
      "Grisons",
      "Jura",
      "Lucerne",
      "Neuchâtel",
      "Nidwalden",
      "Obwalden",
      "Schaffhausen",
      "Schwyz",
      "Thurgau",
      "Valais",
      "Vaud",
      "Zug",
      "Zurich",
    ],
    Norway: [
      "Agder",
      "Innlandet",
      "Møre og Romsdal",
      "Nordland",
      "Oslo",
      "Rogaland",
      "Sogn og Fjordane",
      "Telemark",
      "Trøndelag",
      "Vestfold og Telemark",
      "Vestland",
      "Østfold",
    ],
    Denmark: [
      "Capital Region",
      "Central Denmark Region",
      "North Denmark Region",
      "Region of Southern Denmark",
      "Zealand",
    ],
    Finland: [
      "Aland Islands",
      "Central Finland",
      "Etelä-Karjala",
      "Etelä-Pohjanmaa",
      "Kainuu",
      "Kanta-Häme",
      "Lapland",
      "North Karelia",
      "North Ostrobothnia",
      "North Savo",
      "Oulu",
      "Pirkanmaa",
      "Päijät-Häme",
      "Satakunta",
      "Uusimaa",
      "Varsinais-Suomi",
    ],
    Belgium: ["Brussels-Capital Region", "Flemish Region", "Walloon Region"],
    Austria: [
      "Burgenland",
      "Carinthia",
      "Lower Austria",
      "Upper Austria",
      "Salzburg",
      "Styria",
      "Tyrol",
      "Vorarlberg",
      "Vienna",
    ],
    "New Zealand": [
      "Auckland",
      "Bay of Plenty",
      "Canterbury",
      "Gisborne",
      "Hawke's Bay",
      "Manawatu-Wanganui",
      "Marlborough",
      "Nelson",
      "Northland",
      "Otago",
      "Southland",
      "Taranaki",
      "Waikato",
      "Wellington",
      "West Coast",
    ],
    Ireland: [
      "Carlow",
      "Cavan",
      "Clare",
      "Cork",
      "Donegal",
      "Dublin",
      "Galway",
      "Kerry",
      "Kildare",
      "Kilkenny",
      "Laois",
      "Leitrim",
      "Limerick",
      "Longford",
      "Louth",
      "Mayo",
      "Meath",
      "Monaghan",
      "Offaly",
      "Roscommon",
      "Sligo",
      "Tipperary",
      "Waterford",
      "Westmeath",
      "Wexford",
      "Wicklow",
    ],
    Singapore: [
      "Central Region",
      "East Region",
      "North Region",
      "North-East Region",
      "West Region",
    ],
    "South Korea": [
      "Seoul",
      "Busan",
      "Incheon",
      "Daegu",
      "Daejeon",
      "Gwangju",
      "Ulsan",
      "Sejong",
      "Gyeonggi",
      "Gangwon",
      "North Chungcheong",
      "South Chungcheong",
      "North Jeolla",
      "South Jeolla",
      "North Gyeongsang",
      "South Gyeongsang",
      "Jeju",
    ],
    Russia: [
      "Adygea",
      "Altai Republic",
      "Bashkortostan",
      "Buryatia",
      "Chechen Republic",
      "Chuvash Republic",
      "Dagestan",
      "Ingushetia",
      "Kabardino-Balkaria",
      "Kalmykia",
      "Karachay-Cherkessia",
      "Koryak Autonomous Okrug",
      "Krasnodar Krai",
      "Krasnoyarsk Krai",
      "Mari El",
      "Mordovia",
      "Sakha Republic",
      "North Ossetia",
      "Tatarstan",
      "Tuva",
      "Udmurtia",
      "Zabaykalsky Krai",
    ],
    "South Africa": [
      "Eastern Cape",
      "Free State",
      "Gauteng",
      "KwaZulu-Natal",
      "Limpopo",
      "Mpumalanga",
      "North West",
      "Northern Cape",
      "Western Cape",
    ],
    Argentina: [
      "Buenos Aires",
      "Catamarca",
      "Chaco",
      "Chubut",
      "Córdoba",
      "Corrientes",
      "Entre Ríos",
      "Formosa",
      "Jujuy",
      "La Pampa",
      "La Rioja",
      "Mendoza",
      "Misiones",
      "Neuquén",
      "Río Negro",
      "Salta",
      "San Juan",
      "San Luis",
      "Santa Cruz",
      "Santa Fe",
      "Santiago del Estero",
      "Tierra del Fuego",
      "Tucumán",
    ],
    Chile: [
      "Arica and Parinacota",
      "Tarapacá",
      "Antofagasta",
      "Atacama",
      "Coquimbo",
      "Valparaíso",
      "Metropolitan",
      "O'Higgins",
      "Maule",
      "Ñuble",
      "Biobío",
      "La Araucanía",
      "Los Ríos",
      "Los Lagos",
      "Aysén",
      "Magallanes",
    ],
    Colombia: [
      "Amazonas",
      "Antioquia",
      "Arauca",
      "Atlántico",
      "Bolívar",
      "Boyacá",
      "Caldas",
      "Caquetá",
      "Casanare",
      "Cauca",
      "Cesar",
      "Chocó",
      "Córdoba",
      "Guainía",
      "Guaviare",
      "Huila",
      "La Guajira",
      "Magdalena",
      "Meta",
      "Nariño",
      "Norte de Santander",
      "Putumayo",
      "Quindío",
      "Risaralda",
      "San Andrés and Providencia",
      "Santander",
      "Sucre",
      "Tolima",
      "Valle del Cauca",
      "Vaupés",
      "Vichada",
    ],
    Peru: [
      "Amazonas",
      "Áncash",
      "Apurímac",
      "Arequipa",
      "Ayacucho",
      "Cajamarca",
      "Callao",
      "Cusco",
      "Huancavelica",
      "Huánuco",
      "Ica",
      "Junín",
      "La Libertad",
      "Lambayeque",
      "Lima",
      "Loreto",
      "Madre de Dios",
      "Moquegua",
      "Pasco",
      "Piura",
      "Puno",
      "San Martín",
      "Tacna",
      "Tumbes",
      "Ucayali",
    ],
    Egypt: [
      "Alexandria",
      "Aswan",
      "Asyut",
      "Beheira",
      "Beni Suef",
      "Cairo",
      "Dakahlia",
      "Damietta",
      "Faiyum",
      "Gharbia",
      "Giza",
      "Ismailia",
      "Kafr el-Sheikh",
      "Luxor",
      "Matrouh",
      "Minya",
      "Port Said",
      "Qalyubia",
      "Qena",
      "Red Sea",
      "Sharqia",
      "Sohag",
      "South Sinai",
      "Suez",
    ],
    Turkey: [
      "Aksaray",
      "Amasya",
      "Ankara",
      "Antalya",
      "Artvin",
      "Aydın",
      "Balıkesir",
      "Bilecik",
      "Bolu",
      "Burdur",
      "Bursa",
      "Çanakkale",
      "Çankırı",
      "Edirne",
      "Elazığ",
      "Erzincan",
      "Erzurum",
      "Eskişehir",
      "Gaziantep",
      "Giresun",
      "Gümüşhane",
      "Hakkari",
      "Hatay",
      "Iğdır",
      "Isparta",
      "Istanbul",
      "Kahramanmaraş",
      "Karabük",
      "Kars",
      "Kastamonu",
      "Kayseri",
      "Kırıkkale",
      "Kırklareli",
      "Kilis",
      "Malatya",
      "Manisa",
      "Mardin",
      "Muğla",
      "Muş",
      "Nevşehir",
      "Niğde",
      "Ordu",
      "Osmaniye",
      "Rize",
      "Sakarya",
      "Samsun",
      "Siirt",
      "Sinop",
      "Sivas",
      "Tekirdağ",
      "Tokat",
      "Trabzon",
      "Tunceli",
      "Şanlıurfa",
      "Uşak",
      "Van",
      "Yalova",
      "Yozgat",
      "Zonguldak",
    ],
    Israel: [
      "Central District",
      "Haifa",
      "Jerusalem",
      "Northern District",
      "Southern District",
      "Tel Aviv District",
    ],
    "United Arab Emirates": [
      "Abu Dhabi",
      "Ajman",
      "Dubai",
      "Fujairah",
      "Ras Al Khaimah",
      "Sharjah",
      "Umm Al-Quwain",
    ],
    "Saudi Arabia": [
      "Al Bahah",
      "Al Jawf",
      "Al Madinah",
      "Al Qassim",
      "Asir",
      "Eastern Province",
      "Hail",
      "Makkah",
      "Najran",
      "Northern Borders",
      "Riyadh",
      "Tabuk",
    ],
    Qatar: [
      "Doha",
      "Al Khawr",
      "Al Rayyan",
      "Umm Salal",
      "Al Daayen",
      "Al Wakrah",
      "Madinat ash Shamal",
      "Al Khor",
      "Al Sheehaniya",
    ],
    Kuwait: [
      "Al Ahmadi",
      "Al Farwaniyah",
      "Al Jahra",
      "Hawalli",
      "Mubarak Al-Kabeer",
      "Capital",
    ],
    Bahrain: ["Capital", "Muharraq", "Northern", "Southern"],
    Oman: [
      "Ad Dakhiliyah",
      "Ad Dhahirah",
      "Al Batinah",
      "Al Dhahirah",
      "Al Sharqiyah",
      "Muscat",
      "Musandam",
      "Dhofar",
      "Al Wusta",
    ],
    Thailand: [
      "Bangkok",
      "Chiang Mai",
      "Chonburi",
      "Krabi",
      "Lampang",
      "Nakhon Ratchasima",
      "Nakhon Si Thammarat",
      "Nonthaburi",
      "Pathum Thani",
      "Phang Nga",
      "Phatthalung",
      "Phuket",
      "Rayong",
      "Samut Prakan",
      "Samut Sakhon",
      "Sukhothai",
      "Surat Thani",
      "Udon Thani",
      "Uthai Thani",
      "Yala",
    ],
    Malaysia: [
      "Johor",
      "Kedah",
      "Kelantan",
      "Malacca",
      "Negeri Sembilan",
      "Pahang",
      "Penang",
      "Perak",
      "Perlis",
      "Selangor",
      "Terengganu",
      "Sabah",
      "Sarawak",
      "Federal Territories",
    ],
    Indonesia: [
      "Aceh",
      "Bali",
      "Bangka Belitung",
      "Banten",
      "Bengkulu",
      "Central Java",
      "East Java",
      "West Java",
      "Central Kalimantan",
      "East Kalimantan",
      "North Kalimantan",
      "West Kalimantan",
      "North Sumatra",
      "West Sumatra",
      "South Sumatra",
      "South Sulawesi",
      "Southeast Sulawesi",
      "West Sulawesi",
      "Maluku",
      "North Maluku",
      "Papua",
      "West Papua",
    ],
    Philippines: [
      "Abra",
      "Agusan del Norte",
      "Agusan del Sur",
      "Aklan",
      "Albay",
      "Antique",
      "Apayao",
      "Aurora",
      "Basilan",
      "Bataan",
      "Batanes",
      "Batangas",
      "Benguet",
      "Bohol",
      "Bukidnon",
      "Bulacan",
      "Cagayan",
      "Camarines Norte",
      "Camarines Sur",
      "Camiguin",
      "Capiz",
      "Catanduanes",
      "Cavite",
      "Cebu",
      "Compostela Valley",
      "Davao del Norte",
      "Davao del Sur",
      "Davao Oriental",
      "Dinagat Islands",
      "Eastern Samar",
      "Guimaras",
      "Ifugao",
      "Ilocos Norte",
      "Ilocos Sur",
      "Iloilo",
      "Isabela",
      "Kalinga",
      "La Union",
      "Laguna",
      "Lanao del Norte",
      "Lanao del Sur",
      "Leyte",
      "Maguindanao",
      "Marinduque",
      "Masbate",
      "Metro Manila",
      "Misamis Occidental",
      "Misamis Oriental",
      "Mountain Province",
      "Negros Occidental",
      "Negros Oriental",
      "Northern Samar",
      "Nueva Ecija",
      "Nueva Vizcaya",
      "Occidental Mindoro",
      "Oriental Mindoro",
      "Palawan",
      "Pampanga",
      "Pangasinan",
      "Quezon",
      "Quirino",
      "Rizal",
      "Romblon",
      "Samar",
      "Sarangani",
      "Siquijor",
      "Sorsogon",
      "South Cotabato",
      "Southern Leyte",
      "Sultan Kudarat",
      "Surigao del Norte",
      "Surigao del Sur",
      "Tarlac",
      "Tawi-Tawi",
      "Zambales",
      "Zamboanga del Norte",
      "Zamboanga del Sur",
    ],
    Vietnam: [
      "An Giang",
      "Bac Giang",
      "Bac Kan",
      "Bac Ninh",
      "Ben Tre",
      "Binh Dinh",
      "Binh Duong",
      "Binh Thuan",
      "Ca Mau",
      "Cao Bang",
      "Dak Lak",
      "Dak Nong",
      " Dien Bien",
      "Dong Nai",
      "Dong Thap",
      "Gia Lai",
      "Ha Giang",
      "Ha Nam",
      "Ha Tinh",
      "Hai Duong",
      "Hai Phong",
      "Hanoi",
      "Hau Giang",
      "Ho Chi Minh City",
      "Hoa Binh",
      "Hung Yen",
      "Khanh Hoa",
      "Kien Giang",
      "Kon Tum",
      "Lai Chau",
      "Lang Son",
      "Ninh Binh",
      "Ninh Thuan",
      "Phu Tho",
      "Phu Yen",
      "Quang Binh",
      "Quang Nam",
      "Quang Ngai",
      "Quang Ninh",
      "Soc Trang",
      "Son La",
      "Tay Ninh",
      "Thai Binh",
      "Thanh Hoa",
      "Thai Nguyen",
      "Tra Vinh",
      "Tuyen Quang",
      "Vinh Long",
      "Vinh Phuc",
      "Yen Bai",
    ],
    Poland: [
      "Greater Poland",
      "Kuyavian-Pomeranian",
      "Lublin",
      "Lubusz",
      "Masuria",
      "Mazovia",
      "Opole",
      "Podlachia",
      "Podkarpackie",
      "Pomerania",
      "Silesia",
      "Warmia-Masuria",
      "West Pomerania",
    ],
    "Czech Republic": [
      "Prague",
      "Central Bohemia",
      "South Bohemia",
      "Plzeň",
      "Karlovy Vary",
      "Ústí nad Labem",
      "Liberec",
      "Hradec Králové",
      "Pardubice",
      "Zlin",
      "Moravian-Silesian",
    ],
    Hungary: [
      "Budapest",
      "Baranya",
      "Békés",
      "Borsod-Abaúj-Zemplén",
      "Csongrád",
      "Fejér",
      "Győr-Moson-Sopron",
      "Hajdú-Bihar",
      "Heves",
      "Jász-Nagykun-Szolnok",
      "Komárom-Esztergom",
      "Nógrád",
      "Pest",
      "Somogy",
      "Szabolcs-Szatmár-Bereg",
      "Tolna",
      "Vas",
      "Veszprém",
      "Zala",
    ],
    Greece: [
      "Attica",
      "Central Greece",
      "Central Macedonia",
      "Crete",
      "Eastern Macedonia and Thrace",
      "Epirus",
      "North Aegean",
      "Peloponnese",
      "South Aegean",
      "Thessaloniki",
      "Western Greece",
      "Western Macedonia",
    ],
    Portugal: [
      "Aveiro",
      "Azores",
      "Beja",
      "Bragança",
      "Braga",
      "Castelo Branco",
      "Coimbra",
      "Évora",
      "Faro",
      "Guarda",
      "Leiria",
      "Lisbon",
      "Madeira",
      "Portalegre",
      "Setúbal",
      "Viana do Castelo",
      "Vila Real",
      "Viseu",
    ],
    Romania: [
      "Alba",
      "Arad",
      "Bacău",
      "Bihor",
      "Bistrița-Năsăud",
      "Botoșani",
      "Brașov",
      "Brăila",
      "Buzău",
      "Călărași",
      "Cluj",
      "Constanța",
      "Dâmbovița",
      "Dolj",
      "Galați",
      "Giurgiu",
      "Gorj",
      "Harghita",
      "Hunedoara",
      "Ialomița",
      "Iași",
      "Ilfov",
      "Maramureș",
      "Mehedinți",
      "Mureș",
      "Olt",
      "Prahova",
      "Sălaj",
      "Sibiu",
      "Teleorman",
      "Timiș",
      "Vâlcea",
      "Vrancea",
    ],
  };

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your cart is empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    const shipping = 30.0;
    const totalWithShipping = total + shipping - discount;

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsProcessing(true);
      setErrorMessage("");
    
      // Redirect to registration page
      setTimeout(() => {
        setIsProcessing(false);
        navigate('/register');
      }, 2000);
    };
    

    const applyCoupon = () => {
      const validCoupons = {
        SUMMER2023: 25,
        WELCOME10: 10,
        FLASH50: 50,
      };

      if (validCoupons.hasOwnProperty(couponCode.toUpperCase())) {
        setDiscount(validCoupons[couponCode.toUpperCase()]);
        setCouponError("");
      } else {
        setDiscount(0);
        setCouponError("Coupon code expired or invalid.");
      }
    };

    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {state.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {state.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          onClick={() => handleQuantity(item, -1)}
                        >
                          -
                        </button>
                        {item.qty}
                        <button
                          className="btn btn-sm btn-outline-secondary ms-2"
                          onClick={() => handleQuantity(item, 1)}
                        >
                          +
                        </button>
                      </small>
                    </div>
                    <span className="text-muted">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${total.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>${shipping.toFixed(2)}</strong>
                </li>
                {discount > 0 && (
                  <li className="list-group-item d-flex justify-content-between text-success">
                    <span>Discount</span>
                    <strong>-${discount.toFixed(2)}</strong>
                  </li>
                )}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${totalWithShipping.toFixed(2)}</strong>
                </li>
              </ul>

              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={applyCoupon}
                  >
                    Redeem
                  </button>
                </div>
                {couponError && (
                  <div className="text-danger mt-2">{couponError}</div>
                )}
              </form>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      className="form-select d-block w-100"
                      id="country"
                      required
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setSelectedState("");
                      }}
                    >
                      <option value="">Choose...</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      className="form-select d-block w-100"
                      id="state"
                      required
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      disabled={!selectedCountry || !states[selectedCountry]}
                    >
                      <option value="">Choose...</option>
                      {selectedCountry &&
                        states[selectedCountry] &&
                        states[selectedCountry].map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Please Wait..." : "Continue"}
                </button>
                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
