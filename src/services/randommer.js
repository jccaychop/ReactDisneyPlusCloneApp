import { API_KEY_RANDOMMER, URL_RANDOMMER } from "../environments/environments";

export const getCard = async (type) => {
    const peticion = await fetch(`${URL_RANDOMMER}/Card?type=${type}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=utf-8",
            "X-Api-Key": `${API_KEY_RANDOMMER}`,
        }
    });

    const data = await peticion.json();
    return data;
};
