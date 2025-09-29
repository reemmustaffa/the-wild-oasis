import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <Filter
      filterField="discount"
      options={[
        { value: "all", label: "All" },
        { value: "no-discount", label: "No discount" },
        { value: "with-discount", label: "With discount" },
      ]}
    />
  );
}

export default CabinTableOperations;
