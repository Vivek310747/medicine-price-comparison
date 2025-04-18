// Example APIs for Indian pharmacies (replace these with actual APIs)
const pharmacyAPIs = [
  { name: "1mg", url: "https://api.1mg.com/medicine-price" },
  { name: "Netmeds", url: "https://api.netmeds.com/medicine-price" },
  { name: "Apollo Pharmacy", url: "https://api.apollopharmacy.in/medicine-price" }
];

// Fetch data from all APIs
async function fetchMedicinePrices(medicineName) {
  const results = [];
  for (const api of pharmacyAPIs) {
    try {
      const response = await fetch(`${api.url}?name=${medicineName}`);
      const data = await response.json();
      results.push({ pharmacy: api.name, data });
    } catch (error) {
      console.error(`Error fetching data from ${api.name}:`, error);
    }
  }
  return results;
}