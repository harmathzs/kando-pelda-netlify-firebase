// fetch('/.netlify/functions/thot')
export const handler = async () => {
  try {
    const res = await fetch('https://thot.philo.ulg.ac.be/api/json/thesaurus/scripts');
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({
        data,
        error: null,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        data: null,
        error: err.message || String(err),
      }),
    };
  }
};
