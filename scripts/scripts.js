/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


document.getElementById("stateSelect").addEventListener("change", function() {
  const selectedState = this.value;
  if (selectedState && schools[selectedState]) {
    const infoBox = document.querySelector('.school-Info');
    infoBox.innerHTML = schools[selectedState];
    infoBox.classList.add('active');
  }
});

const schools = {
  "CA": `
  <div class="school"><h2>Stanford University</h2>
    <p><strong>Ranking:</strong> 4</p>
    <p><strong>Tuition:</strong> $65,910</p>
    <p><strong>Location:</strong> Stanford, CA</p>
    <p><strong>Acceptance Rate:</strong> 4%</p>
    <p><strong>Application Deadline:</strong> 1.5</p>
    <p><strong>SAT Range:</strong> 1510 - 1580</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> 3.9</p>

    <h2>University of California--Los Angeles</h2>
    <p><strong>Ranking:</strong> 15</p>
    <p><strong>Tuition:</strong> $14,208</p>
    <p><strong>Location:</strong> Los Angeles, CA</p>
    <p><strong>Acceptance Rate:</strong> 9%</p>
    <p><strong>Application Deadline:</strong> 11.30</p>
    <p><strong>SAT Range:</strong> N/A</p>
    <p><strong>ACT Range:</strong> N/A</p>
    <p><strong>High School GPA:</strong> 3.9</p>

<h2>University of California, Berkeley</h2>
    <p><strong>Ranking:</strong> 17</p>
    <p><strong>Tuition:</strong> $16,832</p>
    <p><strong>Location:</strong> Berkeley, CA</p>
    <p><strong>Acceptance Rate:</strong> 12%</p>
    <p><strong>Application Deadline:</strong> 11.30</p>
    <p><strong>SAT Range:</strong> N/A</p>
    <p><strong>ACT Range:</strong> N/A</p>
    <p><strong>High School GPA:</strong> 3.9</p>

    <h2>University of Southern California</h2>
    <p><strong>Ranking:</strong> 27</p>
    <p><strong>Tuition:</strong> $71,647</p>
    <p><strong>Location:</strong> Los Angeles, CA</p>
    <p><strong>Acceptance Rate:</strong> 10%</p>
    <p><strong>Application Deadline:</strong> 1.15</p>
    <p><strong>SAT Range:</strong> 1440 - 1550</p>
    <p><strong>ACT Range:</strong> 32 - 35</p>
    <p><strong>High School GPA:</strong> 3.9</p>

    <h2>University of California, San Diego</h2>
    <p><strong>Ranking:</strong> 29</p>
    <p><strong>Tuition:</strong> $16,815</p>
    <p><strong>Location:</strong> La Jolla, CA</p>
    <p><strong>Acceptance Rate:</strong> 25%</p>
    <p><strong>Application Deadline:</strong> 11.30</p>
    <p><strong>SAT Range:</strong> N/A</p>
    <p><strong>ACT Range:</strong> N/A</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>`,
  "NY": `
  <div class="school"><h2>Columbia University</h2>
    <p><strong>Tuition:</strong> $62,400</p>
    <p><strong>Location:</strong> New York, NY</p>
    <p><strong>Acceptance Rate:</strong> 4%</p>
    <p><strong>Application Deadline:</strong> N/A</p>
    <p><strong>SAT Range:</strong> 1490 - 1580</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p>

    <h2>Cornell University</h2>
    <p><strong>Tuition:</strong> $69,314</p>
    <p><strong>Location:</strong> Ithaca, NY</p>
    <p><strong>Acceptance Rate:</strong> 8%</p>
    <p><strong>Application Deadline:</strong> 1.2</p>
    <p><strong>SAT Range:</strong> 1480 - 1560</p>
    <p><strong>ACT Range:</strong> 33 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
    `,
  "CT": `
  <div class="school"><h2>Yale University</h2>
    <p><strong>Tuition:</strong> $67,250</p>
    <p><strong>Location:</strong> New Haven, CT</p>
    <p><strong>Acceptance Rate:</strong> 5%</p>
    <p><strong>Application Deadline:</strong> 1.2</p>
    <p><strong>SAT Range:</strong> 1500 - 1580</p>
    <p><strong>ACT Range:</strong> 33 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "NC": `
  <div class="school"> <h2>Duke University</h2>
    <p><strong>Tuition:</strong> $69,140</p>
    <p><strong>Location:</strong> Durham, NC</p>
    <p><strong>Acceptance Rate:</strong> 7%</p>
    <p><strong>Application Deadline:</strong> 1.2</p>
    <p><strong>SAT Range:</strong> 1520 - 1570</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p>

    <h2>University of North Carolina--Chapel Hill</h2>
    <p><strong>Tuition:</strong> $9,003</p>
    <p><strong>Location:</strong> Chapel Hill, NC</p>
    <p><strong>Acceptance Rate:</strong> 19%</p>
    <p><strong>Application Deadline:</strong> 1.15</p>
    <p><strong>SAT Range:</strong> 1370 - 1530</p>
    <p><strong>ACT Range:</strong> 30 - 34</p>
    <p><strong>High School GPA:</strong> N/A</p></div>`,
"IL":`
<div class="school"> <h2>Northwestern University</h2>
    <p><strong>Ranking:</strong> 6</p>
    <p><strong>Tuition:</strong> $68,322</p>
    <p><strong>Location:</strong> Evanston, IL</p>
    <p><strong>Acceptance Rate:</strong> 7%</p>
    <p><strong>Application Deadline:</strong> 1.1</p>
    <p><strong>SAT Range:</strong> 1490 - 1580</p>
    <p><strong>ACT Range:</strong> 33 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "PA": `
  <div class="school"><h2>University of Pennsylvania</h2>
    <p><strong>Ranking:</strong> 10</p>
    <p><strong>Tuition:</strong> $68,686</p>
    <p><strong>Location:</strong> Philadelphia, PA</p>
    <p><strong>Acceptance Rate:</strong> 6%</p>
    <p><strong>Application Deadline:</strong> 1.5</p>
    <p><strong>SAT Range:</strong> 1500 - 1570</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `,
  "RI": `
  <div class="school"><h2>Brown University</h2>
    <p><strong>Ranking:</strong> 13</p>
    <p><strong>Tuition:</strong> $71,312</p>
    <p><strong>Location:</strong> Providence, RI</p>
    <p><strong>Acceptance Rate:</strong> 5%</p>
    <p><strong>Application Deadline:</strong> 1.3</p>
    <p><strong>SAT Range:</strong> 1500 - 1570</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "IN": `
  <div class="school"><h2>University of Notre Dame</h2>
    <p><strong>Ranking:</strong> 18</p>
    <p><strong>Tuition:</strong> $65,025</p>
    <p><strong>Location:</strong> Notre Dame, IN</p>
    <p><strong>Acceptance Rate:</strong> 12%</p>
    <p><strong>Application Deadline:</strong> 1.3</p>
    <p><strong>SAT Range:</strong> 1440 - 1540</p>
    <p><strong>ACT Range:</strong> 33 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "DC": `
  <div class="school"><h2>Georgetown University</h2>
    <p><strong>Ranking:</strong> 24</p>
    <p><strong>Tuition:</strong> $68,016</p>
    <p><strong>Location:</strong> Washington, DC</p>
    <p><strong>Acceptance Rate:</strong> 13%</p>
    <p><strong>Application Deadline:</strong> 1.10</p>
    <p><strong>SAT Range:</strong> 1390 - 1550</p>
    <p><strong>ACT Range:</strong> 32 - 34</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "VA": `
  <div class="school"><h2>University of Virginia</h2>
    <p><strong>Ranking:</strong> 24</p>
    <p><strong>Tuition:</strong> $23,118</p>
    <p><strong>Location:</strong> Charlottesville, VA</p>
    <p><strong>Acceptance Rate:</strong> 17%</p>
    <p><strong>Application Deadline:</strong> 1.5</p>
    <p><strong>SAT Range:</strong> 1410 - 1530</p>
    <p><strong>ACT Range:</strong> 32 - 34</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "TN": `
  <div class="school"><h2>Vanderbilt University</h2>
    <p><strong>Ranking:</strong> 18</p>
    <p><strong>Tuition:</strong> $67,498</p>
    <p><strong>Location:</strong> Nashville, TN</p>
    <p><strong>Acceptance Rate:</strong> 6%</p>
    <p><strong>Application Deadline:</strong> 1.1</p>
    <p><strong>SAT Range:</strong> 1510 - 1560</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `,
  "TX": `
  <div class="school"><h2>Rice University</h2>
    <p><strong>Ranking:</strong> 18</p>
    <p><strong>Tuition:</strong> $60,709</p>
    <p><strong>Location:</strong> Houston, TX</p>
    <p><strong>Acceptance Rate:</strong> 8%</p>
    <p><strong>Application Deadline:</strong> 1.4</p>
    <p><strong>SAT Range:</strong> 1500 - 1570</p>
    <p><strong>ACT Range:</strong> 34 - 36</p>
    <p><strong>High School GPA:</strong> N/A</p>

    <h2>The University of Texas--Austin</h2>
    <p><strong>Ranking:</strong> 30</p>
    <p><strong>Tuition:</strong> $11,678</p>
    <p><strong>Location:</strong> Austin, TX</p>
    <p><strong>Acceptance Rate:</strong> 29%</p>
    <p><strong>Application Deadline:</strong> 12.1</p>
    <p><strong>SAT Range:</strong> 1310 - 1520</p>
    <p><strong>ACT Range:</strong> 29 - 34</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "MO": `
  <div class="school"><h2>Washington University in St. Louis</h2>
    <p><strong>Ranking:</strong> 21</p>
    <p><strong>Tuition:</strong> $65,790</p>
    <p><strong>Location:</strong> St. Louis, MO</p>
    <p><strong>Acceptance Rate:</strong> 12%</p>
    <p><strong>Application Deadline:</strong> 1.2</p>
    <p><strong>SAT Range:</strong> 1500 - 1570</p>
    <p><strong>ACT Range:</strong> 33 - 35</p>
    <p><strong>High School GPA:</strong> N/A</p></div>
  `,
  "MI": `
  <div class="school"> <h2>University of Michigan--Ann Arbor</h2>
    <p><strong>Ranking:</strong> 21</p>
    <p><strong>Tuition:</strong> $18,848</p>
    <p><strong>Location:</strong> Ann Arbor, MI</p>
    <p><strong>Acceptance Rate:</strong> 18%</p>
    <p><strong>Application Deadline:</strong> 2.1</p>
    <p><strong>SAT Range:</strong> 1350 - 1530</p>
    <p><strong>ACT Range:</strong> 31 - 34</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `,
  "FL": `
  <div class="school"><h2>University of Florida</h2>
    <p><strong>Ranking:</strong> 30</p>
    <p><strong>Tuition:</strong> $6,381</p>
    <p><strong>Location:</strong> Gainesville, FL</p>
    <p><strong>Acceptance Rate:</strong> 24%</p>
    <p><strong>Application Deadline:</strong> 3.1</p>
    <p><strong>SAT Range:</strong> 1300 - 1480</p>
    <p><strong>ACT Range:</strong> 28 - 32</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `,
  "MA": `
  <div class="school"> <h2>Harvard University</h2>
    <p><strong>Tuition:</strong> $61,676</p>
    <p><strong>Location:</strong> Cambridge, MA</p>
    <p><strong>Acceptance Rate:</strong> 3%</p>
    <p><strong>Application Deadline:</strong> 1.1</p>
    <p><strong>SAT Range:</strong> 1500 - 1580</p>
    <p><strong>ACT Range:</strong> 34 - 36</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `,
  "NJ": `
  <div class="school"><h2>Princeton University</h2>
    <p><strong>Tuition:</strong> $62,400</p>
    <p><strong>Location:</strong> Princeton, NJ</p>
    <p><strong>Acceptance Rate:</strong> 4%</p>
    <p><strong>Application Deadline:</strong> 1.1</p>
    <p><strong>SAT Range:</strong> 1500 - 1580</p>
    <p><strong>ACT Range:</strong> 34 - 35</p>
    <p><strong>High School GPA:</strong> 3.9</p></div>
  `
};

    function showSchoolInfo(state) {
      const html = schools[state];
      if (html) {
    const infoBox = document.getElementById('school-Info');
    infoBox.innerHTML = `
      <button id="closeInfo" style="
      position:abosolute;

        grid-column: span 2;
        background-color:black ;
        color: white;
        border: none;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;
      ">X</button>
      ${html}
    `;
    infoBox.classList.add('active');

    document.getElementById('closeInfo').addEventListener('click', function() {
      infoBox.classList.remove('active');
      infoBox.innerHTML = '';
    });
  }
    }


    document.getElementById('searchInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        alert('Searching for: ' + this.value);
      }
    });

    document.getElementById('usMap').addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      console.log('X:', x, 'Y:', y);
    });
    document.addEventListener("click", function(e) {
  const infoBox = document.querySelector('.school-Info');
  const usMap = document.getElementById("usMap");

  if (
    infoBox.classList.contains('active') &&
    !infoBox.contains(e.target) &&
    !usMap.contains(e.target)
  ) {
    infoBox.classList.remove('active');
    infoBox.innerHTML = '';
  }
});
const universityIndex = [];

for (const [state, html] of Object.entries(schools)) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const schoolBlocks = tempDiv.querySelectorAll('.school');
  schoolBlocks.forEach(block => {
    const name = block.querySelector('h2')?.innerText.trim();
    if (name) {
      universityIndex.push({
        name: name.toLowerCase(),  
        html: block.outerHTML
      });
    }
  });
}

document.getElementById('searchInput').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase().trim();
  const infoBox = document.getElementById('school-Info');

  if (!query) {
    infoBox.classList.remove('active');
    infoBox.innerHTML = '';
    return;
  }

  const match = universityIndex.find(item => item.name.includes(query));
  if (match) {
    infoBox.innerHTML = `
    <button id="closeInfo" style="

        grid-column: span 1;
        background-color:black ;
        color: white;
        border: none;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;
     
      ">X</button>
      ${match.html}
    `;
    infoBox.classList.add('active');

    document.getElementById('closeInfo').addEventListener('click', function() {
      infoBox.classList.remove('active');
      infoBox.innerHTML = '';
    });
  } else {
    infoBox.classList.remove('active');
    infoBox.innerHTML = '';
  }
});
