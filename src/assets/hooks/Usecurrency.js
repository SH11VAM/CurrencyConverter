import { useEffect , useState } from "react";

function Usecurrency(currency) {
    const [data , setdata] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/afb0ebb9d423e2a361ce8d20/latest/${currency}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then( (response) => setdata(response["conversion_rates"]))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [currency]);

    return data;
}

export default Usecurrency;
