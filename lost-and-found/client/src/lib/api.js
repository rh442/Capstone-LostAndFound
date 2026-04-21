const BASE = 'http://localhost:4000/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// For multipart/form-data (file uploads) — let browser set Content-Type with boundary
async function requestForm(path, formData) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const api = {
  get:      (path)            => request(path),
  post:     (path, body)      => request(path, { method: 'POST',   body: JSON.stringify(body) }),
  postForm: (path, formData)  => requestForm(path, formData),
  patch:    (path, body)      => request(path, { method: 'PATCH',  body: JSON.stringify(body) }),
  delete:   (path)            => request(path, { method: 'DELETE' }),
};
