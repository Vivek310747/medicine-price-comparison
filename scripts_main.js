document.getElementById('searchButton').addEventListener('click', async () => {
  const medicineName = document.getElementById('medicineSearch').value.trim();
  if (!medicineName) {
    alert('Please enter a medicine name.');
    return;
  }

  // Fetch medicine prices
  const results = await fetchMedicinePrices(medicineName);
  
  // Display results
  const priceList = document.getElementById('priceList');
  priceList.innerHTML = '';
  results.forEach(result => {
    const pharmacyDiv = document.createElement('div');
    pharmacyDiv.innerHTML = `<h3>${result.pharmacy}</h3><p>Price: ${result.data.price}</p><p>Free Delivery: ${result.data.freeDelivery ? 'Yes' : 'No'}</p>`;
    priceList.appendChild(pharmacyDiv);
  });
});