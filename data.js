/* =========================================================
   KAHANI TRAVEL & TOURS: site data
   Edit contact details, social links and packages here.
   ========================================================= */

const KAHANI = {
  whatsapp: "919946500546",          // number used for all WhatsApp buttons
  email: "info@kahanitravel.in",
  // Enquiry forms are emailed to this address through FormSubmit (free, no server needed).
  // The very first enquiry triggers a one-time "Activate" email to info@kahanitravel.in; click it once.
  formEndpoint: "https://formsubmit.co/ajax/info@kahanitravel.in",
  social: [
    { name: "Instagram", handle: "@kahani_tours_", icon: "i-ig", url: "https://www.instagram.com/kahani_tours_/" },
    { name: "Facebook", handle: "Kahani Travel", icon: "i-fb", url: "https://www.facebook.com/asafirtravel/" },
    { name: "WhatsApp", handle: "+91 99465 00546", icon: "i-wa", url: "https://wa.me/919946500546" },
    { name: "Google", handle: "Reviews & directions", icon: "i-google", url: "https://share.google/tsIcHY87o0FJ7wq28" }
  ]
};

/* Unsplash image helper: pass a base image URL and a width */
const img = (base, w = 900) => `${base}?auto=format&fit=crop&w=${w}&q=70`;
const U = "https://images.unsplash.com/";

const HERO_SLIDES = [
  { src: U + "photo-1602216056096-3b40cc0c9944", place: "Alleppey Backwaters, Kerala" },
  { src: U + "flagged/photo-1559717201-fbb671ff56b7", place: "Dubai, United Arab Emirates" },
  { src: U + "photo-1715457573748-8e8a70b2c1be", place: "Dal Lake, Kashmir" },
  { src: U + "photo-1643029891412-92f9a81a8c16", place: "Ha Long Bay, Vietnam" },
  { src: U + "photo-1563284223-333497472e88", place: "Kazbegi, Georgia" }
];

const SERVICES = [
  { icon: "s-visa", title: "Visa Services", text: "Employment visa stamping, tourist, visit and business visas for the GCC, Asia, Europe and beyond, plus e-Visa for India." },
  { icon: "s-plane", title: "Air Tickets", text: "International and domestic flights at the best fares, with special group fares and help with date changes." },
  { icon: "s-stamp", title: "Certificate Attestation", text: "HRD, Home Department, MEA and embassy attestation for academic, commercial, birth and marriage certificates.", link: "#attestation" },
  { icon: "s-palm", title: "Tour Packages", text: "Tailor-made international and domestic holidays for honeymooners, families, friends and corporate groups.", link: "#packages" },
  { icon: "s-kaaba", title: "Hajj & Umrah", text: "Umrah packages for groups and families, and customised packages planned with care and devotion.", link: "#umrah" },
  { icon: "s-passport", title: "Passport Services", text: "Fresh passports, renewals, police clearance certificates (PCC) and medical appointments, all made simple." },
  { icon: "s-train", title: "Train & Bus Tickets", text: "Indian Railways authorised ticketing agent (IRCTC). KSRTC and private bus bookings across India." }
];

/* ---------------------------------------------------------
   PACKAGES
   category: international | india | kerala
   --------------------------------------------------------- */
