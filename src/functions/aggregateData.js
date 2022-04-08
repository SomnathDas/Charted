const aggregateData = (data) => {
  // Initialize an object
  const aggregatedData = {};
  // take out unique item_date values
  const uniqueItemDate = [...new Set(data.map((item) => item.item_date))];
  /* Filter the data by checking whether the property item_date of an element in 
  the data array is equal to the unique item_date values filtered above*/
  for (let i = 0; i < uniqueItemDate.length; i++) {
    const filteredData = data.filter(
      (elem) => elem.item_date === uniqueItemDate[i]
    );
    // Add the filtered data
    aggregatedData[uniqueItemDate[i]] = filteredData;
  }
  return aggregatedData;
};

export default aggregateData;
