const post = (url, params) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
};

export const request = async (params) => {
  const response = await post('/request', params);
  const data = await response.json();
  return { status: response.status, body: data };
};

export const submit = async (params) => {
  const response = await post('/submit', params);
  const data = await response.json();
  return { status: response.status, body: data };
};
