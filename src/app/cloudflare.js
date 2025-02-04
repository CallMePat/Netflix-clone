const ACCOUNT_ID = process.env.REACT_APP_CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.REACT_APP_CLOUDFLARE_API_TOKEN;

export const fetchVideos = async () => {
    console.log('Account ID exists:', !!ACCOUNT_ID);
  console.log('API Token exists:', !!API_TOKEN);

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/stream`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
