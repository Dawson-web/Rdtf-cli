export const getCookie = (name: string): string | undefined => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
    console.log(999,key, value);
  }
  return undefined;
};
