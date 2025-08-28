// fetch('/.netlify/functions/thot')
export const handler = async () => {
    fetch('https://thot.philo.ulg.ac.be/api/json/thesaurus/scripts')
    .then(res=>res.json())
    .then(res => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: res,
                error: null,
            }),
        }
    })
    .catch(err => {
        return {
            statusCode: 500,
            body: JSON.stringify({
                data: null,
                error: err,
            }),
        }
    });

}