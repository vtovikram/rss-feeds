export const callApiBackchannel = async () => {
  const response = await fetch(`/api/backchannel`);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const callApiMatter = async () => {
  const response = await fetch(`/api/matter`);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);
  return body;
}
export const callApiEconomist = async () => {
  const response = await fetch(`/api/economist`);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);
  return body;
}
