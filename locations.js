// DOT Alliance Provider Locations
const locations = [
  {
    name: "Action Chiropractic",
    address: "5400 E Mockingbird Ln #214",
    city: "Dallas",
    state: "TX",
    zip: "75206",
    lat: 32.8407,
    lng: -96.7698,
    link: "locations/action-chiropractic-dallas.html"
  },
  {
    name: "Allegiant Health & Associates",
    address: "130 Bates Ave SW, Unit 111",
    city: "Winter Haven",
    state: "FL",
    zip: "33880",
    lat: 28.0222,
    lng: -81.7329,
    link: "locations/winter-haven-fl.html"
  },
  {
    name: "Ascend Chiropractic",
    address: "5611 NW 1st St Suite 105",
    city: "Lincoln",
    state: "NE",
    zip: "68521",
    lat: 40.8507,
    lng: -96.7196,
    link: "locations/ascend-lincoln.html"
  },
  {
    name: "Back on Track Chiropractic",
    address: "6888 Goodman Rd Suite 113",
    city: "Olive Branch",
    state: "MS",
    zip: "38654",
    lat: 34.9618,
    lng: -89.8295,
    link: "locations/back-on-track-olive-branch.html"
  },
  {
    name: "Better Life Chiropractic",
    address: "235 Wadsworth Dr",
    city: "Richmond",
    state: "VA",
    zip: "23236",
    lat: 37.5007,
    lng: -77.5636,
    link: "locations/better-life-richmond.html"
  },
  {
    name: "Care Clinic Plus",
    address: "136 E Colonial Dr",
    city: "Orlando",
    state: "FL",
    zip: "32801",
    lat: 28.5540,
    lng: -81.3733,
    link: "locations/orlando-care-clinic.html"
  },
  {
    name: "CarePlus Chiropractic Health Center",
    address: "212 9th St, Ste 103",
    city: "Oakland",
    state: "CA",
    zip: "94607",
    lat: 37.7995,
    lng: -122.2711,
    link: "locations/careplus-oakland.html"
  },
  {
    name: "Chicago Injury Specialist, LLC",
    address: "2548 S Blue Island Ave",
    city: "Chicago",
    state: "IL",
    zip: "60608",
    lat: 41.8456,
    lng: -87.6617,
    link: "locations/chicago-injury.html"
  },
  {
    name: "Chiropractic Clinics of South Florida - Miami Lakes",
    address: "5801 NW 151st St. #205",
    city: "Miami Lakes",
    state: "FL",
    zip: "33014",
    lat: 25.9098,
    lng: -80.3162,
    link: "locations/ccsf-miami-lakes.html"
  },
  {
    name: "Chiropractic Clinics of South Florida - Kendall",
    address: "14335 SW 120th St. #102",
    city: "Miami",
    state: "FL",
    zip: "33186",
    lat: 25.6470,
    lng: -80.4328,
    link: "locations/ccsf-kendall.html"
  },
  {
    name: "Chiropractic Clinics of South Florida - Hollywood",
    address: "7060 Taft St.",
    city: "Hollywood",
    state: "FL",
    zip: "33024",
    lat: 26.0235,
    lng: -80.2248,
    link: "locations/ccsf-hollywood.html"
  },
  {
    name: "Clifton D. Okman, DC",
    address: "7244 W Oakland Park Blvd",
    city: "Lauderhill",
    state: "FL",
    zip: "33313",
    lat: 26.1684,
    lng: -80.2261,
    link: "locations/clifton-okman-lauderhill.html"
  },
  {
    name: "Complete Chiropractic of Covington",
    address: "2513 Chelsea Dr",
    city: "Fort Mitchell",
    state: "KY",
    zip: "41017",
    lat: 39.0284,
    lng: -84.5594,
    link: "locations/complete-chiropractic-covington.html"
  },
  {
    name: "Dr. Gene Lott",
    address: "1007 W. Mitchell Street Ste. 102",
    city: "Arlington",
    state: "TX",
    zip: "76013",
    lat: 32.7357,
    lng: -97.1211,
    link: "locations/dr-gene-lott-arlington.html"
  },
  {
    name: "George Samuel Jr, DC",
    address: "3401 NW 9th Ave #200",
    city: "Oakland Park",
    state: "FL",
    zip: "33309",
    lat: 26.1684,
    lng: -80.1528,
    link: "locations/george-samuel-oakland-park.html"
  },
  {
    name: "Gulf Coast Health and Safety",
    address: "2130 W Brandon Blvd Suite 104",
    city: "Brandon",
    state: "FL",
    zip: "33511",
    lat: 27.9378,
    lng: -82.2859,
    link: "locations/gulf-coast-brandon.html"
  },
  {
    name: "Gutierrez Chiropractic Inc",
    address: "1341 W Robinhood Dr #A7",
    city: "Stockton",
    state: "CA",
    zip: "95207",
    lat: 38.0049,
    lng: -121.3382,
    link: "locations/gutierrez-stockton.html"
  },
  {
    name: "Ideal Health Clinic LLC",
    address: "3881 Eagle Creek Pkwy A",
    city: "Indianapolis",
    state: "IN",
    zip: "46254",
    lat: 39.8494,
    lng: -86.2520,
    link: "#"
  },
  {
    name: "Maddalo Chiropractic & DOT Certification",
    address: "14 McGrath Hwy, Twin City Plaza",
    city: "Somerville",
    state: "MA",
    zip: "02143",
    lat: 42.3803,
    lng: -71.0892,
    link: "locations/maddalo-somerville.html"
  },
  {
    name: "MaRIA Adult Naturopathic Care",
    address: "12719 SE 95th Pl",
    city: "Renton",
    state: "WA",
    zip: "98056",
    lat: 47.4799,
    lng: -122.1826,
    link: "locations/renton-wa.html"
  },
  {
    name: "Opachich Wellness Center",
    address: "1610 Blanding Blvd",
    city: "Jacksonville",
    state: "FL",
    zip: "32210",
    lat: 30.2774,
    lng: -81.7295,
    link: "locations/jacksonville-opachich.html"
  },
  {
    name: "DOT Physical Exam/Medical Card",
    address: "2141 NW Military Hwy",
    city: "San Antonio",
    state: "TX",
    zip: "78213",
    lat: 29.5018,
    lng: -98.5254,
    link: "locations/san-antonio-dot-physical-exam.html"
  },
  {
    name: "San Diego Chiropractic Wellness",
    address: "2615 Camino del Rio S #100",
    city: "San Diego",
    state: "CA",
    zip: "92108",
    lat: 32.7647,
    lng: -117.1373,
    link: "locations/san-diego-ca.html"
  },
  {
    name: "Spectrum Health & Wellness",
    address: "400 NW Eastman Pkwy",
    city: "Gresham",
    state: "OR",
    zip: "97030",
    lat: 45.5051,
    lng: -122.4360,
    link: "locations/spectrum-gresham.html"
  },
  {
    name: "Tomoka Spine and Posture",
    address: "595 W Granada Blvd Unit G",
    city: "Ormond Beach",
    state: "FL",
    zip: "32174",
    lat: 29.2858,
    lng: -81.0909,
    link: "locations/tomoka-ormond.html"
  },
  {
    name: "Different Approach",
    address: "31960 Little Mack Ave",
    city: "Roseville",
    state: "MI",
    zip: "48066",
    lat: 42.4973,
    lng: -82.9371,
    link: "locations/different-approach-roseville.html"
  },
  {
    name: "Morton Medical Management",
    address: "3201 NE Loop 820, Suite 280",
    city: "Fort Worth",
    state: "TX",
    zip: "76137",
    lat: 32.7555,
    lng: -97.3308,
    link: "locations/morton-fort-worth.html"
  },
  {
    name: "Daytona Beach DOT Physicals",
    address: "618 North Ridgewood Ave",
    city: "Daytona Beach",
    state: "FL",
    zip: "32114",
    lat: 29.2108,
    lng: -81.0228,
    link: "locations/daytona-beach-fl.html"
  },
  {
    name: "Clifton D. Okman, DC – Port St. Lucie",
    address: "Port St. Lucie",
    city: "Port St. Lucie",
    state: "FL",
    zip: "34952",
    lat: 27.2730,
    lng: -80.3582,
    link: "locations/okman-port-st-lucie.html"
  }
];



