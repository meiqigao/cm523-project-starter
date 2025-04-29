/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

// let coordsList = [];

//   function recordClick(event) {
//     const img = event.target;
//     const rect = img.getBoundingClientRect();
//     const x = Math.round(event.clientX - rect.left);
//     const y = Math.round(event.clientY - rect.top);

//     coordsList.push(x, y);
//     console.log(`Clicked at: ${x}, ${y}`);
//     console.log(`Current coords: ${coordsList.join(',')}`);
//   }

//   function finishCoords() {
//     alert("Your coords:\n" + coordsList.join(','));
//   }

//   window.onload = function() {
//     const img = document.getElementById('usMap'); // Make sure your image has id="usMap"
//     img.addEventListener('click', recordClick);

//     // Press "Enter" to finish
//     document.addEventListener('keydown', function(event) {
//       if (event.key === "Enter") {
//         finishCoords();
//       }
//     });
//   }

  function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
  }
const schools = [
  {
    name: "Massachusetts Institute of Technology",
    state: "MA",
    ranking: 2,
    tuition: 62396,
    city: "Cambridge",
    acceptanceRate: "5%",
    deadline: "1.1",
    satRange: "1510-1580",
    actRange: "34-36",
    gpa: "N/A",
    Division:3,
  },
  {
    name: "California Institute of Technology",
    state: "CA",
    ranking: 6,
    tuition: 65898,
    city: "Pasadena",
    acceptanceRate: "3%",
    deadline: "1.3",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "N/A",
    Division:3,
  },
  {
    name: "Johns Hopkins University",
    state: "MD",
    ranking: 6,
    tuition: 65230,
    city: "Baltimore",
    acceptanceRate: "8%",
    deadline: "1.3",
    satRange: "1530-1580",
    actRange: "34-35",
    gpa: "3.9",
    Division:3,

  },
  {
    name: "University of Chicago",
    state: "IL",
    ranking: 11,
    tuition: 69324,
    city: "Chicago",
    acceptanceRate: "5%",
    deadline: "1.6",
    satRange: "1510-1570",
    actRange: "34-35",
    gpa: "N/A",
    Division:3
  },
  {
    name: "Emory University",
    state: "GA",
    ranking: 24,
    tuition: 64280,
    city: "Atlanta",
    acceptanceRate: "11%",
    deadline: "1.1",
    satRange: "1460-1550",
    actRange: "32-34",
    gpa: "3.8",
    Division:3

  },
  {
    name: "New York University",
    state: "NY",
    ranking: 30,
    tuition: 62796,
    city: "New York",
    acceptanceRate: "9%",
    deadline: "1.5",
    satRange: "1480-1570",
    actRange: "33-35",
    gpa: "3.8",    Division:3

  },
  {
    name: "Tufts University",
    state: "MA",
    ranking: 37,
    tuition: 70704,
    city: "Medford",
    acceptanceRate: "10%",
    deadline: "1.4",
    satRange: "1460-1550",
    actRange: "33-35",
    gpa: "N/A",
    Division:3,

  },
  {
    name: "University of Rochester",
    state: "NY",
    ranking: 44,
    tuition: 67124,
    city: "Rochester",
    acceptanceRate: "36%",
    deadline: "1.5",
    satRange: "1400-1540",
    actRange: "31-34",
    gpa: "3.7",
    Division:3,

  },
  {
    name: "Stanford University",
    state: "CA",
    ranking: 4,
    tuition: 65910,
    city: "Stanford",
    acceptanceRate: "4%",
    deadline: "1.5",
    satRange: "1510 - 1580",
    actRange: "34 - 35",
    gpa: "3.9",
    Division:1
  },
  {
    name: "University of Illinois Urbana-Champaign",
    state: "IL",
    ranking: 33,
    tuition: 17640,
    city: "Champaign",
    acceptanceRate: "44%",
    deadline: "1.5",
    satRange: "1340-1530",
    actRange: "30-34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Boston College",
    state: "MA",
    ranking: 37,
    tuition: 70702,
    city: "Chestnut Hill",
    acceptanceRate: "16%",
    deadline: "1.2",
    satRange: "1430-1540",
    actRange: "33-34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Wisconsin—Madison",
    state: "WI",
    ranking: 37,
    tuition: 70702,
    city: "Madison",
    acceptanceRate: "43%",
    deadline: "1.15",
    satRange: "1350-1510",
    actRange: "28-32",
    gpa: "3.9",
    Division:1

  },
  {
    name: "Boston University",
    state: "MA",
    ranking: 41,
    tuition: 68102,
    city: "Boston",
    acceptanceRate: "11%",
    deadline: "1.6",
    satRange: "1400-1520",
    actRange: "32-34",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of California--Los Angeles",
    state: "CA",
    ranking: 15,
    tuition: 14208,
    city: "Los Angeles",
    acceptanceRate: "9%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of California, Berkeley",
    state: "CA",
    ranking: 17,
    tuition: 16832,
    city: "Berkeley",
    acceptanceRate: "12%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of California, Santa Barbara ",
    state: "CA",
    ranking: 39,
    tuition: 15460,
    city: "Santa Barbara",
    acceptanceRate: "28%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "3.9",
    Division:1

  },
  
  {
    name: "University of Southern California",
    state: "CA",
    ranking: 27,
    tuition: 71647,
    city: "Los Angeles",
    acceptanceRate: "10%",
    deadline: "1.15",
    satRange: "1440 - 1550",
    actRange: "32 - 35",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of California, San Diego",
    state: "CA",
    ranking: 29,
    tuition: 16815,
    city: "La Jolla",
    acceptanceRate: "25%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of California, Davis",
    state: "CA",
    ranking: 33,
    tuition: 15794,
    city: "Davis",
    acceptanceRate: "42%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of California—Irvine",
    state: "CA",
    ranking: 33,
    tuition: 14737,
    city: "Irvine",
    acceptanceRate: "26%",
    deadline: "11.30",
    satRange: "N/A",
    actRange: "N/A",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Columbia University",
    state: "NY",
    ranking: 13,
    tuition: 62400,
    city: "New York",
    acceptanceRate: "4%",
    deadline: "N/A",
    satRange: "1490 - 1580",
    actRange: "34 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Cornell University",
    state: "NY",
    ranking: 11,
    tuition: 69314,
    city: "Ithaca",
    acceptanceRate: "8%",
    deadline: "1.2",
    satRange: "1480 - 1560",
    actRange: "33 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Yale University",
    state: "CT",
    ranking: 5,
    tuition: 67250,
    city: "New Haven",
    acceptanceRate: "5%",
    deadline: "1.2",
    satRange: "1500 - 1580",
    actRange: "33 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Duke University",
    state: "NC",
    ranking: 6,
    tuition: 69140,
    city: "Durham",
    acceptanceRate: "7%",
    deadline: "1.2",
    satRange: "1520 - 1570",
    actRange: "34 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of North Carolina--Chapel Hill",
    state: "NC",
    ranking: 27,
    tuition: 9003,
    city: "Chapel Hill",
    acceptanceRate: "19%",
    deadline: "1.15",
    satRange: "1370 - 1530",
    actRange: "30 - 34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Northwestern University",
    state: "IL",
    ranking: 6,
    tuition: 68322,
    city: "Evanston",
    acceptanceRate: "7%",
    deadline: "1.1",
    satRange: "1490 - 1580",
    actRange: "33 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Pennsylvania",
    state: "PA",
    ranking: 10,
    tuition: 68686,
    city: "Philadelphia",
    acceptanceRate: "6%",
    deadline: "1.5",
    satRange: "1500 - 1570",
    actRange: "34 - 35",
    gpa: "3.9",
    Division:1

  },
  {
    name: "Brown University",
    state: "RI",
    ranking: 13,
    tuition: 71312,
    city: "Providence",
    acceptanceRate: "5%",
    deadline: "1.3",
    satRange: "1500 - 1570",
    actRange: "34 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Notre Dame",
    state: "IN",
    ranking: 18,
    tuition: 65025,
    city: "Notre Dame",
    acceptanceRate: "12%",
    deadline: "1.3",
    satRange: "1440 - 1540",
    actRange: "33 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Georgetown University",
    state: "DC",
    ranking: 24,
    tuition: 68016,
    city: "Washington",
    acceptanceRate: "13%",
    deadline: "1.10",
    satRange: "1390 - 1550",
    actRange: "32 - 34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Virginia",
    state: "VA",
    ranking: 24,
    tuition: 23118,
    city: "Charlottesville",
    acceptanceRate: "17%",
    deadline: "1.5",
    satRange: "1410 - 1530",
    actRange: "32 - 34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Vanderbilt University",
    state: "TN",
    ranking: 18,
    tuition: 67498,
    city: "Nashville",
    acceptanceRate: "6%",
    deadline: "1.1",
    satRange: "1510 - 1560",
    actRange: "34 - 35",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of Georgia",
    state: "GA",
    ranking: 46,
    tuition: 11440,
    city: "Athens",
    acceptanceRate: "37%",
    deadline: "1.1",
    satRange: "1220-1420",
    actRange: "27-32",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Purdue University",
    state: "IN",
    ranking: 46,
    tuition: 9992,
    city: "West Lafayette",
    acceptanceRate: "50%",
    deadline: "1.15",
    satRange: "1190-1470",
    actRange: "27-34",
    gpa: "3.8",
    Division:1

  },
  {
    name: "Lehigh University",
    state: "PA",
    ranking: 46,
    tuition: 64980,
    city: "Bethlehem",
    acceptanceRate: "29%",
    deadline: "1.15",
    satRange: "1350-1490",
    actRange: "31-33",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Maryland",
    state: "MD",
    ranking: 44,
    tuition: 11808,
    city: "College Park",
    acceptanceRate: "45%",
    deadline: "Rolling",
    satRange: "1370-1520",
    actRange: "32-35",
    gpa: "N/A",
    Division:1

  },
  
  {
    name: "Rice University",
    state: "TX",
    ranking: 18,
    tuition: 60709,
    city: "Houston",
    acceptanceRate: "8%",
    deadline: "1.4",
    satRange: "1500 - 1570",
    actRange: "34 - 36",
    gpa: "N/A",
    Division:1

  },
  {
    name: "The University of Texas--Austin",
    state: "TX",
    ranking: 30,
    tuition: 11678,
    city: "Austin",
    acceptanceRate: "29%",
    deadline: "12.1",
    satRange: "1310 - 1520",
    actRange: "29 - 34",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Washington University in St. Louis",
    state: "MO",
    ranking: 21,
    tuition: 65790,
    city: "St. Louis",
    acceptanceRate: "12%",
    deadline: "1.2",
    satRange: "1500 - 1570",
    actRange: "33 - 35",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Michigan--Ann Arbor",
    state: "MI",
    ranking: 21,
    tuition: 18848,
    city: "Ann Arbor",
    acceptanceRate: "18%",
    deadline: "2.1",
    satRange: "1350 - 1530",
    actRange: "31 - 34",
    gpa: "3.9",
    Division:1

  },
  {
    name: "University of Florida",
    state: "FL",
    ranking: 30,
    tuition: 6381,
    city: "Gainesville",
    acceptanceRate: "24%",
    deadline: "3.1",
    satRange: "1300 - 1480",
    actRange: "28 - 32",
    gpa: "3.9",
    Division:1

  },
  {
    name: "Harvard University",
    state: "MA",
    ranking: 3,
    tuition: 61676,
    city: "Cambridge",
    acceptanceRate: "3%",
    deadline: "1.1",
    satRange: "1500 - 1580",
    actRange: "34 - 36",
    gpa: "3.9",
    Division:1

  },
  {
    name: "Princeton University",
    state: 'NJ',
    ranking: 1,
    tuition: 62400,
    city: "Princeton",
    acceptanceRate: "4%",
    deadline: "1.1",
    satRange: "1500 - 1580",
    actRange: "34 - 35",
    gpa: "3.9",
    Division:1

  },
  {
    name: "Rutgers University",
    state: 'NJ',
    ranking: 41,
    tuition: 17929,
    city: "Piscataway",
    acceptanceRate: "65%",
    deadline: "N/A",
    satRange: "1270-1480",
    actRange: "28-33",
    gpa: "N/A",
    Division:1

  },
  {
    name: "Ohio State University",
    state: "OH",
    ranking: 41,
    tuition: 13244,
    city: "Columbus",
    acceptanceRate: "51%",
    deadline: "1.15",
    satRange: "1330-1480",
    actRange: "29-32",
    gpa: "N/A",
    Division:1

  },
  {
    name: "University of Washington",
    state: "OH",
    ranking: 46,
    tuition: 12973,
    city: "Seattle",
    acceptanceRate: "43%",
    deadline: "11.15",
    satRange: "1260-1510",
    actRange: "30-34",
    gpa: "3.8",
    Division:1

  },
  {
    name: "Wake Forest University",
    state: "NC",
    ranking: 46,
    tuition: 67642,
    city: "Winston-Salem ",
    acceptanceRate: "22%",
    deadline: "1.1",
    satRange: "1390-1510",
    actRange: "32-34",
    gpa: "N/A",
    Division:1

  }
  ];
  schools.sort((a, b) => a.ranking - b.ranking);


