const API_URL = `https://api.github.com/users/KarolinaJ33/repos`;

export const portfolioAPI = async () => {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    };

    return await response.json();
};