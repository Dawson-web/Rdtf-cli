export function setToken(token: string) {
  localStorage.setItem("token", token);
}

export function getValidToken() {
  const token = localStorage.getItem("token");
  return token;
}
