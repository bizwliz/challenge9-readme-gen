// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return ` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "No License") {
    return ` [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // You need to define the appropriate license link here based on the selected license
  // For example, you can return a link to the license text or documentation.
  return "";
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
  } else if (license === "No License") {
    return "This project is not licensed.";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  - [GitHub Profile](https://github.com/${data.username})
  - [Email Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
