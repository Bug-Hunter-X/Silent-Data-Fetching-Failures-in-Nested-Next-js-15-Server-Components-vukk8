The solution involves implementing comprehensive error handling within each server component.  Rather than relying on automatic error propagation, each component should explicitly check for potential errors and handle them accordingly. This example adds error handling within each component and uses try...catch blocks to catch potential errors during data fetching and display an error message or loading indicator:

```javascript
// nestedServerComponentSolution.js

export default async function ParentComponent() {
  try {
    const data = await fetchData();
    return (
      <div>
        <ChildComponent data={data} />
      </div>
    );
  } catch (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
}

function ChildComponent({ data }) {
  if (!data) return <div>Loading...</div>;
  try {
    const nestedData = data.nestedData;
    return (
      <div>
        <NestedComponent nestedData={nestedData} />
      </div>
    );
  } catch (error) {
    return <div>Error processing data: {error.message}</div>;
  }
}

function NestedComponent({ nestedData }) {
  if (!nestedData) return <div>Loading...</div>;
  return (
    <div>
      <h2>Nested Data</h2>
      <p>{nestedData.value}</p>
    </div>
  );
}

async function fetchData() {
  // Simulate an API call that could fail
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
```