const PACKAGES = [
  /* ---------------- INTERNATIONAL ---------------- */
  {
    id: "thailand", category: "international", flag: "🇹🇭",
    name: "Thailand", tagline: "Temples, islands & tropical nights",
    duration: "4 Nights / 5 Days", route: "Bangkok · Pattaya",
    image: U + "photo-1534008897995-27a23e859048",
    highlights: ["Coral Island speedboat trip", "Alcazar cabaret show", "Bangkok temple & city tour", "Safari World & Marine Park", "Chao Phraya dinner cruise"],
    includes: ["Return airport transfers", "4 nights hotel with breakfast", "Sightseeing as per itinerary", "Thailand visa on arrival assistance"],
    itinerary: [
      ["Arrive Bangkok, on to Pattaya", "Meet our representative at the airport and drive to Pattaya. Check in, then enjoy the Alcazar show in the evening."],
      ["Coral Island", "Take a speedboat to Coral Island for beaches, parasailing and snorkelling (optional). The evening is free on Walking Street."],
      ["Pattaya to Bangkok", "Drive to Bangkok and visit the Golden Buddha and Marble Temple on the city tour, followed by shopping at Pratunam or MBK."],
      ["Safari World & Marine Park", "Spend a full day at Safari World with the dolphin, sea lion and bird shows. Finish with an optional Chao Phraya dinner cruise."],
      ["Departure", "Check out and transfer to Suvarnabhumi Airport for your flight home."]
    ]
  },
  {
    id: "srilanka", category: "international", flag: "🇱🇰",
    name: "Sri Lanka", tagline: "The pearl of the Indian Ocean",
    duration: "5 Nights / 6 Days", route: "Kandy · Nuwara Eliya · Bentota · Colombo",
    image: U + "photo-1612862862126-865765df2ded",
    highlights: ["Temple of the Sacred Tooth Relic", "Pinnawala Elephant Orphanage", "Tea country of Nuwara Eliya", "Madu River boat safari", "Colombo city tour"],
    includes: ["Private car with English-speaking driver", "5 nights hotel with breakfast", "Entrance fees as per itinerary", "Sri Lanka ETA assistance"],
    itinerary: [
      ["Colombo to Kandy", "Arrive in Colombo and drive to Kandy via the Pinnawala Elephant Orphanage. In the evening, visit the Temple of the Tooth."],
      ["Kandy sightseeing", "See the Peradeniya Botanical Gardens, a gem museum and a Kandyan cultural dance show."],
      ["Kandy to Nuwara Eliya", "Drive through the tea country, stopping at a tea factory, Ramboda Falls and the Seetha Amman Temple, then walk around Gregory Lake."],
      ["Nuwara Eliya to Bentota", "Head down to the coast for a Madu River boat safari and a turtle hatchery visit, then spend the evening on the beach."],
      ["Bentota to Colombo", "Enjoy water sports in the morning, then drive to Colombo for Galle Face Green, Gangaramaya Temple and shopping."],
      ["Departure", "Transfer to Bandaranaike International Airport."]
    ]
  },
  {
    id: "malaysia", category: "international", flag: "🇲🇾",
    name: "Malaysia", tagline: "Truly Asia, truly unforgettable",
    duration: "4 Nights / 5 Days", route: "Kuala Lumpur · Genting Highlands",
    image: U + "photo-1472017053394-b29fded587cd",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Genting Highlands Awana Skyway", "Putrajaya city tour", "Sunway Lagoon (optional)"],
    includes: ["Airport transfers", "4 nights hotel with breakfast", "Genting cable car tickets", "Malaysia eVisa assistance"],
    itinerary: [
      ["Arrive Kuala Lumpur", "Transfer to your hotel. In the evening, visit KLCC Park and see the Petronas Twin Towers lit up."],
      ["Kuala Lumpur city tour", "Visit the King's Palace, National Monument, Merdeka Square and a chocolate factory, then go up to the KL Tower viewpoint."],
      ["Batu Caves & Genting Highlands", "Climb the colourful steps at Batu Caves, then ride the Awana Skyway up to Genting Highlands and its theme parks."],
      ["Putrajaya & leisure", "Tour the Putra Mosque and the Prime Minister's office in Putrajaya. Spend the afternoon shopping at Bukit Bintang."],
      ["Departure", "Transfer to KLIA for your flight home."]
    ]
  },
  {
    id: "kazakhstan", category: "international", flag: "🇰🇿",
    name: "Kazakhstan", tagline: "Snow peaks & Silk Road charm",
    duration: "4 Nights / 5 Days", route: "Almaty · Shymbulak · Charyn Canyon",
    image: U + "photo-1572940734104-684309ed7ac9",
    highlights: ["Shymbulak ski resort cable car", "Medeu ice rink", "Big Almaty Lake", "Charyn Canyon day trip", "Kok-Tobe hill & Arbat street"],
    includes: ["Airport transfers", "4 nights hotel with breakfast", "Private sightseeing tours", "Visa-free entry guidance for Indians"],
    itinerary: [
      ["Arrive Almaty", "Check in and spend the evening at Arbat pedestrian street and the Green Bazaar."],
      ["Medeu & Shymbulak", "Visit the Medeu high-mountain skating rink, then ride the gondola up to Shymbulak for snow and views of the Tian Shan peaks."],
      ["Charyn Canyon", "Take a full-day excursion to the 'Grand Canyon of Central Asia' and walk the Valley of Castles."],
      ["Big Almaty Lake & Kok-Tobe", "See the turquoise alpine lake in the morning, then take the Kok-Tobe cable car at sunset for city views."],
      ["Departure", "Transfer to Almaty International Airport."]
    ]
  },
  {
    id: "azerbaijan", category: "international", flag: "🇦🇿",
    name: "Azerbaijan", tagline: "The land of fire",
    duration: "4 Nights / 5 Days", route: "Baku · Gabala · Gobustan",
    image: U + "photo-1758806986527-2d6dc10a2209",
    highlights: ["Old City (Icherisheher) & Maiden Tower", "Flame Towers & Baku Boulevard", "Gabala cable car & Nohur Lake", "Gobustan rock art & mud volcanoes", "Yanar Dag burning mountain"],
    includes: ["Airport transfers", "4 nights hotel with breakfast", "Guided tours as per itinerary", "Azerbaijan e-Visa assistance"],
    itinerary: [
      ["Arrive Baku", "Check in and stroll along Baku Boulevard on the Caspian shore."],
      ["Baku city tour", "Explore the Old City, Maiden Tower and Shirvanshah's Palace, then visit Highland Park for the Flame Towers view."],
      ["Gabala day trip", "Drive to the green Caucasus foothills for the Tufandag cable car, Nohur Lake and a waterfall."],
      ["Gobustan & Absheron", "See the UNESCO rock carvings and mud volcanoes, the Ateshgah Fire Temple and Yanar Dag at dusk."],
      ["Departure", "Transfer to Heydar Aliyev International Airport."]
    ]
  },
  {
    id: "dubai", category: "international", flag: "🇦🇪",
    name: "Dubai", tagline: "Where the desert meets the future",
    duration: "4 Nights / 5 Days", route: "Dubai · Abu Dhabi",
    image: U + "flagged/photo-1559717201-fbb671ff56b7",
    highlights: ["Burj Khalifa 'At the Top'", "Desert safari with BBQ dinner", "Dhow cruise at Dubai Marina", "Abu Dhabi Grand Mosque", "Dubai Frame & Miracle Garden"],
    includes: ["Airport transfers", "4 nights hotel with breakfast", "Tours on sharing basis", "UAE tourist visa"],
    itinerary: [
      ["Arrive Dubai", "Transfer to your hotel. In the evening, take a dhow cruise with dinner along Dubai Marina."],
      ["Dubai city tour & Burj Khalifa", "See Jumeirah Mosque, the Burj Al Arab photo stop, Palm Jumeirah and the Dubai Frame, then go up the Burj Khalifa."],
      ["Desert safari", "Shop in the morning. In the afternoon, go dune bashing, ride a camel, try henna and enjoy a BBQ dinner with live shows."],
      ["Abu Dhabi tour", "Visit the Sheikh Zayed Grand Mosque, Qasr Al Watan and a Ferrari World photo stop."],
      ["Departure", "Transfer to DXB for your flight home."]
    ]
  },
  {
    id: "georgia", category: "international", flag: "🇬🇪",
    name: "Georgia", tagline: "Mountains, monasteries & warm welcomes",
    duration: "5 Nights / 6 Days", route: "Tbilisi · Kazbegi · Gudauri · Signagi",
    image: U + "photo-1563284223-333497472e88",
    highlights: ["Tbilisi Old Town & cable car", "Gergeti Trinity Church, Kazbegi", "Ananuri Fortress", "Gudauri snow & paragliding", "Signagi, the city of love"],
    includes: ["Airport transfers", "5 nights hotel with breakfast", "Private tours with driver", "Georgia e-Visa assistance"],
    itinerary: [
      ["Arrive Tbilisi", "Check in and spend the evening on Rustaveli Avenue."],
      ["Tbilisi city tour", "See the Narikala Fortress by cable car, the sulphur baths, the Bridge of Peace and Mtatsminda Park."],
      ["Kazbegi & Gudauri", "Drive the Georgian Military Highway past Ananuri Fortress to the Gergeti Trinity Church, below Mount Kazbek."],
      ["Gudauri leisure", "Enjoy snow activities or paragliding (seasonal) at the Russia–Georgia Friendship Monument."],
      ["Signagi & Mtskheta", "Visit the walled hill town of Signagi and the UNESCO-listed Mtskheta."],
      ["Departure", "Transfer to Tbilisi International Airport."]
    ]
  },
  {
    id: "vietnam", category: "international", flag: "🇻🇳",
    name: "Vietnam", tagline: "Emerald bays & lantern-lit towns",
    duration: "5 Nights / 6 Days", route: "Hanoi · Ha Long Bay · Da Nang · Hoi An",
    image: U + "photo-1643029891412-92f9a81a8c16",
    highlights: ["Overnight Ha Long Bay cruise", "Golden Bridge at Ba Na Hills", "Hoi An ancient town by lantern light", "Hanoi Old Quarter", "My Khe beach"],
    includes: ["Airport transfers", "4 nights hotel + 1 night cruise", "Domestic flight Hanoi–Da Nang", "Vietnam e-Visa assistance"],
    itinerary: [
      ["Arrive Hanoi", "Check in, then enjoy a cyclo ride around the Old Quarter and Hoan Kiem Lake."],
      ["Ha Long Bay cruise", "Board an overnight cruise among the limestone karsts, with kayaking, cave visits and a sunset on deck."],
      ["Ha Long to Da Nang", "Spend the morning on the bay, then return to Hanoi and fly to Da Nang. The evening is at the Dragon Bridge."],
      ["Ba Na Hills", "Ride the record-breaking cable car to the Golden Bridge and the French Village."],
      ["Hoi An", "Visit Marble Mountains and My Khe beach, then walk Hoi An ancient town under the lanterns."],
      ["Departure", "Transfer to Da Nang Airport."]
    ]
  },

  /* ---------------- INDIA ---------------- */
  {
    id: "andaman", category: "india", flag: "🏝️",
    name: "Andaman & Nicobar", tagline: "India's turquoise paradise",
    duration: "4 Nights / 5 Days", route: "Port Blair · Havelock · Neil Island",
    image: U + "photo-1586359716568-3e1907e4cf9f",
    highlights: ["Radhanagar Beach, Havelock", "Cellular Jail light & sound show", "Elephant Beach snorkelling", "Natural Bridge, Neil Island", "Private ferry transfers"],
    includes: ["Airport & jetty transfers", "4 nights hotel with breakfast", "Inter-island ferry tickets", "Entry permits & sightseeing"],
    itinerary: [
      ["Arrive Port Blair", "Visit Corbyn's Cove beach, then the light and sound show at the historic Cellular Jail."],
      ["Port Blair to Havelock", "Take the ferry to Swaraj Dweep (Havelock) and watch the sunset at Radhanagar Beach, one of Asia's finest."],
      ["Elephant Beach", "Spend the day snorkelling, glass-bottom boating and doing water sports at Elephant Beach."],
      ["Neil Island", "Visit Bharatpur Beach, Laxmanpur and the Natural Bridge, then return to Port Blair."],
      ["Departure", "Shop for souvenirs, then transfer to Veer Savarkar Airport."]
    ]
  },
  {
    id: "kashmir", category: "india", flag: "🏔️",
    name: "Kashmir", tagline: "Paradise on earth",
    duration: "5 Nights / 6 Days", route: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
    image: U + "photo-1715457573748-8e8a70b2c1be",
    highlights: ["Shikara ride on Dal Lake", "Night on a traditional houseboat", "Gulmarg Gondola", "Betaab & Aru valleys, Pahalgam", "Mughal Gardens"],
    includes: ["Airport transfers", "4 nights hotel + 1 night houseboat", "Breakfast & dinner", "Private cab for sightseeing"],
    itinerary: [
      ["Arrive Srinagar", "Check in to a houseboat and take an evening shikara ride on Dal Lake."],
      ["Gulmarg", "Day trip to the 'Meadow of Flowers' and ride the Gulmarg Gondola, one of the highest cable cars in the world."],
      ["Pahalgam", "Drive past saffron fields and apple orchards to the Lidder valley, with Betaab, Aru and Chandanwari (local cab)."],
      ["Sonamarg", "Day trip to the 'Meadow of Gold' and Thajiwas Glacier (pony ride optional)."],
      ["Srinagar sightseeing", "See the Mughal Gardens (Nishat, Shalimar, Chashme Shahi), the Hazratbal Shrine and the local markets."],
      ["Departure", "Transfer to Srinagar Airport."]
    ]
  },
  {
    id: "manali", category: "india", flag: "❄️",
    name: "Kullu Manali", tagline: "Snow, rivers & mountain air",
    duration: "5 Nights / 6 Days", route: "Delhi · Manali · Kullu · Solang",
    image: U + "photo-1597167231350-d057a45dc868",
    highlights: ["Solang Valley snow activities", "Atal Tunnel & Sissu", "Hadimba Temple & Old Manali", "River rafting in Kullu", "Manikaran Sahib hot springs"],
    includes: ["Volvo / private cab from Delhi", "4 nights hotel with breakfast & dinner", "Sightseeing as per itinerary", "All tolls & parking"],
    itinerary: [
      ["Delhi to Manali", "Take an overnight Volvo or private cab to Manali."],
      ["Arrive Manali", "Check in and rest. In the evening, visit Mall Road and the Tibetan monastery."],
      ["Solang Valley & Atal Tunnel", "Drive through the Atal Tunnel to Sissu, with snow play and paragliding at Solang Valley."],
      ["Manali local", "See the Hadimba Devi Temple, Vashisht hot springs, Club House and Old Manali cafés."],
      ["Kullu & Manikaran", "Go river rafting on the Beas, visit a shawl factory and the Manikaran Gurudwara hot springs, then take the overnight return to Delhi."],
      ["Arrive Delhi", "Arrive in Delhi in the morning. The tour ends."]
    ]
  },
  {
    id: "lakshadweep", category: "india", flag: "🐠",
    name: "Lakshadweep", tagline: "India's coral island secret",
    duration: "3 Nights / 4 Days", route: "Kochi · Agatti · Bangaram",
    image: U + "photo-1572431447238-425af66a273b",
    highlights: ["Crystal-clear lagoons", "Snorkelling & scuba diving", "Kayaking & glass-bottom boats", "Untouched coral reefs", "Entry permit handled by us"],
    includes: ["Lakshadweep entry permit", "Flight / ship ticket assistance from Kochi", "3 nights stay with all meals", "Lagoon activities"],
    itinerary: [
      ["Kochi to Agatti", "Fly from Kochi to Agatti. You are welcomed with tender coconut and spend the evening on the lagoon beach."],
      ["Lagoon & water sports", "Go snorkelling, kayaking and on a glass-bottom boat ride over the coral reef."],
      ["Island hopping", "Take a boat to the nearby uninhabited islands for a sandbank picnic and to watch for turtles."],
      ["Return to Kochi", "Fly back to Kochi."]
    ]
  },
  {
    id: "delhi", category: "india", flag: "🕌",
    name: "Delhi & Agra", tagline: "Mughal grandeur & the Taj Mahal",
    duration: "3 Nights / 4 Days", route: "Delhi · Agra",
    image: U + "photo-1695293351566-1dc582acc504",
    highlights: ["Taj Mahal at sunrise", "Agra Fort", "Red Fort & Jama Masjid", "Qutub Minar & Humayun's Tomb", "Chandni Chowk food walk"],
    includes: ["Airport / railway transfers", "3 nights hotel with breakfast", "Private AC car", "Sightseeing as per itinerary"],
    itinerary: [
      ["Arrive Delhi", "Visit India Gate, Rashtrapati Bhavan and the Lotus Temple, with an evening at Connaught Place."],
      ["Old & New Delhi", "See the Red Fort, Jama Masjid, a Chandni Chowk rickshaw ride, Qutub Minar and Humayun's Tomb."],
      ["Agra day trip", "Drive the Yamuna Expressway to the Taj Mahal, Agra Fort and the Mehtab Bagh sunset view."],
      ["Departure", "Shop at Sarojini or Janpath, then transfer for your onward journey."]
    ]
  },

  /* ---------------- KERALA ---------------- */
  {
    id: "munnar", category: "kerala", flag: "🍃",
    name: "Munnar Hills", tagline: "Misty mountains & tea gardens",
    duration: "2 Nights / 3 Days", route: "Kochi · Munnar",
    image: "https://plus.unsplash.com/premium_photo-1697730310113-e44fced8e86c",
    highlights: ["Rolling tea estates", "Eravikulam National Park (Nilgiri tahr)", "Mattupetty Dam & Echo Point", "Top Station views", "Tea Museum"],
    includes: ["Private AC cab", "2 nights hill resort with breakfast", "Sightseeing", "Pick-up from Kochi / Calicut"],
    itinerary: [
      ["Kochi to Munnar", "Drive up through the Cheeyappara and Valara waterfalls and the spice gardens. Spend the evening at leisure in the hills."],
      ["Munnar sightseeing", "Visit Eravikulam National Park, the Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake and Top Station."],
      ["Return", "Have a quiet morning among the tea gardens, then drive back."]
    ]
  },
  {
    id: "alleppey", category: "kerala", flag: "🛶",
    name: "Alleppey Houseboat", tagline: "Drift through the backwaters",
    duration: "1 Night / 2 Days", route: "Alappuzha · Kumarakom",
    image: U + "photo-1602216056096-3b40cc0c9944",
    highlights: ["Private houseboat stay", "Freshly cooked Kerala meals on board", "Village & paddy-field views", "Sunset on Vembanad Lake", "Optional shikara canoe ride"],
    includes: ["Private AC houseboat", "Lunch, evening tea, dinner & breakfast", "Pick-up & drop", "Family or honeymoon options"],
    itinerary: [
      ["Board the houseboat", "Board at noon and cruise past paddy fields, coconut groves and village life with a Kerala lunch on deck. Anchor for the night."],
      ["Check out", "After breakfast on the water, cruise back to the jetty and disembark."]
    ]
  },
  {
    id: "wayanad", category: "kerala", flag: "🌿",
    name: "Wayanad Escape", tagline: "Right up the Thamarassery Churam",
    duration: "2 Nights / 3 Days", route: "Thamarassery · Wayanad",
    image: U + "photo-1723709431768-d749b0d814b9",
    highlights: ["Chembra Peak & heart-shaped lake", "Edakkal Caves", "Banasura Sagar Dam", "Pookode Lake", "Jungle resort / tree-house stay"],
    includes: ["Pick-up from Calicut / Thamarassery", "2 nights resort with breakfast", "Private cab", "Sightseeing"],
    itinerary: [
      ["Up the Churam", "Drive up the nine hairpin bends with views from Lakkidi, then visit Pookode Lake and check in."],
      ["Wayanad sightseeing", "Visit the Edakkal Caves, Banasura Sagar Dam and Soochipara Falls, or take the Chembra trek."],
      ["Return", "Shop for spices and coffee, then drive back down the ghat."]
    ]
  },
  {
    id: "varkala", category: "kerala", flag: "🌅",
    name: "Varkala & Kovalam", tagline: "Cliffs, beaches & sunsets",
    duration: "3 Nights / 4 Days", route: "Varkala · Kovalam · Trivandrum",
    image: U + "photo-1697216654723-96c045d36ae0",
    highlights: ["Varkala cliff & Papanasam beach", "Kovalam lighthouse beach", "Poovar estuary boat ride", "Padmanabhaswamy Temple", "Ayurvedic massage"],
    includes: ["Private cab", "3 nights beach resort with breakfast", "Poovar boat ride", "Sightseeing"],
    itinerary: [
      ["Arrive Varkala", "Spend the sunset on the North Cliff, with its cafés and the sea below."],
      ["Varkala to Kovalam", "Visit the Janardhana Swamy Temple and Kappil Beach, then move on to Kovalam."],
      ["Poovar & Trivandrum", "Take a boat ride on the Poovar estuary to the golden sand beach, then see the city sights of Trivandrum."],
      ["Departure", "Enjoy a relaxed morning on the beach before your drop."]
    ]
  },
  {
    id: "grandkerala", category: "kerala", flag: "🐘",
    name: "Grand Kerala Tour", tagline: "God's Own Country, end to end",
    duration: "6 Nights / 7 Days", route: "Kochi · Munnar · Thekkady · Alleppey · Kovalam",
    image: U + "photo-1789930720060-07d561c222e0",
    highlights: ["Fort Kochi & Chinese fishing nets", "Munnar tea country", "Periyar boating & spice plantation", "Alleppey houseboat night", "Kovalam beach"],
    includes: ["Private AC cab throughout", "5 nights hotel + 1 night houseboat", "Breakfast daily, all meals on houseboat", "Sightseeing as per itinerary"],
    itinerary: [
      ["Arrive Kochi", "See the Chinese fishing nets at Fort Kochi, St. Francis Church, Mattancherry Palace and a Kathakali show."],
      ["Kochi to Munnar", "Drive up via the waterfalls and spice gardens to the tea hills."],
      ["Munnar", "Visit Eravikulam, Mattupetty, Echo Point and the Tea Museum."],
      ["Munnar to Thekkady", "Take a spice plantation tour, a Periyar Lake boat ride and see Kalaripayattu."],
      ["Alleppey houseboat", "Board a private houseboat for a night on the backwaters."],
      ["Kovalam", "Drive south to Kovalam for the beach and lighthouse sunset."],
      ["Departure", "Drop at Trivandrum airport or railway station."]
    ]
  }
];

/* Destinations used by enquiry dropdowns (packages + extras) */
const EXTRA_DESTINATIONS = ["Umrah", "Other / Not decided yet"];
