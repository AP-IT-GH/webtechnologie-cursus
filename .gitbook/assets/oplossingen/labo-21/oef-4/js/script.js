"use strict";

document
    .querySelector('#showCollegesButton')
    .addEventListener('click', listColleges);

async function listColleges() {
  try {
    const countrySelect = document.querySelector('#countrySelect');
    const selectedCountry = countrySelect.value;

    const apiUrl = `http://universities.hipolabs.com/search?country=${selectedCountry}`;
    const response = await fetch(apiUrl);
    const colleges = await response.json();

    const collegesList = document.querySelector('#collegesList');
    collegesList.innerHTML = `<p>Colleges in ${selectedCountry}:</p>`;
    
    colleges.forEach(college => {
      const listItem = document.createElement('li');
      listItem.textContent = college.name;
      collegesList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Er is een fout opgetreden:', error.message);
  }
}