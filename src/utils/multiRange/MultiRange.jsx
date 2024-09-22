import MultiRangeSlider from "./multiRangeSlider";


const MultiRange = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
  );
};

export default MultiRange;
