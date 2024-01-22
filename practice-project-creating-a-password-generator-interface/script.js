// Data for the top 10 web apps and exact number of users
let webAppsData = [
  { name: "Google Workspace", users: "Over 2 Billion" },
  { name: "Microsoft 365", users: "Over 285 Million" },
  { name: "Zoom", users: "Over 300 Million" },
  { name: "Slack", users: "Over 12 Million" },
  { name: "Trello", users: "Over 50 Million" },
  { name: "GitHub", users: "Over 73 Million" },
  { name: "Dropbox", users: "Over 700 Million" },
  { name: "LinkedIn", users: "Over 774 Million" },
  { name: "Twitter", users: "Over 330 Million" },
  { name: "Salesforce", users: "Over 150,000 Companies" },
];

// Function to display web app data in the table
function displayWebAppTable(webAppsData) {
  const webAppTableBody = document.getElementById("webAppTableBody");

  // Clear any existing content
  webAppTableBody.innerHTML = "";

  // Display each web app and the number of users
  webAppsData.forEach((webApp) => {
    const row = document.createElement("tr");
    const appNameCell = document.createElement("td");
    appNameCell.textContent = webApp.name;
    const usersCell = document.createElement("td");
    usersCell.textContent = webApp.users;

    row.appendChild(appNameCell);
    row.appendChild(usersCell);
    webAppTableBody.appendChild(row);
  });
}

// Call the function to display the initial web app table
displayWebAppTable(webAppsData);

// Function to add a new web app to the data
function addNewWebApp() {
  const newWebApp = { name: "New Web App", users: "To be determined" };

  // Add the new web app to the data
  webAppsData.push(newWebApp);

  // Call the function to display the updated web app table
  displayWebAppTable(webAppsData);
}

// Function to sort web apps based on most users
function sortMostUsers() {
  webAppsData.sort((a, b) => {
    const usersA = parseUsers(a.users);
    const usersB = parseUsers(b.users);
    return usersB - usersA;
  });

  // Call the function to display the sorted web app table
  displayWebAppTable(webAppsData);
}

// Function to sort web apps based on fewest users
function sortFewestUsers() {
  webAppsData.sort((a, b) => {
    const usersA = parseUsers(a.users);
    const usersB = parseUsers(b.users);
    return usersA - usersB;
  });

  // Call the function to display the sorted web app table
  displayWebAppTable(webAppsData);
}

// Helper function to parse the number of users from the string
function parseUsers(usersString) {
  const usersMatch = usersString.match(/\d+/);
  return usersMatch ? parseInt(usersMatch[0]) : 0;
}

// Call the function to add a new web app
addNewWebApp();
