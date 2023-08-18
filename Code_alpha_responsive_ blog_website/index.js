// An example array of resources (you can expand this)
const resources = [
    {
      title: "The Zero Waste Home",
      type: "Book",
      link: "https://www.zerowastehome.com/"
    },
    {
      title: "Minimalism: A Documentary About the Important Things",
      type: "Documentary",
      link: "https://minimalismfilm.com/"
    },
    {
      title: "Earth911",
      type: "Website",
      link: "https://earth911.com/"
    }
  ];
  
  // Function to display resources on the page
  function displayResources() {
    const resourceList = document.getElementById("resource-list");
  
    resources.forEach(resource => {
      const resourceItem = document.createElement("div");
      resourceItem.className = "resource-item";
      resourceItem.innerHTML = `
        <h3>${resource.title}</h3>
        <p>Type: ${resource.type}</p>
        <a href="${resource.link}" target="_blank">Learn More</a>
      `;
      resourceList.appendChild(resourceItem);
    });
  }
  
  // Display resources when the page loads
  window.addEventListener("load", displayResources);
  