function showSchoolInfo(state) {
renderSchools(state);
}
function renderSchools(state) {
const infoBox = document.getElementById('school-Info');
infoBox.innerHTML =`
<button id="closeInfo" style="
position:abosolute;

  grid-column: span 2;
  background-color:#ebab44 ;
  color: white;
  border: none;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
">X</button>

`;


const filteredSchools = schools.filter(school => school.state === state);

if (filteredSchools.length === 0) {
  infoBox.innerHTML = `<p>No schools found for ${state}</p>`;
  return;
}

filteredSchools.forEach(school => {
  const card = document.createElement('div');
  card.className = "school";
  card.innerHTML = `
    <h2>${school.name}</h2>
    <p><strong>NCAA Division:</strong> ${school.Division}</p>
    <p><strong>Ranking:</strong> ${school.ranking ?? "N/A"}</p>
    <p><strong>Tuition:</strong> $${school.tuition}</p>
    <p><strong>Location:</strong> ${school.city}, ${school.state}</p>
    <p><strong>Acceptance Rate:</strong> ${school.acceptanceRate}</p>
    <p><strong>Application Deadline:</strong> ${school.deadline}</p>
    <p><strong>SAT Range:</strong> ${school.satRange}</p>
    <p><strong>ACT Range:</strong> ${school.actRange}</p>
    <p><strong>High School GPA:</strong> ${school.gpa}</p>
  `;
  infoBox.appendChild(card);

  });



infoBox.classList.add('active');

document.getElementById('closeInfo').addEventListener('click', function() {
  infoBox.classList.remove('active');
  infoBox.innerHTML = '';
});
}
// Add Search Function
document.getElementById('searchInput').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase().trim();
  const infoBox = document.getElementById('school-Info');
  infoBox.innerHTML = ""; 

  if (!query) {
    infoBox.classList.remove('active');
    return;
  }
  let matchedSchools = schools.filter(school => school.name.toLowerCase().includes(query));

  // If no exact matches, do fuzzy matching
  if (matchedSchools.length === 0) {
    matchedSchools = schools.filter(school => {
      const name = school.name.toLowerCase();
      let score = 0;
      for (let char of query) {
        if (name.includes(char)) score++;
      }
      const similarity = score / query.length;
      return similarity > 0.6;  // adjustable threshold
    });
  }

  if (matchedSchools.length > 0) {
    infoBox.innerHTML = `
      <button id="closeInfo" style="
        grid-column: span 2;
        background-color:#ebab44;
        color: white;
        border: none;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;
      ">X</button>
      ${matchedSchools.map(school => `
        <div class="school">
          <h2>${school.name}</h2>
          <p><strong>Ranking:</strong> ${school.ranking ?? "N/A"}</p>
          <p><strong>Tuition:</strong> $${school.tuition}</p>
          <p><strong>Location:</strong> ${school.city}, ${school.state}</p>
          <p><strong>Acceptance Rate:</strong> ${school.acceptanceRate}</p>
          <p><strong>Application Deadline:</strong> ${school.deadline}</p>
          <p><strong>SAT Range:</strong> ${school.satRange}</p>
          <p><strong>ACT Range:</strong> ${school.actRange}</p>
          <p><strong>High School GPA:</strong> ${school.gpa}</p>
        </div>
      `).join('')}
    `;
    infoBox.classList.add('active');
  

    // Add close button event again
    document.getElementById('closeInfo').addEventListener('click', function() {
      infoBox.classList.remove('active');
      infoBox.innerHTML = '';
    });

  } else {
    infoBox.classList.remove('active');
  }
});

