export const getRandomSkeletonColor = () => {
  const colors = ["#6B9EBD", "#064B72", "#05334A"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};