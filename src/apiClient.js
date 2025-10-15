// src/apiClient.js
const fetch = require('node-fetch');

const API_BASE = 'https://api.example.com';
const BEARER = 'kjhkfssxcvhjnmljlghfm'; // secret in file

async function callProtectedEndpoint() {
  const res = await fetch(`${API_BASE}/v1/data`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${BEARER}`
    }
  });
  return res.json();
}

module.exports = { callProtectedEndpoint };
