
import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';



const api = axios.create();

const refreshTokenNow = async (refreshToken: string | null): Promise<string | null> => {
  if (!refreshToken) {
    console.error('Refresh token not available.');
    return null;
  }

  try {
    const response = await api.post(`${process.env.BACKEND_URL}/api/auth/jwt/refresh/`, {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;

    // Update the stored access token with the new one
    localStorage.setItem('token', newAccessToken);

    // Update the last refresh time in the cookie
    Cookies.set('lastTokenRefresh', new Date().toISOString());

    return newAccessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

api.interceptors.request.use(async (config: InternalAxiosRequestConfig ) => {
  // Include authorization token automatically
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    config.headers.Authorization = `JWT ${accessToken}`;
  }

  // Check if the token is expired or about to expire
  const lastRefreshTime = Cookies.get('lastTokenRefresh');
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  if (!lastRefreshTime || new Date(lastRefreshTime) < threeDaysAgo) {
    // Get the refresh token (from localStorage, cookies, etc.)
    const refreshToken = localStorage.getItem('refreshToken');

    // Refresh the token
    const newAccessToken = await refreshTokenNow(refreshToken);

    if (newAccessToken) {
      // Update the request header with the new access token
      config.headers.Authorization = `JWT ${newAccessToken}`;
    }
  }

  return config;
});

export default api;