//for iphone
const stateSelect = document.getElementById('stateSelect');
const infoBox = document.getElementById('infoBox'); 

stateSelect.addEventListener('change', function () {
  const selectedState = this.value;
  
  infoBox.innerHTML = ''; 
  
  const filteredSchools = schools.filter(school => school.state === selectedState);

  if (filteredSchools.length === 0) {
    infoBox.innerHTML = `<p>No schools found for ${selectedState}</p>`;
    return;
  }

  filteredSchools.forEach(school => {
    const card = document.createElement('div');
    card.className = "school"; // You can make the .school class mobile-friendly in CSS
    card.innerHTML = `
      <h2>${school.name}</h2>
      <p><strong>Ranking:</strong> ${school.ranking ?? "N/A"}</p>
      <p><strong>Tuition:</strong> $${school.tuition}</p>
      <p><strong>Location:</strong> ${school.city}, ${school.state}</p>
      <p><strong>Acceptance Rate:</strong> ${school.acceptanceRate}</p>
      <p><strong>Application Deadline:</strong> ${school.deadline}</p>
      <p><strong>SAT Range:</strong> ${school.satRange}</p>
      <p><strong>ACT Range:</strong> ${school.actRange}</p>
      <p><strong>High School GPA:</strong> ${school.gpa}</p>
    `;
    infoBox.appendChild(card);
  });
});
