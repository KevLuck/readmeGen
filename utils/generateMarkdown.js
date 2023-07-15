// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Add the license badge URLs for the desired licenses
  const licenseBadges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    // Add more license badges here...
  };

  // Check if the license exists in the license badges object
  if (license && licenseBadges[license]) {
    return licenseBadges[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Add the license URLs for the desired licenses
  const licenseLinks = {
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'MIT License': 'https://opensource.org/licenses/MIT',
    
  };

  
  if (license && licenseLinks[license]) {
    return `License: [${license}](${licenseLinks[license]})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  // Return the license section with the badge and link (if available)
  if (licenseBadge || licenseLink) {
    return `
## License

${licenseBadge}
${licenseLink}
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description

${data.description}
`;
}

module.exports = generateMarkdown;
